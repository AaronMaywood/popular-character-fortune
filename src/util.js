// .vue 以外からPinia を使う方法 ... setActivePinia() を実行する必要がある(これは本来 main.js 側で実施していること)
// このようにしておけば Jest のユニットテストも実施できる
import { setActivePinia, createPinia } from 'pinia'
import { useGlobalStore } from './stores/global';	// Jest でテストする時にはパスに記号 @ を使うことができない
setActivePinia(createPinia())

const store = useGlobalStore();

// SPAにおいてページ遷移したことをGA4に伝える（=新規のpage_viewイベントを生成する）
export function GA4pageview(title, page) {
	// gtag 関数はindex.htmlで読み込んでいるGoogle Analytics の gtag/js が提供する関数
	gtag("event", "page_view", {
		page_title: title,
		page_location: window.location.href,
		send_to: store.GA4_ID,
	});
}

/*
export function updateOGP() {
	// !!important!!
	// この関数は使用せず、index.html の中のOGPを直接変更すること
	// 理由:
	// この関数を使用してOGPを動的に書き換えているが、OGPのクローラーはJavaScriptを実行しないため、この効果はない
	// 従って index.html に埋め込んだOGPを手動で書き換えること
	document.querySelector('[property="og:image"]').content =
		`${base_url}images/ogp.png`;
	document.querySelector('[property="og:url"]').content = base_url;
}
*/

export function updateTitle(title) {
	document.querySelector("title").innerHTML = title;
}

// 日付の妥当性チェック
// https://thirdratese.hatenablog.com/entry/2023/02/27/200250 より
// カレンダーに存在する日かどうかをチェックする
//
// 使用例:
// > isValidDateFormat('2000-02-29')
// true
// > isValidDateFormat('2001-02-29')
// false
export function isValidDateFormat(dateString) {
	// 正規表現を使用して日付フォーマットをチェックする
	var dateFormatRegex = /^([0-9]{4})-(0[1-9]|1[0-2])-([0-2][0-9]|3[01])$/;
	if (!dateString.match(dateFormatRegex)) {
		return false;
	}

	// 日付の妥当性をチェックする
	var parts = dateString.split("-");
	var year = parseInt(parts[0], 10);
	var month = parseInt(parts[1], 10);
	var day = parseInt(parts[2], 10);
	var date = new Date(year, month - 1, day);
	if (
		date.getFullYear() !== year ||
		date.getMonth() + 1 !== month ||
		date.getDate() !== day
	) {
		return false;
	}

	return true;
}

// カバラ数秘術の「誕生数」の計算
// http://www.ainsophaur.jp/kouza/calcu-birthnumber1.html
// > 「年」「月」「日」の数字を一変に足した後、合計数から９の倍数を引き余りの数を出すと、その余りの数が誕生数
// > 余りの数が０になった場合は９
export function calcBirthNumber(year, month, day) {
	// 誕生日の各桁を足す 例) 1970220 = 1 + 9 + 0 + 2 + 2 + 0 =  14
	const ymd = String(year) + String(month) + String(day);
	const ymd2 = ymd.split("").reduce((accum, current) => accum + current);
	// 9 で割った余りが誕生数、ただし0の場合は9とする
	const birthNumber = ymd2 % 9;
	if (birthNumber === 0) {
		return 9;
	} else {
		return birthNumber;
	}
}
