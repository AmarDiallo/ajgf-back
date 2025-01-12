<template>
    <div>
        <h5 class="page-title mb-3">Candidats</h5>

        <div class="card card-page">
            <div class="card-header">
                <div class="d-flex justify-content-between align-items-center">
                    <div>
                        <p class="page-title">Liste des candidats</p>
                    </div>
                </div>
            </div>
            <div class="card-body">
                <div class="zone-search">
                    <input type="text" class="form-control" placeholder="Recherche" />
                </div>

                <div class="zone-table">
                    <!-- Table header  -->
                    <div class="d-flex justify-content-between align-items-center my-2 border-bottom">
                        <div class="flex-name">
                            <p class="table-title text-start">Prénom et Nom</p>
                        </div>
                        <div class="flex-email">
                            <p class="table-title">Email</p>
                        </div>
                        <div class="flex-phone">
                            <p class="table-title text-center">Ville et pays</p>
                        </div>
                        <div class="flex-role">
                            <p class="table-title text-center">Candidature</p>
                        </div>
                        <div class="flex-status">
                            <p class="table-title text-center">Statut</p>
                        </div>
                        <div class="flex-status">
                            <p class="table-title text-center">Inscription</p>
                        </div>
                        <div class="flex-action">
                            <p class="table-title text-center">Actions</p>
                        </div>
                    </div>
                    <!-- Table content  -->
                    <div v-if="candidats.count > 0 && !loading">
                        <div class="d-flex justify-content-between align-items-center py-2 border-bottom"
                            v-for="candidat in candidats.results" :key="candidat">
                            <div class="flex-name">
                                <p class="body-title">{{ candidat.last_name }} {{ candidat.first_name}}</p>
                            </div>
                            <div class="flex-email">
                                <p class="body-title">{{ candidat.email }}</p>
                            </div>
                            <div class="flex-phone text-center">
                                <p class="body-title" v-if="candidat.city">{{ candidat.city }}, {{ candidat.country }}
                                </p>
                                <p class="body-title" v-else> - </p>
                            </div>
                            <div class="flex-role text-center">
                                <p class="body-title">{{ candidat.candidacies_count }}</p>
                            </div>
                            <div class="flex-status text-center">
                                <p class="body-title text-success" v-if="candidat.is_active">Actif</p>
                                <p class="body-title text-pending" v-else>Non actif</p>
                            </div>
                            <div class="flex-status text-center">
                                <p class="body-title text-center">{{ $formatDate(candidat.created_at) }}</p>
                            </div>
                            <div class="flex-action">
                                <p class="text-end">
                                    <NuxtLink :to="'/candidat/' + candidat.slug" class="btn btn-success">
                                        <IconsEye />
                                    </NuxtLink>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div v-if="candidats.count === 0 && !loading" class="text-center my-4">
                        <p>Il n'y a pas de candidats enregistrés</p>

                    </div>
                    <div v-if="loading" class="text-center loading-recruiter">
                        <div class="spinner-border spinner-border-recruiter" role="status">
                            <span class="visually-hidden">Chargement des offres...</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
const { $formatDate } = useNuxtApp();
const candidatStore = useCandidateStore();

const loading = computed(() => candidatStore.loading);
const candidats = computed(() => candidatStore.getCandidates);

onMounted(() => {
    candidatStore.onFetchCandidates();
});

const createdAt = computed(() => {
    return new Date().toLocaleDateString();
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
    width: 20%;
}
.flex-email, .flex-role {
    width: 20%;
}
.flex-phone {
    width: 20%;
}
.flex-status, .flex-role, .flex-action {
    width: 10%;
}
</style>