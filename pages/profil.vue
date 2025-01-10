<template>
    <div>
        <h5 class="page-title mb-3">Mon profil</h5>

        <div class="row">
            <div class="col-md-6 col-lg-6">
                <div class="card card-page width-bottom">
                    <div class="card-header">
                        <div class="d-flex justify-content-between align-items-center">
                            <div>
                                <p class="page-title">Mes informations</p>
                            </div>
                        </div>
                    </div>
                    <div class="card-body">
                        <div class="zone-table">
                            <div class="d-flex align-items-center admin border-bottom pb-3">
                                <div class="logo-admin">
                                    <h3 class="admin-first-c">A</h3>
                                </div>
                                <div>
                                    <p class="admin-name">Amar DIALLO</p>
                                    <p class="welcom">Administrateur</p>
                                </div>
                            </div>
                            <!-- Email  -->
                            <div class="d-flex  align-items-center border-bottom py-3">
                                <div style="width: 40%;">
                                    <p class="admin-name text-start">Email</p>
                                </div>
                                <div style="width: 60%;">
                                    <p class="admin-name text-start">amardiallo94@gmail.com</p>
                                </div>
                            </div>
                            <!-- Téléphone  -->
                            <div class="d-flex  align-items-center border-bottom py-3">
                                <div style="width: 40%;">
                                    <p class="admin-name text-start">Téléphone</p>
                                </div>
                                <div style="width: 60%;">
                                    <p class="admin-name text-start">623 41 91 47</p>
                                </div>
                            </div>
                            <!-- Date  -->
                            <div class="d-flex  align-items-center  py-3">
                                <div style="width: 40%;">
                                    <p class="admin-name text-start">Date d'ajout</p>
                                </div>
                                <div style="width: 60%;">
                                    <p class="admin-name text-start">12 mars 2024</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- FORMULAIRE  -->
            <div class="col-md-6 col-lg-6">
                <div class="card card-page">
                    <div class="card-header">
                        <div class="d-flex justify-content-between align-items-center">
                            <div>
                                <p class="page-title">Changer le mot de passe</p>
                            </div>
                        </div>
                    </div>
                    <div class="card-body">
                        <div class="zone-table">
                            <form>
                                <div class="row">
                                    <div class="col-md-12 col-lg-12 mb-3">
                                        <label for="actuel-password" class="form-label">Mot de passe actuel</label>
                                        <input type="password" class="form-control" placeholder="Mot de passe actuel"
                                            id="actuel-password" aria-describedby="actuel-password">
                                    </div>

                                    <div class="col-md-12 col-lg-12 mb-3">
                                        <label for="new-password" class="form-label">Nouveau mot de passe</label>
                                        <input type="password" class="form-control" placeholder="Nouveau mot de passe"
                                            id="new-password" aria-describedby="new-password">
                                    </div>

                                    <div class="col-md-12 col-lg-12 mb-3">
                                        <label for="confirm-password" class="form-label">Confirmation de mot de
                                            passe</label>
                                        <input type="password" class="form-control"
                                            placeholder="Confirmation de mot de passe" id="confirm-password"
                                            aria-describedby="confirm-password">
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
        </div>
    </div>
</template>
<script setup>

</script>
<style scoped>
.zone-table {
    padding: 0 10px;
}
.logo-admin {
    background-color: #E1E1E1 !important;
}
.admin-first-c {
    color: #004F71
}
.border-bottom {
    margin-bottom: 1px solid #E1E1E1;
}
.width-bottom {
    height: 410px;
}
</style>