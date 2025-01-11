<template>
    <div>
        <h5 class="page-title mb-3">Candidatures</h5>

        <div class="card card-page">
            <div class="card-header">
                <div class="d-flex justify-content-between align-items-center">
                    <div>
                        <p class="page-title">Liste des candidatures</p>
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
                            <p class="table-title text-start">Candidat</p>
                        </div>
                        <div class="flex-email">
                            <p class="table-title">Poste</p>
                        </div>
                        <div class="flex-phone">
                            <p class="table-title text-center">Entreprise</p>
                        </div>
                        <div class="flex-status">
                            <p class="table-title text-center">Statut</p>
                        </div>
                         <div class="flex-date">
                            <p class="table-title text-center">Date</p>
                        </div>
                        <div class="flex-action">
                            <p class="table-title text-center">Actions</p>
                        </div>
                    </div>
                    <!-- Table content  -->
                    <div class="d-flex justify-content-between align-items-center py-2 border-bottom"
                        v-for="entreprise in 12" :key="entreprise">
                        <div class="flex-name">
                            <p class="body-title">Amar DIALLO</p>
                        </div>
                        <div class="flex-email">
                            <p class="body-title">Développeur full stack</p>
                        </div>
                        <div class="flex-phone text-center">
                            <p class="body-title">Octa Solutions</p>
                        </div>
                        <div class="flex-status text-center">
                            <p class="body-title text-success">Actif</p>
                        </div>
                        <div class="flex-date text-center">
                            <p class="body-title text-center">12 juin 2024</p>
                        </div>
                        <div class="flex-action">
                            <p class="text-end">
                                <NuxtLink to="/candidature/slug" class="btn btn-success">
                                    <IconsEye />
                                </NuxtLink>
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
.flex-name {
    width: 25%;
}
.flex-email, .flex-role {
    width: 20%;
}
.flex-phone {
    width: 20%;
}
.flex-status, .flex-role, .flex-action, .flex-date {
    width: 10%;
}
</style>