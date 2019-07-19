<template>
    <div>
        <slider-header/>
        <about-us/>
        <contact-us/>
    </div>
</template>
<script>
import SliderHeader from './SliderHeader.vue'
import AboutUs from './AboutUs.vue'
import ContactUs from './ContactUs.vue'


export default {
    components: { SliderHeader, AboutUs, ContactUs }
}
</script>

