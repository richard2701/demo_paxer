<template>
    <div id="container-nav" class="fixed-top w-100" >
        <!-- info header -->
        <InfoNavbar class="d-none d-lg-block" v-if="sticky" />

            <!-- menu navbar -->
            <div id="navbar" :class="[sticky ? '' : 'bg-secondary', fondoNav ? 'bg-secondary' : '' ]">
                <nav class="navbar navbar-expand-lg p-0" :class="sticky ? 'navbar-dark' : 'navbar-dark'">
                    <div class="container">
                        <button class="navbar-toggler ml-2 mr-2" type="button" data-toggle="collapse" data-target="#menuCollapse" aria-controls="menuCollapse" aria-expanded="false" aria-label="Toggle navigation">
                            <i class="fas fa-bars"></i>
                        </button>

                        <a class="navbar-brand mx-auto mx-md-0" href="/">
                            <img src="/images/logos/logo2.png" alt="logo" class="logo" />
                        </a>

                        <div class="collapse navbar-collapse text-uppercase" id="menuCollapse">
                            <ul class="navbar-nav mx-auto mt-2 mt-lg-0 text-white">

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

                            </ul>
                            
                            <a href="" target="_blank" class="btn btn-outline-primary ml-lg-3 d-none d-xl-block text-uppercase">
                                boton
                            </a>
                        </div>

                    </div>
                </nav>
            </div>
    </div>
</template>

<script>
    import InfoNavbar from '../landing/InfoNavbar'

    export default {
        name: 'NavBar',
        components: { InfoNavbar },
        data() {
            return {
                sticky: true,
                fondoNav: false
            }
        },
        mounted() {
            //detectamos el evento scroll
            var that = this
            window.onscroll = function () {
                that.sticky = !(document.body.scrollTop > 10 || document.documentElement.scrollTop > 10)
            }

            $('#menuCollapse').on('show.bs.collapse', function () {
                that.fondoNav = true
            })
            $('#menuCollapse').on('hide.bs.collapse', function () {
                that.fondoNav = false
            })
        },
        methods: {
            cambiarFondoNav() {
                if ($this.fondoNav === true) {
                    $this.fondoNav = false
                } else {
                    $this.fondoNav = true
                }
            },
            cerrarCollapse() {
                $('#menuCollapse').collapse({
                    toggle: false
                })
            }
        }
    }
</script>
<style lang="sass" scoped>
    .border-left
        padding-left: 0.5rem
        border-left: 1px solid #897756 !important

    .number
        color: white
    .bg-secondary 
        background-color: #071c2f !important

    .top-info
        font-family: 'Raleway', sans-serif
        color: white

    .bg-black
        background-color: #000

    .content-nav
        top: 0
        left: 0
        z-index: 1030
        width: 100%

    .top-info a
        color: #fff
        text-decoration: none
        &:hover
            color: #fff
            text-decoration: none

    @media (max-width: 991.98px)
        .container
            max-width: 100%
            padding-right: 0
            padding-left: 0

    @media (min-width: 992px)
        .navbar-expand-lg .navbar-nav .nav-link
            padding-right: 1rem
            padding-left: 1rem

    .navbar
        justify-content: flex-start

    .navbar-toggler
        font-size: 1.6rem

    .navbar-brand img
        width: 70px
        height: auto
        @media (max-width: 340px)
            width: 152px

    .navbar-brand h1
        font-size: 1.25rem
        margin: 0
        vertical-align: sub
        vertical-align: -webkit-baseline-middle

    .navbar-dark
        .navbar-toggler
            color: #fff
        .navbar-nav .nav-link
            color: #fff
            font-weight: bold
            &:hover
                color: #fff

    a:hover
        text-decoration: none
    
    .navbar-dark .navbar-nav .nav-link:hover
        color: #dfba69

    .navbar-toggler:focus
        outline: none

    .navbar-dark .navbar-nav a:hover
        color: #dfba69

    .navbar-nav a
        &:link, &:active, &:focus
            color: #dfba69

    .navbar-dark .navbar-nav .router-link-exact-active.router-link-active
        color: #dfba69
</style>
