$(function() {

var chart1 = echarts.init(document.getElementById('main'), 'infographic');
	 var option = {
    backgroundColor: '#1b1b1b',
    color: ['gold','aqua','lime'],
    title : {
        text: '广西金融办大数据展示平台',
        subtext:'\n模拟数据',
        x:'left',
        subtextStyle:{
            color:'#fff',
            fontSize:15
        },
        textStyle : {
            color: '#00ffff',
            fontSize:30
        }
    },
    tooltip : {
        trigger: 'item',
        formatter: '{b}'
    },
    legend: {
        orient: 'vertical',
        x:'left',
        y:'bottom',
        data:['金融开放门户"一轴两翼"空间布局','全国首批"两权"抵押贷款试点地区'],
        selectedMode: 'single',
        selected:{
            '全国首批"两权"抵押贷款试点地区' : false,
        },
        textStyle : {
            color: '#fff'
        }
    },
    // dataRange: {
    //     min : 0,
    //     max : 100,
    //     calculable : true,
    //     color: ['#ff3333', 'orange', 'yellow','lime','aqua'],
    //     textStyle:{
    //         color:'#fff'
    //     }
    // },
    series : [
        {
            name: '广西',
            type: 'map',
            roam: true,
            hoverable: false,
            mapType: '广西',
            itemStyle:{
                normal:{
                    borderColor:'rgba(100,149,237,1)',
                    borderWidth:1.2,
                    areaStyle:{
                        color: '#1b1b1b'
                    },
                    label:{
                    	show:true,
                    	textStyle:{
                    		color:'#fff',
                    		fontSize:13
                    	}
                    }
                },
            },
            data:[],
            geoCoord: {
				'防城港': [108.36114,21.69305], 
                '南宁': [108.37296,22.82381],
                '桂林': [110.18622,25.24184],
                '柳州': [109.43446,24.33277],
                '北海': [109.12678,21.48709],
                '钦州': [108.66095,21.98657], 
                '百色': [106.62483,23.90807], 
                '崇左': [107.37147,22.38306], 
                '梧州': [111.28547,23.48261], 
                '贺州': [111.57377,24.41010],
                '北流市': [110.36047,22.71405],
                '武鸣区': [108.28177,23.1648],     
                '玉州区': [110.15715,22.63478],
                '兴业县': [109.88178,22.74217],
                '田阳县': [106.92209,23.74189],
                '田东县': [107.13242,23.60299],
                '东兴市': [107.97832,21.55396],
                '象州县': [109.71133,23.97995],
            }
        },
        {
            name: '金融开放门户"一轴两翼"空间布局',
            type: 'map',
            mapType: '广西',
            data:[],
            markLine : {
                smooth:true,
                symbol: ['none', 'circle'],
                effect : {
                    show: true,
                    scaleSize: 0.5,
                    period: 30,
                    color: '#fff',
                    shadowBlur: 10
                },
                itemStyle : {
                    normal: {
                        color:'#fff',
                        borderWidth:10,
                        borderColor:'rgba(30,144,255,1)'
                    }
                },
                data : [
                	[{name:'南宁'}, {name:'钦州'}],
                    [{name:'钦州'}, {name:'防城港'}],
                    [{name:'防城港'}, {name:'崇左'}],
                    [{name:'崇左'}, {name:'百色'}],
                    [{name:'贺州'}, {name:'梧州'}],
                    [{name:'梧州'}, {name:'南宁'}],  
                ],
            }
        },
        {
            name: '金融开放门户"一轴两翼"空间布局',
            type: 'map',
            mapType: '广西', 
            data:[],
            markLine : {
                smooth:true,
                symbol: ['none', 'circle'],
                effect : {
                    show: true,
                    scaleSize: 0.35,
                    period: 30,
                    color: '#fff',
                    shadowBlur: 10
                },
                itemStyle : {
                    normal: {
                        color:'#fff',
                        borderWidth:20,
                        borderColor:'rgba(255,165,0,1)'
                    }
                },
                data : [
               		[{name:'北海'}, {name:'南宁'}],
               		[{name:'南宁'}, {name:'桂林'}]
                ]
            },
            markPoint : {
                symbol:'emptyCircle',
                symbolSize : function (v){
                    return 10 + v/10
                },
                effect : {
                    show: true,
                    shadowBlur : 0
                },
                itemStyle:{
                    normal:{
                        label:{show:false}
                    },
                    emphasis: {
                        label:{position:'top'}
                    }
                },
                data : [
                    {name:'南宁',value:90},
                    {name:'防城港',value:40},
                    {name:'崇左',value:40},
                    {name:'桂林',value:40},
                    {name:'北海',value:40},
                    {name:'百色',value:40},
                    {name:'梧州',value:40},
                    {name:'贺州',value:40},
                    {name:'钦州',value:40}
                ]
            }
        },
        {
            name: '全国首批"两权"抵押贷款试点地区',
            type: 'map',
            mapType: '广西', 
            data:[],
            markPoint : {
                symbol:'emptyCircle',
                symbolSize : function (v){
                    return 10 + v/10
                },
                effect : {
                    show: true,
                    shadowBlur : 5
                },
                itemStyle:{
                    normal:{
                        label:{
                        	show:true,
                        	textStyle:{
                        		color:'#fff',
                        		fontSize:10
                        	}
                        }
                    },
                    emphasis: {
                        label:{position:'top'}
                    }
                },
                data : [
                    {name:'武鸣区',value:0},
                    {name:'玉州区',value:0},
                    {name:'北流市',value:0},
                    {name:'兴业县',value:0},
                    {name:'田阳县',value:0},
                    {name:'田东县',value:0},
                    {name:'东兴市',value:0},
                    {name:'象州县',value:0}
                ]
            }
        }
    ]
};

chart1.setOption(option);
 $(window).resize(function() {
            chart1.resize();
			           
        });   
		
		
		});
