<script setup>
import { ref } from 'vue'
</script>

<template>
	<div id="wrapper">
		<header>
			<h1>
				<img
					src="images/h1_img01.png"
					alt="HAPPY NEW YEAR 2023!!"
					width="780"
					height="140"
				/>
			</h1>
			<p>
				<img
					src="images/h2_img01.png"
					width="780"
					height="90"
					alt="今年もよろしくお願いいたします。"
				/><img
					class="mt15"
					src="images/text_img.png"
					width="780"
					height="180"
					alt="年の初めはアジャスト「流行りキャラ占い」で今年の運勢を占ってみませんか？あなたはどんな「流行キャラ」?"
				/>
			</p>
		</header>
		<article id="mainContent">
			<section class="uranai-form mb15">
				<h1>
					<img
						class="mb10"
						src="images/title_img.png"
						width="770"
						height="246"
						alt="2023年のあなたの運勢がわかる！！「流行りキャラ占い」"
					/>
				</h1>
				<p class="mb20">
					<img
						src="images/text_img02.png"
						width="418"
						height="40"
						alt="生年月日を入力してください。"
					/>
				</p>
				<form class="mb10">
					<p class="mb15">
						<input type="text" name="year" class="form-flam01" />
						年
					</p>
					<p class="mb15">
						<select name="month" class="form-flam02">
							<option value="1">1</option>
							<option value="2">2</option>
							<option value="3">3</option>
							<option value="4">4</option>
							<option value="5">5</option>
							<option value="6">6</option>
							<option value="7">7</option>
							<option value="8">8</option>
							<option value="9">9</option>
							<option value="10">10</option>
							<option value="11">11</option>
							<option value="12">12</option>
						</select>
						月
					</p>
					<p>
						<select name="day" class="form-flam02">
							<option value="1">1</option>
							<option value="2">2</option>
							<option value="3">3</option>
							<option value="4">4</option>
							<option value="5">5</option>
							<option value="6">6</option>
							<option value="7">7</option>
							<option value="8">8</option>
							<option value="9">9</option>
							<option value="10">10</option>
							<option value="11">11</option>
							<option value="12">12</option>
							<option value="13">13</option>
							<option value="14">14</option>
							<option value="15">15</option>
							<option value="16">16</option>
							<option value="17">17</option>
							<option value="18">18</option>
							<option value="19">19</option>
							<option value="20">20</option>
							<option value="21">21</option>
							<option value="22">22</option>
							<option value="23">23</option>
							<option value="24">24</option>
							<option value="25">25</option>
							<option value="26">26</option>
							<option value="27">27</option>
							<option value="28">28</option>
							<option value="29">29</option>
							<option value="30">30</option>
							<option value="31">31</option>
						</select>
						日
					</p>
					<input
						type="image"
						src="images/btn_img01.png"
						alt="占う"
						class="btn-uranau"
					/>
				</form>
			</section>
		</article>
		<div id="snsbtnArea" class="clearfix">
			<div id="snsbtnArea-in">
				<!-- LINE Send Button -->
				<div class="line-it-button" data-lang="ja" data-type="share-a" data-env="REAL" data-url="https://developers.line.biz/ja/docs/line-social-plugins/install-guide/using-line-share-buttons/" data-color="default" data-size="small" data-count="true" data-ver="3" style="display: none;"></div>
				<!-- X Tweet Button -->
				<a href="https://twitter.com/share?ref_src=twsrc%5Etfw" class="twitter-share-button" data-show-count="false">Tweet</a>
				<!-- Facebook Share Button -->
				<div class="fb-share-button" data-href="https://nenga.adjust.ne.jp/" data-layout="button_count" data-size="small"><a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fnenga.adjust.ne.jp%2F&amp;src=sdkpreparse" class="fb-xfbml-parse-ignore">シェアする</a></div>
			</div>
		</div>

		<article class="banner clearfix mb10">
			<section class="bannerIn01">
				<p class="mb10">
					<a
						href="images/pdf/oseibon2021.pdf"
						onclick="ga('send', 'event', 'download', 'pdf', 'oseibon2021.pdf');"
						target="_blank"
						><img
							src="images/bn_img02.png"
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
							src="images/bn_img02_2.png"
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
								src="images/bn_img03.png"
								width="254"
								height="90"
						/></a>
					</li>
					<li class="bnrmagin bnrRight">
						<a href="https://strander.jp/" target="_blank"
							><img
								src="images/bn_img09.png"
								width="254"
								height="90"
						/></a>
					</li>
					<li class="bnrLeft">
						<a href="http://honnomura.com/" target="_blank"
							><img
								src="images/bn_img10.png"
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
								src="images/bn_img07.png"
								width="254"
								height="90"
						/></a>
					</li>
					<li class="bnrmagin bnrRight">
						<a href="http://socialcast.jp/" target="_blank"
							><img
								src="images/bn_img04.png"
								width="254"
								height="90"
						/></a>
					</li>
					<li class="bnrLeft">
						<a href="https://adjust.media/" target="_blank"
							><img
								src="images/bn_img08.png"
								width="254"
								height="90"
						/></a>
					</li>
					<li class="bnrLeft">
						<a href="https://anytime.adjust.ne.jp/" target="_blank"
							><img
								src="images/bn_img06.png"
								width="254"
								height="90"
						/></a>
					</li>
				</ul>
			</section>
		</article>
	</div>
	<footer>
		<p>&copy; 2023 ADjust Co.,Ltd. All Right Reserved.</p>
	</footer>
</template>
