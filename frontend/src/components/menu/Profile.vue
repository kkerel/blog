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
						<div class="info_wrap">
							<div class="title">이름</div>
							<div class="info">임준수</div>
						</div>
						<div class="info_wrap">
							<div class="title">생년월일</div>
							<div class="info">1991년 12월 9일(양력) 양띠</div>
						</div>
						<div class="info_wrap">
							<div class="title">보유스킬</div>
							<div class="info">html,css,html5,css3,javascript,jquery</div>
						</div>
						<div class="info_wrap">
							<div class="title">응용스킬</div>
							<div class="info">scss,require.js(프로젝트1개 진행),webpack,node.js,vue(프로젝트2개 퍼블리싱)</div>
						</div>
						<div class="info_wrap">
							<div class="title">휴대전화</div>
							<div class="info">010-5558-0087</div>
						</div>
						<div class="info_wrap">
							<div class="title">메일</div>
							<div class="info">junesu_1104@naver.com</div>
						</div>
						<div class="info_wrap">
							<div class="title">취미</div>
							<div class="info">웹 관련 검색 · 축구 · 자전거 · 스노우보드 · 서핑</div>
						</div>
						<div class="info_wrap">
							<div class="title">프로젝트 이력</div>
							<div class="info">
								<ul>
									<li><a href="http://fb.pickdata.co.kr/#/" target="_blank">pickdata (솔루션) - http://fb.pickdata.co.kr/</a></li>
									<li><a href="https://kkerel.github.io/creativelibrary/" target="_blank">creative library - https://kkerel.github.io/creativelibrary/</a></li>
									<li><a href="https://www.bigcial.com/#/signin" target="_blank">bigsical (솔루션) - https://www.bigcial.com/#/signin</a></li>
									<li><a href="http://junesu91.dothome.co.kr/" target="_blank">굿다이렉트 - http://junesu91.dothome.co.kr/</a></li>
									<li><a href="http://www.lottosport.co.kr/" target="_blank">로또스포츠 - http://www.lottosport.co.kr</a></li>
									<li><a href="http://www.mulawear.com/" target="_blank">뮬라웨어 (한국어) - http://www.mulawear.com</a></li>
									<li><a href="http://cn.mulawear.com/" target="_blank">뮬라웨어 (중어) - http://cn.mulawear.com</a></li>
									<li><a href="http://en.mulawear.com/" target="_blank">뮬라웨어 (영어) - http://en.mulawear.com</a></li>
									<li><a href="http://jp.mulawear.com/" target="_blank">뮬라웨어 (일어) - http://jp.mulawear.com</a></li>
									<li><a href="http://uriseed.imarketing.kr" target="_blank">우리꽃 - http://uriseed.imarketing.kr</a></li>
									<li><a href="http://www.wakorea.kr/" target="_blank">완도전복주식회사 - http://www.wakorea.kr</a></li>
									<li><a href="http://nh702849.firstmall.kr/main/index" target="_blank">문경유통센터 - http://nh702849.firstmall.kr/main/index</a></li>
									<li><a href="http://www.swmp.co.kr/" target="_blank">SWMP - http://www.swmp.co.kr/</a></li>
									<li><a href="http://daegujangter.com/main/index/" target="_blank">대구장터 - http://daegujangter.com/main/index</a></li>
									<li><a href="http://cys15.firstmall.kr/page/index?tpl=etc%2Fnew_page.html" target="_blank">스와로브스키 - http://cys15.firstmall.kr/page/index?tpl=etc%2Fnew_page.html</a></li>
									<li><a href="http://www.gumzzibra.co.kr/index.html" target="_blank">금찌브라 - http://www.gumzzibra.co.kr/index.html</a></li>
									<li><a href="http://www.veracity.co.kr/" target="_blank">베라시티 - http://www.veracity.co.kr</a></li>
									<li><a href="http://shop.moblo.co.kr/" target="_blank">모블로 - http://shop.moblo.co.kr</a></li>
									<li><a href="http://multinet.imarketing.kr/" target="_blank">멀티네트 - http://multinet.imarketing.kr</a></li>
									<li><a href="http://www.gumzzi.co.kr/index.html" target="_blank">금찌 - http://www.gumzzi.co.kr/index.html</a></li>
									<li><a href="http://www.probioticslab.com/main/index" target="_blank">김석진연구소 - http://www.probioticslab.com/main/index</a></li>
									<li><a href="http://hjretail.co.kr/" target="_blank">호전리테일 - http://hjretail.co.kr/</a></li>
									<li><a href="http://www.rakping.com/main/index" target="_blank">락핑 - http://www.rakping.com/main/index</a></li>
									<li><a href="http://www.jayemaeul.co.kr/" target="_blank">자연마을 - http://www.jayemaeul.co.kr/</a></li>
									<li><a href="http://www.janecouture.co.kr/" target="_blank">제인꾸뛰르 - http://www.janecouture.co.kr/</a></li>
									<li><a href="http://www.bodyup.co.kr/shop/main/index.php" target="_blank">마띠에르 - http://www.bodyup.co.kr/shop/main/index.php</a></li>
									<li><a href="http://www.saygolf.co.kr/" target="_blank">세이골프 - http://www.saygolf.co.kr/</a></li>
									<li><a href="http://www.pgsilk.com/pgsilk/store_home.html" target="_blank">풍기인견 - http://www.pgsilk.com/pgsilk/store_home.html</a></li>
									<li><a href="http://shop.moblo.co.kr/m/" target="_blank">모블로 M - http://shop.moblo.co.kr/m/</a></li>
									<li><a href="http://www.swmp.co.kr/mobile/index.html" target="_blank">SWMP M - http://www.swmp.co.kr/mobile/index.html</a></li>
									<li><a href="http://m.greencar.co.kr/" target="_blank">그린카 M - http://m.greencar.co.kr/</a></li>
									<li><a href="http://m.wakorea.kr/" target="_blank">완도전복주식회사 M - http://m.wakorea.kr/</a></li>
									<li><a href="http://shop.silktherapy.co.kr/m/" target="_blank">실크테라피 M - http://shop.silktherapy.co.kr/m/</a></li>
									<li><a href="http://m.saygolf.co.kr/" target="_blank">세이골프 M - http://m.saygolf.co.kr/</a></li>
									<li><a href="http://m.daegujangter.com/main/index" target="_blank">대구장터 M - http://m.daegujangter.com/main/index</a></li>
									<li><a href="http://www.nibbuns.co.kr/m/" target="_blank">니쁜스 M - http://www.nibbuns.co.kr/m/</a></li>
									<li><a href="http://www.gumzzi.co.kr/m/" target="_blank">금찌 M - http://www.gumzzi.co.kr/m/</a></li>
									<li><a href="http://ulvine.com/m2/" target="_blank">얼바인 M - http://ulvine.com/m2/</a></li>
								</ul>
							</div>
						</div>
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
				title: '프로필',
				subtitle: 'Profile'
			}
		}
	}
}
</script>

<style lang="scss" scoped>
.section_inner_wrap{
	p{line-height:1.5;}
	.info_wrap{width:100%; display:table; line-height:2; font-size:12px;
		.title{width:120px; padding:5px 0px; display:table-cell; font-size:16px;}
		.info{display:table-cell; font-size:16px;}
	}
	.visual{width:100%; height:300px; background:url('../../assets/image/common/visual_02.jpg') center center no-repeat; margin-bottom:20px;}
}
</style>
