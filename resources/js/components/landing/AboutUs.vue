<template>
    <div class="border-top-color py-2 d-flex align-items-center" style="background-image:url(/images/sliderheader/slider1.jpg); background-repeat: no-repeat;  background-size:cover; width:100%; min-height:550px;">
        <div class="container">
            <div class="row">
                <div class="col-12 col-md-8 col-lg-6 offset-md-4 offset-lg-6">
                    <div class="wrapper bg-dark-translucent rounded m-0">
                        <div class="text-white p-5">
                            <h2 class="text-uppercase font-weight-bold font-size-3 pb-3">
                                Sobre Nosotros 
                            </h2>
                            <p class="text-left text-white">
                                Dando apoyo desde los años 1600
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'AboutUs'
    }
</script>
<style scoped>
    .wrapper {
        min-height: 445px;
        margin-top: 50px;
    }

    .wrapper h2 {
        font-size: 1.4rem;
    }

    .rounded {
        border-radius: 0.75rem !important;
    }
    .border-top-color{
        border-top: 10px solid #1e4266;
    }

    @media (min-width: 768px) {
        .wrapper {
            min-height: 465px;
            margin-top: 24px;
        }

        .wrapper h2 {
            font-size: 30px;
        }

        .font-size-3 {
            font-size: 2.3rem;
        }
    }

    .bg-dark-translucent {
        /* Navegadores que no soportan colores semitransparentes */
        background: rgb(0, 0, 0) transparent;
        /* Color semi-transparente */
        background: rgba(0, 0, 0, 0.8);
        /* Versiones antiguas de Internet Explorer */
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=#99000000, endColorstr=#99000000);
        /* Internet Explorer 8 o superior */
        -ms-filter: "progid:DXImageTransform.Microsoft.gradient(startColorstr=#99000000, endColorstr=#99000000)";
    }
</style>
