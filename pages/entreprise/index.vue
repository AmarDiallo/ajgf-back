<template>
    <div>
        <h5 class="page-title mb-3">Entreprises</h5>

        <div class="card card-page">
            <div class="card-header">
                <div class="d-flex justify-content-between align-items-center">
                    <div>
                        <p class="page-title">Liste des entreprises</p>
                    </div>
                </div>
            </div>
            <div class="card-body">
                <div class="zone-search">
                    <input type="text" class="form-control" placeholder="Recherche" />
                </div>
                <div class="zone-table" v-if="recruiters.count > 0 && !loading">
                    <!-- Table header  -->
                    <div class="d-flex justify-content-between align-items-center my-2 border-bottom">
                        <div class="flex-name">
                            <p class="table-title text-start">Nom de l'entreprise</p>
                        </div>
                        <div class="flex-email">
                            <p class="table-title">Email</p>
                        </div>
                        <div class="flex-offer">
                            <p class="table-title text-center">Offre d'emploi</p>
                        </div>
                        <div class="flex-status">
                            <p class="table-title text-center">Statut</p>
                        </div>
                        <div class="flex-date">
                            <p class="table-title text-center">Inscription</p>
                        </div>
                        <div class="flex-action">
                            <p class="table-title text-center">Actions</p>
                        </div>
                    </div>
                    <!-- Table content  -->
                    <div class="d-flex justify-content-between align-items-center py-2 border-bottom"
                        v-for="recruiter in recruiters.results" :key="recruiter.slug">
                        <div class="flex-name">
                            <p class="body-title">{{ recruiter.name }}</p>
                        </div>
                        <div class="flex-email">
                            <p class="body-title">{{ recruiter.email }}</p>
                        </div>
                        <div class="flex-offer text-center">
                            <p class="body-title">3</p>
                        </div>
                        <div class="flex-status text-center">
                            <p class="body-title text-success" v-if="recruiter.status === 'ACTIVE'">Active</p>
                            <p class="body-title text-success" v-if="recruiter.status === 'BLOCKED'">Bloquée</p>
                        </div>
                        <div class="flex-date text-center">
                            <p class="body-title text-center">{{ $formatDate(recruiter.created_at) }}</p>
                        </div>
                        <div class="flex-action">
                            <p class="text-end">
                                <NuxtLink :to="'/entreprise/' + recruiter.slug" class="btn btn-success">
                                    <IconsEye />
                                </NuxtLink>
                            </p>
                        </div>
                    </div>
                </div>

                <div v-if="recruiters.count === 0 && !loading" class="text-center my-4">
                    <p>Il n'y a pas d'entreprises enregistrées</p>

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
const recruiterStore = useRecruiterStore();

const loading = computed(() => recruiterStore.getLoading);
const recruiters = computed(() => recruiterStore.getRecruiters);

const { $formatDate } = useNuxtApp();

onMounted(async () => {
    await recruiterStore.onFetchRecuiters();
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

.flex-email {
    width: 20%;
}

.flex-status,
.flex-offer,
.flex-date {
    width: 15%;
}

.flex-action {
    width: 5%;
}
</style>