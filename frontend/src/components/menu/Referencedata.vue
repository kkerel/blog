<template>
	<div id="container">
		<div class="main_widget">
			<div class="main_inner_widget">
				<div class="section_widget">
					<ui-menutitle :page="page"></ui-menutitle>
				</div>
				<div class="section_widget section_margin">
					<ui-board :listData="lData"></ui-board>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import menutitle from '@/components/ui/menutitle'
import board from '@/components/ui/board'

export default {
	name: 'Home',
	components: {
		'ui-menutitle': menutitle,
		'ui-board': board
	},
	mounted() {
		this.listAjax()
	},
	data () {
		return {
			page: {
				title: '참고자료',
				subtitle: 'Reference data'
			},
			lData:{}
		}
	},
	methods:{
		ajaxGet (url,param,callBack,errCallBack) {
			this.$http.get(url, {
				params: param
			})
			.then(res => {
				callBack(res)
			})
			.catch(err => {
				errCallBack()
			})
		},
		listAjax () {
			const me = this
			let listRes = function(data) {
				me.lData = data.data
			}
			let listError = function() {
			}
			this.ajaxGet('/static/data/sampleData.json','', listRes,listError)
		},
	}
}
</script>

<style lang="scss" scoped>
</style>
