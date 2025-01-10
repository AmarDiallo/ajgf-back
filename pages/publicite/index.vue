<template>
    <div>
        <h5 class="page-title mb-3">Bannière pub et vidéo</h5>

        <div class="card card-page">
            <div class="card-header">
                <div class="d-flex justify-content-between align-items-center">
                    <div>
                        <p class="page-title">Emplacement 1</p>
                    </div>
                </div>
            </div>
            <div class="card-body">
                <div class="zone-table">
                    <p class="date-1">Ajouté le 10/02/2024 par Amar DIALLO</p>

                    <div>
                        <img src="/imgs/pub/pub1.png" alt="" class="pub-img">
                    </div>
                </div>
            </div>
            <div class="card-footer">
                <button class="btn btn-secondary">Changer l'image</button>
                <button class="btn btn-primary mx-3">Supprimer l'image</button>
            </div>
        </div>

        <div class="card card-page mt-4">
            <div class="card-header">
                <div class="d-flex justify-content-between align-items-center">
                    <div>
                        <p class="page-title">Emplacement 2</p>
                    </div>
                </div>
            </div>
            <div class="card-body">
                <div class="zone-table">
                    <p class="date-1">Ajouté le 10/02/2024 par Amar DIALLO</p>

                    <div>
                        <img src="/imgs/pub/pub1.png" alt="" class="pub-img">
                    </div>
                </div>
            </div>
            <div class="card-footer">
                <button class="btn btn-secondary">Changer l'image</button>
                <button class="btn btn-primary mx-3">Supprimer l'image</button>
            </div>
        </div>

        <div class="card card-page mt-4">
            <div class="card-header">
                <div class="d-flex justify-content-between align-items-center">
                    <div>
                        <p class="page-title">Vidéo</p>
                    </div>
                </div>
            </div>
            <div class="card-body">
                <div class="zone-table">
                    <p class="date-1">Ajouté le 10/02/2024 par Amar DIALLO</p>

                    <div class="row align-items-center mt-4">
                        <div class="col-md-6 col-lg-6">
                            <img src="/imgs/pub/pub1.png" alt="" class="pub-video">
                        </div>
                        <div class="col-md-6 col-lg-6">
                            <button class="btn btn-secondary">Changer la vidéo</button>
                            <button class="btn btn-primary mx-3">Supprimer la vidéo</button>
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
    padding: 0 10px;
}
.card-footer {
    padding: 16px 20px;
    border-radius: 0 0 16px 16px;
}
.date-1 {
    color: #000000;
    font-size: 13px;
    font-weight: 400;
    line-height: 17.7px;
}
.pub-img {
    height: 157px;
    margin: 10px 0;
}
.pub-video {
    height: 251px;
    border-radius: 24px;
}
</style>