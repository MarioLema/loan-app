<template>
  <div class="jumbotron">
    <h1>Hello {{ firstName }}</h1>
    <p>
      For the purpose of this test you will be creating a simple loan
      application form for a mock company called LCP Loans. We have created some
      basic components to help get you started.
    </p>

    <p>The requirements for the application will be:</p>
    <ul style="font-weight: bold">
      <li>First Name - Validated with min 3 characters</li>
      <li>Last Name - Validated with min 3 characters</li>
      <li>
        Loan Amount - This should be a slider with the min as 0, max as £2500
        and increment in steps of £100
      </li>
      <li>
        Repayment Period - This should be a slider with the min as 6 months, max
        3 years and increment in steps of 6 months
      </li>
    </ul>
    <p>
      Upon submitting the loan application, the form should be hidden and a new
      view should be shown which shows a summary of their agreement with their
      monthly repayments and the total amount repayable. To simplify this
      calculation just make the total amount repayable as 125% of the loan
      amount
    </p>
    <p>
      We have added Bootstrap to assist with the styling and would like it to
      look as professional as possible. You can include any additional libraries
      / frameworks / dependencies you wish. The documentation for the slider can
      be found here:
      <a href="https://github.com/NightCatSama/vue-slider-component"
        >https://github.com/NightCatSama/vue-slider-component</a
      >
    </p>
    <p>
      <strong
        >The design / functionality of this UI will be as important as the
        javascript calculations so please try to showcase your creativity as
        much as possible. Usage of css/js animations are also encouraged where
        possible</strong
      >
    </p>
    <p>
      We would like to have this completed by {{ submissionDate }}. When making
      changes the preview should update in realtime but you should always save
      your work often. Once you are happy with the result, do a final save and
      copy the link url. Please email this to me
      <a href="mailto:james.cook@lcp.uk.com">james.cook@lcp.uk.com</a> and I'll
      take a look. Good Luck and I look forward to seeing the result
    </p>
    <button @click="startLoanApp()" class="btn btn-primary">
      Lets do this
    </button>
  </div>
</template>

<script>
export default {
  props: ["firstName", "submissionDate"],
  methods: {
    startLoanApp() {
      this.$store.commit("toggleIntro");
    },
  },
};
</script>

<style lang="scss" scoped>
.jumbotron {
  padding: 20px;
  p {
    font-size: 14px;
  }
}
</style>
