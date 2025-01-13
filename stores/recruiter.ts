import { defineStore } from "pinia";

export const useRecruiterStore = defineStore("recruiter", {
    state: () => ({
        loading: false,
        recruiters: [],
        recruiterDetail: null,
    }),

    getters: {
        getLoading: (state) => state.loading,
        getRecruiters: (state) => state.recruiters,
        getRecruiterDetail: (state) => state.recruiterDetail,
    },

    actions: {
        async onFetchRecuiters() {
            try {
                this.loading = true;
                const { $api } = useNuxtApp();
                let response = await $api.get("/api/recruiters/admin/");
                if (response.status === 200) {
                    this.loading = false;
                    this.recruiters = response.data;
                    console.log(response.data)
                }
            } catch (error: any) {
                this.loading = false;
                const { $error } = useNuxtApp();
                $error(error);
            }
        },

        async onFetchDetailRecruiter(slug: string) {
            try {
                this.loading = true;
                const { $api, $swal } = useNuxtApp();
                let response = await $api.get("/api/recruiters/admin/" + slug);
                if (response.status === 200) {
                    this.loading = false;
                    console.log(response.data);
                    this.recruiterDetail = response.data;
                }
            } catch (error: any) {
                this.loading = false;
                const { $error } = useNuxtApp();
                $error(error);
            }
        },

        async onActiveRecruiter(slug: string, formData: any) {
            try {
                this.loading = true;
                const { $api, $swal } = useNuxtApp();
                let response = await $api.patch("/api/recruiters/admin/" + slug + '/status/', formData);
                if (response.status === 200) {
                    this.loading = false;
                    console.log(response.data);
                    $swal.fire({
                        title: "Succès !",
                        text: "Féliciations, l'entreprise a été validée avec succès.",
                        icon: "success",
                    });
                    await this.onFetchDetailRecruiter(slug)
                }
            } catch (error: any) {
                this.loading = false;
                const { $error } = useNuxtApp();
                $error(error);
            }
        },

        async onBlockedRecruiter(slug: string, formData: any) {
            try {
                this.loading = true;
                const { $api, $swal } = useNuxtApp();
                let response = await $api.patch("/api/recruiters/admin/" + slug + '/status/', formData);
                if (response.status === 200) {
                    this.loading = false;
                    console.log(response.data);
                    $swal.fire({
                        title: "Succès !",
                        text: "L'entreprise a été bloquée avec succès.",
                        icon: "success",
                    });
                    await this.onFetchDetailRecruiter(slug)
                }
            } catch (error: any) {
                this.loading = false;
                const { $error } = useNuxtApp();
                $error(error);
            }
        },
    }
})