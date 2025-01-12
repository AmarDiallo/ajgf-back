import UniversalCookie from 'universal-cookie';

export default defineNuxtPlugin(() => {
    const cookies = new UniversalCookie();

    return {
        provide: {
            cookies,
        },
    };
})