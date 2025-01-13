<template>
    <div>
        <h5 class="page-title mb-3">Candidatures</h5>

        <div class="card card-page">
            <div class="card-header">
                <div class="d-flex justify-content-between align-items-center">
                    <div>
                        <p class="page-title">Liste des candidatures</p>
                    </div>
                </div>
            </div>
            <div class="card-body">
                <div class="zone-search">
                    <input type="text" class="form-control" placeholder="Recherche" />
                </div>

                <div v-if="candidatures.count > 0 && !loading">
                    <div class="zone-table">
                        <!-- Table header  -->
                        <div class="d-flex justify-content-between align-items-center my-2 border-bottom">
                            <div class="flex-name">
                                <p class="table-title text-start">Candidat</p>
                            </div>
                            <div class="flex-email">
                                <p class="table-title">Poste</p>
                            </div>
                            <div class="flex-phone">
                                <p class="table-title text-center">Entreprise</p>
                            </div>
                            <div class="flex-status">
                                <p class="table-title text-center">Statut</p>
                            </div>
                            <div class="flex-date">
                                <p class="table-title text-center">Date</p>
                            </div>
                            <div class="flex-action">
                                <p class="table-title text-center">Actions</p>
                            </div>
                        </div>
                        <!-- Table content  -->
                        <div class="d-flex justify-content-between align-items-center py-2 border-bottom"
                            v-for="candidature in candidatures.results" :key="candidature.slug">
                            <div class="flex-name">
                                <p class="body-title">{{ candidature.candidate }}</p>
                            </div>
                            <div class="flex-email">
                                <p class="body-title">{{ candidature.offer }}</p>
                            </div>
                            <div class="flex-phone text-center">
                                <p class="body-title">{{ candidature.recruiter }}</p>
                            </div>
                            <div class="flex-status text-center">
                                <p class="body-title text-success" v-if="candidature.status === 'ACCEPTED'">Acceptée</p>
                                <p class="body-title text-pending" v-if="candidature.status === 'PENDING'">En cours</p>
                                <p class="body-title text-primary" v-if="candidature.status === 'CANCELED'">Annulée</p>
                            </div>
                            <div class="flex-date text-center">
                                <p class="body-title text-center">{{ $formatDate(candidature.created_at)}}</p>
                            </div>
                            <div class="flex-action">
                                <p class="text-end">
                                    <NuxtLink :to="'/candidature/' + candidature.slug" class="btn btn-success">
                                        <IconsEye />
                                    </NuxtLink>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-if="candidatures.count === 0 && !loading" class="text-center my-4">
                    <p>Il n'y a pas de candidature enregistrée</p>

                </div>
                <div v-if="loading" class="text-center loading-recruiter">
                    <div class="spinner-border spinner-border-recruiter" role="status">
                        <span class="visually-hidden">Chargement des offres...</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
const candidatStore = useCandidateStore();

const candidatures = computed(() => candidatStore.getCandidatures);
const loading = computed(() => candidatStore.getLoading);

const { $formatDate } = useNuxtApp();

onMounted(async () => {
    await candidatStore.onFetchCandidacies();
});
</script>
<style scoped>
.zone-search {
    padding: 10px 20px 16px 20px;
    border-bottom: 1px solid #E5EDEF;
}

.zone-table {
    padding: 0 20px;
}

.flex-name {
    width: 25%;
}

.flex-email,
.flex-role {
    width: 20%;
}

.flex-phone {
    width: 20%;
}

.flex-status,
.flex-role,
.flex-action,
.flex-date {
    width: 10%;
}
</style>