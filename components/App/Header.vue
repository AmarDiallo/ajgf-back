<template>
    <div>
        <header class="header-area">
            <div class="header-middle d-none d-lg-block">
                <div class="mx-auto">
                    <div class="content mx-auto">
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="logo logo-width-1">
                                <a href="/" class="mt-2">
                                    <img src="/imgs/logo.png" alt="logo" class="resize-logo"></a>
                            </div>

                            <div class="header-action-right">
                                <div class="header-action-2">
                                    <div class="header-action-icon-2">
                                        <button class="btn btn-header" @click="openProfil()">
                                            <IconsUser class="mb-1" />
                                        </button>
                                    </div>
                                    <div class="header-action-icon-2">
                                        <button class="btn btn-header">
                                            <IconsLogout class="mb-1" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    </div>
</template>
<script setup>
const router = useRouter();

const openProfil = () => {
    router.push('/profil');
}
</script>

<style scoped>
.logo.logo-width-1 a img {
    width: 83.33px;
    min-width: 83.33px;
    height: 60px;
    max-height: 60px;
}

.content {
    padding: 0 16px;
    max-width: 1440px;
}
.header-middle {
    border-bottom: 1px solid #E5EDEF;
    background-color: #fff !important;
}

.resize-logo {
    width: 83.33px;
    height: 50px;
}

.router-link-active {
    color: #D71F27;
    font-size: 18px;
    line-height: 24.51px;
}
.btn-header {
    border: 1px solid #B5B5B5;
    padding: 8px 12px;
    border-radius: 8px;
    background-color: #004F71 !important;
}
</style>