<template>
    <div class="container py-5">
        <div class="row justify-content-center">
            <div class="col-12 col-md-10 col-lg-6">
                <div class="card shadow p-4" :class="{ 'transparent': transparent }">
                    <div class="card-body text-center">
                        <h2 class="title text-primary">Contacto</h2>
                        <h6 class="subtitle">By Contact</h6>
                        <div class="line-title mx-auto mt-1 bg-primary" style="height: 2px;"></div>

                        <form>
                            <vue-recaptcha
                                :class="{ 'd-none': hide }"
                                ref="recaptcha"
                                :sitekey="siteKey"
                                @verify="onVerify"
                                @expired="onExpired"
                                size="invisible"
                            />

                            <slot name="fields" />

                            <button class="mt-3 btn btn-primary shadow" :disabled="disabled || loading" @click.prevent="onSubmit">
                                <pulse-loader v-if="loading" :loading="loading" color="#FFF" size="6px" />
                                <span v-else class="text-uppercase text-white font-weight-bold">
                                   Send
                                </span>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>

    import { PulseLoader } from 'vue-spinner/dist/vue-spinner.min'
    import VueRecaptcha from 'vue-recaptcha'

    export default {
        name: 'Form',
        components: { VueRecaptcha, PulseLoader },
        props: {
            title: {
                type: String,
                required: true,
                default: 'Title'
            },
            handleClick: {
                type: Function,
                required: true,
            },
            loading: {
                type: Boolean,
                required: false,
                default: false
            },
            disabled: {
                type: Boolean,
                required: false,
                default: false
            },
            subtitle: {
                type: String,
                required: false,
            },
            transparent: {
                type: Boolean,
                required: false,
                default: false

            }
        },
        data() {
            return {
                hide: false
            }
        },
        mounted() {
            setTimeout(() => this.hide = true, 8000)
        },
        computed: {
            siteKey() {
                return '6LdUpIYUAAAAAKf4AawxI8cJGC0y-TqvhJowL8Vs' // this.$store.getters.getSetting('recaptcha_site_key').value;
            }
        },
        methods: {
            onSubmit() {
                (process.env.NODE_ENV !== "development") ? this.$refs.recaptcha.execute() : this.handleClick()
            },
            onVerify(response) {
                this.resetRecaptcha()
                this.handleClick()
            },
            onExpired() {
                console.log('Expired')
            },
            resetRecaptcha () {
                this.$refs.recaptcha.reset() // Direct call reset method
            }
        }
    }
</script>
<style lang="sass" scoped>
    .form-material:focus
        border-bottom: 2px solid

    .has-error
        color: #e74c3c
        border-bottom: 2px solid #e74c3c

    .text-danger
        color: #e74c3c

    .transparent
        background-color: rgba(255, 255, 255, 0.75)

    input[type="number"]::-webkit-outer-spin-button, input[type="number"]::-webkit-inner-spin-button
        -webkit-appearance: none
        margin: 0

    input[type="number"]
        -moz-appearance: textfield

    .card
        border-radius: 0.6rem
</style>