<template>
    <div>
        <AppHeader />

        <main class="main mx-auto">
            <div class="d-flex">
                <div class="side-menu">
                    <div class="d-flex align-items-center admin">
                        <div class="logo-admin">
                            <h3 class="admin-first-c">A</h3>
                        </div>
                        <div>
                            <p class="welcom">Bonjour</p>
                            <p class="admin-name">Amar DIALLO</p>
                        </div>
                    </div>

                    <ul class="list-group">
                        <li class="menu-liste">
                            <NuxtLink to="/" class="list-group-item">
                                <IconsTrello class="me-1" style="margin-bottom: 5px;" />
                                Tableau de board
                            </NuxtLink>
                        </li>
                        <li class="menu-liste">
                            <NuxtLink to="/" class="list-group-item">
                                <UserCheck class="me-1" style="margin-bottom: 5px;" />
                                Administrateurs
                            </NuxtLink>
                        </li>
                        <li class="menu-liste">
                            <NuxtLink to="/" class="list-group-item">
                                <IconsUsers class="me-1" style="margin-bottom: 5px;" />
                                Candidats
                            </NuxtLink>
                        </li>
                        <li class="menu-liste">
                            <a href="" class="list-group-item">
                                <IconsHome class="me-1" style="margin-bottom: 5px;" />
                                Entreprises
                            </a>
                        </li>
                        <li class="menu-liste">
                            <NuxtLink to="/" class="list-group-item">
                                <IconsBriefcase class="me-1" style="margin-bottom: 5px;" />
                                Offres d'emplois
                            </NuxtLink>
                        </li>
                        <li class="menu-liste">
                            <NuxtLink to="/" class="list-group-item">
                                <IconsList class="me-1" style="margin-bottom: 5px;" />
                                Candidatures
                            </NuxtLink>
                        </li>
                        <li class="menu-liste">
                            <NuxtLink to="/" class="list-group-item">
                                <IconsFile class="me-1" style="margin-bottom: 5px;" />
                                Articles
                            </NuxtLink>
                        </li>
                        <li class="menu-liste">
                            <NuxtLink to="/" class="list-group-item">
                                <IconsImage class="me-1" style="margin-bottom: 5px;" />
                                Publicités
                            </NuxtLink>
                        </li>
                        <li class="menu-liste">
                            <a class="list-group-item">
                                <IconsSetting class="me-1" style="margin-bottom: 5px;" />
                                Paramètres
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="content">
                    <slot />
                </div>
            </div>
        </main>
    </div>
</template>
<script setup>
import UserCheck from '~/components/Icons/UserCheck.vue';


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
}
.admin {
    padding: 16px;
    gap: 16px;
    border-bottom: 1px solid #E5EDEF;
}
.logo-admin {
    width: 48px;
    height: 48px;
    background-color: #004F71 !important;
    border-radius: 8px;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px
}
.admin-first-c {
    color: #FFFFFF;
    font-size: 36px;
    font-weight: 700;
}
.welcom {
    font-size: 13px;
    color: #686868;
    font-weight: 400;
    line-height: 17.7px;
}
.admin-name {
    color: #686868;
    font-size: 16px;
    font-weight: 700;
    line-height: 21.79px;
}
.dashboard {
    padding: 16px;
    border-bottom: 1px solid #E5EDEF;
}
.list-group-item {
    padding: 16px;
    border: none;
    border-bottom: 1px solid #E5EDEF;
}
</style>