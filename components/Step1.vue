<template>
    <div>
        <div class="form-group" v-bind:class="{ 'has-error': $v.feeling.$error }">
        <label >איך אתה מרגיש</label>
        <input class="form-control" v-model.trim="feeling" @input="$v.feeling.$touch()">
            <span class="help-block" v-if="$v.feeling.$error && !$v.feeling.required">חייב למלא</span>
        </div>
        

        <div class="form-group" v-bind:class="{ 'has-error': $v.notworking.$error }">
        <label >מה לא עובד (לוגיסטית)</label>
        <input class="form-control" v-model.trim="notworking" @input="$v.notworking.$touch()">
            <span class="help-block" v-if="$v.notworking.$error && !$v.notworking.required">חייב למלא</span>
        </div>

        <div class="form-group" v-bind:class="{ 'has-error': $v.missions.$error }">
        <label> מה המשימות שלך להמשך? </label>
        <input class="form-control" v-model.trim="missions" @input="$v.missions.$touch()">
            <span class="help-block" v-if="$v.missions.$error && !$v.missions.required">חייב למלא</span>
        </div>
    </div>
</template>


<script>

const { required, minLength, email } = require('vuelidate/lib/validators')
export default {
    data() {
    return {
      feeling: '',
      notworking: '',
      missions: ''
    }
  },
  validations: {
    feeling: {
      required
    },
    notworking: {
        required
    },
    missions : {
        required
    },
    form: ['feeling', 'notworking','missions']
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
