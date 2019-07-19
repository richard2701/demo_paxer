<template>
    <div>
        <div class="py-4 bg-secondary">
                <div class="container">
                    <div class="row">
                        <div class="col-12 col-md-6 text-center text-md-left mb-3">
                            <img class="img-fluid logo-footer " src="/images/logos/logo2.png" alt="logo">
                        </div>
                        <div class="col-12 col-md-6 d-flex align-items-center justify-content-center justify-content-md-end">
                            <div class="text-center">
                                <a  href="social.link" target="_blank" class="px-2">
                                    <img class="img-fluid" width="35" src="/images/logos/facebook.svg" alt="social.name">
                                </a>
                                <a  href="social.link" target="_blank" class="px-2">
                                    <img class="img-fluid" width="35" src="/images/logos/instagram.svg" alt="social.name">
                                </a>
                                <a  href="social.link" target="_blank" class="px-2">
                                    <img class="img-fluid" width="35" src="/images/logos/tripadvisor.svg" alt="social.name">
                                </a>
                            </div>
                        </div>
                    </div>

                    <div class="row mt-2">
                        <div class="col-12 text-center text-md-left">
                            <div class="text-white mb-3 icons-contact">
                                <i class="material-icons px-2 text-primary">phone_in_talk</i>
                                +56000000
                            </div>

                            <div class="text-white icons-contact">
                                <i class="material-icons px-2 text-primary">mail</i>
                                emailprueba@prueba.com
                            </div>
                        </div>
                    </div>

                    <!-- menu footer -->
                    <div class="row border-bottom mt-3">
                        <div class="col-12 mx-auto">
                            <nav class="nav nav flex-column flex-md-row justify-content-md-center text-center">
                                <div >
                                    <!-- movil -->
                                    <li  class="nav-item d-lg-none px-3">
                                        <a href="" class="nav-link text-uppercase">Home</a>
                                    </li>
                                    <!-- DESKTOP -->
                                    <li class="nav-item d-none d-lg-flex">
                                        <a href="" class="nav-link text-uppercase">Home</a>
                                    </li>
                                </div>
                                <div >
                                    <!-- movil -->
                                    <li  class="nav-item d-lg-none px-3">
                                        <a href="" class="nav-link text-uppercase">AboutUs</a>
                                    </li>
                                    <!-- DESKTOP -->
                                    <li class="nav-item d-none d-lg-flex">
                                        <a href="" class="nav-link text-uppercase">AboutUs</a>
                                    </li>
                                </div>
                                <div >
                                    <!-- movil -->
                                    <li  class="nav-item d-lg-none px-3">
                                        <a href="" class="nav-link text-uppercase">ContactUs</a>
                                    </li>
                                    <!-- DESKTOP -->
                                    <li class="nav-item d-none d-lg-flex">
                                        <a href="" class="nav-link text-uppercase">ContactUs</a>
                                    </li>
                                </div>
                                <div >
                                    <!-- movil -->
                                    <li  class="nav-item d-lg-none px-3">
                                        <a href="" class="nav-link text-uppercase">Maps</a>
                                    </li>
                                    <!-- DESKTOP -->
                                    <li class="nav-item d-none d-lg-flex">
                                        <a href="" class="nav-link text-uppercase">Maps</a>
                                    </li>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>

        <Legal />
    </div>
</template>
<script>
    import Legal from './Legal'

    export default {
        name: 'Footer',
        components: { Legal }
    }
</script>
<style lang="sass" scoped>
    .bg-black 
        background-color: #000

    .logo-footer 
        width: 80px
    .text-primary
        color: #dfba69 !important
    .text-gray-footer 
        color: #9f9d99

    .icons-contact i.material-icons
        vertical-align: middle !important
    .bg-secondary 
        background-color: #071c2f !important

</style>
