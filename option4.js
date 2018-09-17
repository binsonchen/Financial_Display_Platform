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
        text: '广西农村改革区域成果',
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
        data:['农村银行点','ATM终端','POS机终端','三农服务点','金融服务点']
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
                {text : '南宁', max: 1000},
                {text : '桂林', max: 1000},
                {text : '柳州', max: 1000},
                {text : '北海', max: 1000},
                {text : '百色', max: 1000}
            ],center : ['50%','50%'],
            radius : 68
        }
    ],
    series : [
        {
            name:'农村银行点',
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
            name:'ATM终端',
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
            name:'POS机终端',
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
            name:'三农服务点',
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
            name:'金融服务点',
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
