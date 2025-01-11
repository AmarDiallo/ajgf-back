<template>
    <div class="">
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
            <li class="menu-liste border-bottom py-3">
                <NuxtLink to="/" class="list-group-item">
                    <IconsTrello class="me-1" style="margin-bottom: 5px;" />
                    Tableau de board
                </NuxtLink>
            </li>
            <li class="menu-liste border-bottom my-1">
                <NuxtLink to="/admin" class="list-group-item">
                    <UCheck class="me-1" style="margin-bottom: 5px;" />
                    Administrateurs
                </NuxtLink>
            </li>
            <li class="menu-liste">
                <NuxtLink to="/candidat" class="list-group-item">
                    <IconsUsers class="me-1" style="margin-bottom: 5px;" />
                    Candidats
                </NuxtLink>
            </li>
            <li class="menu-liste border-bottom">
                <NuxtLink to="/entreprise" class="list-group-item">
                    <IconsHome class="me-1" style="margin-bottom: 5px;" />
                    Entreprises
                </NuxtLink>
            </li>
            <li class="menu-liste">
                <NuxtLink to="/offres" class="list-group-item">
                    <IconsBriefcase class="me-1" style="margin-bottom: 5px;" />
                    Offres d'emplois
                </NuxtLink>
            </li>
            <li class="menu-liste">
                <NuxtLink to="/candidature" class="list-group-item">
                    <IconsList class="me-1" style="margin-bottom: 5px;" />
                    Candidatures
                </NuxtLink>
            </li>
            <li class="menu-liste border-bottom">
                <NuxtLink to="/article" class="list-group-item">
                    <IconsFile class="me-1" style="margin-bottom: 5px;" />
                    Articles
                </NuxtLink>
            </li>
            <li class="menu-liste">
                <NuxtLink to="/publicite" class="list-group-item">
                    <IconsImage class="me-1" style="margin-bottom: 5px;" />
                    Publicités
                </NuxtLink>
            </li>
            <li class="menu-liste">
                <NuxtLink to="/parametre" class="list-group-item">
                    <IconsSetting class="me-1" style="margin-bottom: 5px;" />
                    Paramètres
                </NuxtLink>
            </li>
        </ul>
    </div>
</template>
<script setup>
import UCheck from '../Icons/UCheck.vue';


</script>
<style scoped>
.icon {
    width: 24px;
    height: 24px;
    color: #000000;
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

.menu-liste {
    padding: 5px 16px 5px 0;
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

.list-group-item {
    padding: 8px 16px;
    border: none;
    /* border-bottom: 1px solid #E5EDEF; */
    color: #252525;
    font-size: 16px;
    font-weight: 700;
    line-height: 21.79px;
    margin-left: 6px;
}

.router-link-active {
    background-color: #004F71 !important;
    border-radius: 8px;
    color: #FFFFFF;
    font-size: 16px;
    font-weight: 700;
    line-height: 21.79px;
    padding: 8px 16px;
}

.border-bottom {
    border-bottom: 1px solid #E5EDEF;
}
</style>