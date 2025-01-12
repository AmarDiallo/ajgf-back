import { defineStore } from "pinia";

export const useArticleStore = defineStore("article", {
    state: () => ({
        loading: false,
        showError: false,
        showSuccess: false,
        errorMessage: "",
        articleDetail: {},
        errors: [],
        articles: [],
    }),

    getters: {
        getLoading: (state) => state.loading,
        getArticles: (state) => state.articles,
        getArticleDetail: (state) => state.articleDetail,
    },

    actions: {
        async onFetchArticles() {
            try {
                this.loading = true;
                const { $api } = useNuxtApp();
                let response = await $api.get("/api/articles/");
                if (response.status === 200) {
                    this.loading = false;
                    console.log(response.data.results)
                    this.articles = response.data.results;
                }
            } catch (error: any) {
                this.loading = false;
                this.getError(error);
            }
        },

        async onFetchArticleDetail(slug: string) {
            try {
                this.loading = true;
                const { $api } = useNuxtApp();
                let response = await $api.get("/api/articles/" + slug + '/');
                if (response.status === 200) {
                    this.loading = false;
                    console.log(response.data)
                    this.articleDetail = response.data;
                }
            } catch (error: any) {
                this.loading = false;
                this.getError(error);
            }
        },

        async onCreateArticle(formData: any) {
            try {
                this.loading = true;
                const { $api } = useNuxtApp();
                let response = await $api.post("/api/articles/", formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                });
                if (response.status === 201) {
                    this.loading = false;
                    const router = useRouter();
                    router.push('/recruiter/articles');
                }
            } catch (error: any) {
                this.loading = false;
                this.getError(error);
            }
        },


        async onUpdateArticle(formData: any, slug: string) {
            try {
                this.loading = true;
                const { $api, $swal } = useNuxtApp();
                let response = await $api.patch("/api/articles/" + slug + '/', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                });
                if (response.status === 200) {
                    this.loading = false;
                    const router = useRouter();
                    $swal.fire({
                        text: "Félliciations, votre article a été modifié avec succès.",
                        icon: "success",
                    });
                    router.push('/recruiter/articles');
                }
            } catch (error: any) {
                this.loading = false;
                this.getError(error);
            }
        },


        async onDeleteArticle(slug: string) {
            try {
                this.loading = true;
                const { $api, $swal } = useNuxtApp();
                let response = await $api.delete("/api/articles/" + slug + '/');
                if (response.status === 204) {
                    this.loading = false;
                    $swal.fire({
                        title: "Succès !",
                        text: "Article supprimé avec succès.",
                        icon: "success",
                    });
                    await this.onFetchArticles();
                }
            } catch (error: any) {
                this.loading = false;
                this.getError(error);
            }
        },

        getError(error: any) {
            if (error.response.status == 401) {
                // localStorage.clear()
                // location.assign('/auth/login')
            }
            if (
                error.response.status == 401 ||
                error.response.status == 403 ||
                error.response.status === 422
            ) {
                this.errorMessage = error.response.data.message;
                if (error.response.data.errors) {
                    this.errors = error.response.data.errors;
                }
            } else if (error.response.status == 500) {
                this.errorMessage =
                    "Erreur de traitement, vueillez réessayer plus tard.";
            }

            const { $swal } = useNuxtApp();
            $swal.fire({
                title: "Erreur !",
                text: this.errorMessage,
                icon: "error",
            });
        },
    }
});