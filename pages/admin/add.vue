<template>
    <div>
        <div class="card card-page mx-auto mt-4">
            <div class="card-header">
                <div class="d-flex justify-content-between align-items-center">
                    <div>
                        <p class="page-title">Ajout d'un administrateur</p>
                    </div>
                </div>
            </div>
            <div class="card-body">
                <div class="zone-table">
                    <form>
                        <div class="row">
                            <div class="col-md-12 col-lg-12 mb-3">
                                <label for="firstname" class="form-label">Prénom</label>
                                <input type="text" class="form-control" placeholder="Prénom de l'administrateur" id="firstname"
                                    aria-describedby="firstname">
                            </div>

                            <div class="col-md-12 col-lg-12 mb-3">
                                <label for="firstname" class="form-label">Nom</label>
                                <input type="text" class="form-control" placeholder="Nom de l'amdin" id="firstname"
                                    aria-describedby="firstname">
                            </div>

                            <div class="col-md-12 col-lg-12 mb-3">
                                <label for="email" class="form-label">Email</label>
                                <input type="email" class="form-control" placeholder="Email de l'admin" id="email"
                                    aria-describedby="email">
                            </div>

                            <div class="col-md-12 col-lg-12 mb-3">
                                <label for="phone" class="form-label">Téléphone</label>
                                <input type="tel" class="form-control" placeholder="Téléphone de l'admin"
                                    id="phone" aria-describedby="phone">
                            </div>

                            <div class="col-md-12 col-lg-12 mb-3">
                                <label for="linkedin" class="form-label">Rôle</label>
                                <select name="role" id="role" class="form-select">
                                    <option value="admin">Admin</option>
                                    <option value="super-admin">Super Admin</option>
                                </select>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div class="card-footer">
                <button class="btn btn-secondary">Enregistrer</button>
                <button class="btn btn-cancel mx-3">Annuler</button>
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
.card-page {
    width: 527px;
}
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

.flex-email,
.flex-role {
    width: 20%;
}

.flex-phone {
    width: 20%;
}

.flex-status,
.flex-role,
.flex-action,
.flex-date {
    width: 10%;
}
</style>