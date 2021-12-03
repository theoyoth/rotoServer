<script>
import {Bar, mixins} from 'vue-chartjs';
const {reactiveProp} = mixins

export default{
    extends:Bar,
    // mixins: [reactiveProp],
    props: {
      barChar: {
        type: Array,
        default: null,
      },
      bardata: {
        type: Array,
        default:null,
      },
    },
    data(){
        return{
          barChartData:{
            labels:this.barChar,
            datasets:[
              {
                backgroundColor:"rgb(120,200,225)",
                borderColor: "#ed64a6",
                data:this.bardata,
              }
            ]
          },
          barChartOption:{
            responsive:true,
            maintainAspectRatio: false,
            scales:{
              yAxes: [
              {
                ticks:{
                    max:50
                  },
                display: true,
                scaleLabel: {
                  display: false,
                  labelString: "Value",
                },
              },
              ],
              xAxes: [
              {
                display: true,
                scaleLabel: {
                  display: true,
                  labelString: "Month",
                },
                max:1,
                max:10,
              },
              ],
                max:12,
                min:0,
            }
          }
        }
      },
    async mounted(){
        await this.renderChart(this.barChartData,this.barChartOption);
    },    
}

</script>