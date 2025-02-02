import { defineStore } from "pinia";

export const useOfferStore = defineStore("offer", {
    state: () => ({
        loading: false,
        showError: false,
        showSuccess: false,
        errorMessage: "",
        selectedOffer: {},
        offerDetail: {},
        errors: [],
        offersList: [],
        onlineOffers: [],
        expiredOffers: [],
        draftOffers: [],
    }),

    getters: {
        getLoading: (state) => state.loading,
        getOnlineOffers: (state) => state.onlineOffers,
        getExpiredOffers: (state) => state.expiredOffers,
        getDraftOffers: (state) => state.draftOffers,
        getOffersList: (state) => state.offersList,
        getSelectedOffer: (state) => state.selectedOffer,
        getOfferDetail: (state) => state.offerDetail,
    },

    actions: {
        async onFetchOffers() {
            try {
                this.loading = true;
                const { $api } = useNuxtApp();
                let response = await $api.get("/api/offers/admin-list/");
                if (response.status === 200) {
                    this.loading = false;
                    console.log(response.data)
                    this.offersList = response.data;
                }
            } catch (error: any) {
                this.loading = false;
                const { $error } = useNuxtApp();
                $error(error);
            }
        },

        async onFetchOfferDetail(slug: string) {
            try {
                this.loading = true;
                const { $api } = useNuxtApp();
                let response = await $api.get("/api/offers/" + slug + "/admin-detail");
                if (response.status === 200) {
                    this.loading = false;
                    console.log(response.data);
                    this.offerDetail = response.data;
                }
            } catch (error: any) {
                this.loading = false;
                const { $error } = useNuxtApp();
                $error(error);
            }
        },

        async onBlockOffer(slug: string, formData: any) {
            try {
                this.loading = true;
                const { $api } = useNuxtApp();
                let response = await $api.put("/api/offers/" + slug + "/admin-block/", formData);
                if (response.status === 200) {
                    this.loading = false;
                    console.log(response.data)
                    await this.onFetchOfferDetail(slug);
                }
            } catch (error: any) {
                this.loading = false;
                const { $error } = useNuxtApp();
                $error(error);
            }
        },

        async onFetchOnlineOffers() {
            try {
                this.loading = true;
                const { $api } = useNuxtApp();
                let response = await $api.get("/api/offers/");
                if (response.status === 200) {
                    this.loading = false;
                    console.log(response.data.results)
                    this.onlineOffers = response.data.results;
                }
            } catch (error: any) {
                this.loading = false;
                const { $error } = useNuxtApp();
                $error(error);
            }
        },

        async onFetchExpiredOffers() {
            try {
                this.loading = true;
                const { $api } = useNuxtApp();
                let response = await $api.get("/api/offers/expired_offers/");
                if (response.status === 200) {
                    this.loading = false;
                    console.log(response.data.results)
                    this.expiredOffers = response.data.results;
                }
            } catch (error: any) {
                this.loading = false;
                const { $error } = useNuxtApp();
                $error(error);
            }
        },

        async onFetchDraftOffers() {
            try {
                this.loading = true;
                const { $api } = useNuxtApp();
                let response = await $api.get("/api/offers/draft_offers/");
                if (response.status === 200) {
                    this.loading = false;
                    console.log(response.data.results)
                    this.draftOffers = response.data.results;
                }
            } catch (error: any) {
                this.loading = false;
                const { $error } = useNuxtApp();
                $error(error);
            }
        },

        async onCreateOffer(formData: any) {
            try {
                this.loading = true;
                const { $api } = useNuxtApp();
                let response = await $api.post("/api/offers/", formData);
                if (response.status === 201) {
                    this.loading = false;
                    console.log(response.data)
                    const router = useRouter();
                    router.push('/recruiter/offres');
                }
            } catch (error: any) {
                this.loading = false;
                const { $error } = useNuxtApp();
                $error(error);
            }
        },

        async onPublishOffer(slug: string, formData: any) {
            try {
                this.loading = true;
                const { $api } = useNuxtApp();
                let response = await $api.put("/api/offers/" + slug + "/publish_offers/", formData);
                if (response.status === 201) {
                    this.loading = false;
                    console.log(response.data)
                    await this.onFetchDraftOffers();
                }
            } catch (error: any) {
                this.loading = false;
                const { $error } = useNuxtApp();
                $error(error);
            }
        },

        async onDeleteOffer(slug: string) {
            try {
                this.loading = true;
                const { $api, $swal } = useNuxtApp();
                let response = await $api.delete("/api/offers/" + slug);
                if (response.status === 204) {
                    this.loading = false;
                    console.log(response.data)
                    $swal.fire({
                        title: "Succès !",
                        text: "Offre supprimé avec succès.",
                        icon: "success",
                    });
                    await this.onFetchOnlineOffers();
                }
            } catch (error: any) {
                this.loading = false;
                const { $error } = useNuxtApp();
                $error(error);
            }
        }
    }
});
