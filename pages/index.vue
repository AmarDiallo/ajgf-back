<template>
    <div>
        <h5 class="text-title">Tableau de board</h5>
        <div class="row" style="margin-top: 16px;">
            <div class="col-md-4 col-lg-4">
                <div class="info-card">
                    <div class="info-icon">
                        <IconsInfo class="text-white" />
                    </div>
                    <div class="info-content">
                        <p class="info-text">Offre d'emploi total</p>
                        <p class="info-value">126</p>
                    </div>
                </div>
            </div>
            <div class="col-md-4 col-lg-4">
                <div class="info-card">
                    <div class="info-icon">
                        <IconsInfo class="text-white" />
                    </div>
                    <div class="info-content">
                        <p class="info-text">Offres d'emploi actifs</p>
                        <p class="info-value">98</p>
                    </div>
                </div>
            </div>
            <div class="col-md-4 col-lg-4">
                <div class="info-card">
                    <div class="info-icon">
                        <IconsInfo class="text-white" />
                    </div>
                    <div class="info-content">
                        <p class="info-text">Nombre d'entreprises inscrites</p>
                        <p class="info-value">98</p>
                    </div>
                </div>
            </div>
            <div class="col-md-4 col-lg-4">
                <div class="info-card">
                    <div class="info-icon">
                        <IconsInfo class="text-white" />
                    </div>
                    <div class="info-content">
                        <p class="info-text">Nombre de candidats</p>
                        <p class="info-value">126</p>
                    </div>
                </div>
            </div>
            <div class="col-md-4 col-lg-4">
                <div class="info-card">
                    <div class="info-icon">
                        <IconsInfo class="text-white" />
                    </div>
                    <div class="info-content">
                        <p class="info-text">Candidatures</p>
                        <p class="info-value">98</p>
                    </div>
                </div>
            </div>
            <div class="col-md-4 col-lg-4">
                <div class="info-card">
                    <div class="info-icon">
                        <IconsInfo class="text-white" />
                    </div>
                    <div class="info-content">
                        <p class="info-text">Candidatures en attentes</p>
                        <p class="info-value">98</p>
                    </div>
                </div>
            </div>
            <div class="col-md-4 col-lg-4">
                <div class="info-card">
                    <div class="info-icon">
                        <IconsInfo class="text-white" />
                    </div>
                    <div class="info-content">
                        <p class="info-text">Candidatures acceptées</p>
                        <p class="info-value">126</p>
                    </div>
                </div>
            </div>
            <div class="col-md-4 col-lg-4">
                <div class="info-card">
                    <div class="info-icon">
                        <IconsInfo class="text-white" />
                    </div>
                    <div class="info-content">
                        <p class="info-text">Candidats embauchés</p>
                        <p class="info-value">98</p>
                    </div>
                </div>
            </div>
            <div class="col-md-4 col-lg-4">
                <div class="info-card">
                    <div class="info-icon">
                        <IconsInfo class="text-white" />
                    </div>
                    <div class="info-content">
                        <p class="info-text">Articles publié</p>
                        <p class="info-value">98</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="row mt-3">
            <div class="col-md-6 col-lg-6">
                <div class="entreprise">
                    <div class="entreprise-header">
                        <h5 class="entreprise-title">Entreprises en attente de validation</h5>
                    </div>
                    <div class="entreprise-body">
                        <div class="d-flex justify-content-between align-items-center py-2 border-bottom">
                            <div class="flex-name">
                                <p class="table-title text-start">Nom de l'entreprise</p>
                            </div>
                            <div class="flex-date">
                                <p class="table-title">Inscription</p>
                            </div>
                            <div class="flex-action">
                                <p class="table-title text-center">Actions</p>
                            </div>
                        </div>
                        <div class="d-flex justify-content-between align-items-center py-2 border-bottom"
                            v-for="entreprise in 4" :key="entreprise">
                            <div class="body-flex-name">
                                <p class="body-title">Orange Guinée</p>
                            </div>
                            <div class="body-flex-date">
                                <p class="body-date">12 juin 2024</p>
                            </div>
                            <div class="body-flex-action">
                                <p class="text-end">
                                    <button class="btn btn-success">
                                        <IconsEye />
                                    </button>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-md-6 col-lg-6">
                <div class="entreprise">
                    <div class="entreprise-header">
                        <h5 class="entreprise-title">Article en attente de validation</h5>
                    </div>
                    <div class="entreprise-body">
                        <div class="d-flex justify-content-between align-items-center py-2 border-bottom">
                            <div class="flex-name">
                                <p class="table-title text-start">Article</p>
                            </div>
                            <div class="flex-date">
                                <p class="table-title">Auteur</p>
                            </div>
                            <div class="flex-action">
                                <p class="table-title text-center">Actions</p>
                            </div>
                        </div>
                        <div class="d-flex justify-content-between align-items-center py-2 border-bottom"
                            v-for="entreprise in 4" :key="entreprise">
                            <div class="body-flex-name">
                                <p class="body-title">Titre de l'article</p>
                            </div>
                            <div class="body-flex-date">
                                <p class="body-date">Orange Guinée</p>
                            </div>
                            <div class="body-flex-action">
                                <p class="text-end">
                                    <button class="btn btn-success">
                                        <IconsEye />
                                    </button>
                                </p>
                            </div>
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
.text-title {
    color: #000000;
    font-weight: 700;
    font-size: 24px;
    line-height: 32.68px;
}
.info-card {
    background-color: #fff;
    padding: 16px;
    display: flex;
    justify-content: start;
    align-items: center;
    border: 1px solid #E5EDEF;
    border-radius: 8px;
    margin-bottom: 16px;
}
.info-icon {
    width: 48px;
    height: 48px;
    background-color: #004F71 !important;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.info-content {
    margin-left: 10px;
}
.info-text {
    color: #686868;
    font-size: 16px;
    line-height: 21.79px;
    font-weight: 400;
    margin-bottom: 0;
}
.info-value {
    color: #252525;
    font-size: 16px;
    line-height: 21.79px;
    font-weight: 700;
}
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
.flex-name, .body-flex-name {
    width: 45%;
}
.flex-date, .body-flex-date {
    width: 35%;
}
.flex-action, .body-flex-action {
    width: 20%;
}
.body-flex-action {
    display: flex;
    justify-content: center;
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
</style>