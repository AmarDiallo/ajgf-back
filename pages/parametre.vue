<template>
    <div>
        <h5 class="page-title mb-3">Paramètres</h5>

        <div class="card card-page">
            <div class="card-header">
                <div class="d-flex justify-content-between align-items-center">
                    <div>
                        <p class="page-title">Paramètres du site</p>
                    </div>
                </div>
            </div>
            <div class="card-body">
                <div class="zone-table">
                    <form>
                        <div class="row">
                            <div class="col-md-6 col-lg-6 mb-3">
                                <label for="email" class="form-label">Email de contact</label>
                                <input type="email" class="form-control" placeholder="Email footer" id="email"
                                    aria-describedby="email">
                            </div>

                            <div class="col-md-6 col-lg-6 mb-3">
                                <label for="phone" class="form-label">Numéro de téléphone</label>
                                <input type="tel" class="form-control" placeholder="Téléphone" id="phone"
                                    aria-describedby="phone">
                            </div>

                            <div class="col-md-12 col-lg-12 mb-3">
                                <label for="address" class="form-label">Adresse</label>
                                <input type="text" class="form-control" placeholder="Adresse postale" id="address"
                                    aria-describedby="address">
                            </div>

                            <div class="col-md-6 col-lg-6 mb-3">
                                <label for="facebook" class="form-label">Lien facebook</label>
                                <input type="text" class="form-control" placeholder="Lien de la page facebook"
                                    id="facebook" aria-describedby="facebook">
                            </div>

                            <div class="col-md-6 col-lg-6 mb-3">
                                <label for="linkedin" class="form-label">Lien Linkedin</label>
                                <input type="text" class="form-control" placeholder="Linkedin du profil Linkedin"
                                    id="linkedin" aria-describedby="linkedin">
                            </div>

                            <div class="col-md-6 col-lg-6 mb-3">
                                <label for="Instagram" class="form-label">Lien Instagram</label>
                                <input type="text" class="form-control" placeholder="Instagram du profil Instagram"
                                    id="Instagram" aria-describedby="Instagram">
                            </div>

                            <div class="col-md-6 col-lg-6 mb-3">
                                <label for="x" class="form-label">Lien X</label>
                                <input type="text" class="form-control" placeholder="x du profil x" id="x"
                                    aria-describedby="x">
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