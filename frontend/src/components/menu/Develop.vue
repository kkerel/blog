<template>
	<div id="container">
		<div class="main_widget">
			<div class="main_inner_widget">
				<div class="section_widget">
					<ui-menutitle :page="page"></ui-menutitle>
				</div>
				<div class="section_widget section_margin">
					<div class="section_inner_wrap">
						<div class="visual"></div>
						<ui-board :listData="lData"></ui-board>
					</div>
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
				title: '개발',
				subtitle: 'Develop'
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
			this.ajaxGet('/static/data/develop.json','', listRes,listError)
		},
	}
}
</script>

<style lang="scss" scoped>
.section_inner_wrap{
	.visual{width:100%; height:360px; background:url('../../assets/image/common/visual_03.jpg') center center no-repeat; margin-bottom:20px;}
}
</style>
