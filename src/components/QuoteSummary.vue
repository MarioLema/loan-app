<template>
  <div class="quote-summary">
    <div class="summary-details">
      <div>{{ apr }}</div>
      <QuoteOutput
        :apr="apr"
        :loan-amount.sync="loanAmount"
        :total-monthly="totalMonthly"
        :total-amount-repayable="totalAmountRepayable"
        :loan-period="loanPeriod"
      />
    </div>
  </div>
</template>
<script>
import QuoteOutput from "./QuoteOutput";

export default {
  props: {
    firstName: String,
    lastName: String,
    loanAmount: Number,
    totalAmountRepayable: Number,
    totalMonthly: Number,
    loanPeriod: Number,
    apr: Number,
  },
  components: {
    QuoteOutput,
  },
};
</script>
<style lang="scss" scoped>
.quote-summary {
  display: block;
  margin-bottom: 20px;
}

.summary-details {
  max-width: 800px;
  text-align: center;
  box-sizing: border-box;

  p {
    font-size: 18px;
  }
}
</style>
