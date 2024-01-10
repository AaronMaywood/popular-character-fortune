<script setup>
import SNSButtons from '@/components/SNSButtons.vue';
import Footer from '@/components/Footer.vue';
</script>

<template>
	<div id="wrapper">
		<router-view />
		<SNSButtons />
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
	<Footer />
</template>
