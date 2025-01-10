<template>
    <div class="">
        <div class="">
            <div class="text-center">
                <NuxtLink to="/">
                    <img src="/imgs/logo.png" alt="" class="logo">
                </NuxtLink>
            </div>
            <div class="login-card">
                <div class="login-head">
                    <p class="login-text">Connexion</p>
                </div>
                <div class="login-content">
                    <form @submit.prevent="submitLogin">
                        <div class="mb-3">
                            <label for="email" class="form-label">Email</label>
                            <input type="email" class="form-control" id="email"
                                placeholder="name@example.com" v-model="loginForm.email" @blur="v$.email.$touch()"
                                :class="v$.email.$error ? 'is-invalid' : ''">
                            <div v-if="v$.email.$error" class="text-danger">
                                <p class="text-danger">{{ v$.email.$errors[0].$message }}</p>
                            </div>
                        </div>

                        <div class="mb-3">
                            <label for="password" class="form-label">Mot de passe</label>
                            <input type="password" class="form-control" id="password"
                                placeholder="*****************" v-model="loginForm.password"
                                @blur="v$.password.$touch()" :class="v$.password.$error ? 'is-invalid' : ''">
                            <div v-if="v$.password.$error" class="text-danger">
                                <p class="text-danger">{{ v$.password.$errors[0].$message }}</p>
                            </div>
                        </div>

                        <div class="mt-4">
                            <button class="btn btn-primary mt-2" type="submit" :disabled="loading || v$.$invalid">
                                <span class="text-btn" v-if="!loading">Se connecter</span>
                                <div class="spinner-border" role="status" v-else></div>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    </div>
</template>
<script setup>
definePageMeta({
    layout: 'auth',
});
import useVuelidate from '@vuelidate/core'
import { required, email, minLength, helpers } from '@vuelidate/validators'

const authStore = useAuthStore();
const loading = computed(() => authStore.getLoading);

const loginForm = reactive({
    email: "",
    password: ""
});

const rules = computed(() => (
    {
        email: { required: helpers.withMessage("L'email est obligatoire.", required), email: helpers.withMessage("L'email n'est pas correcte.", email) },
        password: { required: helpers.withMessage("Le mot de passe est obligatoire.", required), minLength: helpers.withMessage("Au minimum 6 caractères.", minLength(6)) },
    }
));

const v$ = useVuelidate(rules, loginForm);

const submitLogin = async () => {

    await authStore.onLogin(loginForm);
}
</script>
<style scoped>
.logo {
    width: 230px;
    margin-top: -32px;
    margin-bottom: -32px;
}
.login-card {
    width: 454px;
    border: 1px solid #E5EDEF;
    border-radius: 8px;
    background-color: #fff !important;
}
.login-head {
    padding: 24px 32px;
    border-bottom: 1px solid #E6EDEF;
}
.login-text {
    font-size: 18px;
    font-weight: 700;
    color: #252525;
    line-height: 24.51px;
}
.login-content {
    /* margin-top: ; */
    padding: 40px 32px;
}
</style>