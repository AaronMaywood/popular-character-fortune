<script setup>
import ErrorMessage from "@/components/ErrorMessage.vue";
import TryAgainButton from "@/components/TryAgainButton.vue";
import { ref } from "vue";
import { useRoute } from "vue-router";
import { useGlobalStore } from "@/stores/global";
const route = useRoute();
const store = useGlobalStore();

const isError = ref(true);

// 算出元のroute.params.bn はリアクティブ値ではないのでcompouted() とはしない
const fortune = (() => {
	const birthNumber = Number(route.params.birthNumber);

	if (
		birthNumber === undefined ||
		isNaN(birthNumber) ||
		birthNumber < 1 ||
		9 < birthNumber
	) {
		isError.value = true;
	} else {
		isError.value = false;
		return store.database[birthNumber - 1];
	}
})();
</script>

<template>
	<div>
		<div v-if="isError">
			<ErrorMessage
				:msg="'占いエラーが発生しました。「もう一度占う」をクリックして最初からから操作をやり直して下さい。'"
			/>
		</div>
		<div v-else>
			<header>
				<h1>
					<img
						src="/images/h1_img01.png"
						alt="HAPPY NEW YEAR"
						width="780"
						height="140"
					/>
				</h1>
			</header>
			<article id="mainContent">
				<section class="uranai-kekka mb25 pb10">
					<div class="uranai-kekka-innner">
						<div class="kekka">
							<img
								src="/images/title_img01.png"
								width="171"
								height="84"
								alt=""
							/>
						</div>
						<h1>
							<img
								:src="fortune.img.src"
								width="764"
								height="825"
								:alt="fortune.img.alt"
							/>
						</h1>
						<div id="animation-container">
							<img
								src="/images/bg_light.png"
								width="765"
								height="764"
								alt=""
							/>
						</div>
					</div>
					<div class="uranai-text">
						<h2>
							<img
								src="/images/h2_img01.gif"
								width="349"
								height="39"
								alt=""
							/>
						</h2>
						<p class="textLeft" v-html="fortune.basicInfo"></p>
						<h2>
							<img
								src="/images/h2_img02.gif"
								width="349"
								height="39"
								alt=""
							/>
						</h2>
						<p class="textLeft" v-html="fortune.fortune"></p>
						<h2>
							<img
								src="/images/h2_img03.gif"
								width="349"
								height="39"
								alt=""
							/>
						</h2>
						<p class="fSizeLL" v-html="fortune.luckyWord"></p>
					</div>
				</section>
				<TryAgainButton />
			</article>
		</div>
	</div>
</template>
