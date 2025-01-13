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
        user: null,
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
        getErrorMessage(state) { return state.errorMessage; },
        getUser: (state) => state.user
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
                const { $error } = useNuxtApp();
                $error(error);
            }
        },

        async onFetchAuthUser() {
            try {
                this.loading = true;
                const { $api, $crypto, $locally } = useNuxtApp();
                let response = await $api.get('/api/users/me/');
                if (response.status === 200) {
                    this.loading = false;
                    this.user = response.data;
                    $locally.setItem('user', $crypto(response.data));
                }
            } catch (error: any) {
                this.loading = false;
                const { $error } = useNuxtApp();
                $error(error);
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
                const { $error } = useNuxtApp();
                $error(error);
            }
        },
    }
})