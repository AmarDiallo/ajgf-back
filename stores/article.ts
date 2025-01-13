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
                let response = await $api.get("/api/articles/admin-list/");
                if (response.status === 200) {
                    this.loading = false;
                    console.log(response.data)
                    this.articles = response.data;
                }
            } catch (error: any) {
                this.loading = false;
                const { $error } = useNuxtApp();
                $error(error);
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
                const { $error } = useNuxtApp();
                $error(error);
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
                const { $error } = useNuxtApp();
                $error(error);
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
                const { $error } = useNuxtApp();
                $error(error);
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
                const { $error } = useNuxtApp();
                $error(error);
            }
        }
    }
});