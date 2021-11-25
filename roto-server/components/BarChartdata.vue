<script>
import {Bar, mixins} from 'vue-chartjs';
const {reactiveProp} = mixins

export default{
    extends:Bar,
    // mixins: [reactiveProp],
    props: {
      labels: {
        type: Array
      },
      chartData: {
        type: Array
      },
    },
    data(){
        return{
          barChartData:{
            labels:this.labels,
            datasets:[
              {
                label: this.label,
                backgroundColor:"rgb(120,200,225)",
                borderColor: "#ed64a6",
                data:this.chartData,
              }
            ]
          },
          barChartOption:{
            responsive:true,
            maintainAspectRatio: false,
            legend:{
              labels: {
                fontColor: "rgba(0,0,0,.4)",
              },
              align: "end",
              position: "bottom",
            },
            title:{
              display:true,
              text: "suhu"
            },
            scales:{
              yAxes: [
              {
                ticks:{
                    beginAtZero:true
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
              },
            ],
            }
          }
        }
      },
    async mounted(){
        await this.renderChart(this.barChartData,this.barChartOption);
    },    
}

</script>