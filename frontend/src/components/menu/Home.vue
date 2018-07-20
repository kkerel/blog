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
						<p>본 블로그는 코드 포스팅 및 개인 용도로 만들어 졌으며.</p>
						<p>Vue.js로 작업이 되었으며 추가적인 컴포넌트 작업으로 기능과 용도별 페이지를 늘려갈 계획</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import menutitle from '@/components/ui/menutitle'

export default {
	name: 'Home',
	components: {
		'ui-menutitle': menutitle
	},
	data () {
		return {
			page: {
				title: '홈',
				subtitle: 'Home'
			}
		}
	}
}
</script>

<style lang="scss" scoped>
.section_inner_wrap{
	.visual{width:100%; height:229px; background:url('../../assets/image/common/visual_01.jpg') center center no-repeat; margin-bottom:20px;}
	p{color:#ff0006; font-size:12px; line-height:1.5; text-align:center;}
}
</style>
