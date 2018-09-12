<template>
	<div class="board_wrap">
		<table cellpadding="0" cellspacing="0" border="0">
			<colgroup>
				<col width="85%">
				<col width="15%">
			</colgroup>
			<tr>
				<th>제목</th>
				<th>날짜</th>
			</tr>
			<tr v-for="(item, index) in listData">
				<td class="title"><a :href="item.link" target="_blank">{{ item.title }}</a></td>
				<td><a href="" target="_blank">{{ item.data }}</a></td>
			</tr>
		</table>
	</div>
</template>

<script>

export default {
	name: 'board',
	components: {},
	data () {
		return {
		}
	},
	props: {
		listData:{}
	}
}
</script>

<style lang="scss" scoped>
$color-type01:#dcdfe5; // border색상
$color-type02:#e9ecf3; // bg색상
$color-type03:#323c48; // 상단 포인트색상
.board_wrap{border-radius:2px;
	table{width:100%; border-left:1px solid $color-type01;
		th{background:$color-type02; border-top:2px solid $color-type03; color:$color-type03; border-right:1px solid $color-type01; border-bottom:1px solid $color-type01; height:50px; line-height:50px; text-indent:10px; font-weight:bold;}
		td{height:50px; line-height:50px; border-bottom:1px solid $color-type01; border-right:1px solid $color-type01; padding:0px 10px;
			a{font-size:14px; display:block;}
			&.title{
				a{
					&:hover{color:#00b3a5;}
				}
			}
		}
	}
}
</style>
