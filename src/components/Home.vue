<script setup>
import { ref } from "vue";
import { useGlobalStore } from "@/stores/global";
const store = useGlobalStore()
const alt1 = ref(`HAPPY NEW YEAR ${store.year.value}!!`);
const alt2 = ref(`${store.year.value}年のあなたの運勢がわかる！！「流行りキャラ占い」`);
</script>

<template>
	<div>
		<header>
			<h1>
				<img
					src="/images/h1_img01.png"
					:alt="alt1"
					width="780"
					height="140"
				/>
			</h1>
			<p>
				<img
					src="/images/h2_img01.png"
					width="780"
					height="90"
					alt="今年もよろしくお願いいたします。"
				/><img
					class="mt15"
					src="/images/text_img.png"
					width="780"
					height="180"
					alt="年の初めはアジャスト「流行りキャラ占い」で今年の運勢を占ってみませんか？あなたはどんな「流行りキャラ」?"
				/>
			</p>
		</header>
		<article id="mainContent">
			<section class="uranai-form mb15">
				<h1>
					<img
						class="mb10"
						src="/images/title_img.png"
						width="770"
						height="246"
						:alt="alt2"
					/>
				</h1>
				<p class="mb20">
					<img
						src="/images/text_img02.png"
						width="418"
						height="40"
						alt="生年月日を入力してください。"
					/>
				</p>
				<slot></slot>
			</section>
		</article>
	</div>
</template>
