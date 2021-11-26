<script>
import Chart from 'chart.js'
import moment from 'moment'
import {Bar,Line, mixins} from 'vue-chartjs';
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

  }
}
</script>