<template>
  <div>
	<!-- <dv-border-box-10 class="panel_box"> -->
		<div class="chart" id="container">图标</div>
	<!-- </dv-border-box-10> -->
	<button class='btn'>切换数据</button>
  </div>
</template>
<script>
//先导入charts
import Charts from '@jiaminghi/charts'
export default {
  data () {
    return {
			isoption: true,
			option1: {
				title: {
					text: '畅销饮料占比饼状图'
				},
				series: [
					{
						type: 'pie',
						data: [
							{ name: '可口可乐', value: 93 },
							{ name: '百事可乐', value: 32 },
							{ name: '哇哈哈', value: 65 },
							{ name: '康师傅', value: 44 },
							{ name: '统一', value: 52 },
						],
						insideLabel: {
							show: true
						},
						roseType: true
					}
				]
			},
			option2: {
				title: {
					text: '畅销饮料占比饼状图'
				},
				series: [
					{
						type: 'pie',
						data: [
							{ name: '可口可乐', value: 93 },
							{ name: '百事可乐', value: 32 },
							{ name: '哇哈哈', value: 65 },
							{ name: '康师傅', value: 44 }
						],
						insideLabel: {
							show: true
						}
					}
				]
			}
    }
  },
  mounted() {
		const option1 = this.option1;
		const option2 = this.option2;
		const container = document.getElementById('container')
		const myChart = new Charts(container)
		myChart.setOption(option1)
		document.querySelector('.btn').onclick = function() {
			if(this.isoption == true) {
				myChart.setOption(option1)
				this.isoption =! this.isoption
			} else {
				myChart.setOption(option2)
				this.isoption =! this.isoption
			}
		}

		window.addEventListener("resize", function() {
		myChart.resize();
		});
  },
}
</script>
<style scoped lang="scss">
  .chart{
    height: 240px;
    margin-left: 15px;
  }
  
  h2{
    height: 48px;
    color: white;
    font-size: 20px;
    font-weight: 400;
    text-align: center;
    line-height: 48px;
  }

	.btn {
		width: 100px;
		height: 100px;
		display: inline-block;
		background: pink;
		cursor: pointer;
	}
</style>