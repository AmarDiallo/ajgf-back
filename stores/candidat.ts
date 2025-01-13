import { defineStore } from "pinia";

export const useCandidateStore = defineStore("candidate", {
    state: () => ({
        loading: false,
        loadPhoto: false,
        loadCandidacies: false,
        showError: false,
        showSuccess: false,
        errorMessage: "",
        candidats: [],
        candidature: null,
        candidateDeatils: null,
        errors: [],
        resumeList: [],
        candidatures: [],
        savedCandidacies: [],
    }),

    getters: {
        getLoading: (state) => state.loading,
        getLoadPhoto: (state) => state.loadPhoto,
        getCandidates: (state) => state.candidats,
        getCandidateDeatils: (state) => state.candidateDeatils,
        getResumes: (state) => state.resumeList,
        getCandidacies: (state) => state.loadCandidacies,
        getCandidatures: (state) => state.candidatures,
        getCandidature: (state) => state.candidature,
        getSavedCandidacies: (state) => state.savedCandidacies,
    },

    actions: {
        // SECTION DES CANDIDATS 
        async onFetchCandidates() {
            try {
                this.loading = true;
                const { $api } = useNuxtApp();
                let response = await $api.get("/api/candidates/admin/");
                if (response.status === 200) {
                    this.loading = false;
                    this.candidats = response.data;
                    this.resumeList = response.data.resumes
                    console.log(response.data)
                }
            } catch (error: any) {
                this.loading = false;
                const { $error } = useNuxtApp();
                $error(error);
            }
        },

        async onFetchCandidatesDetails(slug: string) {
            try {
                this.loading = true;
                const { $api, $swal } = useNuxtApp();
                let response = await $api.get("/api/candidates/admin/" + slug);
                if (response.status === 200) {
                    this.loading = false;
                    console.log(response.data);
                    this.candidateDeatils = response.data;
                }
            } catch (error: any) {
                this.loading = false;
                const { $error } = useNuxtApp();
                $error(error);
            }
        },

        async onFetchCandidacies() {
            try {
                this.loading = true;
                const { $api } = useNuxtApp();
                let response = await $api.get("/api/candidates/candidacies/admin-candidacies");
                if (response.status === 200) {
                    this.loading = false;
                    this.candidatures = response.data;
                    console.log(response.data)
                }
            } catch (error: any) {
                this.loading = false;
                const { $error } = useNuxtApp();
                $error(error);
            }
        },

        async onSubmitCandidacies(formData: any) {
            try {
                this.loadCandidacies = true;
                const { $api, $swal } = useNuxtApp();
                let response = await $api.post("/api/candidates/candidacies/", formData);
                if (response.status === 201) {
                    this.loadCandidacies = false;
                    console.log(response.data)
                    $swal.fire({
                        text: "Félicitations, votre candidature a été enregistrée avec succès",
                        icon: "success",
                    });
                }
            } catch (error: any) {
                this.loadCandidacies = false;
                const { $error } = useNuxtApp();
                $error(error);
            }
        },

        async onAcceptCandidacies(slug: string, formData: any) {
            try {
                this.loadCandidacies = true;
                const { $api, $swal } = useNuxtApp();
                let response = await $api.put("/api/candidates/candidacies/" + slug + '/accept-candidacy/', formData);
                if (response.status === 201) {
                    this.loadCandidacies = false;
                    console.log(response.data)
                    $swal.fire({
                        text: "La candidature a été acceptée avec succès",
                        icon: "success",
                    });
                }
            } catch (error: any) {
                this.loadCandidacies = false;
                const { $error } = useNuxtApp();
                $error(error);
            }
        },

        async onRefuseCandidacies(slug: string, formData: any) {
            try {
                this.loadCandidacies = true;
                const { $api, $swal } = useNuxtApp();
                let response = await $api.put("/api/candidates/candidacies/" + slug + '/refuse-candidacy/', formData);
                if (response.status === 201) {
                    this.loadCandidacies = false;
                    console.log(response.data)
                    $swal.fire({
                        text: "La candidature a été refusée",
                        icon: "success",
                    });
                }
            } catch (error: any) {
                this.loadCandidacies = false;
                const { $error } = useNuxtApp();
                $error(error);
            }
        },

        async onAddComment(slug: string, formData: any) {
            try {
                this.loadCandidacies = true;
                const { $api, $swal } = useNuxtApp();
                let response = await $api.post("/api/candidates/candidacies/" + slug + '/create-comment/', formData);
                if (response.status === 201) {
                    this.loadCandidacies = false;
                    console.log(response.data)
                    $swal.fire({
                        text: "Votre commentaire a été ajouté avec succès",
                        icon: "success",
                    });
                }
            } catch (error: any) {
                this.loadCandidacies = false;
                const { $error } = useNuxtApp();
                $error(error);
            }
        },

        async onDeleteCandidacies(slug: string) {
            try {
                this.loading = true;
                const { $api, $swal } = useNuxtApp();
                let response = await $api.delete("/api/candidates/candidacies/" + slug + '/');
                if (response.status === 204) {
                    this.loading = false;
                    console.log(response.data)
                    $swal.fire({
                        text: "Félicitations, votre candidature a été retiré avec succès",
                        icon: "success",
                    });
                }
            } catch (error: any) {
                this.loading = false;
                const { $error } = useNuxtApp();
                $error(error);
            }
        },

        // SECTION DES CANDIDATURES ENREIGISTRÉES
        async onFetchSavedCandidacies() {
            try {
                this.loading = true;
                const { $api, $swal } = useNuxtApp();
                let response = await $api.get("/api/candidates/saved-offers/");
                if (response.status === 200) {
                    this.loading = false;
                    console.log(response.data);
                    this.savedCandidacies = response.data;
                }
            } catch (error: any) {
                this.loading = false;
                const { $error } = useNuxtApp();
                $error(error);
            }
        },

        async onSaveCandidacies(formData: any) {
            try {
                this.loadCandidacies = true;
                const { $api, $swal } = useNuxtApp();
                let response = await $api.post("/api/candidates/saved-offers/", formData);
                if (response.status === 201) {
                    this.loadCandidacies = false;
                    console.log(response.data)
                    $swal.fire({
                        text: "Félicitations, votre candidature a été enregistrée avec succès",
                        icon: "success",
                    });
                }
            } catch (error: any) {
                this.loadCandidacies = false;
                const { $error } = useNuxtApp();
                $error(error);
            }
        },

        async onDeleteSavedCandidacies(slug: string) {
            try {
                this.loading = true;
                const { $api, $swal } = useNuxtApp();
                let response = await $api.delete("/api/candidates/saved-offers/" + slug + '/');
                if (response.status === 204) {
                    this.loading = false;
                    $swal.fire({
                        text: "Félicitations, votre candidature a été retiré avec succès",
                        icon: "success",
                    });
                    await this.onFetchSavedCandidacies();
                }
            } catch (error: any) {
                this.loading = false;
                const { $error } = useNuxtApp();
                $error(error);
            }
        },
    }
})