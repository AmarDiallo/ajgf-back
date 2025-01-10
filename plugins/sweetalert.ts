import Swal from 'sweetalert2';

export default defineNuxtPlugin(async () => {
    return {
        provide: {
            swal: Swal
        }
    }
})