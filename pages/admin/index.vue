<template>
    <div>
        <h5 class="page-title mb-3">Administrateurs</h5>

        <div class="card card-page">
            <div class="card-header">
                <div class="d-flex justify-content-between align-items-center">
                    <div>
                        <p class="page-title">Articles</p>
                    </div>
                    <div>
                        <NuxtLink to="/admin/add" class="btn btn-secondary">Ajouter un admin</NuxtLink>
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
                            <p class="table-title text-start">Prénom et Nom</p>
                        </div>
                        <div class="flex-email">
                            <p class="table-title">Email</p>
                        </div>
                        <div class="flex-phone">
                            <p class="table-title text-center">Téléphone</p>
                        </div>
                        <div class="flex-role">
                            <p class="table-title text-center">Rôle</p>
                        </div>
                        <div class="flex-status">
                            <p class="table-title text-center">Statut</p>
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
                            <p class="body-title">amardiallo94@gmail.com</p>
                        </div>
                        <div class="flex-phone text-center">
                            <p class="body-title">623419147</p>
                        </div>
                        <div class="flex-role text-center">
                            <p class="body-title">Admin</p>
                        </div>
                        <div class="flex-status text-center">
                            <p class="body-title text-success">Actif</p>
                        </div>
                        <div class="flex-action">
                            <p class="text-end">
                                <button class="btn btn-danger">
                                    <IconsCross />
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
definePageMeta({
    layout: 'default',
    middleware: 'auth'
})
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
    width: 15%;
}
.flex-status, .flex-role, .flex-action {
    width: 10%;
}
</style>