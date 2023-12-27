# 流行りキャラ占い

- 実例：https://nenga.adjust.ne.jp/index_2023.html
- カバラ数秘術

## 仕様

- 誕生日の入力画面と占いの結果画面からなり、それぞれ以下のURLで区別される
    - 入力画面
        - https://localhost:5173/#
    - 占いの結果画面
        - https://localhost:5173/#01 〜 #09

- 各占い結果画面からの「もう一度占う」ボタンのサポート

- title の動的書き換え
    https://qiita.com/idani/items/5af667d5dcc69053f0d8
    →標準のVue.jsにその機能はない
    →document.querySelector('title') でDOMを取得して直接書き換えました

- ブックマークから占い結果に直接行けるようにする

- 入力画面から誕生日を入力し、「占う」をクリックして占い結果画面を表示する
    - 誕生日のバリデーション
        - 全項目必須
            - required
        - 年は４桁
            - pattern="\d{4}"
        - 実在する日付のチェック（例えば 2001/2/29 は存在しない)
            - エラーになったら占い結果画面へはページ遷移しない

- カバラ数秘術による占い
    - 「誕生数」を計算するアルゴリズム
        http://www.ainsophaur.jp/kouza/calcu-birthnumber1.html
        > 「年」「月」「日」の数字を一変に足した後、合計数から９の倍数を引き余りの数を出すと、その余りの数が誕生数
        > 余りの数が０になった場合は９
    - [TODO] Jest を使ったユニットテスト

- [TODO] キャッシュを防ぐためにrnd を挿入する？
    print qq{<script>location.href='/result_2023_0${bn}.html?r=${rnd}';</script>};

## SNSボタンまわりのコーディング

- [TODO] ページ切り替えしたとき、SNSボタンも切り替え
    - [TODO] SNSで共有できるようにする
        - [TODO] LINE
            data-url="https://nenga.adjust.ne.jp/" ←共有するこのURLをページ毎に変える
            - [TODO] トップページ
            - [TODO] 各占いの結果ページ
        - X(Twitter)
            - [TODO] トップページ
            - [TODO] 各占いの結果ページ
        - [TODO] Facebook
            data-href="https://nenga.adjust.ne.jp/" ←共有するこのURLをページ毎に変える
            - [TODO] トップページ
            - [TODO] 各占いの結果ページ
```
	<div id="fb-root"></div>
	<div id="snsbtnArea" class="clearfix">
		<div id="snsbtnArea-in">
			<!-- LINE Send Button -->
			<div
				class="line-it-button"
				v-bind:data-url="http://localhost:5173/#3"
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
				data-href="http://localhost:5173/#3"
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
            <script src"https://www.line-website.com/social-plugins/js/thirdparty/loader.min.js" async defer></script>
            <script src= https://platform.twitter.com/widgets.js' charset="utf-8" async defer>
            <script src='https://connect.facebook.net/ja_JP/sdk.js#xfbml=1&version=v18.0' async defer crossOrigin="anonymous" nonce="VuGw4kxk"></script>
		</div>
	</div>
```

## Google Analytics 4

- 最初にアクセスしたページ（トップページもしくは占い結果画面）だけでなく、ページ遷移した場合の pave_view が全て記録される
    - GA4 の Debug View を用いて検証可能、そうするには index.html でGA4に対し {"debug_mode": true } とする

## 更新業務に関係するソースコード

```
├── index.html ... GA4タグ、OGPを調整する場合はこちら
├── public
│   └── images ... 画像素材の差し替え
└── src
    ├── App.vue ... HTMLのテンプレートを修正する場合はこちら
    ├── components
    │   ├── Enter.vue ... （いじりません）
    │   ├── Home.vue ... （いじりません）
    │   ├── Result.vue ... （いじりません）
    │   └── SNSButtons.vue ... （いじりません）
    └── util.js	... 年や占いテキスト等のデータを更新
```

## ユニットテスト

### Jest のインストール

https://jestjs.io/ja/docs/getting-started
https://gattino.jp/jest-esm/

```
npm install --save-dev jest  
npm install --save-dev @babel/core @babel/preset-env 
```

```babel.config.js
module.exports = {
    presets: [
        [
            '@babel/preset-env',
            {
                'modules': 'false',
                'useBuiltIns': 'usage',
                'targets': '> 0.25%, not dead',
            }
        ]
    ],
    env: {
        test: {
            presets: [['@babel/preset-env', {targets: {node: 'current'}}]],
        },
    },
};
```

### テストファイルの用意

- ファイル名が *.test.js となるようなファイルを用意
    - src/util.test.js (util.js を検証したいので）
- テストの中身
    ```
    import { calcBirthNumber } from './util.js';

    test('2000-1-1', () => {
        expect(calcBirthNumber(2000,1,1)).toBe(4);
    })
    ```

### テストの実施

```
npm test
```
で実施。

*.test.js を検索して、その中に定義されている試験を自動的に実施し、レポートしてくれる。

- テストが成功した場合の表示例:
    https://i.gyazo.com/46cc68a56d8cd85a392e92ef7c522b06.png
