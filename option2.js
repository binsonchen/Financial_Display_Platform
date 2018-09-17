$(function() {

var chart2 = echarts.init(document.getElementById('mainStack'), 'infographic');
	 var option = {
     tooltip : {
        trigger: 'item',
        axisPointer : {     
            type : 'shadow'   
        }
    },
    title : {
        text: '沿边金融改革城市引入金融机构',
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
        data:['保险机构','村镇银行','股份制银行','外资银行', '政策性银行']
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
            data : ['南宁','崇左','百色','北海','钦州','防城港']
        }
    ],
    yAxis : [
        {
            type : 'value',
            min : 0,
            max : 4,
            axisLabel: {
                show: true,
                formatter: '{value} 家',
                textStyle: {
                    color: '#fff'
                }
            },
            splitNumber:2
        }
    ],
    series : [
        {
            name:'保险机构',
            type:'bar',
            stack:'sum',
            barCategoryGap: '50%',  
            itemStyle: {
                normal: {
                    color: '#00ffff',
                    barBorderColor: '#00ffff',
                    barBorderWidth: 3,
                    barBorderRadius:0,
                }
            },
            data:[2, 1, 1, 1, 1, 1]
        },
        {
            name:'村镇银行',
            type:'bar',
            stack:'sum',
            itemStyle: {
                normal: {
                    color: '#1e90ff',
                    barBorderColor: '#1e90ff',
                    barBorderWidth: 3,
                    barBorderRadius:0,
                }
            },
            data:[2, 1, 1, 1, 0, 0]
        },
        {
            name:'外资银行',
            type:'bar',
            stack:'sum',
            itemStyle: {
                normal: {
                    color: '#ffd700',
                    barBorderColor: '#ffd700',
                    barBorderWidth: 3,
                    barBorderRadius:0,
                }
            },
            data:[1, 0, 0, 0, 0, 0]
        },
        {
            name:'股份制银行',
            type:'bar',
            stack: 'sum',
            itemStyle: {
                normal: {
                    color: '#7cfc00',
                    barBorderColor: '#7cfc00',
                    barBorderWidth: 3,
                    barBorderRadius:0,
                }
            },
            data:[1, 1, 0, 0, 0, 0]
        },
        {
            name:'政策性银行',
            type:'bar',
            stack:'sum',             
            itemStyle: {
                normal: {
                    color: '#fff8aa',
                    barBorderColor: '#fff8aa',
                    barBorderWidth: 3,
                    barBorderRadius:0,
                }
            },
            data:[0, 0, 1, 0, 0, 0]
        }  
    ]
};

chart2.setOption(option);
 $(window).resize(function() {
            chart1.resize();
			           
        });   
		
		
		});
