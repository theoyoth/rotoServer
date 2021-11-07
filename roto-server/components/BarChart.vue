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
                data:[10,20,30],
                backgroundColor:['#005f80','#435f10','#435faa'],
              }
            ],
          },
          barChartOption:{
            responsive:true,
            legend:{
              display:true,
              labels:{
                fontColor:"#fff",
              }
            },
            title:{
              display:true,
              text: "suhu normal",
              fontColor:"#fff",
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