<template>
    <div class="">
        <nav>
            <ul class="pagination justify-content-center">
                <li class="page-item mx-1" aria-current="page" v-for="page in pages" :key="page"
                    :class="{ active: page === currentPage }">
                    <a @click="goToPage(page)" class="page-link">{{ page }}</a>
                </li>
            </ul>
        </nav>
    </div>
</template>
<script setup>
import { computed, defineProps, defineEmits } from 'vue';

const props = defineProps({
    totalPages: Number, // Nombre total de pages
    currentPage: Number, // Page actuelle
    maxVisibleButtons: {
        type: Number,
        default: 7, // Nombre maximum de boutons visibles
    },
});

const emit = defineEmits(['pageChange']);

// Calculer les pages visibles autour de la page actuelle
// const startPage = computed(() => {
//     const half = Math.floor(props.maxVisibleButtons / 2);
//     if (props.currentPage <= half) return 1;
//     if (props.currentPage + half >= props.totalPages) return props.totalPages - props.maxVisibleButtons + 1;
//     return props.currentPage - half;
// });

const startPage = computed(() => {
    const half = Math.floor(props.maxVisibleButtons / 2);
    const totalPages = props.totalPages;
    const maxVisibleButtons = props.maxVisibleButtons;

    if (props.currentPage <= half) {
        return 1;
    }

    if (props.currentPage + half >= totalPages) {
        return Math.max(1, totalPages - maxVisibleButtons + 1); // Empêche un résultat négatif
    }

    return Math.max(1, props.currentPage - half); // S'assure que la valeur est au moins 1
});

const endPage = computed(() => {
    return Math.min(startPage.value + props.maxVisibleButtons - 1, props.totalPages);
});

const pages = computed(() => {
    console.log((endPage.value - startPage.value) + 1)
    console.log(Array.from({ length: endPage.value - startPage.value + 1 }, (_, i) => startPage.value + i))
    return Array.from({ length: endPage.value - startPage.value + 1 }, (_, i) => startPage.value + i);
});

// Fonction pour changer de page
function goToPage(page) {
    emit('pageChange', page);
}
</script>

<style scoped>
.page-item:first-child .page-link {
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
}
.page-item:last-child .page-link {
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
}
.page-link {
    color: #004F71;
    border: 1px solid #004F71;
    border-radius: 8px;
    font-size: 18px;
    font-weight: 700;
}

.page-item.active .page-link {
    background-color: #004F71;
    border: 1px solid #004F71;
}

.page-item.active .page-link {
    background-color: #004F71;
    border: 1px solid #004F71;
    color: #fff;
}
</style>