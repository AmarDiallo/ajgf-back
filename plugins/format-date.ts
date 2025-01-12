export default defineNuxtPlugin(async () => {
    return {
        provide: {
            formatDate: (date: Date) => {
                return new Intl.DateTimeFormat('fr-FR', { dateStyle: 'long' }).format(new Date(date));
            },
        },
    };
});