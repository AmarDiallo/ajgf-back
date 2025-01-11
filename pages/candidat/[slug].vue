<template>
    <div>
        <h5 class="page-title mb-3">Profil candidat</h5>
        <div class="row" style="margin-top: 16px;">
            <div class="col-md-4 col-lg-4">
                <div class="info-card">
                    <div class="info-icon">
                        <IconsUser class="text-white" />
                    </div>
                    <div class="info-content">
                        <p class="info-text">Prénom et Nom</p>
                        <p class="info-value">Amar DIALLO</p>
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
                        <p class="info-value">Développeur full-stack</p>
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
                        <p class="info-value">Conakry, Guinée</p>
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
                        <p class="info-value">En poste</p>
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
                        <p class="info-value">Back + 5</p>
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
                        <p class="info-value">3 à 5 ans</p>
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
                        <p class="info-value">CDI</p>
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
                        <p class="info-value">A convenir</p>
                    </div>
                </div>
            </div>
            <div class="col-md-4 col-lg-4">
                <div class="info-card">
                    <div class="info-icon">
                        <IconsHelp class="text-white" />
                    </div>
                    <div class="info-content">
                        <p class="info-text">Type de contrats recherchés</p>
                        <p class="info-value">CDI, CDD, Indépendant</p>
                    </div>
                </div>
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
                <p class="border-bottom pb-2">Développeur fullstack avec plusieurs années d’expérience dans la
                    conception et le développement
                    d’applications web et mobiles, je maîtrise aussi bien le front-end que le back-end. Habitué à
                    travailler avec des technologies modernes, je prends en charge l’intégralité des projets, de
                    l’analyse des besoins à la mise en production. Passionné par les défis techniques, j’aime développer
                    des solutions performantes, évolutives et user-friendly. Mon objectif est de créer des plateformes
                    optimisées, sécurisées et centrées sur l’utilisateur, tout en respectant les bonnes pratiques de
                    développement.</p>
                <div class="pt-2 ">
                    <div class="d-flex justify-content-start align-items_center">
                        <span class="badge bg-secondary">Effectué le </span>
                        <span class="badge bg-secondary">Effectué le </span>

                    </div>
                </div>
            </div>
        </div>
        <!-- CANDIDATURES  -->
        <div class="card card-page mt-3">
            <div class="card-header">
                <div class="d-flex justify-content-between align-items-center">
                    <div>
                        <p class="page-title">Candidatures effectuées</p>
                    </div>
                </div>
            </div>
            <div class="card-body">
                <div class="zone-table">
                    <!-- Table header  -->
                    <div class="d-flex justify-content-between align-items-center my-2 border-bottom">
                        <div class="flex-name">
                            <p class="table-title text-start">Entreprise</p>
                        </div>
                        <div class="flex-poste">
                            <p class="table-title text-start">Poste</p>
                        </div>
                        <div class="flex-date">
                            <p class="table-title text-center">Date</p>
                        </div>
                        <div class="flex-status">
                            <p class="table-title text-center">Statut</p>
                        </div>
                    </div>
                    <!-- Table content  -->
                    <div class="d-flex justify-content-between align-items-center py-2 border-bottom"
                        v-for="entreprise in 4" :key="entreprise">
                        <div class="flex-name">
                            <p class="body-title">Amar DIALLO</p>
                        </div>
                        <div class="flex-poste">
                            <p class="body-title">Chef de projet IT</p>
                        </div>
                        <div class="flex-status text-center">
                            <p class="body-title text-center">12 juin 2024</p>
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
})
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

.flex-name, .flex-poste {
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
</style>