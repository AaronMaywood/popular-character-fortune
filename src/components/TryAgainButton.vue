<script setup>
import { useRoute, useRouter } from 'vue-router'
import { useGlobalStore } from "@/stores/global";
const router = useRouter()
const store = useGlobalStore();

async function goHome() {
	await router.push('/');
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
