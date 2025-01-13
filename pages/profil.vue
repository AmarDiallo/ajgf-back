<template>
    <div>
        <h5 class="page-title mb-3">Mon profil</h5>

        <div class="row">
            <div class="col-md-6 col-lg-6">
                <div class="card card-page width-bottom">
                    <div class="card-header">
                        <div class="d-flex justify-content-between align-items-center">
                            <div>
                                <p class="page-title">Mes informations</p>
                            </div>
                        </div>
                    </div>
                    <div class="card-body">
                        <div class="zone-table" v-if="user && !loading">
                            <div class="d-flex align-items-center admin border-bottom pb-3">
                                <div class="logo-admin">
                                    <h3 class="admin-first-c">{{ user.last_name.charAt(0) }}</h3>
                                </div>
                                <div>
                                    <p class="admin-name">{{ user.first_name }} {{ user.last_name }}</p>
                                    <p class="welcom">Administrateur</p>
                                </div>
                            </div>
                            <!-- Email  -->
                            <div class="d-flex  align-items-center border-bottom py-3">
                                <div style="width: 40%;">
                                    <p class="admin-name text-start">Email</p>
                                </div>
                                <div style="width: 60%;">
                                    <p class="admin-name text-start">{{ user.email }}</p>
                                </div>
                            </div>
                            <!-- Téléphone  -->
                            <div class="d-flex  align-items-center border-bottom py-3">
                                <div style="width: 40%;">
                                    <p class="admin-name text-start">Téléphone</p>
                                </div>
                                <div style="width: 60%;">
                                    <p class="admin-name text-start">623 41 91 47</p>
                                </div>
                            </div>
                            <!-- Date  -->
                            <div class="d-flex  align-items-center  py-3">
                                <div style="width: 40%;">
                                    <p class="admin-name text-start">Date d'ajout</p>
                                </div>
                                <div style="width: 60%;">
                                    <p class="admin-name text-start">{{ $formatDate(user.created_at) }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- FORMULAIRE  -->
            <div class="col-md-6 col-lg-6">
                <div class="card card-page">
                    <div class="card-header">
                        <div class="d-flex justify-content-between align-items-center">
                            <div>
                                <p class="page-title">Changer le mot de passe</p>
                            </div>
                        </div>
                    </div>
                    <form @submit.prevent="onUpdatePassword">
                        <div class="card-body">
                            <div class="zone-table">
                                <div class="row">
                                    <div class="col-md-12 col-lg-12 mb-3">
                                        <label for="actuel-password" class="form-label">Mot de passe actuel</label>
                                        <input type="password" class="form-control" placeholder="Mot de passe actuel"
                                            id="actuel-password" aria-describedby="actuel-password"
                                            v-model="passwordForm.current_password" @blur="v$.current_password.$touch()"
                                            :class="v$.current_password.$error ? 'is-invalid' : ''">
                                        <div v-if="v$.current_password.$error" class="text-danger">
                                            <p class="text-danger">{{ v$.current_password.$errors[0].$message }}</p>
                                        </div>
                                    </div>

                                    <div class="col-md-12 col-lg-12 mb-3">
                                        <label for="new-password" class="form-label">Nouveau mot de passe</label>
                                        <input type="password" class="form-control" placeholder="Nouveau mot de passe"
                                            id="new-password" aria-describedby="new-password"
                                            v-model="passwordForm.new_password" @blur="v$.new_password.$touch()"
                                            :class="v$.new_password.$error ? 'is-invalid' : ''">
                                        <div v-if="v$.new_password.$error" class="text-danger">
                                            <p class="text-danger">{{ v$.new_password.$errors[0].$message }}</p>
                                        </div>
                                    </div>

                                    <div class="col-md-12 col-lg-12 mb-3">
                                        <label for="confirm-password" class="form-label">Confirmation de mot de
                                            passe</label>
                                        <input type="password" class="form-control"
                                            placeholder="Confirmation de mot de passe" id="confirm-password"
                                            aria-describedby="confirm-password" v-model="passwordForm.confirm_password"
                                            @blur="v$.confirm_password.$touch()"
                                            :class="v$.confirm_password.$error ? 'is-invalid' : ''">
                                        <div v-if="v$.confirm_password.$error" class="text-danger">
                                            <p class="text-danger">{{ v$.confirm_password.$errors[0].$message }}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card-footer">
                            <button type="submit" class="btn btn-secondary" :disabled="loading || v$.$invalid">
                                <span class="text-btn" v-if="!loading">Enregistrer</span>
                                <div class="spinner-border" role="status" v-else></div>
                            </button>
                            <button class="btn btn-cancel mx-3">Annuler</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import useVuelidate from '@vuelidate/core'
import { required, email, minLength, helpers, sameAs } from '@vuelidate/validators'

const authStore = useAuthStore();

const loading = computed(() => authStore.getLoading);
const user = computed(() => authStore.getUser);

const { $formatDate } = useNuxtApp();

const passwordForm = reactive({
    current_password: "",
    new_password: "",
    confirm_password: "",
});

const rules = computed(() => (
    {
        current_password: { required: helpers.withMessage("Le mot de passe actuel est obligatoire.", required), minLength: helpers.withMessage("Au minimum 6 caractères.", minLength(6)) },
        new_password: { required: helpers.withMessage("Le nouveau mot de passe est obligatoire.", required), minLength: helpers.withMessage("Au minimum 6 caractères.", minLength(6)) },
        confirm_password: { required: helpers.withMessage("Veuillez confirmer le mot de passe.", required), sameAs: helpers.withMessage("Les mots de passe sont pas identiques.", sameAs(passwordForm.new_password)) },
    }
));

const v$ = useVuelidate(rules, passwordForm);

onMounted(async () => {
    await authStore.onFetchAuthUser();
});

const onUpdatePassword = async () => {
    await authStore.onSetPassword(passwordForm).then(() => {
        passwordForm.current_password = "";
        passwordForm.new_password = "";
        passwordForm.confirm_password = "";
    });
}
</script>
<style scoped>
.zone-table {
    padding: 0 10px;
}

.logo-admin {
    background-color: #E1E1E1 !important;
}

.admin-first-c {
    color: #004F71
}

.border-bottom {
    margin-bottom: 1px solid #E1E1E1;
}

.width-bottom {
    height: 410px;
}
</style>