<script setup>
import { useGlobalStore } from "@/stores/global";
const store = useGlobalStore();
</script>

<template>
	<footer>
		<p>&copy; {{ store.year }} ADjust Co.,Ltd. All Right Reserved.</p>
	</footer>
</template>
