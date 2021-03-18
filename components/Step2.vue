<template>
    <div>
          <div class="form-group" v-bind:class="{ 'has-error': $v.question.$error }">
            <label >בחר שאלה:</label>
            <select class="form-control" v-model.trim="question" @input="$v.question.$touch()">
                <option>אם אהיה בטוח בעצמי יותר </option>
                <option>כשאני מביא לידי ביטוי את האומץ שבי אז אני</option>
                <option>כשאני ממוקד </option>
                <option>כשאני עושה את מה שאני רוצה </option>
                <option>אם אני אאמין בעצמי 5 אחוז יותר היום </option>
                <option>אם הייתי כריזמתי יותר ב5 אחוז היום</option>
                <option>אם הייתי נועז יותר ב5 אחוז היום</option>
            </select>
             <span class="help-block" v-if="$v.question.$error && !$v.question.required">חייב לבחור שאלה</span>
          </div>

          <div class="form-group" v-bind:class="{ 'has-error': $v.answer.$error }">
            <label>תשובה</label>
            <input class="form-control" v-model.trim="answer" @input="$v.answer.$touch()">
             <span class="help-block" v-if="$v.answer.$error && !$v.answer.required">חייב לענות</span>
          </div>
        </div>
</template>

<script>

const { required, minLength, email } = require('vuelidate/lib/validators')
export default {
    data() {
    return {
      question: '',
      answer: ''
    }
  },
  validations: {
    question: {
      required
    },
    answer: {
      required
    },
    form: ['question', 'answer']
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
