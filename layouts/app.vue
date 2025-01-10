<template>
    <div>
        <main class="main mx-auto">
            <slot />
        </main>
    </div>
</template>
<script setup>

</script>
<style scoped>
.main {
    max-width: 1440px;
    background-color: #F4F7FB !important;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>