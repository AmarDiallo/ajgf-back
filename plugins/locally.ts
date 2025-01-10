export default defineNuxtPlugin(() => {
    return {
        provide: {
            locally: {
                getItem(item: any) {
                    if (process.client) {
                        return localStorage.getItem(item)
                    } else {
                        return undefined
                    }
                },

                getObjectItem(item: any) {
                    if (process.client) {
                        return JSON.parse(localStorage.getItem(item) as string)
                    }
                },

                setItem(item: string, value: any) {
                    if (process.client) {
                        return localStorage.setItem(item, value)
                    }
                },

                setObjectItem(item: string, value: any) {
                    if (process.client) {
                        return localStorage.setItem(item, JSON.stringify(value))
                    }
                },



                removeItem(item: string) {
                    if (process.client) {
                        return localStorage.removeItem(item)
                    }
                }
            }
        }
    }
})