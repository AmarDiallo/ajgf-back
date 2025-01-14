<template>
    <div v-if="loading" class="text-center loading-recruiter">
        <div class="spinner-border spinner-border-recruiter" role="status">
            <span class="visually-hidden">Chargement des offres...</span>
        </div>
    </div>
    <div v-if="offerDetail && !loading">
        <h5 class="page-title">Détails de l'offre d'emploi</h5>
        <div class="row" style="margin-top: 16px;">
            <div class="col-md-12 col-lg-12">
                <div class="info-card">
                    <div class="info-icon">
                        <IconsHelp class="text-white" />
                    </div>
                    <div class="info-content">
                        <p class="info-text">Titre de l'offre</p>
                        <p class="info-value">{{ offerDetail.title }}</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="row" style="margin-top: 16px;">
            <div class="col-md-4 col-lg-4">
                <div class="info-card" v-if="offerDetail.recruiter">
                    <div class="info-icon logo-recruiter">
                        <img :src="offerDetail.recruiter.logo" :alt="offerDetail.recruiter.name" />
                    </div>
                    <div class="info-content">
                        <p class="info-text">Entreprise</p>
                        <p class="info-value">{{ offerDetail.recruiter.name }}</p>
                    </div>
                </div>
            </div>
            <div class="col-md-4 col-lg-4">
                <div class="info-card">
                    <div class="info-icon">
                        <IconsHelp class="text-white" />
                    </div>
                    <div class="info-content">
                        <p class="info-text">Type de contrat</p>
                        <p class="info-value">{{ offerDetail.contract_type }}</p>
                    </div>
                </div>
            </div>
            <div class="col-md-4 col-lg-4">
                <div class="info-card">
                    <div class="info-icon">
                        <IconsHelp class="text-white" />
                    </div>
                    <div class="info-content">
                        <p class="info-text">Salaire</p>
                        <p class="info-value">Non précisé</p>
                    </div>
                </div>
            </div>

            <div class="col-md-4 col-lg-4">
                <div class="info-card">
                    <div class="info-icon">
                        <IconsHelp class="text-white" />
                    </div>
                    <div class="info-content">
                        <p class="info-text">Expérience</p>
                        <p class="info-value">{{ offerDetail.experience }}</p>
                    </div>
                </div>
            </div>
            <div class="col-md-4 col-lg-4">
                <div class="info-card">
                    <div class="info-icon">
                        <IconsHelp class="text-white" />
                    </div>
                    <div class="info-content">
                        <p class="info-text">Niveau d'études</p>
                        <p class="info-value">{{ offerDetail.degree }}</p>
                    </div>
                </div>
            </div>
            <div class="col-md-4 col-lg-4">
                <div class="info-card">
                    <div class="info-icon">
                        <IconsHelp class="text-white" />
                    </div>
                    <div class="info-content">
                        <p class="info-text">Date début</p>
                        <p class="info-value">Dès que possible</p>
                    </div>
                </div>
            </div>
            <div class="col-md-4 col-lg-4">
                <div class="info-card">
                    <div class="info-icon">
                        <IconsHelp class="text-white" />
                    </div>
                    <div class="info-content">
                        <p class="info-text">Date de publication</p>
                        <p class="info-value" v-if="offerDetail.published_at">{{ $formatDate(offerDetail.published_at)
                            }} </p>
                        <p class="info-value" v-else> - </p>
                    </div>
                </div>
            </div>
            <div class="col-md-4 col-lg-4">
                <div class="info-card">
                    <div class="info-icon">
                        <IconsHelp class="text-white" />
                    </div>
                    <div class="info-content">
                        <p class="info-text">Date d'éxpiration</p>
                        <!-- <p class="info-value">{{ $formatDate(offerDetail.limit_date) }}</p> -->
                    </div>
                </div>
            </div>
            <div class="col-md-4 col-lg-4">
                <div class="info-card">
                    <div class="info-icon">
                        <IconsHelp class="text-white" />
                    </div>
                    <div class="info-content">
                        <p class="info-text">Candidatures</p>
                        <p class="info-value">{{ offerDetail.candidacy_count }}</p>
                    </div>
                </div>
            </div>
        </div>


        <!-- ACTIONS  -->
        <div class="card card-page mt-3">
            <div class="card-header">
                <div class="d-flex justify-content-between align-items-center">
                    <div>
                        <p class="page-title">Actions</p>
                    </div>
                </div>
            </div>
            <div class="card-body">
                <button v-if="offerDetail.status != 'BLOCKED'" class="btn btn-primary" @click="blockOffer()">Désactiver
                    cette offre</button>
                <button v-if="offerDetail.status === 'BLOCKED'" class="btn btn-secondary" @click="blockOffer()">Activer
                    cette offre</button>
            </div>
        </div>


        <!-- DESCRIPTION  -->
        <div class="card card-page mt-3">
            <div class="card-header">
                <div class="d-flex justify-content-between align-items-center">
                    <div>
                        <p class="page-title">Déscription</p>
                    </div>
                </div>
            </div>
            <div class="card-body">
                <div class="pt-2" v-html="offerDetail.summary"></div>
            </div>
        </div>

        <!-- DETAIL DE L'OFFRE  -->
        <div class="card card-page mt-3">
            <div class="card-body">
                <div>
                    <p class="page-title">Missions principales </p>
                </div>
                <div class="pt-2" v-html="offerDetail.mission"></div>

                <div class="mt-3">
                    <p class="page-title">Compétences requises</p>
                </div>
                <div class="pt-2" v-html="offerDetail.skills"></div>

                <div class="mt-3">
                    <p class="page-title">Profil recherché</p>
                </div>
                <div class="pt-2" v-html="offerDetail.skills"></div>

                <div class="mt-3">
                    <p class="page-title">Avantages</p>
                </div>
                <div class="pt-2" v-html="offerDetail.avantage"></div>
            </div>
        </div>

    </div>
    <!-- Modal de suppression  -->
    <div class="modal fade" id="modalArticle" tabindex="-1" aria-labelledby="modalArticleLabel" aria-hidden="true">
        <template v-if="offerDetail">
            <ModalDelete :modalObject="modalObjects" @closeModal="onBlockThisOffer" />
        </template>
    </div>
