<template>
    <div>
        <div class="form-group" v-bind:class="{ 'has-error': $v.in10.$error }">
          <label>בעוד 10 שנים</label>
          <input class="form-control" v-model.trim="in10" @input="$v.in10.$touch()">
            <span class="help-block" v-if="$v.in10.$error && !$v.in10.required">חייב לענות</span>
        </div>

        <div class="form-group" v-bind:class="{ 'has-error': $v.in5.$error }">
          <label>בעוד 5 שנים</label>
          <input class="form-control" v-model.trim="in5" @input="$v.in5.$touch()">
            <span class="help-block" v-if="$v.in5.$error && !$v.in5.required">חייב לענות</span>
        </div>

        <div class="form-group" v-bind:class="{ 'has-error': $v.in1.$error }">
          <label>בעוד שנה</label>
          <input class="form-control" v-model.trim="in1" @input="$v.in1.$touch()">
            <span class="help-block" v-if="$v.in1.$error && !$v.in1.required">חייב לענות</span>
        </div>

        <div class="form-group" v-bind:class="{ 'has-error': $v.inhalf.$error }">
          <label>בעוד חצי שנה</label>
          <input class="form-control" v-model.trim="inhalf" @input="$v.inhalf.$touch()">
            <span class="help-block" v-if="$v.inhalf.$error && !$v.inhalf.required">חייב לענות</span>
        </div>

        <div class="form-group" v-bind:class="{ 'has-error': $v.inmonth.$error }">
          <label>בעוד חודש</label>
          <input class="form-control" v-model.trim="inmonth" @input="$v.inmonth.$touch()">
            <span class="help-block" v-if="$v.inmonth.$error && !$v.inmonth.required">חייב לענות</span>
        </div>

        <div class="form-group" v-bind:class="{ 'has-error': $v.inweek.$error }">
          <label>בעוד שבוע</label>
          <input class="form-control" v-model.trim="inweek" @input="$v.inweek.$touch()">
            <span class="help-block" v-if="$v.inweek.$error && !$v.inweek.required">חייב לענות</span>
        </div>

        <div class="form-group" v-bind:class="{ 'has-error': $v.today.$error }">
          <label>היום - חמישה דברים שאני אעשה היום: (חמישה יעדים להיום, חמישה – עשרה פעולות להיום)</label>
          <input class="form-control" v-model.trim="today" @input="$v.today.$touch()">
            <span class="help-block" v-if="$v.today.$error && !$v.today.required">חייב לענות</span>
        </div>
      </div>
</template>

<script>

const { required, minLength, email } = require('vuelidate/lib/validators')
export default {
    data() {
    return {
      in10: '',
      in5: '',
      in1: '',
      inhalf: '',
      inmonth: '',
      inweek: '',
      today: ''
    }
  },
  validations: {
    in10: {
      required
    },
    in5: {
      required
    },
    in1: {
      required
    },
    inhalf: {
      required
    },
    inmonth: {
      required
    },
    inweek: {
      required
    },
    today: {
      required
    },
    
    form: ['in10', 'in5', 'in1', 'inhalf', 'inmonth', 'inweek', 'today']
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
