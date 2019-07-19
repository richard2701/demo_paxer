<template>
    <div>
        <navbar/>
        <router-view/>
        <Footer/>
    </div>
</template>
<script>
import Navbar from './general/Navbar'
import Footer from './general/Footer'
export default {
    components: { Navbar, Footer }
}
</script>

