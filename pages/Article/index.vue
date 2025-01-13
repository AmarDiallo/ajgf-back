<template>
    <div>
        <h5 class="page-title mb-3">Articles</h5>

        <div class="card card-page">
            <div class="card-header">
                <div class="d-flex justify-content-between align-items-center">
                    <div>
                        <p class="page-title">Liste des articles</p>
                    </div>
                </div>
            </div>
            <div class="card-body">
                <div class="zone-search">
                    <input type="text" class="form-control" placeholder="Recherche" />
                </div>

                <div class="zone-table" v-if="articles.count > 0 && !loading">
                    <!-- Table header  -->
                    <div class="d-flex justify-content-between align-items-center my-2 border-bottom">
                        <div class="flex-title">
                            <p class="table-title text-start">Article</p>
                        </div>
                        <div class="flex-autor">
                            <p class="table-title">Auteur</p>
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
                        v-for="article in articles.results" :key="article.slug">
                        <div class="flex-title">
                            <div class="d-flex align-items-center justify-content-start">
                                <div>
                                    <img src="/imgs/article.jpeg" alt="" class="img-article">
                                </div>
                                <div class="mx-3">
                                    <p class="body-title">{{ article.title }}</p>
                                </div>
                            </div>
                        </div>
                        <div class="flex-autor">
                            <p class="body-title text-center">{{ article.recruiter }}</p>
                        </div>
                        <div class="flex-status text-center">
                            <p class="body-title text-pending" v-if="article.status === 'NEW'">Nouveau</p>
                            <!-- <p class="body-title text-success" v-if="article.status === 'NEW'">En ligne</p>
                            <p class="body-title text-primary" v-if="article.status === 'NEW'">Refusé</p> -->
                        </div>
                        <div class="flex-date text-center">
                            <p class="body-title text-center">{{ $formatDate(article.created_at)}}</p>
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

                <div v-if="articles.count === 0 && !loading" class="text-center my-4">
                    <p>Il n'y a pas d'articles enregistrés</p>

                </div>
                <div v-if="loading" class="text-center loading-recruiter">
                    <div class="spinner-border spinner-border-recruiter" role="status">
                        <span class="visually-hidden">Chargement des articles...</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
definePageMeta({
    layout: 'default',
});

const articleStore = useArticleStore();
const loading = computed(() => articleStore.loading);
const articles = computed(() => articleStore.getArticles);

const { $formatDate } = useNuxtApp();

onMounted(() => {
    articleStore.onFetchArticles();
});

</script>
<style scoped>
.zone-search {
    padding: 10px 20px 16px 20px;
    border-bottom: 1px solid #E5EDEF;
}

.zone-table {
    padding: 0 20px;
}

.flex-title {
    width: 40%;
}

.flex-autor {
    width: 20%;
}

.flex-phone {
    width: 20%;
}

.flex-status, .flex-date {
    width: 15%;
}
.flex-action {
    width: 10%;
}
.img-article {
    width: 125px;
    height: 80px;
    border-radius: 8px;
}
</style>