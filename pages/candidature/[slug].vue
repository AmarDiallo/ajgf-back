<template>
    <div v-if="loading" class="text-center loading-recruiter">
        <div class="spinner-border spinner-border-recruiter" role="status">
            <span class="visually-hidden">Chargement des candidatures en cours...</span>
        </div>
    </div>
    <div v-if="candidature && !loading">
        <h5 class="page-title mb-3">Détails candidature</h5>
        <div class="row" style="margin-top: 16px;">
            <div class="col-md-4 col-lg-4">
                <div class="info-card">
                    <div class="info-icon">
                        <IconsHelp class="text-white" />
                    </div>
                    <div class="info-content">
                        <p class="info-text">Date de candidature</p>
                        <p class="info-value">{{ $formatDate(candidature.created_at) }}</p>
                    </div>
                </div>
            </div>
            <div class="col-md-4 col-lg-4">
                <div class="info-card">
                    <div class="info-icon">
                        <IconsHelp class="text-white" />
                    </div>
                    <div class="info-content">
                        <p class="info-text">Statut</p>
                        <p class="info-value text-pending" v-if="candidature.status === 'PENDING'">En attente</p>
                        <p class="info-value text-success" v-if="candidature.status === 'ACCEPTED'">Acceptée</p>
                        <p class="info-value text-danger" v-if="candidature.status === 'CANCELED'">Annulée</p>
                    </div>
                </div>
            </div>
        </div>
        <!-- ACTIONS  -->
        <div class="card card-page mb-3" v-if="candidature.status != 'CANCELED'">
            <div class="card-header">
                <div class="d-flex justify-content-between align-items-center">
                    <div>
                        <p class="page-title">Actions</p>
                    </div>
                </div>
            </div>
            <div class="card-body">
                <button class="btn btn-primary" @click="cancelCandidature()">Annuler la candidature</button>
            </div>
        </div>

        <!-- PROFIL CANDIDAT  -->
        <div class="card card-page">
            <div class="card-header">
                <div class="d-flex justify-content-between align-items-center">
                    <div>
                        <p class="page-title">Profil candidat</p>
                    </div>
                </div>
            </div>
            <div class="card-body" v-if="candidature.candidate">
                <div class="row" style="margin-top: 16px;">
                    <div class="col-md-4 col-lg-4">
                        <div class="info-card">
                            <div class="info-icon">
                                <IconsUser class="text-white" />
                            </div>
                            <div class="info-content">
                                <p class="info-text">Prénom et Nom</p>
                                <p class="info-value">{{ candidature.candidate.last_name }} {{
                                    candidature.candidate.first_name }}</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 col-lg-4">
                        <div class="info-card">
                            <div class="info-icon">
                                <IconsHelp class="text-white" />
                            </div>
                            <div class="info-content">
                                <p class="info-text">Poste actuel ou récent</p>
                                <p class="info-value">{{ candidature.candidate.actual_position }}</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 col-lg-4">
                        <div class="info-card">
                            <div class="info-icon">
                                <IconsHelp class="text-white" />
                            </div>
                            <div class="info-content">
                                <p class="info-text">Adresse</p>
                                <p class="info-value">{{ candidature.candidate.city }}, {{ candidature.candidate.country
                                    }}</p>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-4 col-lg-4">
                        <div class="info-card">
                            <div class="info-icon">
                                <IconsHelp class="text-white" />
                            </div>
                            <div class="info-content">
                                <p class="info-text">Situation actuelle</p>
                                <p class="info-value">{{ candidature.candidate.situation }}</p>
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
                                <p class="info-value">{{ candidature.candidate.degree }}</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 col-lg-4">
                        <div class="info-card">
                            <div class="info-icon">
                                <IconsHelp class="text-white" />
                            </div>
                            <div class="info-content">
                                <p class="info-text">Année d'expérience</p>
                                <p class="info-value">{{ candidature.candidate.experience }}</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 col-lg-4">
                        <div class="info-card">
                            <div class="info-icon">
                                <IconsHelp class="text-white" />
                            </div>
                            <div class="info-content">
                                <p class="info-text">Type de contrat recherché</p>
                                <p class="info-value">{{ candidature.candidate.contract_type[0] }}</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 col-lg-4">
                        <div class="info-card">
                            <div class="info-icon">
                                <IconsHelp class="text-white" />
                            </div>
                            <div class="info-content">
                                <p class="info-text">Disponibilité</p>
                                <p class="info-value">{{ candidature.candidate.availability }}</p>
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
                                <p class="info-value">
                                    <span class="me-1" v-for="contrat in candidature.candidate.contract_type"
                                        :key="contrat">{{ contrat }},</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="pt-3" style="border-top: 1px solid #E6EDEF;">
                    <div class="d-flex justify-content-start align-items_center">
                        <span class="badge bg-secondary">Javascript</span>
                        <span class="badge bg-secondary">React</span>

                    </div>
                </div>
            </div>
        </div>

        <!-- DETAIL DE L'OFFRE  -->
        <div class="card card-page mt-3">
            <div class="card-header">
                <div class="d-flex justify-content-between align-items-center">
                    <div>
                        <p class="page-title">Détail de l'offre</p>
                    </div>
                </div>
            </div>
            <div class="card-body" v-if="candidature.offer">
                <div class="row" style="margin-top: 16px;">
                    <div class="col-md-4 col-lg-4" v-if="candidature.offer.recruiter">
                        <div class="info-card">
                            <div class="info-icon logo">
                                <img :src="candidature.offer.recruiter.logo" :alt="candidature.offer.recruiter.name"
                                    class="logo-img">
                            </div>
                            <div class="info-content">
                                <p class="info-text">Entreprise</p>
                                <p class="info-value">{{ candidature.offer.recruiter.name }}</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 col-lg-4">
                        <div class="info-card">
                            <div class="info-icon">
                                <IconsHelp class="text-white" />
                            </div>
                            <div class="info-content">
                                <p class="info-text">Poste</p>
                                <p class="info-value">{{ candidature.offer.title }}</p>
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
                                <p class="info-value">{{ candidature.offer.contract_type }}</p>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-4 col-lg-4">
                        <div class="info-card">
                            <div class="info-icon">
                                <IconsHelp class="text-white" />
                            </div>
                            <div class="info-content">
                                <p class="info-text">Salaire </p>
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
                                <p class="info-value">{{ candidature.offer.experience }}</p>
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
                                <p class="info-value">{{ candidature.offer.degree }}</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 col-lg-4">
                        <div class="info-card">
                            <div class="info-icon">
                                <IconsHelp class="text-white" />
                            </div>
                            <div class="info-content">
                                <p class="info-text">Date de début</p>
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
                                <p class="info-value">
                                    {{ $formatDate(candidature.offer.published_at) }}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 col-lg-4">
                        <div class="info-card">
                            <div class="info-icon">
                                <IconsHelp class="text-white" />
                            </div>
                            <div class="info-content">
                                <p class="info-text">Date d'expiration</p>
                                <p class="info-value">{{ $formatDate(candidature.offer.limit_date) }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- PRESENTATION  -->
        <div class="card card-page mt-3">
            <div class="card-header">
                <div class="d-flex justify-content-between align-items-center">
                    <div>
                        <p class="page-title">Message du candidat</p>
                    </div>
                </div>
            </div>
            <div class="card-body">
                <div class="pt-2" v-html="candidature.message"></div>
            </div>
        </div>
    </div>
    <!-- Modal de suppression  -->
    <div class="modal fade" id="modalCandidature" tabindex="-1" aria-labelledby="modalCandidatureLabel"
        aria-hidden="true">
        <ModalDelete :modalObject="modalObjects" @closeModal="onConfirmCancel" />
    </div>
</template>
<script setup>
definePageMeta({
    layout: 'default',
});
const route = useRoute();
const candidatStore = useCandidateStore();
const candidature = computed(() => candidatStore.getCandidature);
const loading = computed(() => candidatStore.getLoading);

const { $formatDate } = useNuxtApp();

const myModal = ref(null);
const modalObjects = ref({});

onMounted(async () => {
    candidatStore.onFetchDetailCandidacies(route.params.slug);

    myModal.value = new bootstrap.Modal(document.getElementById('modalCandidature'));
});

const cancelCandidature = async () => {
    if (candidature.value.offer) {
        modalObjects.value = {
            title: "Annulation de la candidature",
            description: "Êtes vous sûr de vouloir annuler cette candidature",
            name: candidature.value.offer.title,
            btn: "Oui, annuler"
        };
        myModal.value.show();
    }
};

const onConfirmCancel = async () => {
    await candidatStore.onCancelCandidacies(route.params.slug, candidature.value);
    myModal.value.hide();
}
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

.logo {
    background-color: #fff !important;
}

.logo-img {
    width: 48px;
    height: 48px;
    object-fit: cover;
}
</style>