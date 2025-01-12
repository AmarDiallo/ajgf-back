<template>
    <div>
        <h5 class="page-title mb-3">Offres d'emploi</h5>

        <div class="card card-page">
            <div class="card-header">
                <div class="d-flex justify-content-between align-items-center">
                    <div>
                        <p class="page-title">Liste des offres d'emploi</p>
                    </div>
                </div>
            </div>
            <div class="card-body">
                <div class="zone-search">
                    <input type="text" class="form-control" placeholder="Recherche" />
                </div>

                <div v-if="offers.count > 0 && !loading">
                    <div class="zone-table">
                        <!-- Table header  -->
                        <div class="d-flex justify-content-between align-items-center my-2 border-bottom">
                            <div class="flex-poste">
                                <p class="table-title text-start">Poste</p>
                            </div>
                            <div class="flex-entreprise">
                                <p class="table-title">Entreprise</p>
                            </div>
                            <div class="flex-candidature">
                                <p class="table-title text-center">Candidature</p>
                            </div>
                            <div class="flex-status">
                                <p class="table-title text-center">Statut</p>
                            </div>
                            <div class="flex-date">
                                <p class="table-title text-center">Expiration</p>
                            </div>
                            <div class="flex-date">
                                <p class="table-title text-center">Publication</p>
                            </div>
                            <div class="flex-action">
                                <p class="table-title text-center">Actions</p>
                            </div>
                        </div>
                        <!-- Table content  -->
                        <div class="d-flex justify-content-between align-items-center py-2 border-bottom"
                            v-for="offer in offers.results" :key="offer">
                            <div class="flex-poste">
                                <p class="body-title">{{ offer.title }}</p>
                            </div>
                            <div class="flex-entreprise">
                                <p class="body-title text-center">{{ offer.recruiter }}</p>
                            </div>
                            <div class="flex-candidature text-center">
                                <p class="body-title">{{ offer.candidacy_count }}</p>
                            </div>
                            <div class="flex-status text-center">
                                <p class="body-title text-success" v-if="offer.status === 'ACTIVE'">Actif</p>
                                <p class="body-title text-pending" v-if="offer.status === 'DRAFT'">Brouillon</p>
                                <p class="body-title text-danger" v-if="offer.status === 'BLOCKED'">Bloquée</p>
                            </div>
                            <div class="flex-date text-center">
                                <p class="body-title text-center">{{ $formatDate(offer.created_at)}}</p>
                            </div>
                            <div class="flex-date text-center">
                                <p class="body-title text-center">{{ $formatDate(offer.limit_date)}}</p>
                            </div>
                            <div class="flex-action">
                                <p class="text-end">
                                    <NuxtLink :to="'/offres/' + offer.slug" class="btn btn-success">
                                        <IconsEye />
                                    </NuxtLink>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-if="offers.count === 0 && !loading" class="text-center my-4">
                    <p>Il n'y a pas d'offres enregistrées</p>

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
const offerStore = useOfferStore();

const loading = computed(() => offerStore.getLoading);
const offers = computed(() => offerStore.getOffersList);

const { $formatDate } = useNuxtApp();

onMounted(async () => {
    await offerStore.onFetchOffers();
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
.flex-poste {
    width: 20%;
}
.flex-entreprise {
    width: 15%;
}
.flex-role, .flex-candidature {
    width: 10%;
}
.flex-status, .flex-date  {
    width: 15%;
}
.flex-action {
    width: 5%;
}
</style>