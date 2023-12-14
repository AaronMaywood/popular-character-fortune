<script setup>
import { ref, onMounted, onBeforeUpdate, onUpdated } from "vue";

const props = defineProps({
	birthNumber: Number,
});

function createSNSScripts(){
	const line = document.createElement('script')
	line.src = "https://www.line-website.com/social-plugins/js/thirdparty/loader.min.js";
	line.async = true;
	line.defer = true;
	const x = document.createElement('script')
	x.src = 'https://platform.twitter.com/widgets.js';
	x.charset = 'utf-8';
	x.async = true;
	x.defer = true;
	const facebook = document.createElement('script')
	facebook.src = 'https://connect.facebook.net/ja_JP/sdk.js#xfbml=1&version=v18.0'
	facebook.async = true;
	facebook.defer = true;
	facebook.crossOrigin="anonymous"
	facebook.nonce="VuGw4kxk"
	const snsScripts = document.querySelector('#sns-scripts')
	snsScripts.appendChild(line)
	snsScripts.appendChild(x)
	snsScripts.appendChild(facebook)
}

const url = ref('')

/*
function onHashChange() {
	url.value = location.href
}
window.addEventListener("hashchange", onHashChange);
onHashChange()
*/

const template = `
	<div id="fb-root"></div>
	<div id="snsbtnArea" class="clearfix">
		<div id="snsbtnArea-in">
			<!-- LINE Send Button -->
<!--
				v-bind:data-url="url"
-->
			<div
				class="line-it-button"
				data-lang="ja"
				data-type="share-a"
				data-env="REAL"
				data-color="default"
				data-size="small"
				data-count="true"
				data-ver="3"
				style="display: none"
			></div>
			<!-- X Tweet Button -->
			<a
				href="https://twitter.com/share?ref_src=twsrc%5Etfw"
				class="twitter-share-button"
				data-show-count="false"
				>Tweet</a
			>
			<!-- Facebook Share Button -->
			<div
				v-bind:data-href="url"
				class="fb-share-button"
				data-layout="button_count"
				data-size="small"
			>
				<!--
u=https%3A%2F%2Fnenga.adjust.ne.jp%2F&amp;
		-->
				<a
					target="_blank"
					href="https://www.facebook.com/sharer/sharer.php?src=sdkpreparse"
					class="fb-xfbml-parse-ignore"
					>シェアする</a
				>
			</div>
			<div id="sns-scripts"></div>
		</div>
	</div>
`

onMounted(() => {
	console.log('onMounted');
	const temp = document.querySelector('#template')
	temp.innerHTML = template;
	createSNSScripts()
});

onBeforeUpdate(()=>{
	console.log('onBeforeUpdate');
	const temp = document.querySelector('#template')
	temp.innerHTML = ''
});

onUpdated(()=>{
	console.log('onUpdated');
	const temp = document.querySelector('#template')
	temp.innerHTML = template;
	createSNSScripts()
});
</script>

<template>
	<div id="template" :class="props.birthNumber"></div>
</template>
