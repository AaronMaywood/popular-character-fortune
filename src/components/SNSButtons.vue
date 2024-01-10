<script setup>
import { ref, onMounted, onBeforeUpdate, onUpdated } from "vue";
import { useGlobalStore } from '@/stores/global'
const store = useGlobalStore()
const base_url = store.base_url
const data_url = ref(`${base_url}`); // 共有する占いトップページのURL
</script>

<template>
	<div id="wrapper">
		<!--
		<div id="template" :class="props.birthNumber"></div>
		-->
		<div id="fb-root"></div>
		<div id="snsbtnArea" class="clearfix">
			<div id="snsbtnArea-in">
				<!-- LINE Send Button -->
				<div
					class="line-it-button"
					:data-url="data_url"
					data-lang="ja"
					data-type="share-a"
					data-env="REAL"
					data-color="default"
					data-size="small"
					data-count="false"
					data-ver="3"
					style="display: none"
				></div>
				<!-- X Tweet Button -->
				<a
					href="https://twitter.com/share?ref_src=twsrc%5Etfw"
					data-text="流行りキャラ占い"
					:data-url="data_url"
					class="twitter-share-button"
					data-show-count="false"
					>Tweet</a
				>
				<!-- Facebook Share Button -->
				<div
					class="fb-share-button"
					:data-href="data_url"
					data-layout="button"
				></div>
			</div>
		</div>
	</div>
</template>
