/* global Vue: false, VueRecaptcha: false */

// eslint-disable-next-line no-unused-vars
function bootstrap () {
  // eslint-disable-next-line no-new
  new Vue({
    el: '#root',
    data: {
      sitekey: '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI',
      normalVerified: false,
      bindedVerified: false,
      invisibleVerified: false
    },
    components: {
      'vue-recaptcha': VueRecaptcha
    },
    methods: {
      onSubmit: function () {
        this.$refs.invisibleRecaptcha.execute()
      },
      onNormalVerify () {
        this.normalVerified = true
      },
      onBindedVerify () {
        this.bindedVerified = true
      },
      onInvisibleVerify () {
        this.invisibleVerified = true
      }
    }
  })
}
