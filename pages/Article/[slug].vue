<template>
    <div v-if="loading" class="text-center loading-recruiter">
        <div class="spinner-border spinner-border-recruiter" role="status">
            <span class="visually-hidden">Chargement des candidatures en cours...</span>
        </div>
    </div>
    <div v-if="article && !loading">
        <h5 class="page-title mb-3">Détail d'un article</h5>
        <div class="row">
            <div class="col-md-8 col-lg-8">
                <div class="card card-page p-2">
                    <div class="card-body">
                        <h5 class="article-title">{{ article.title }}</h5>
                        <div class="mt-4">
                            <img :src="article.cover" :alt="article.title" class="img-article">
                        </div>
                        <div class="pt-4">
                            <div class="d-flex justify-content-start align-items_center">
                                <!-- <span class="badge bg-secondary">Écris le {{ $formatDate(article.created_at) }}</span> -->
                                <span class="badge bg-secondary">Par {{ article.recruiter }}</span>
                            </div>
                        </div>
                        <div class="pt-4" v-html="article.content"></div>
                    </div>
                </div>
            </div>
            <div class="col-md-4 col-lg-4">
                <div class="card card-page">
                    <div class="card-header">
                        <div class="d-flex justify-content-between align-items-center">
                            <div>
                                <p class="page-title">Actions</p>
                            </div>
                        </div>
                    </div>
                    <div class="card-body my-2">
                        <div class="d-grid gap-2">
                            <button class="btn btn-secondary" @click="acceptArticle()"
                                :disabled="article.status === 'VALIDATED' || article.status === 'NEW'">Accepter l'article</button>
                            <button class="btn btn-primary outlined" @click="rejectArticle()"
                                :disabled="article.status === 'REJECTED' || article.status === 'NEW'">Refuser l'article</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
const route = useRoute();
const articleStore = useArticleStore();

const loading = computed(() => articleStore.getLoading);
const article = computed(() => articleStore.getArticleDetail);

const { $formatDate } = useNuxtApp();

onMounted(async () => {
    await articleStore.onFetchArticleDetail(route.params.slug);
});

const acceptArticle = async () => {
    await articleStore.onAcceptArticle(route.params.slug);
};

const rejectArticle = async () => {
    await articleStore.onRejectArticle(route.params.slug);
};
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
.outlined {
    border: 1px solid #D71F27;
    color: #D71F27;
    background-color: transparent;
    transition: all 0.3s;
}
.article-title {
    font-size: 24px;
    color: #004F71;
    line-height: 32.68px;
    font-weight: 700;
}
.img-article {
    width: 100%;
    height: 398px;
    border-radius: 16px;
    object-fit: cover;
}
.bg-secondary {
    border: 1px solid #8CE0F3;
    background-color: #8CE0F3 !important;
    color: #24262B;
    font-size: 12px;
    line-height: 19.11px;
    font-weight: 400;
    padding: 9px 16px;
    border-radius: 200px;
    margin-right: 10px;
}
</style>