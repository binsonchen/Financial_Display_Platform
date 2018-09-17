$(function() {

var chart4 = echarts.init(document.getElementById('mainLineCity'), 'infographic');
     var option = {
     tooltip : {
        // trigger: 'item',
        // axisPointer : {     
        //     type : 'shadow'   
        // }
    },
    title : {
        text: '����ũ��ĸ�����ɹ�',
        x:'left',
        textStyle : {
            color: '#fff',
            fontSize:13
        }
    },
    legend: {
        orient:'vertical',
        x:'right',
        y:'center',
        selectedMode:false,
        textStyle:{
                fontSize:12,
                color:'#fff'
        },
        data:['ũ�����е�','ATM�ն�','POS���ն�','��ũ�����','���ڷ����']
    },
    calculable : false,
    polar : [
        {
            name: { 
                show: true,
                textStyle:{
                    fontSize:12,
                    color:"#00ffff"
                }
            },
            indicator : [
                {text : '����', max: 1000},
                {text : '����', max: 1000},
                {text : '����', max: 1000},
                {text : '����', max: 1000},
                {text : '��ɫ', max: 1000}
            ],center : ['50%','50%'],
            radius : 68
        }
    ],
    series : [
        {
            name:'ũ�����е�',
            type: 'radar',
            itemStyle: {
                normal: {
                    color :"#fff8aa",
                    areaStyle: {
                        color:"#fff8aa",
                        type: 'default'
                    }
                }
            },
            symbolSize: 1,
            data: [{
                value:[816, 612, 790, 886, 704]
            }]
        },
        {
            name:'ATM�ն�',
            type: 'radar',
            itemStyle: {
                normal: {
                    color :"#ffd700",
                    areaStyle: {
                        color:"#ffd700",
                        type: 'default'
                    }
                }
            },
            symbolSize: 1,
            data: [{
                value:[729, 665, 532, 394, 428]
            }]
        },
        {
            name:'POS���ն�',
            type: 'radar',
            itemStyle: {
                normal: {
                    color :"#1e90ff",
                    areaStyle: {
                        color:"#1e90ff",
                        type: 'default'
                    }
                }
            },
            symbolSize: 1,
            data: [{
                value:[547, 672, 232, 794, 331]
            }]
        },
        {
            name:'��ũ�����',
            type: 'radar',
            itemStyle: {
                normal: {
                    color :"#7cfc00",
                    areaStyle: {
                        color:"#7cfc00",
                        type: 'default'
                    }
                }
            },
            symbolSize: 1,
            data: [{
                value:[341, 545, 744, 291, 478]
            }]
        },
        {
            name:'���ڷ����',
            type: 'radar',
            itemStyle: {
                normal: {
                    color :"#00ffff",
                    areaStyle: {
                        color:"#00ffff",
                        type: 'default'
                    }
                }
            },
            symbolSize: 1,
            data: [{
                value:[279, 376, 352, 493, 824]
            }]
        }
    ]
};

chart4.setOption(option);
 $(window).resize(function() {
            chart1.resize();
                       
        });   
        
        
        });
