import CryptoJS from "crypto-js";

export default defineNuxtPlugin(async () => {
    return {
        provide: {
            crypto: (token: any) => {
                if(typeof token !== 'string') {
                    const secretKey = useRuntimeConfig().public.vueAppSecretKey;
                    return CryptoJS.AES.encrypt(token, secretKey).toString();
                }
                if (typeof token === 'object') {
                    const secretKey = useRuntimeConfig().public.vueAppSecretKey;
                    return CryptoJS.AES.encrypt(JSON.stringify(token), secretKey).toString();
                }
            }
        }
    }
})