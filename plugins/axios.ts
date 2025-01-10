import axios from 'axios';
import CryptoJS from "crypto-js";

export default defineNuxtPlugin(async () => {
    const api = axios.create({
        baseURL: useRuntimeConfig().public.vueAppDevUrl,
        withCredentials: true,
        withXSRFToken: true,
        headers: {
            'Content-Type': 'application/json',
        }
    });

    const decrypto = (encryptedToken: string) => {
        const secretKey = useRuntimeConfig().public.vueAppSecretKey;
        const bytes = CryptoJS.AES.decrypt(encryptedToken, secretKey);
        return bytes.toString(CryptoJS.enc.Utf8);
    }

    api.interceptors.request.use(async (config) => {
        const token = useCookie('auth_token').value;
        if (token) {
            const accessToken = decrypto(token)
            config.headers.Authorization = `Bearer ${accessToken}`;
        }

        return config;
    })

    return {
        provide: {
            api,
        }
    };
})