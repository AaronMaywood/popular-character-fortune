<script setup>
import { ref, computed, onMounted } from "vue";
import {
	updateOGP,
	year,
	GA4pageview,
	updateTitle,
	calcBirthNumber,
	database,
} from "./util.js";
import Home from "./components/Home.vue";
import Enter from "./components/Enter.vue";
import Result from "./components/Result.vue";
import SNSButtons from "./components/SNSButtons.vue";

const thisYear = ref(year);
const isResult = ref(false);
const birthNumber = ref(0);

onMounted(() => updateOGP());

function fortune(e) {
	goFortune(calcBirthNumber(e.year, e.month, e.day));
}

function goTop(isFirstView = false) {
	isResult.value = false;
	birthNumber.value = 0;
	window.location.hash = "";
	window.scroll(0, 0);
	updateTitle(`${year}年流行りキャラ占い`);
	if (!isFirstView) {
		GA4pageview(`${year}年流行りキャラ占い`, "/");
	}
}

function goFortune(bn, isFirstView = false) {
	birthNumber.value = bn;
	isResult.value = true;
	window.location.hash = birthNumber.value;
	window.scroll(0, 0);
	updateTitle(
		`${year}年流行りキャラ占い ${database[birthNumber.value - 1].title}`
	);
	if (!isFirstView) {
		GA4pageview(
			`${year}年流行りキャラ占い ${
				database[birthNumber.value - 1].title
			}`,
			`/${window.location.hash}`
		);
	}
}

function onHashChange(isFirstView = false) {
	const hash = window.location.hash;
	const bn = Number(hash.replace("#", ""));
	// ハッシュの値が妥当な誕生数なら占い結果ページを表示
	if (1 <= bn && bn <= 9) {
		goFortune(bn, isFirstView);
	}
	// トップページを表示
	else {
		goTop(isFirstView);
	}

	// TODO SNSButtons の動的セット
	/*
	const sns = document.querySelector('#wheresnsbuttons')
	const snsbuttons = Vue.extend(SNSButtons)
	console.log(new snsbuttons)
	*/

	/*
	const 
		<SNSButtons />
		*/
}

window.addEventListener("hashchange", onHashChange);
onHashChange(true);
</script>

<template>
	<div id="wrapper">
		<!-- TODO HomeやResultコンポーネントに直接 v-if や v-show を設定できないので（できるはずなのだが...）仕方なくその親のdivを作成してそこに指定 -->
		<div v-show="!isResult">
			<Home>
				<Enter @fortune="fortune" />
			</Home>
		</div>
		<div v-show="isResult">
			<Result :birthNumber="birthNumber" @goTop="goTop" />
		</div>
		<SNSButtons :birthNumber="birthNumber" />
		<article class="banner clearfix mb10">
			<section class="bannerIn01">
				<p class="mb10">
					<a
						href="/images/pdf/oseibon2021.pdf"
						onclick="ga('send', 'event', 'download', 'pdf', 'oseibon2021.pdf');"
						target="_blank"
						><img
							src="/images/bn_img02.png"
							alt="お歳暮ん2021PDFダウンロード"
							width="780"
							height="150"
					/></a>
				</p>
				<p class="mb10">
					<a
						href="http://www.amazon.co.jp/%E3%81%8A%E6%AD%B3%E6%9A%AE%E3%82%93-%E7%B7%8F%E9%9B%86%E7%B7%A8-%E6%B8%A1%E9%82%8A-%E9%9A%86-ebook/dp/B00BV583E8/ref=sr_1_5?ie=UTF8&qid=1388038176&sr=8-5&keywords=%E3%81%8A%E6%AD%B3%E6%9A%AE%E3%82%93"
						target="_blank"
						><img
							src="/images/bn_img02_2.png"
							alt=""
							width="780"
							height="151"
					/></a>
				</p>
			</section>
			<section class="bannerIn02">
				<ul class="clearfix">
					<li class="bnrLeft">
						<a href="http://www.adjust.ne.jp/" target="_blank"
							><img
								src="/images/bn_img03.png"
								width="254"
								height="90"
						/></a>
					</li>
					<li class="bnrmagin bnrRight">
						<a href="https://strander.jp/" target="_blank"
							><img
								src="/images/bn_img09.png"
								width="254"
								height="90"
						/></a>
					</li>
					<li class="bnrLeft">
						<a href="http://honnomura.com/" target="_blank"
							><img
								src="/images/bn_img10.png"
								width="254"
								height="90"
						/></a>
					</li>
				</ul>
			</section>
			<section class="bannerIn03">
				<ul class="clearfix">
					<li class="bnrLeft">
						<a href="http://adjustacademy.com/" target="_blank"
							><img
								src="/images/bn_img07.png"
								width="254"
								height="90"
						/></a>
					</li>
					<li class="bnrmagin bnrRight">
						<a href="http://socialcast.jp/" target="_blank"
							><img
								src="/images/bn_img04.png"
								width="254"
								height="90"
						/></a>
					</li>
					<li class="bnrLeft">
						<a href="https://adjust.media/" target="_blank"
							><img
								src="/images/bn_img08.png"
								width="254"
								height="90"
						/></a>
					</li>
					<li class="bnrLeft">
						<a href="https://anytime.adjust.ne.jp/" target="_blank"
							><img
								src="/images/bn_img06.png"
								width="254"
								height="90"
						/></a>
					</li>
				</ul>
			</section>
		</article>
	</div>
	<footer>
		<p>&copy; {{ thisYear }} ADjust Co.,Ltd. All Right Reserved.</p>
	</footer>
</template>
