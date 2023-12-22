<script setup>
import { ref, computed } from "vue";
import { database } from "../util.js";

const props = defineProps({
	birthNumber: Number,
});

const emit = defineEmits(["goTop"]);

function onClick() {
	emit("goTop");
}

const fortune = computed(() => {
	if (props.birthNumber === 0) {
		return {
			title: "",
			img: {
				src: "",
				alt: "",
			},
			basicInfo: ``,
			fortune: ``,
			luckyWord: ``,
		};
	} else {
		return database[props.birthNumber - 1];
	}
});

const resultUrl = computed(() => {
	return `https://nenga.adjust.ne.jp/#${props.birthNumber}`;
});
</script>

<template>
	<div>
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
			<button id="btn" type="button" @click="onClick">
				<img
					src="/images/btn_img02.png"
					width="402"
					height="78"
					alt=""
					class="mb20"
				/>
			</button>
		</article>
	</div>
</template>
