$(function() {

var chart1 = echarts.init(document.getElementById('main'), 'infographic');
	 var option = {
    backgroundColor: '#1b1b1b',
    color: ['gold','aqua','lime'],
    title : {
        text: '�������ڰ������չʾƽ̨',
        subtext:'\nģ������',
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
        data:['���ڿ����Ż�"һ������"�ռ䲼��','ȫ������"��Ȩ"��Ѻ�����Ե����'],
        selectedMode: 'single',
        selected:{
            'ȫ������"��Ȩ"��Ѻ�����Ե����' : false,
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
            name: '����',
            type: 'map',
            roam: true,
            hoverable: false,
            mapType: '����',
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
				'���Ǹ�': [108.36114,21.69305], 
                '����': [108.37296,22.82381],
                '����': [110.18622,25.24184],
                '����': [109.43446,24.33277],
                '����': [109.12678,21.48709],
                '����': [108.66095,21.98657], 
                '��ɫ': [106.62483,23.90807], 
                '����': [107.37147,22.38306], 
                '����': [111.28547,23.48261], 
                '����': [111.57377,24.41010],
                '������': [110.36047,22.71405],
                '������': [108.28177,23.1648],     
                '������': [110.15715,22.63478],
                '��ҵ��': [109.88178,22.74217],
                '������': [106.92209,23.74189],
                '�ﶫ��': [107.13242,23.60299],
                '������': [107.97832,21.55396],
                '������': [109.71133,23.97995],
            }
        },
        {
            name: '���ڿ����Ż�"һ������"�ռ䲼��',
            type: 'map',
            mapType: '����',
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
                	[{name:'����'}, {name:'����'}],
                    [{name:'����'}, {name:'���Ǹ�'}],
                    [{name:'���Ǹ�'}, {name:'����'}],
                    [{name:'����'}, {name:'��ɫ'}],
                    [{name:'����'}, {name:'����'}],
                    [{name:'����'}, {name:'����'}],  
                ],
            }
        },
        {
            name: '���ڿ����Ż�"һ������"�ռ䲼��',
            type: 'map',
            mapType: '����', 
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
               		[{name:'����'}, {name:'����'}],
               		[{name:'����'}, {name:'����'}]
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
                    {name:'����',value:90},
                    {name:'���Ǹ�',value:40},
                    {name:'����',value:40},
                    {name:'����',value:40},
                    {name:'����',value:40},
                    {name:'��ɫ',value:40},
                    {name:'����',value:40},
                    {name:'����',value:40},
                    {name:'����',value:40}
                ]
            }
        },
        {
            name: 'ȫ������"��Ȩ"��Ѻ�����Ե����',
            type: 'map',
            mapType: '����', 
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
                    {name:'������',value:0},
                    {name:'������',value:0},
                    {name:'������',value:0},
                    {name:'��ҵ��',value:0},
                    {name:'������',value:0},
                    {name:'�ﶫ��',value:0},
                    {name:'������',value:0},
                    {name:'������',value:0}
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
