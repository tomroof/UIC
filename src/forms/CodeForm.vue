<template>
  <div>

    <form class="signup_validator signup-form" @submit.prevent="submit">
      <div class="inputs-group">
        <AppInput>
          <input type="email"
                class="blueline-input"
                :class="{'invalid': checkError('formValue', 'email')}"
                :placeholder="getI18n.placeholder"
                v-model="formValue.email"
                @blur="markTouched('formValue', 'email')"
          >
        </AppInput>
      </div>

      <loader v-if='loading'></loader>
      <ComponentButton
              type="submit"
              @click='submit'
              v-else
              v-bind:class="{ loading: loading }">
        {{getI18n.enter}}
      </ComponentButton>

    </form>
  </div>
</template>

<script>
import { required, minLength, email } from 'vuelidate/lib/validators'
import { formMixin } from '@/mixins/formMixin'

import Loader from '@/components/shared/Loader'
import AppInput from '@/components/shared/AppInput'

import ComponentButton from '@/components/Button'

export default {
  name: 'CodeForm',

  props: {
    loading: Boolean
  },

  mixins: [
    formMixin
  ],

  components: {
    Loader,
    ComponentButton,
    AppInput
  },

  data () {
    return {
      formValue: {
        email: '',
        password: ''
      }
    }
  },

  validations: {
    formValue: {
      email: { required, email },
      password: { required, minLength: minLength(8) }
    }
  },

  methods: {
    submit () {
      this.$emit('submitForm', this.formValue)
    },

    resetPasswordBtnClick () {
      this.$emit('on-forgot-password-btn-click')
    }
  },

  computed: {
    getI18n() {
      return this.$t("message.restText.code")
    }
  }
}
</script>

<style lang="scss" scoped>
.logo-container {
  text-align: center;
}

.form-input {
  margin-bottom: 15px;
}
</style>
