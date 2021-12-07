<script>
import {Line, mixins} from 'vue-chartjs';
const {reactiveProp} = mixins

export default{
    // extends:Line,
    // mixins: [reactiveProp],
    // props: {
    //   labels: {
    //     type: Array,
    //     default: null,
    //   },
    //   chartData: {
    //     type: Array,
    //     default:null,
    //   },
    // },
    // data(){
    //     return{
    //       barChartData:{
    //         labels:this.labels,
    //         datasets:[
    //           {
    //             label:'suhu',
    //             backgroundColor:"rgb(120,200,225)",
    //             borderColor: "rgb(100,200,225)",
    //             data:this.chartData,
    //             fill: true,
    //           }
    //         ]
    //       },
    //       barChartOption:{
    //         responsive:true,
    //         maintainAspectRatio: false,
    //         scales:{
    //           yAxes:[ 
    //           {
    //             ticks:{
    //                 max:50,
    //                 color: "#E8EAF6",
    //             },
    //             grid: {
    //               color: "rgb(232, 234, 246)"
    //             },
    //           }],
    //           xAxes:
    //           {
    //             min:0,
    //             max:10,
    //             display: true,
    //             scaleLabel: {
    //               display: true,
    //               labelString: "Month",
    //             },
    //             grid: {
    //               color: "rgb(232, 234, 246)"
    //             },
    //           },
    //         }
    //       }
    //     }
    //   },
    // async mounted(){
    //     await this.renderChart(this.barChartData,this.barChartOption);
    // },    
}

</script>