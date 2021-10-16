<script>
import {Bar, mixins} from 'vue-chartjs';
const {reactiveProp} = mixins

export default{
    extends:Bar,
    data(){
        return{
          barChartData:{
            labels:['january','february','maret'],
            datasets:[
              {
                label: "suhu",
                backgroundColor:['#005f80','#435f10','#435faa'],
                data:[10,20,30]
              }
            ]
          },
          barChartOption:{
            responsive:true,
            legend:{
              display:true,
            },
            title:{
              display:true,
              text: "suhu normal"
            },
            scales:{
              yAxes:[
                {
                  ticks:{
                    beginAtZero:true
                  }
                }
              ]
            }
          }
        }
      },
    mounted(){
        this.renderChart(this.barChartData,this.barChartOption);
    },    
}

</script>