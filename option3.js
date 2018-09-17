$(function() {

var chart3 = echarts.init(document.getElementById('mainLineProvince'), 'infographic');
     var option = {
     tooltip : {
        trigger: 'axis',
        axisPointer : {     
            type : 'shadow'   
        }
    },
    title : {
        text: '历年广西城乡居民储蓄存款',
        x:'center',
        textStyle : {
            color: '#fff',
            fontSize:13
        }
    },
    legend: {
        y:'bottom',
        selectedMode:false,
        textStyle:{
                fontSize:12,
                color:'#fff'
        },
        data:['城镇居民人均可支配收入','城镇居民人均消费支出']
    },
    calculable : false,
    xAxis : [
        {
            type : 'category',
            splitLine:{
                show:false
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#fff'
                }
            },    
            data : ['1966','1978','2008','2016']
        }
    ],
    yAxis : [
        {
            type : 'value',
            min : 0,
            max : 30000,
            axisLabel: {
                show: true,
                formatter: '{value} 元',
                textStyle: {
                    color: '#fff'
                }
            },
            splitNumber:2
        }
    ],
    series : [
    {
        name:'城镇居民人均可支配收入',
        type:'line',
        itemStyle : {
            normal : {
                color:'#00ffff'
            }
        },       
        data:[73, 289, 14146, 28324],
    },
    {
        name:'城镇居民人均消费支出',
        type:'line',
        itemStyle : {
            normal : {
                color:'#ffd700'
            }
        },      
        data:[50, 197, 9627, 17268],
    }
    ]
};

chart3.setOption(option);
 $(window).resize(function() {
            chart1.resize();
                       
        });   
        
        
        });
