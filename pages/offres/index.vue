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
                        v-for="entreprise in 12" :key="entreprise">
                        <div class="flex-poste">
                            <p class="body-title">Developpeur full stack</p>
                        </div>
                        <div class="flex-entreprise">
                            <p class="body-title text-center">Octas solutions</p>
                        </div>
                        <div class="flex-candidature text-center">
                            <p class="body-title">3</p>
                        </div>
                        <div class="flex-status text-center">
                            <p class="body-title text-success">Actif</p>
                        </div>
                        <div class="flex-date text-center">
                            <p class="body-title text-center">12 juin 2024</p>
                        </div>
                        <div class="flex-date text-center">
                            <p class="body-title text-center">12 juin 2024</p>
                        </div>
                        <div class="flex-action">
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
</template>
<script setup>

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
    width: 20%;
}
.flex-role, .flex-date, .flex-candidature {
    width: 10%;
}
.flex-status, .flex-action {
    width: 5%;
}
</style>