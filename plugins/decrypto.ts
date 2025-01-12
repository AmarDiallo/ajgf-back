import CryptoJS from "crypto-js";

export default defineNuxtPlugin(async () => {
    return {
        provide: {
            decrypto: (encryptedToken: any) => {
                if (typeof encryptedToken === 'string') {
                    const secretKey = useRuntimeConfig().public.vueAppSecretKey;
                    const bytes = CryptoJS.AES.decrypt(encryptedToken, secretKey);
                    return bytes.toString(CryptoJS.enc.Utf8);
                }
                if (typeof encryptedToken === 'object') {
                    const secretKey = useRuntimeConfig().public.vueAppSecretKey;
                    const bytes = CryptoJS.AES.decrypt(encryptedToken, secretKey);
                    return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
                }
            }
        }
    }
})