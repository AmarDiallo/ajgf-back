import { defineStore } from "pinia";

export const useAuthStore = defineStore('auth', {
    state: () => ({
        loading: false,
        loadInfo: false,
        loadPassword: false,
        email: "",
        showConfirmCode: false,
        login_token: "",
        errorMessage: "",
        showError: false,
        showSuccess: false,
        showMessageSuccessPassword: false,
        showMsgEmail: false,
        errors: [],
    }),

    getters: {
        getLoadInfo(state) { return state.loadInfo; },
        getLoadPassword(state) { return state.loadPassword; },
        getLoginToken(state) { return state.login_token; },
        getEmail(state) { return state.email; },
        getShowMsgEmail(state) { return state.showMsgEmail; },
        getLoading(state) { return state.loading; },
        getPasswordMsgConfirmation(state) { return state.showMessageSuccessPassword; },
        getShowSuccess(state) { return state.showSuccess; },
        getShowError(state) { return state.showError; },
        getErrorMessage(state) { return state.errorMessage; }
    },
    actions: {
        async onLogin(formData: any) {
            try {
                this.loading = true;
                const { $api, $crypto, $locally } = useNuxtApp();
                let response = await $api.post('/api/auth/jwt/create/', formData);
                if (response.status === 200) {
                    this.loading = false;
                    useCookie('auth_token').value = $crypto(response.data.access);
                    useCookie('refresh_token').value = $crypto(response.data.refresh);
                    const router = useRouter();
                    router.push('/');
                }
            } catch (error: any) {
                this.loading = false;
                this.getError(error)
            }
        },


        async onUpdateRecruiter(data: any) {
            try {
                this.loadInfo = true;
                const { $api, $swal, $crypto, $locally } = useNuxtApp();
                let response = await $api.patch('/api/users/me/', data);
                if (response.status === 200) {
                    this.loadInfo = false;
                    $locally.setItem('user', $crypto(response.data));
                    $swal.fire({
                        text: "Félliciations, vos informations ont été modifiées avec succès.",
                        icon: "success",
                    });
                }
            } catch (error: any) {
                this.loadInfo = false;
                this.getError(error)
            }
        },

        async onResetEmail(data: any) {
            try {
                this.loading = true;
                const { $api, $swal } = useNuxtApp();
                let response = await $api.post('/api/users/set_email/', data);
                console.log(response)
                if (response.status === 204) {
                    this.loading = false;
                    this.showMsgEmail = true;
                    $swal.fire({
                        text: "Félliciations, vote email a été modifié avec succès.",
                        icon: "success",
                    });
                }
            } catch (error: any) {
                this.loading = false;
                this.getError(error)
            }
        },

        async onSetPassword(data: any) {
            try {
                this.loadPassword = true;
                const { $api, $swal } = useNuxtApp();
                let response = await $api.post('/api/users/set_password/', data);
                if (response.status === 204) {
                    this.loadPassword = false;
                    this.showMessageSuccessPassword = true;
                    $swal.fire({
                        text: "Félliciations, votre mot de passe a été modifié avec succès.",
                        icon: "success",
                    });
                }
            } catch (error: any) {
                this.loadPassword = false;
                this.getError(error)
            }
        },

        getError(error: any) {
            this.loading = false;
            this.errorMessage = error.response.data.error
            if (error.response.status == 401) {
                this.errorMessage = error.response.data.detail;
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
})