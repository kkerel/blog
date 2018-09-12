<template>
	<aside>
		<h1>Junesu Blog</h1>
		<nav>
			<input type="checkbox" class="openSidebarMenu" id="openSidebarMenu">
			<label for="openSidebarMenu" class="sidebarIconToggle">
				<div class="spinner diagonal part-1"></div>
				<div class="spinner horizontal"></div>
				<div class="spinner diagonal part-2"></div>
			</label>
			<div id="sidebarMenu">
				<ul class="sidebarMenuInner">
					<li>
						<router-link v-bind:to="{ name: 'Home' }">
							<span class="title">HOME</span>
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
			</div>
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
	#openSidebarMenu{display:none;}
	ul{
		li{
			a{height:60px; line-height:60px; display:block; padding-left:45px; color:#fff; border-bottom:1px solid #757e89; font-size:12px; letter-spacing:1px; background:url('../../assets/image/icon/aside_off_i.png') 20px center no-repeat;
				&:hover{color:$basic-color; background:#2b343f url('../../assets/image/icon/aside_on_i.png') 20px center no-repeat;}
			}
			.router-link-exact-active{color:$basic-color; background:#2b343f url('../../assets/image/icon/aside_on_i.png') 20px center no-repeat; border-right:5px solid #fff;}
		}
	}
}
/* 반응형 */
@media all and (max-width: 768px) {
	aside{width:100%; height:auto;
		#sidebarMenu {height: 100%; position: fixed; left: 0; width: 50%; transform: translateX(-100%); transition: transform 250ms ease-in-out; background: linear-gradient(900deg, #757e89 0%, #000 100%);}
		.sidebarMenuInner{ margin:0; padding:0; border-top: 1px solid rgba(255, 255, 255, 0.10);}
		input[type="checkbox"]:checked ~ #sidebarMenu { transform: translateX(0); }
		input[type=checkbox] {transition: all 0.3s; box-sizing: border-box; display: none;}
		.sidebarIconToggle {transition: all 0.3s; box-sizing: border-box; cursor: pointer; position: absolute; z-index: 99; height: 100%; width: 100%; top: 22px; left: 15px; height: 22px; width: 22px;}
		.spinner { transition: all 0.3s; box-sizing: border-box; position: absolute; height: 3px; width: 100%; background-color: #fff; }
		.horizontal { transition: all 0.3s; box-sizing: border-box; position: relative; float: left; margin-top: 3px; }
		.diagonal.part-1 { position: relative; transition: all 0.3s; box-sizing: border-box; float: left; }
		.diagonal.part-2 { transition: all 0.3s; box-sizing: border-box; position: relative; float: left; margin-top: 3px; }
		input[type=checkbox]:checked ~ .sidebarIconToggle > .horizontal { transition: all 0.3s; box-sizing: border-box; opacity: 0; }
		input[type=checkbox]:checked ~ .sidebarIconToggle > .diagonal.part-1 { transition: all 0.3s; box-sizing: border-box; transform: rotate(135deg); margin-top: 8px; }
		input[type=checkbox]:checked ~ .sidebarIconToggle > .diagonal.part-2 { transition: all 0.3s; box-sizing: border-box; transform: rotate(-135deg); margin-top: -9px;}
		
	}
}
@media all and (min-width: 768px) and (max-width: 1024px) {
	aside{width:100%; height:auto;
		ul{
			li{width:20%; float:left; background:#323c48;
				.router-link-exact-active{border-right:0px; border-bottom:2px solid #fff;}
			}
		}
	}
}
</style>
