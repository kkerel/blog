<template>
	<aside>
		<h1>June Blog</h1>
		<nav>
			<ul>
				<li>
					<router-link v-bind:to="{ name: 'Home' }">
						<span class="title">홈</span>
					</router-link>
				</li>
				<li>
					<router-link v-bind:to="{ name: 'Profile' }">
						<span class="title">프로필</span>
					</router-link>
				</li>
				<li>
					<router-link v-bind:to="{ name: 'Referencedata' }">
						<span class="title">참고자료</span>
					</router-link>
				</li>
				<li>
					<router-link v-bind:to="{ name: 'Publishing' }">
						<span class="title">퍼블리싱</span>
					</router-link>
				</li>
				<li>
					<router-link v-bind:to="{ name: 'Develop' }">
						<span class="title">개발</span>
					</router-link>
				</li>
			</ul>
		</nav>
	</aside>
</template>

<script>

export default {
	name: 'Aside',
	components: {},
	data () {
		return {}
	}
}
</script>

<style lang="scss" scoped>
$main-color:#323c48;
$basic-color:#fff;
h1{border-bottom: 1px solid #757e89; height: 60px; line-height: 60px; text-align: center; font-size: 18px;}
aside{ position: fixed; top: 0px; left: 0px; z-index: 10; width: 250px; height: 100%; background: $main-color; color:$basic-color;
	ul{
		li{
			a{height:60px; line-height:60px; display:block; padding-left:45px; color:#757e89; border-bottom:1px solid #757e89; font-size:12px; letter-spacing:1px; background:url('../../assets/image/icon/aside_off_i.png') 20px center no-repeat;
				&:hover{color:$basic-color; background:#2b343f url('../../assets/image/icon/aside_on_i.png') 20px center no-repeat;}
			}
			.router-link-exact-active{color:$basic-color; background:#2b343f url('../../assets/image/icon/aside_on_i.png') 20px center no-repeat; border-right:5px solid #fff;}
		}
	}
}
/* 반응형 */
@media all and (max-width: 768px) {
	aside{width:100%; position:static;
		ul{width:100%; display:table;
			li{width:20%; display:table-cell;
				a{text-align:center; padding-left:0px;}
				.router-link-exact-active{border-right:0px; border-bottom:5px solid #fff;}
			}
		}
	}
}
@media all and (min-width: 768px) and (max-width: 1024px) {
	aside{width:100%; position:static;
		ul{width:100%; display:table;
			li{width:20%; display:table-cell;
				a{text-align:center; padding-left:0px;}
				.router-link-exact-active{border-right:0px; border-bottom:5px solid #fff;}
			}
		}
	}
}
</style>
