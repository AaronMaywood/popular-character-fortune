export const year = 2023;
const GA4_ID = "G-PWX6MZCFL6"; // index.htmlのGoogle tagで使用されているものと同じ値を設定

export function GA4pageview(title, page) {
	gtag("event", "page_view", {
		page_title: title,
		page_location: window.location.href,
		send_to: GA4_ID,
	});
}

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

export const database = [
	// 誕生数1
	{
		title: "北条 義時",
		img: {
			src: "./images/title_chara01.png",
			alt: "北条 義時 なんとかします",
		},
		basicInfo: `情熱的で意志が強く、どんな困難にも立ち向かい自分で道を切り開いていくキャラクター。
			かなりの自信家でプライドが高い一面もありますが、自分の意見を率直に主張できるあなたは、周囲からの信頼も厚いはず。
			陽気で明るく楽観的な面も持ちあわせた人気者なので、周囲からの援助も受けやすく、すばらしく飛躍する可能性を秘めているタイプです。
		`,
		fortune: `
			仕事も趣味もやりたい事には前向きに挑戦してみることで、あなたの真価が発揮され、大きな成果を得られる1年です。あまり細かいことにはこだわりすぎず、自分を信じて進んでいく事で不可能を可能にさせてしまう強運となります。<br>
			ただ、やり過ぎてしまう傾向が強く、無理は禁物です。睡眠を含め休養も取ってくださいね。<br><br>
			★仕事においては、判断力が高まり、効率良く物事を進めることのできる運気です。<br>
			収穫を受ける年にあたるので、大きく収入を増やしたり、実績が認められて昇格したりすることもありそうです。前向きに物事を捉えることで、大きなチャンスを掴むことが出来るでしょう。<br>
			人脈も広がりますが、あなたの活躍を妬む人が現れることも。出会った人が信頼に値する人物なのか、きちんと見極めることが大切です。<br><br>
			★金運はとても良く、給与が上がったりや臨時収入などが期待できるでしょう。投資などもうまくいく傾向ですが、欲張り過ぎずにある程度のところで手を引くのが懸命です。<br>
			バランス感覚とゆとりを持った遣い方をすることで、更にお金との縁が深まります。
			<br><br>
			★恋愛よりも仕事や趣味の方にエネルギーが向けられることの多い今年ではありますが、精力的に行動できる運気なので、ドラマチックな恋の出会いにも恵まれるかも。<br>
			嫉妬心も強くなる傾向があるようなので、ヤキモチなどからの喧嘩には要注意です。
		  `,
		luckyWord: `「意志あるところに道は開ける」`,
	},
	// 誕生数2
	{
		title: "トム・クルーズ",
		img: {
			src: "./images/title_chara02.png",
			alt: "トム・クルーズ トップガン マーベリック",
		},
		basicInfo: `
繊細な感受性と豊かな想像力を持つ癒し系のキャラクター。
            人を癒すような柔和な魅力を放つあなたは、周囲の人から自然と慕われることが多いのではないでしょうか。
            さまざまな感情を理解する卓越した感性を持っている反面、現実が見えず主観的に判断してしまう一面もあります。
            神秘的でありながら聞き上手かつ愛情深いので、気がつくと周りに多くのファンができているかも！？
		`,
		fortune: `
			9年にたった1度しかない、転換期を迎えようとしています。<br>
            今まで抱えていた不安や、未解決のまま引きずっている問題を解決するための追い風が吹いてきています。<br>
            新しい自分になるために、縁を切りたかった人間関係や、辞めたいと思っている立場などから縁を断ち切るには絶好のチャンスの年です。<br>
            自分の身の回りの整理整頓、掃除をすると更なる幸運を呼び込むことができるでしょう。<br><br>
            ★仕事において、恵まれた運気です。<br>
            あなたがコツコツと積み重ねてきたものが日の目を浴びるとき。<br>
            昇進したり、賞を頂いたりすることもあるでしょう。<br>
            今年は何か新しい企画や目標に向けて行動するよりも、縁の下の力持ち的な仕事や後輩や新入社員などの教育やケアに力を入れるなど今ある環境に注力することをお勧めします。<br>
            今年の地盤固めが、来年以降の仕事運向上に繋がります。
            <br><br>★金運も良く、特に物質面において恵まれた運気である今年は、以前からずっと欲しかった物が手に入るかもしれません。<br>
            大きなお金を動かす事で運気に勢いが増していきそうです。ただし、調子に乗り過ぎて衝動買いに走る恐れもあります。<br>
            大きな買い物は計画的に行いましょう。
            <br><br>★恋愛においては、お付き合いをしている人は結婚の話が進んでいきそう。<br>
            結婚運が良い1年なので、これから出会いを探す方にも、良いご縁が巡ってくるでしょう。<br>
            自分が愛するより、愛してくれる人を選んだ方を選ぶのが良さそうです。
		`,
		luckyWord: `｢学ぶことより大切なのは、<br>要らないことから忘れていくこと｣`,
	},
	// 誕生数3
	{
		title: "ゼレンスキー大統領",
		img: {
			src: "./images/title_chara03.png",
			alt: "ゼレンスキー大統領 ウクライナに栄光あれ",
		},
		basicInfo: `
            あなたの人生において、新しい章が始まりました。<br>
            今までの流れが変化し、未知なる世界へと進んでいくような運気です。<br>
            閃いたアイディアを実行するべく着手してみたり、独立など、思い切った環境に身を置くこともあるでしょう。<br>
            今年は新しいことを始めるには絶好の年になります。<br>
            立ち止まって考えるよりも行動することで、理想の実現へと近づいていけるでしょう。
		`,
		fortune: `
            <br>★仕事においても、前進するエネルギーに満ちています。<br>
            独立心やリーダーシップなど、あなたの個性に更に磨きがかかる年です。<br>
            遠慮せず、やりたいことなどの自己主張をちゃんとすることで望む方向へ物事を進めていけるチャンスを掴めるでしょう。
            <br><br>★金運は上昇傾向にありますが、少し波乱含みの運気です。<br>
            環境が変わる可能性があるため、引っ越しや家具の買い換えや、やりたいことをやるために掛かるお金など出費も多そうです。<br>
            必要なお金はちゃんと巡ってくるので、自己投資を惜しみ過ぎないことが開運のポイントです。
            <br><br>★仕事や趣味などで充実する今年は、恋愛にはあまり関心が湧かないかもしれません。<br>
            最初から恋人としての出会うよりも、友達として楽しく付き合える間柄から、しだいに恋愛に移行していく傾向にあるでしょう。
		`,
		luckyWord: `｢出船に船頭待たず」`,
	},
	// 誕生数4
	{
		title: "エリザベス女王",
		img: {
			src: "./images/title_chara04.png",
			alt: "エリザベス女王 また会いましょう",
		},
		basicInfo: `
            穏やかな1年となりそうです。<br>
            変化の多かった刺激的な去年と比べると、今年は少しに無難に感じてしまう一年かもしれません。<br>
            ですが、この調和的に進む運気の今年こそ、持っている知識やスキルを更に深めたり、読書や芸術などで教養を広げたり、外に出て自然に触れて感受性を磨いたりなど、内面性を豊かにして実力を蓄えていくのにうってつけの時期といえます。
		`,
		fortune: `
            ★仕事においては、｢協調性｣がキーワードです。<br>
            何かを始めたり、自分の力で押し出そうとするよりも、仲間や同僚の考えを積極的に取り入れて協力し合って働くことをお勧めします。<br>
            周りの環境を含めた最善を目指していくことで、信頼できるビジネスパートナーや心強い賛同者に出会えるなど、沢山のチャンスが巡ってくるでしょう。
            <br><br>★金運においては、決して悪くはないのですが、比較的大人しい運気です。<br>
            現状維持が吉となる今年は、大きな買い物は慎重に考え、日々の家計を見直していくことで、金運も貯金額もぐんぐんに上昇していきます。
            <br><br>★恋愛において、チャンスの多い恵まれた1年です。出会いの機会が多く、交際に至るまでの時間も速いです。幼馴染や過去の恋人とよりを戻す事もあるでしょう。<br>
            ただし、感受性が高まる今年は些細なことで喧嘩しがちな傾向にあります。<br>
            お互いを尊重する姿勢が大切です。<br>
            この時期しっかり相手に向き合うことで、将来に向けての話も進んでいくでしょう。<br>
            結婚に関してはとても良い年です。
		`,
		luckyWord: `「和を以て貴しとなす」`,
	},
	// 誕生数5
	{
		title: "ヤクルト1000",
		img: {
			src: "./images/title_chara05.png",
			alt: "ヤクルト1000 乳酸菌",
		},
		basicInfo: `
            明るく軽やかな運気です。プライベートが充実しているようで、新しい趣味やお気に入りのお店など、色々なことに関心を持って日々楽しく過ごしていけます。<br>
            レジャー運が特に良いので、行ってみたかった場所や旅行は優先して予定に組み込んでみてください。<br>
            ワクワクする出来事や小さな事でも笑い合える、そんな素敵な思い出がたくさん出来るでしょう。
		`,
		fortune: `
            ★仕事においても幸運に恵まれて、面白いように物事が進んでいく運気です。<br>
            そんな恵まれた運気にも関わらず、私生活が楽しすぎて、あまり仕事に身が入らないかもしれません。とはいうものの、仕事以外の趣味や関わりから培った教養や人脈が、今後大きく役に立つ可能性があります。<br>
            バランス良く過ごすことをお勧めします。
            <br><br>★金運面では、黄色信号が出ています。<br>
            財布の紐が緩みやすく、交際費や娯楽費がかさんでしまいそう。特にギャンブルやゲームを嗜んでいる場合は、はまり過ぎに要注意！1か月ごとの収支をしっかり把握することで、浪費を抑えることが出来るでしょう。
            <br><br>★恋愛においては、モテ期到来！の楽しい運気です。<br>
            出会いが多く、楽しい交際をするチャンスにも恵まれているのですが、深い関係には少しなりにくい傾向です。仮に深い関係になっても、また別の気になる素敵な人が現れる…なんてこともあるかも。<br>
            多くの出会いの中から、本当に信頼できる相手を選んで交際していくことになるので、結論を急がないことが肝要です。
		`,
		luckyWord: `「笑う門には福来たる」`,
	},
	// 誕生数6
	{
		title: "イーロン・マスク",
		img: {
			src: "./images/title_chara06.png",
			alt: "イーロン・マスク FREE AMERICA NOW",
		},
		basicInfo: `
            自分を鍛えることで、実力だけでなく強運も磨いていくことが出来る運気です。<br>
            順調に運んだかと思えば、予想外の展開で足踏み状態のまま滞ったり、逆に、厄介そうな案件が、始まってみると案外易しいものであったりなど、最後まで事を見守る忍耐力が試される1年となります。<br>
            もし今の自分に満足できていないのなら、今年は新しい自分になるための絶好のチャンスです。<br>
            理想の自分を目標に、真っ直ぐ歩んでいくことで努力は実を結び、やがて大輪の花を咲かせるでしょう。
		`,
		fortune: `
            ★仕事面において、あまり派手な動きのない運気です。<br>
            コツコツと積み重ねることが今後大きな成果となり、昇給や昇格に結び付く流れです。<br>
            たとえ今、仕事にあまり面白みを感じられなくても、淡々と取り組んでみて下さい。<br>
            あなたの隠れた努力を影で見ていて、引き上げようとしてくる人が必ず現れます。
            <br><br>★タナボタではなく自力でのみ運が拓ける今年は、金銭面においても甘い話には要注意です。<br>
            ギャンブルやハイリスクハイリターンの投資などは避けた方が良いでしょう。<br>
            遠回りに思えても、節約が金運を上げる1番の近道です。
            <br><br>★恋愛においては、焦っても空回りすることが多い運気なので、無理に発展させようとせず様子を見る方が吉。<br>
            今、気になる人や現在お付き合いをしているなら、そのご縁を丁寧に育てていくことをお勧めします。
		`,
		luckyWord: `｢陰徳あれば陽報あり｣`,
	},
	// 誕生数7
	{
		title: "タッキー",
		img: {
			src: "./images/title_chara07.png",
			alt: "タッキー 電撃退所！",
		},
		basicInfo: `
            知性豊かで冷静ながら、内的情熱を秘めているキャラクター。
            鋭い洞察力と批判力があり、人や物事の本質を見抜く直観力も備えている上、博愛的な情熱も持っています。
            自分自身の生き方やライフスタイルを大切にしつつ、外国文化に惹かれることも多く、外国の人ともすぐに仲良くなれたり、グローバルに活躍する人が多いタイプです。
		`,
		fortune: `
            とにかく変化の多い1年になります。<br>
            移転、引っ越し、転職など、今までの生活様式や仕事のやり方などに新しい動きがありそうです。<br>
            不安定な運気なので、勢いに乗ったかと思えば、予想もしなかった展開に転じる事もあるかもしれません。とはいえ、今年起こる想定外の出来事は、基本的にあなたにとってプラスになるもの。取り越し苦労は不要です。<br>
            自分の運と実力を信じて気楽に構えていれば、より良い方へ進んでいけます。<br><br>
            ★仕事面でも、転職、転勤、部署移動など、新しい活躍の場が用意されています。<br>
            今までのやり方にこだわらず、時流に沿ったスタイルを取り入れることで、効率が上がっていくでしょう。最新のものに縁がある今年は、仕事にまつわる知識もアップデートするように努めると、面白いくらいに実力も運気も上がっていきます。
            <br><br>★金運においては、去年とガラッと流れが変わり、入ってくるのも出てくるのも激しくなりそうです。引っ越しや家電の買い替えなどにあたる可能性も高く、一時的に出費がかさむと焦りますが、後々入ってくるので帳尻は合います。買い物をするなら新製品のものを入手すると良い運気に乗ることが出来るので、ピンと来た人はチェックしてみてくださいね。
            <br><br>★恋愛においても、新しい出会いの多い1年となります。モテ期の到来です。<br>
            いいなと思う相手からのお誘いが増えて楽しい時間を過ごすことができるでしょう。
		`,
		luckyWord: `「禍いも幸いの端となる」`,
	},
	// 誕生数8
	{
		title: "ガーシー",
		img: {
			src: "./images/title_chara08.png",
			alt: "ガーシー とことんまでたたかなあかん",
		},
		basicInfo: `
            情熱的かつ積極的で、実行力のあるキャラクター。
            強靭な肉体や美しい容姿、才能やステータスなど、どこか非凡な面があり強い存在感を持っています。
            エネルギーに満ち溢れるあなたは、困難を前に逃げるより闘う姿勢で正面から臨んでいくタイプなのではないでしょうか？
            負けず嫌いでプライドが高い面もありますが、自信があって感情豊かなあなたは、周りから魅力的に見えているはずです。
		`,
		fortune: `
            やり過ぎない限り、大抵のことは望み通りに進んでいく恵まれた運気です。<br>
            調和的で平和な1年となりそうです。誰かを世話したり、何かを教える立場に置かれて活躍することが多くなります。人との結び付き、特に家庭内や親友、親しい人との関係にエネルギーを注ぐことになる1年となり、更に信頼関係が深まるでしょう。<br>
            交渉などに最適な年なので、何か話し合ったりお願いしたいことがある人は今年は自分の要望を通すチャンスです。<br><br>
            ★仕事においては、自然と人から頼りにされる運気です。<br>
            誰かの世話役や責任のある仕事を任せられたりします。自己アピールをするというよりも、周囲とうまく協調して信頼を集めることで、実力を評価される1年となるでしょう。<br>
            人と積極的に関わることで世話苦労などもありますが、今年誰かに与えた優しさや思いやりは必ず形となって返ってきます。
            <br><br>★金運も恵まれています。<br>
            必要なお金を集めるのには最適な時期で、無茶なことをしなければ、お金を借り入れたり、増やしたりするのもスムーズです。経済的に安定することで、精神面も落ち着いていくでしょう。
            <br><br>★恋愛運においても、9年に1度といえるくらいの最高に良い運気です。相思相愛の、誰もがうらやむような恋愛をするチャンスが訪れています。<br>
            結婚に関しても良い運気で、まだ話が出ていないなら、あなたの方から積極的に話してみると年内ゴールインの可能性も。
		`,
		luckyWord: `｢先ずは自分を愛する、<br>そして他人を愛する｣`,
	},
	// 誕生数9
	{
		title: "村上宗隆",
		img: {
			src: "./images/title_chara09.png",
			alt: "村上宗隆 村神様 降臨！",
		},
		basicInfo: `
            複雑で多面的な性格ながら、大きな包容力と深い人類愛を持つキャラクター。
            情緒的で周囲に感化されやすいため、状況や相手しだいで性格が変わることもありそう。
            自己犠牲をいとわない反面、我が強い面を持っていたり、ロマンチストな反面どこか冷めていたりと、二面性を持ち合わせています。
            聡明な頭脳や理解力があり、幅広い知識や技能を身につけていることが多いタイプ。
		`,
		fortune: `
            今までとは全く違う、新しい世界が開けていく1年になります。<br>
            これまでの努力や才能が評価され、より高いステージへと飛躍する時期に入りました。内面的、精神的な変革が起こるような運気なので、思いがけない出来事が起こることもあります。<br>この時期起こることは、あなたの内面を豊かにするためのもの。<br>
            自分を信じて前向きに取り組んで下さい。その過程で応援してくれる人や助け舟が、必ず現れます。<br><br>
            ★仕事運では、成功へのチャンスが巡ってきています。<br>
            目上からの信頼や注目を集めて、責任ある業務や新しい企画を任せられたりすることもあります。常識や固定観念に囚われないで、自分らしさを大切に進んでみて下さい。
            <br><br>★金運も良いです。<br>
            ただ、今年は目先のお金を追うよりも、資格取得などのスキルアップのための勉強や、身だしなみを整えることなど、自分の価値を高めることにお金を掛けることが今後のあなたを豊かにします。ずっと行きたかった場所への旅行もお勧めです。人生観が変わるような、素敵な旅となるでしょう。
            <br><br>★仕事や趣味など、自分のペースで動く1年になるので恋愛は後回しになりがちですが、自分興味を追求していると、旅行先や習い事などの思いがけぬ場所での出会いに恵まれることもありそうです。<br>
            今年ご縁のある相手は、自分の考えをしっかりと持った、恋愛としてだけでなく人間としても尊敬できるような人になります。
		`,
		luckyWord: `｢玉磨かざれば光なし｣`,
	},
];
