import Swal from 'sweetalert2';

export default defineNuxtPlugin(async () => {
    return {
        provide: {
            error: (error: any) => {
                if (error.response.status === 401 || error.response.status === 403) {
                    return Swal.fire({
                        title: "Erreur !",
                        text: error.response.data.detail,
                        icon: "error",
                    });
                }
                if (error.response.status === 500) {
                    return Swal.fire({
                        title: "Erreur !",
                        text: "Erreur de traitement, veuillez réessayer plus tard.",
                        icon: "error",
                    });
                }
                if (error.response.status === 400) {
                    let customError = "";
                    console.log(error.response);
                    for (let key in error.response.data) {
                        customError = error.response.data[key][0];
                    }
                    return Swal.fire({
                        title: "Erreur !",
                        text: customError,
                        icon: "error",
                    });
                }
            }
        }
    }
});