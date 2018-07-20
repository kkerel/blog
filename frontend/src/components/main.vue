<template>
	<div>
		<div id="main_section">
			<!-- <ui-header/> -->
			<ui-aside/>
			<router-view/>
			<ui-footer/>
		</div>
	</div>
</template>

<script>

// import Header from '@/components/layout/Header'
import Aside from '@/components/layout/Aside'
import Footer from '@/components/layout/Footer'

export default {
	name: 'main',
	components: {
		// 'ui-header': Header,
		'ui-aside': Aside,
		'ui-footer': Footer
	},
	data () {
		return {
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
</style>
