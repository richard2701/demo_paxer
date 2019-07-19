<template>
    <div class="contactUs border-top-color">
        <section id="form-contact">
            <Form
                    title="getTags({ tag: 'contact_form_title' })"
                    subtitle="getTags({ tag: 'about_subtitle' })"
                    :disabled="errors.any() || isDisabled"
                    :loading="loading"
                    :handle-click="validateBeforeSubmit"
            >
                <template v-slot:fields>
                    <template v-for="item in fields">
                        <div class="form-group" :key="item.field">
                            <textarea
                                    v-if="item.type === 'textarea'"
                                    type="text"
                                    v-model="form[item.name]"
                                    :maxlength="item.length"
                                    v-validate="item.veeValidate"
                                    :data-vv-name="item.name"
                                    :data-vv-as="item.label"
                                    :placeholder="item.label"
                                    :label="item.label"
                                    :disabled="loading"
                                    class="form-control form-material"
                                    :class="{ 'has-error': errors.has(item.name) }"
                            />

                            <input
                                    v-else
                                    :type="item.type? item.type : 'text'"
                                    v-model="form[item.name]"
                                    :maxlength="item.length"
                                    v-validate="item.veeValidate"
                                    :data-vv-name="item.name"
                                    :data-vv-as="item.label"
                                    :placeholder="item.label"
                                    :label="item.label"
                                    :disabled="loading"
                                    class="form-control form-material"
                                    :class="{ 'has-error': errors.has(item.name) }"
                            />
                            <small class="text-danger" v-show="errors.has(item.name)">{{ errors.first(item.name) }}</small>
                        </div>
                    </template>
                </template>
            </Form>
        </section>
<!-- 
        <section id="contact-info">
            <caption-contact :contact-info="contactInfo" />
        </section> -->

        <section id="map" class="border-top-color">
            <iframe
                width="100%"
                height="340px"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1501.1509323826588!2d9.364081!3d41.193392!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x3d546cd9a7115545!2sBoutique+Hotel+Rafael!5e0!3m2!1ses-419!2sus!4v1557350526943!5m2!1ses-419!2sus"
                frameborder="0"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
            />
        </section> 
    </div>
</template>
<script>


    import Form from '../general/Form'

    export default {
        name: 'ContactUs',
        components: { Form },
        data() {
            return {
                loading: false,
                form: {
                    fullname: null,
                    email: null,
                    subject: 'Contact',
                    phone: null,
                    msg: null,
                },
            }
        },
        computed: {
            fields() {
                return [
                    {
                        id: 1,
                        name: 'fullname',
                        label: 'Fullname',
                        veeValidate: 'required|alpha_spaces|min:2|max:30',
                        length: 30
                    },
                    {
                        id: 2,
                        name: 'email',
                        label: 'Email',
                        veeValidate: 'required|email|min:2|max:50',
                        length: 50
                    },
                    {
                        id: 3,
                        name: 'phone',
                        label: 'Phone',
                        type: 'number',
                        veeValidate: 'required|numeric|min:8|max:16',
                        length: 16
                    },
                    {
                        id: 5,
                        name: 'msg',
                        label: 'Menssage',
                        type: 'textarea',
                        veeValidate: 'required|min:2|max:150',
                        length: 150
                    }
                ]
            },
            isDisabled() {
                return !this.form.fullname || !this.form.email || !this.form.phone || !this.form.msg
            }
        },
        methods: {
            async validateBeforeSubmit() {
                try {
                    const validate = await this.$validator.validateAll()
                    this.loading = validate
                    this.sendMail();

                } catch (e) {
                    this.loading = false
                    console.log('error validating form')
                    this.showAlert('warning', 'Si prega di verificare i dati inviati.')
                }
            },
            async sendMail() {
                try {
                    const response = await axios.post('/api/contactus', this.form)
                    this.showAlert('success', 'Gracias',  'for contacting us' + 'We are happy to answer all your questions as soon as possible')

                    this.form = {
                        fullname: null,
                        email: null,
                        subject: 'Contact',
                        phone: null,
                        msg: null
                    }
                } catch (e) {
                    console.log(e)
                    this.showAlert('error', 'Si prega di verificare i dati inviati.')
                }

                finally {
                    this.loading = false
                }
            },
            showAlert(type, title, text) {
                this.$swal({
                    position: 'center',
                    type: type,
                    title: title,
                    text: text,
                    showConfirmButton: false,
                    showCloseButton: true,
                })
            }
        }
    }
</script>
<style lang="sass" scoped>
    #header-contact
        background-color: aliceblue
        background-position: left center
        background-repeat: no-repeat
        background-size: cover
        background-image: linear-gradient(#24222038,#24222038), url(/assets/portorafael/contact/header-contact.jpg)
        width: 100%
        min-height: 60vh
        padding: 20px 0
        display: flex
        justify-content: center
        align-items: center

    #form-contact
        background-image: linear-gradient(#00000059,#0101014f), url('/images/contact/contact-background.jpg')
        background-position: inherit
        background-color: aliceblue
        background-size: cover
        background-repeat: no-repeat
        width: 100%
        height: 620px
</style>
