<template>
  <div id="app">
  <div>
    <form-wizard shape="square" color="#3498db">
      <tab-content title="עם פתיחת יום" icon="ti-user" :before-change="()=>validateStep('step1')">
        <Step1 ref="step1" @on-validate="mergePartialModels" />
      </tab-content>
      <tab-content title="השלם בין 6-8 למשפטים הבאים" icon="ti-settings" :before-change="()=>validateStep('step2')">
        <Step2 ref="step2" @on-validate="mergePartialModels" />
      </tab-content>
      <tab-content title="כלי הצהרת הצלחה" icon="ti-settings" :before-change="()=>validateStep('step3')">
        <Step3 ref="step3" @on-validate="mergePartialModels" />
      </tab-content>
      <tab-content title="כלי חמשת עקרונות ההצלחה לכתוב 5 הצלחות כל יום" icon="ti-settings" :before-change="()=>validateStep('step4')">
        <Step4 ref="step4" @on-validate="mergePartialModels" />
      </tab-content>
      <tab-content title="Last step" icon="ti-check">
        Here is your final model:
       <pre>{{finalModel}}</pre>
      </tab-content>
    </form-wizard>
  </div>
</div>

</template>

<script>


import Step1 from "../components/Step1";
import Step2 from "../components/Step2";
import Step3 from "../components/Step3";
import Step4 from "../components/Step4";

export default {
  components: { Step1, Step2, Step3, Step4 },
  data() {
    return {
      finalModel: {}
    }
  },
  methods: {
    finish() {
      this.$axios.post("/savePost", this.finalModel)
    },
    validateStep(name) {
      var refToValidate = this.$refs[name];
      console.log(refToValidate)
      return refToValidate.validate();
    },
    mergePartialModels(model, isValid){
      if(isValid){
      // merging each step model into the final model
       this.finalModel = Object.assign({},this.finalModel, model)
      }
    }
  }
};
</script>

<style>
</style>
