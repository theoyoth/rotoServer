<script>
import {Bar, mixins} from 'vue-chartjs';
const {reactiveProp} = mixins

export default{
    extends:Bar,
    data(){
        return{
          barChartData:{
            labels:['january','february','maret',"March","April","May","June"],
            datasets:[
              {
                label: "suhu",
                backgroundColor:"rgb(120,200,225)",
                borderColor: "#ed64a6",
                data:[10,20,30,10,22,21,10],
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
                // gridLines: {
                //   borderDash: [2],
                //   drawBorder: false,
                //   borderDashOffset: [2],
                //   color: "rgba(33, 37, 41, 0.2)",
                //   zeroLineColor: "rgba(33, 37, 41, 0.15)",
                //   zeroLineBorderDash: [2],
                //   zeroLineBorderDashOffset: [2],
                // },
              },
              ],
              xAxes: [
              {
                display: true,
                scaleLabel: {
                  display: true,
                  labelString: "Month",
                },
                // gridLines: {
                //   borderDash: [2],
                //   borderDashOffset: [2],
                //   color: "rgba(33, 37, 41, 0.3)",
                //   zeroLineColor: "rgba(33, 37, 41, 0.3)",
                //   zeroLineBorderDash: [2],
                //   zeroLineBorderDashOffset: [2],
                // },
              },
            ],
            }
          }
        }
      },
    mounted(){
        this.renderChart(this.barChartData,this.barChartOption);
    },    
}

</script>