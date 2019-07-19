<template>
    <aside class="top-info text-white border-bottom d-none d-lg-block">
        <div class="container">
            <div class="row">
                <div class="col-6 d-flex align-items-center">
                    <div class="d-inline-block">
                        <a href="tel:+560000000">
                          <i class="material-icons px-2">
                        phone_in_talk
                        </i>
                        +560000000
                        </a>
                    </div>
                </div>
                <div class="col-6 d-flex align-items-center justify-content-end text-right">
                    <div class="d-inline-block text-white">
                           emailprueba@prueba.com
                            <i class="material-icons px-2">mail</i>
                    </div>
                </div>
            </div>
        </div>
    </aside>
</template>
<script>


    export default {
        name: 'InfoNavbar',

    }
</script>
<style scoped>
.material-icons{
    vertical-align: middle;
}
.top-info{
    font-size: 0.875rem;
}
a, a:link{
    color: #fff;
}
a:hover, a:focus, a:active{
    color: #fff;
}
</style>
