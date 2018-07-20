<template>
	<h2>{{ page.title }}<span>{{ page.subtitle}}</span></h2>
</template>

<script>
export default {
	name: 'menutitle',
	props: {
		page: {
			type: Object,
			default () {
				return {
					title: '페이지 타이틀',
					subtitle: '페이지 서브타이틀'
				}
			}
		}
	}

}
</script>

<style lang="scss" scoped>
h2{font-weight:bold; font-size:20px;
	span{font-size:14px; padding-left:5px;}
}
</style>
