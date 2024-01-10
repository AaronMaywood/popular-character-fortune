<script setup>
import { useRoute, useRouter } from 'vue-router'
import { updateTitle, GA4pageview } from '@/util';
import { useGlobalStore } from "@/stores/global";
const router = useRouter()
const store = useGlobalStore();

async function goHome() {
	await router.push('/');
	window.scroll(0, 0);
	updateTitle(`${store.year}年流行りキャラ占い`);
	GA4pageview();
}
</script>

<template>
	<button id="btn" type="button" @click="goHome">
		<img
			src="/images/btn_img02.png"
			width="402"
			height="78"
			alt=""
			class="mb20"
		/>
	</button>
</template>
