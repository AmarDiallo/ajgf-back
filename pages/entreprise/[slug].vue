<template>
    <div v-if="loading" class="text-center loading-recruiter">
        <div class="spinner-border spinner-border-recruiter" role="status">
            <span class="visually-hidden">Chargement d'entreprise en cours...</span>
        </div>
    </div>
    <div v-if="recruiterDetail && !loading">
        <h5 class="page-title mb-3">Profil entreprise</h5>
        <div class="row" style="margin-top: 16px;">
            <div class="col-md-4 col-lg-4">
                <div class="info-card">
                    <div class="info-icon logo">
                        <img :src="recruiterDetail.logo" :alt="recruiterDetail.name" class="logo-img">
                    </div>
                    <div class="info-content">
                        <p class="info-text">Nom de l'entreprise</p>
                        <p class="info-value">{{ recruiterDetail.name }}</p>
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
                        <p class="info-value text-pending" v-if="recruiterDetail.status === 'PENDING'">En attente de
                            validation</p>
                        <p class="info-value text-success" v-if="recruiterDetail.status === 'ACTIVE'">Validée</p>
                        <p class="info-value text-primary" v-if="recruiterDetail.status === 'BLOCKED'">Suspendu</p>
                    </div>
                </div>
            </div>
            <div class="col-md-4 col-lg-4">
                <div class="info-card">
                    <div class="info-icon">
                        <IconsHelp class="text-white" />
                    </div>
                    <div class="info-content">
                        <p class="info-text">Secteur d'activité</p>
                        <p class="info-value" v-if="recruiterDetail.activity_sector">{{
                            recruiterDetail.activity_sector.name }}</p>
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
                        <p class="info-value">{{ recruiterDetail.address }}</p>
                    </div>
                </div>
            </div>
            <div class="col-md-4 col-lg-4">
                <div class="info-card">
                    <div class="info-icon">
                        <IconsHelp class="text-white" />
                    </div>
                    <div class="info-content">
                        <p class="info-text">Téléphone</p>
                        <p class="info-value">{{ recruiterDetail.phone }}</p>
                    </div>
                </div>
            </div>
            <div class="col-md-4 col-lg-4">
                <div class="info-card">
                    <div class="info-icon">
                        <IconsHelp class="text-white" />
                    </div>
                    <div class="info-content">
                        <p class="info-text">Email</p>
                        <p class="info-value">{{ recruiterDetail.email }}</p>
                    </div>
                </div>
            </div>
            <div class="col-md-4 col-lg-4">
                <div class="info-card">
                    <div class="info-icon">
                        <IconsHelp class="text-white" />
                    </div>
                    <div class="info-content">
                        <p class="info-text">Date de création</p>
                        <p class="info-value">{{ new Date(recruiterDetail.creation_date).getFullYear() }}</p>
                    </div>
                </div>
            </div>
            <div class="col-md-4 col-lg-4">
                <div class="info-card">
                    <div class="info-icon">
                        <IconsHelp class="text-white" />
                    </div>
                    <div class="info-content">
                        <p class="info-text">Nombre d'employées</p>
                        <p class="info-value">{{ recruiterDetail.nb_employees }}</p>
                    </div>
                </div>
            </div>
            <div class="col-md-4 col-lg-4">
                <div class="info-card">
                    <div class="info-icon">
                        <IconsHelp class="text-white" />
                    </div>
                    <div class="info-content">
                        <p class="info-text">Site web</p>
                        <p class="info-value">-</p>
                    </div>
                </div>
            </div>
        </div>
        <!-- ACTIONS  -->
        <div class="card card-page mb-3">
            <div class="card-header">
                <div class="d-flex justify-content-between align-items-center">
                    <div>
                        <p class="page-title">Actions</p>
                    </div>
                </div>
            </div>
            <div class="card-body">
                <button class="btn btn-success-large me-3" v-if="recruiterDetail.status != 'ACTIVE'"
                    @click="onValidRecruiter()">Valider le compte</button>
                <button class="btn btn-pending-large" @click="blockedRecruiter()" v-if="recruiterDetail.status != 'BLOCKED'" >Suspendre le compte</button>
            </div>
        </div>

        <!-- PRESENTATION  -->
        <div class="card card-page">
            <div class="card-header">
                <div class="d-flex justify-content-between align-items-center">
                    <div>
                        <p class="page-title">Présentation et compétences</p>
                    </div>
                </div>
            </div>
            <div class="card-body">
                <div class="pt-2">{{ recruiterDetail.description }}</div>
            </div>
        </div>

        <!-- PRESENTATION  -->
        <div class="card card-page mt-3">
            <div class="card-header">
                <div class="d-flex justify-content-between align-items-center">
                    <div>
                        <p class="page-title">Mission et engagements</p>
                    </div>
                </div>
            </div>
            <div class="card-body">
                <div class="pt-2">{{ recruiterDetail.mission }}</div>
            </div>
        </div>

        <!-- PRESENTATION  -->
        <div class="card card-page mt-3">
            <div class="card-header">
                <div class="d-flex justify-content-between align-items-center">
                    <div>
                        <p class="page-title">Opportunités</p>
                    </div>
                </div>
            </div>
            <div class="card-body">
                <div class="pt-2">{{ recruiterDetail.opportunities }}</div>
            </div>
        </div>

        <!-- PRESENTATION  -->
        <div class="card card-page mt-3">
            <div class="card-header">
                <div class="d-flex justify-content-between align-items-center">
                    <div>
                        <p class="page-title">Galérie</p>
                    </div>
                </div>
            </div>
            <div class="card-body">
                <p class="pt-2">Image gride.</p>
            </div>
        </div>
        <!-- CANDIDATURES  -->
        <div class="card card-page mt-3">
            <div class="card-header">
                <div class="d-flex justify-content-between align-items-center">
                    <div>
                        <p class="page-title">Liste des utilisateurs</p>
                    </div>
                </div>
            </div>
            <div class="card-body">
                <div class="zone-table">
                    <!-- Table header  -->
                    <div class="d-flex justify-content-between align-items-center my-2 border-bottom">
                        <div class="flex-name">
                            <p class="table-title text-start">Prénom et Nom</p>
                        </div>
                        <div class="flex-poste">
                            <p class="table-title text-start">Email</p>
                        </div>
                        <div class="flex-date">
                            <p class="table-title text-center">Poste</p>
                        </div>
                        <div class="flex-status">
                            <p class="table-title text-center">Statut</p>
                        </div>
                    </div>
                    <!-- Table content  -->
                    <div class="d-flex justify-content-between align-items-center py-2 border-bottom"
                        v-for="entreprise in 1" :key="entreprise">
                        <div class="flex-name">
                            <p class="body-title">Amar DIALLO</p>
                        </div>
                        <div class="flex-poste">
                            <p class="body-title">amardiallo94@gmail;com</p>
                        </div>
                        <div class="flex-status text-center">
                            <p class="body-title text-center">Responsable RH</p>
                        </div>
                        <div class="flex-status text-center">
                            <p class="body-title text-success">Actif</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>
<script setup>
definePageMeta({
    layout: 'default',
});

const route = useRoute();
const recruiterStore = useRecruiterStore();
const loading = computed(() => recruiterStore.getLoading);
const recruiterDetail = computed(() => recruiterStore.getRecruiterDetail);

onMounted(async () => {
    await recruiterStore.onFetchDetailRecruiter(route.params.slug);
});

const onValidRecruiter = async () => {
    const data = reactive({
        status: 'ACTIVE',
    });
    await recruiterStore.onActiveRecruiter(route.params.slug, data);
};

const onDeactiveRecruiter = async () => {
    console.log('Deactive recuiter');
}

const blockedRecruiter = async () => {
    const data = reactive({
        status: 'BLOCKED',
    });
    await recruiterStore.onActiveRecruiter(route.params.slug, data);
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