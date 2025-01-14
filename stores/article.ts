import { defineStore } from "pinia";

export const useArticleStore = defineStore("article", {
    state: () => ({
        loading: false,
        articleDetail: {},
        currentPage: 1,
        totalPage: 0,
        articles: [],
    }),

    getters: {
        getLoading: (state) => state.loading,
        getArticles: (state) => state.articles,
        getArticleDetail: (state) => state.articleDetail,
        getCurrentPage: (state) => state.currentPage,
        getTotalPage: (state) => state.totalPage,
    },

    actions: {
        async onFetchArticles(page: number = 1) {
            try {
                this.loading = true;
                const { $api } = useNuxtApp();
                let response = await $api.get("/api/articles/admin-list/?page=" + page);
                if (response.status === 200) {
                    this.loading = false;
                    console.log(response.data)
                    this.articles = response.data;
                    this.currentPage = page;
                    this.totalPage = Math.ceil(response.data.count / 3);
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
                let response = await $api.get("/api/articles/" + slug + '/admin-detail/');
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

        async onAcceptArticle(slug: string) {
            try {
                this.loading = true;
                const { $api, $swal } = useNuxtApp();
                let response = await $api.post("/api/articles/" + slug + '/validate_article/');
                if (response.status === 200) {
                    this.loading = false;
                    console.log(response.data)
                    $swal.fire({
                        text: "Félicitations, la candidature a été annulée avec succès",
                        icon: "success",
                    });
                    await this.onFetchArticleDetail(slug);
                }
            } catch (error: any) {
                this.loading = false;
                const { $error } = useNuxtApp();
                $error(error);
            }
        },

        async onRejectArticle(slug: string) {
            try {
                this.loading = true;
                const { $api, $swal } = useNuxtApp();
                let response = await $api.post("/api/articles/" + slug + '/reject_article/');
                if (response.status === 200) {
                    this.loading = false;
                    console.log(response.data)
                    $swal.fire({
                        text: "Félicitations, la candidature a été annulée avec succès",
                        icon: "success",
                    });
                    await this.onFetchArticleDetail(slug);
                }
            } catch (error: any) {
                this.loading = false;
                const { $error } = useNuxtApp();
                $error(error);
            }
        },
    }
});