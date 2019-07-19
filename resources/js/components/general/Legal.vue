<template>
    <div>
        <aside class="bg-secondary">
            <div class="container pb-0">
                <div class="row">
                    <div class="col-12 col-md-10">
                        <ul class="nav flex-column flex-lg-row text-center text-md-left">
                            <li class="nav-item">
                                <a href="/" class="nav-link">
                                    © {{ (new Date()).getFullYear() }}
                                        www.pagina.web
                                </a>
                            </li>

                            <li class="nav-item">
                            <router-link to="/Politiche/politica-sulla-riservatezza" class="nav-link text-white">
                                Politicas 
                            </router-link>
                            </li>
                            <li class="nav-item">
                            <router-link to="/Politiche/termini-e-condizioni" class="nav-link text-white">
                                Terminos
                            </router-link>
                            </li>
                        </ul>
                    </div>
                    <div class="col-12 col-md-2 ml-auto text-center d-flex align-self-end justify-content-center">
                        <a href="">
                            <img src="/images/logos/logo3.png" width="40" alt="logo">
                        </a>
                    </div>
                </div>
            </div>
        </aside>
    </div>
</template>
<style lang="sass" scoped>
    .bg-secondary 
        background-color: #071c2f !important
    
    aside
        font-size: .8rem
    @media (max-width: 768px) 
        aside 
            margin-bottom: 66px

    @media (min-width: 992px)
        .nav-link
            padding-top: 0px
            padding-bottom: 0px
            border-left: 1px solid #fff

        .nav-item:first-child .nav-link
            border-left: 1px solid transparent
        

</style>

