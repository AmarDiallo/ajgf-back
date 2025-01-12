<template>
    <div class="modal-dialog modal-dialog-centered" v-if="modalObject">
        <div class="modal-content">
            <div class="modal-header">
                <div>
                    <p class="modal-user-title">{{ modalObject.title }}</p>
                </div>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <p class="modal-user-body">Vouloez vous retirer<span class="fw-700">test</span> ?
                </p>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary" @click="emit('deleteObject')">Retirer</button>
            </div>
        </div>
    </div>
</template>
<script setup>
const props = defineProps(['modalObject']);
const emit = defineEmits(['closeModal']);

console.log(props.modalObject);
</script>
<style scoped>
.modal-content {
    border-radius: 16px;
}

.modal-user-title {
    font-size: 18px;
    font-weight: 700;
    line-height: 24.51px;
    color: #252525;
}

.modal-user-body {
    color: #000000;
    font-size: 18px;
    font-weight: 400;
    line-height: 24.51px;
}

.btn-cancel {
    background-color: #FFF;
    border: 0;
    color: #252525;
    font-size: 18px;
    line-height: 24.51px;
}

.btn-secondary {
    padding: 8px 12px;
}
</style>