</template>
<script setup>
definePageMeta({
    layout: 'default',
    middleware: 'auth'
})
const route = useRoute();
const offerStore = useOfferStore();

const loading = computed(() => offerStore.getLoading);
const offerDetail = computed(() => offerStore.getOfferDetail);

const { $formatDate } = useNuxtApp();

const myModal = ref(null);
const modalObjects = ref({});

onMounted(() => {
    offerStore.onFetchOfferDetail(route.params.slug);

    myModal.value = new bootstrap.Modal(document.getElementById('modalArticle'));
});

const blockOffer = async () => {
    modalObjects.value = {
        title: "Désactivation de l'offre",
        description: "Êtes vous sûr de vouloir désactiver l'offre d'emploi",
        name: offerDetail.value.title,
        btn: "Oui, désactiver"
    };
    myModal.value.show();
};

const onBlockThisOffer = () => {
    offerStore.onBlockOffer(offerDetail.value.slug);
    myModal.value.hide();
};
</script>
<style scoped>
.entreprise {
    border: 1px solid #E6EDEF;
    border-radius: 8px;
    background-color: #fff !important;
}

.entreprise-header {
    padding: 16px 20px;
    border-bottom: 1px solid #E6EDEF;
}

.entreprise-title {
    font-weight: 700;
    font-size: 18px;
    line-height: 24.57px;
    color: #252525;
}

.entreprise-body {
    padding: 5px 20px;
}

.flex-name,
.flex-poste {
    width: 35%;
}

.flex-date,
.flex-status {
    width: 15%;
}

.border-bottom {
    border-bottom: 1px solid #E6EDEF;
}

.body-date {
    color: #252525;
    font-size: 16px;
    line-height: 21.79px;
    font-weight: 600;
    text-align: center;
}

.logo-recruiter {
    background-color: #fff !important;
}

.btn-success {
    width: 32px;
    height: 32px;
    background-color: #007B40 !important;
    border: 1px solid #007B40 !important;
    border-radius: 23px;
    padding: 6px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.bg-secondary {
    border: 1px solid #B5B5B5;
    background-color: #fff !important;
    color: #686868;
    font-size: 14px;
    line-height: 19.11px;
    font-weight: 400;
    padding: 6px 11px;
    border-radius: 200px;
    filter: drop-shadow(0 2px 4px #2525250D);
    margin-right: 16px;
}

.btn-success-large {
    background-color: #007B40 !important;
    border: 1px solid #007B40 !important;
    border-radius: 8px;
    padding: 10px 20px;
    color: #fff;
    font-size: 16px;
    font-weight: 700;
}

.btn-pending-large {
    background-color: #DCAC05 !important;
    border: 1px solid #DCAC05 !important;
}
</style>