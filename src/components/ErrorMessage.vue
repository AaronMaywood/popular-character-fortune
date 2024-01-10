<script setup>
import TryAgainButton from '@/components/TryAgainButton.vue'
const props = defineProps({
  msg: String
})
</script>

<template>
	<h1 class="error">{{ msg }}</h1>
	<TryAgainButton />
</template>

<style scoped>
h1.error {
	display: flex;
	align-items: center;
	height: 10rem;
	font-size: 1.5rem;
	color: white;
}
</style>
