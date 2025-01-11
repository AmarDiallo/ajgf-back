<template>
    <div>
        <h5 class="page-title">Détails candidature</h5>
        <div class="row" style="margin-top: 16px;">
            <div class="col-md-12 col-lg-12">
                <div class="info-card">
                    <div class="info-icon">
                        <IconsHelp class="text-white" />
                    </div>
                    <div class="info-content">
                        <p class="info-text">Titre de l'offre</p>
                        <p class="info-value">Développeur fullstack</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="row" style="margin-top: 16px;">
            <div class="col-md-4 col-lg-4">
                <div class="info-card">
                    <div class="info-icon">
                        <img src="/imgs/offre/orange.jpeg" alt="">
                    </div>
                    <div class="info-content">
                        <p class="info-text">Entreprise</p>
                        <p class="info-value">Orange Guinée</p>
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
                        <p class="info-value">1 à 3 ans</p>
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
                        <p class="info-value">Bac + 5</p>
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
                        <p class="info-value">01 juin 2024</p>
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
                        <p class="info-value">20 juin 2024</p>
                    </div>
                </div>
            </div>
            <div class="col-md-4 col-lg-4">
                <div class="info-card">
                    <div class="info-icon">
                        <IconsHelp class="text-white" />
                    </div>
                    <div class="info-content">
                        <p class="info-text">Candidature</p>
                        <p class="info-value">5</p>
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
                <button class="btn btn-primary">Désactiver cette offre</button>
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
                <p class="pt-2">Développeur fullstack avec plusieurs années d’expérience dans la
                    conception et le développement
                    d’applications web et mobiles, je maîtrise aussi bien le front-end que le back-end. Habitué à
                    travailler avec des technologies modernes, je prends en charge l’intégralité des projets, de
                    l’analyse des besoins à la mise en production. Passionné par les défis techniques, j’aime développer
                    des solutions performantes, évolutives et user-friendly. Mon objectif est de créer des plateformes
                    optimisées, sécurisées et centrées sur l’utilisateur, tout en respectant les bonnes pratiques de
                    développement.</p>
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
</style>