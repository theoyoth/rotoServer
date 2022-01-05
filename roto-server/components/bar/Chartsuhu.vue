<script>
import Chart from 'chart.js'
import {Line,Bar, mixins} from 'vue-chartjs';
const {reactiveProp} = mixins

export default {
  extends:Line,
  mixins:[reactiveProp],
  // props: ["labels","chartData"],
  props:{
    chartData:{
      type:Object,
      default:null,
    },
    options:{
      type:Object,
      default:null,
    }
  },
  mounted() {
   this.renderChart(this.chartData, this.options);
  },
  watch: {
    'chartData'(to, from) {
        this.renderChart(this.chartData, this.options)
    },
    'options': {
        handler(newOption, oldOption) {
          // this._chart.destroy()
          this.renderChart(this.chartData, this.options)
        },
        deep: true
    }
  },
}
</script>