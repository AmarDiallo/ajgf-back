<template>
    <div>
        <AppHeader />

        <main class="main mx-auto">
            <div class="d-flex">
                <div class="side-menu">
                    <AppMenu />
                </div>
                <div class="content">
                    <slot />
                </div>
            </div>
        </main>
    </div>
</template>
<script setup>

</script>
<style scoped>
.main {
    max-width: 1440px;
}

.side-menu {
    width: 20%;
    border-right: 1px solid #E5EDEF;
    height: calc(100vh - 60px);
}

.content {
    width: 80%;
    padding: 24px;
    background-color: #F4F7FB !important;
}
</style>