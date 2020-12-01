<!--  -->
<template>
	<div class="barbox">
		<dv-border-box-11 class="box">
			<!-- <dv-full-screen-container> -->
				<dv-loading>Loading...</dv-loading>
				<dv-decoration-5 style="width:300px;height:40px;" />
				<dv-decoration-1 style="width:200px;height:50px;" />
				<dv-decoration-5 style="width:300px;height:40px;" />
				<dv-decoration-1 style="width:200px;height:50px;" />
				<dv-decoration-5 style="width:300px;height:40px;" />
				<dv-decoration-1 style="width:200px;height:50px;" />

				<dv-decoration-9 style="width:150px;height:150px;">66%</dv-decoration-9>
				<dv-decoration-11 style="width:200px;height:60px;">dv-decoration-11</dv-decoration-11>
				<dv-decoration-12 style="width:150px;height:150px;"></dv-decoration-12>
				<!-- 桃花运 -->
				<dv-charts :option="option" style="width:300px;height:300px;" />
				<dv-active-ring-chart :config="configBar" style="width:300px;height:300px" />
				<dv-capsule-chart :config="configBar" style="width:300px;height:200px" class="row-data-bar"/>
				<!-- 水位图 -->
				<dv-water-level-pond :config="configWater" style="width:150px;height:200px" />
				<!-- 进度池 -->
				<dv-percent-pond :config="configProgress" style="width:200px;height:100px;" />
				<!-- 飞线图 -->
				<!-- <dv-flyline-chart-enhanced :config="config" style="width:100%;height:100%;" /> -->
				<!-- 锥形图 -->
				<dv-conical-column-chart :config="configCone" style="width:400px;height:200px;margin-top:-230px;"/>
			<!-- </dv-full-screen-container> -->
		</dv-border-box-11>
	</div>
</template>
<script>
export default {
	data() {
		return {
			option:{
				title: {
					text: '你的桃花运',
					style: {
						fill: '#fff'
					}
				},
				series: [
					{
						type: 'gauge',
						data: [ { name: 'itemA', value: 99 } ],
						center: ['50%', '55%'],
						axisLabel: {
						formatter: '{value}%',
						style: {
							fill: '#fff'
						}
					},
					axisTick: {
						style: {
							stroke: '#fff'
						}
					},
						animationCurve: 'easeInOutBack'
					}
				]
			},

			configBar:{
				data: [
					{
						name: '周口',
						value: 55
					},
					{
						name: '南阳',
						value: 120
					},
					{
						name: '西峡',
						value: 78
					},
					{
						name: '驻马店',
						value: 66
					},
					{
						name: '新乡',
						value: 80
					}
				],
				digitalFlopStyle: {
					fontSize: 25,
					fill: 'rgb(13,231,194)'
				},
				colors: ['#e062ae', '#fb7293', '#e690d1', '#32c5e9', '#96bfff'],
				unit: '单位',
				showValue: true
			},
			
			configWater: {
				data: [66],
				shape: 'roundRect',
			},
			configProgress: {
				value: 66,
				borderWidth: 5,
				borderRadius: 10,
				borderGap: 5
			},
			configCone:{
				data: [
				{
					name: '周口',
					value: 55
				},
				{
					name: '南阳',
					value: 120
				},
				{
					name: '西峡',
					value: 71
				},
				{
					name: '驻马店',
					value: 66
				},
				{
					name: '新乡',
					value: 80
				},
				{
					name: '信阳',
					value: 35
				},
				{
					name: '漯河',
					value: 15
				}
			],
			img: [
				'http://datav.jiaminghi.com/img/conicalColumnChart/1st.png',
				'http://datav.jiaminghi.com/img/conicalColumnChart/2st.png',
				'http://datav.jiaminghi.com/img/conicalColumnChart/3st.png',
				'http://datav.jiaminghi.com/img/conicalColumnChart/4st.png',
				'http://datav.jiaminghi.com/img/conicalColumnChart/5st.png',
				'http://datav.jiaminghi.com/img/conicalColumnChart/6st.png',
				'http://datav.jiaminghi.com/img/conicalColumnChart/7st.png',
			],
			showValue: true
			}
		}
	}
}
</script>

<style>
	.barbox {
		margin: 0 auto;
		margin-left:10px;
		width: 1500px;
	}
	.box {
		width: 100%;
	}
	div.dv-decoration-1,div.dv-decoration-5 {
		display: inline-block;
	}
	div{
		/* display: block; */
		float: left !important;
	}


	div.dv-charts-container {
		display: inline;
	}

	.row-data-bar {
		margin-top: 45px;
	}
</style>