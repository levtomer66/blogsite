<template>
    <div>
        <div class="form-group" v-bind:class="{ 'has-error': $v.fivesuccess.$error }">
          <label>לזהות 5 הצלחות מההצלחות הבאות:
            תוצאה רצויה
            פעולה מתוכננת
            פעולה לאחר היסוס 
            הבנה חדשה 
            תובנה חדשה 
            זיהוי טעות</label>
          <input class="form-control" v-model.trim="fivesuccess" @input="$v.fivesuccess.$touch()">
            <span class="help-block" v-if="$v.fivesuccess.$error && !$v.fivesuccess.required">חייב לענות</span>
        </div>

      </div>
</template>

<script>

const { required, minLength, email } = require('vuelidate/lib/validators')
export default {
    data() {
    return {
      fivesuccess: ''
      
    }
  },
  validations: {
    fivesuccess: {
      required
    },
    
    form: ['fivesuccess']
  },
  methods: {
    validate() {
      this.$v.form.$touch();
      var isValid = !this.$v.form.$invalid
      this.$emit('on-validate', this.$data, isValid)
      return isValid
    }
  }
}
</script>
