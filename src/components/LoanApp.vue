<template>
  <div id="loan-calculator">
    <div
      class="loan-calculator-container"
      :class="{ showCalculator: !showSummaryDisplay }"
    >
      <h2>LCP LOANS</h2>
      <div id="customer-options">
        <div class="customer-details-wrapper">
          <div class="customer-details">
            <label for="first Name">First Name:</label>
            <input
              id="firstname"
              type="text"
              v-model.trim="loanApp.firstName"
              ref="firstname"
              maxlength="200"
              minlength="3"
            />
          </div>
          <div class="customer-details">
            <label>Last name:</label>
            <input
              id="lastname"
              type="text"
              v-model.trim="loanApp.lastName"
              ref="lastname"
              maxlength="200"
              minlength="3"
            />
          </div>
        </div>
        <div>
          <label>Loan Amount</label>
          <div class="loan-amount">
            <div class="loan-amount-input">
              <span>£</span>
              <input
                @input="calcTotalAmtRepay"
                v-model="loanApp.loanAmount"
                type="number"
              />
            </div>
            <div class="slide-container">
              <vue-slider
                v-model="loanApp.loanAmount"
                :min="0"
                :max="2500"
                :interval="100"
                :adsorb="true"
                :tooltip="'active'"
                @change="calcTotalAmtRepay"
                :tooltip-formatter="formatter"
              ></vue-slider>
            </div>
          </div>
        </div>
        <div class="repayment-period">
          <label>Loan Period</label>
          <vue-slider
            v-model="loanApp.repaymentPeriod"
            @change="calcTotalAmtRepayPeriod"
            :min="6"
            :max="36"
            :interval="6"
            :adsorb="true"
            :marks="true"
            :included="true"
            :tooltip-placement="'bottom'"
          ></vue-slider>
        </div>
      </div>
    </div>
    <div v-if="showSummaryDisplay">
      <QuoteSummary
        :first-name="loanApp.firstName"
        :last-name="loanApp.lastName"
        :apr="loanApp.apr"
        :loan-amount.sync="loanApp.loanAmount"
        :total-monthly="loanApp.monthlyTotal"
        :total-amount-repayable="loanApp.totalAmountRepayable"
        :loan-period="loanApp.repaymentPeriod"
        :show-summary-dispay="showSummaryDisplay"
      />
    </div>
    <div class="footer">
      <button @click="showQuote()">
        {{ showSummaryDisplay ? "Loan Calculator" : "Show Summary" }}
      </button>
      <button v-if="!showSummaryDisplay" @click="resetCalc()">Reset</button>
    </div>
  </div>
</template>



<script>
import QuoteSummary from "./QuoteSummary";
import VueSlider from "vue-slider-component";
import "vue-slider-component/theme/default.css";

// const sliderPeriods = [
//   {
//     "data-label": "6 months",
//     "data-value": 6,
//   },
//   {
//     "data-label": "1 year",
//     "data-value": 12,
//   },
//   {
//     "data-label": "1 year 6 months",
//     "data-value": 18,
//   },
//   {
//     "data-label": "2 years",
//     "data-value": 24,
//   },
//   {
//     "data-label": "2 years 6 months",
//     "data-value": 30,
//   },
//   {
//     "data-label": "3 years",
//     "data-value": 36,
//   },
// ];

export default {
  data() {
    return {
      loanApp: {
        firstName: "",
        lastName: "",
        loanAmount: 0,
        totalAmountRepayable: 0,
        monthlyTotal: 0,
        repaymentPeriod: 6,
        apr: 1.25,
      },
      showSummaryDisplay: false,
      formatter: (v) => `£${("" + v).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`,
    };
  },
  components: {
    VueSlider,
    QuoteSummary,
  },

  methods: {
    showQuote() {
      this.showSummaryDisplay = !this.showSummaryDisplay;
    },
    resetCalc() {
      this.showSummaryDisplay = false;
      this.loanApp = {
        firstName: "",
        lastName: "",
        loanAmount: 0,
        totalAmountRepayable: 0,
        monthlyTotal: 0,
        repaymentPeriod: 6,
        apr: 1.25,
      };
    },
    calcTotalAmtRepay(amount) {
      let newPayableTotal = amount * this.loanApp.apr;
      this.loanApp = {
        ...this.loanApp,
        loanAmount: amount,
        totalAmountRepayable: newPayableTotal,
        monthlyTotal: newPayableTotal / this.loanApp.repaymentPeriod,
      };
    },
    calcTotalAmtRepayPeriod(period) {
      let newPayableTotal = this.loanApp.loanAmount * this.loanApp.apr;
      this.loanApp = {
        ...this.loanApp,
        repaymentPeriod: period,
        totalAmountRepayable: newPayableTotal,
        monthlyTotal: newPayableTotal / period,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
label {
  display: inline-block;
  margin: 10px 0;
}
#loan-calculator {
  align-items: center;
  max-width: 900px;
  padding: 30px;
  margin: 0 auto;
  h2 {
    font-size: 35px;
    font-weight: bold;
  }
}
.loan-calculator-container {
  width: 100%;
  display: none;
}
.showCalculator {
  display: block;
}

#customer-options {
  height: auto;
}
.customer-details {
  width: 100%;
  height: 50px;
  margin-bottom: 65px;
  box-sizing: border-box;
  label {
    margin-bottom: 5px;
  }
  input {
    width: 100%;
    height: 50px;
  }
}

.loan-amount {
  width: 100%;
  margin-bottom: 30px;
  .loan-amount-input {
    display: flex;
    height: 50px;
    align-items: center;
    box-sizing: border-box;
  }
  input {
    width: 50px;
    height: 40px;
    margin-right: 10px;
    display: inline-block;
    margin-left: 5px;
  }
}
.slide-container {
  width: 75%;
}

.repayment-period {
  display: block;
  width: 100%;
  .vue-slider {
    margin-bottom: 10px;
  }
}

.footer {
  width: 100%;
  display: flex;
  justify-content: center;
}
</style>
