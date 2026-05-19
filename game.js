/* =========================================================
   雪嵐の山荘 ~ A Night Without Tomorrow ~
   ライトノベル型ノベルゲームエンジン + 物語データ
   ========================================================= */

const SAVE_KEY_PREFIX = 'storygame_slot_';
const SAVE_SLOTS = 3;

/* ---------------- 物語データ ---------------- */
/*
  各シーンは pages（順に読ませる本文配列）と choices もしくは next を持つ。
  mood: BGMの雰囲気を切り替える
  shock: ショッキングSEを再生するページ番号（0始まり）
  ending: 'happy' | 'bad' のとき終幕シーン
  chapter: 画面上部に出す章名
  {name} は主人公名に置換される
*/
const STORY = {

  /* ===== 序章 ===== */
  opening: {
    chapter: '序章 / 雪の駅',
    mood: 'calm',
    pages: [
`雪は、駅前のロータリーを白く埋め尽くしていた。
中央に建つ古い時計塔の文字盤さえも、半ばまで結晶に呑まれている。
吐く息は白く凍り、ダウンジャケットの襟をいくらかき寄せても、寒さは骨の髄まで染み込んでくる。`,

`「{name}くん、こっち！」
雪の向こうから、よく通る声が届いた。
振り向けば、マフラーをぐるぐる巻きにした彼女——美咲が、迎えの黒いミニバンの傍で大きく手を振っていた。
頬を朱に染めた笑顔は、まるでこの白い世界の中にひとつだけ咲いた、小さな赤い花のようだ。`,

`「やっと着いたね。三時間も電車だったし、もうへとへとだよ」
助手席に乗り込みながら、美咲は楽しげに頬を膨らませる。
僕——{name}は、彼女と付き合って二年になる。
今夜は彼女の二十二歳の誕生日を、山奥の隠れ家のような山荘で、ふたりきりで祝う予定だった。`,

`ミニバンは、深い森の中の細い山道を、雪を蹴立てながら登っていく。
窓の外、視界を埋め尽くす白。
携帯電話の電波は、いつのまにか圏外を示していた。`
    ],
    next: 'arrival'
  },

  arrival: {
    chapter: '第一章 / 神崎山荘',
    mood: 'calm',
    pages: [
`山荘は、想像していたよりも遥かに大きく、そして古めかしかった。
三階建ての洋館。屋根には灯篭のような尖塔。
窓の格子はどれも凍りつき、内側からは琥珀色の光がぼうっと漏れている。
吹雪の中で揺れる古い木造の看板には、こう書かれていた——『神崎山荘』。`,

`扉を開けたのは、白いシャツに黒いベストを着た、五十がらみの男だった。
「ようこそ、神崎山荘へ。私はオーナーの神崎拓海と申します」
柔和な笑顔の奥に、どこか医者のような観察眼を感じる。
聞けば、本当に若い頃は医師だったのだという。`,

`ロビーには、暖炉の火と古い柱時計の音が、心地よく響いていた。
神崎は、僕たちにルームキーを差し出しながら静かに告げた。
「あいにくの吹雪で、先に到着している宿泊客は四名。
明日には道が閉ざされるかもしれません。
どうぞ、ごゆっくり」`,

`美咲は僕の腕にそっと寄り添った。
「ねえ、{name}くん。なんだか、お話の中に迷い込んだみたいだね」
僕は微笑んで頷いた。
だが——奇妙なことに、その瞬間、暖炉の火が、ふいに細く揺らいだのだ。`
    ],
    next: 'dinner'
  },

  /* ===== 食堂で人物紹介 → 選択 ===== */
  dinner: {
    chapter: '第二章 / 晩餐',
    mood: 'tense',
    pages: [
`夕食は広い食堂で。
長いテーブルには、すでに四人の客が腰を下ろしていた。`,

`——黒木涼子（三十代半ば）。ミステリ作家。鋭い瞳でワインを傾けている。
——桐生隆一（四十代）。投資家。仕立てのいいスーツに、大粒のルビーの指輪。
——結城ノエル（十二、三歳）。白いワンピースの少女。誰とも目を合わせない。
——久世晴彦（三十代）。寡黙な男。額に古い傷跡。ナイフを動かす手だけが、妙に滑らかだ。`,

`美咲が、僕の耳元で囁いた。
「ねえ、{name}くん。なんだか、誰もが秘密を抱えてるみたい」
不穏な静寂の中、神崎が乾杯の音頭を取る。
グラスが触れ合う乾いた音だけが、広い食堂に響いた。`,

`誰に、話しかける？`
    ],
    choices: [
      { t: '黒木涼子に話しかける（ミステリ作家の女性）', to: 'dinner_kuroki' },
      { t: '桐生隆一に話しかける（指輪の投資家）',     to: 'dinner_kiryu' },
      { t: '結城ノエルに話しかける（白い服の少女）',   to: 'dinner_noel' }
    ]
  },

  dinner_kuroki: {
    chapter: '第二章 / 晩餐',
    mood: 'tense',
    pages: [
`「あら、若い恋人さんね」
黒木涼子は、グラスの縁を指でなぞりながら、ふっと笑った。
唇の端だけで作る、計算され尽くした微笑。`,

`「ねえ、{name}くん。
この山荘——ちょっと有名なのよ。
三年前にも、ここで失踪事件があった」`,

`「失踪……ですか？」
「ええ。投資詐欺の被害者だった青年が、この山荘で最後に目撃されて以来、ふっつりと姿を消した。
誰もその理由を知らない——表向きはね」
彼女は声を落とした。「私は、その事件を取材しに来たの」`,

`美咲が僕の袖を、きゅっと引いた。
食堂のシャンデリアが、一瞬だけ、ちりちりと音を立てた気がした。`
    ],
    next: 'night1'
  },

  dinner_kiryu: {
    chapter: '第二章 / 晩餐',
    mood: 'tense',
    pages: [
`「ほう、若いカップルか。羨ましいねえ」
桐生隆一は、厚ぼったい唇を歪めて笑った。
指のルビーが、暖炉の炎に呼応して血のように赤く光る。`,

`「ところで君、投資には興味あるかね。
今、私はある事業に大金を投じている。
かつて私の事業を妬んで、訴えてきた小僧がいてね。
だが、そういう奴は——」`,

`桐生は、ぐっと声を落とした。
「自然と、消えていくものだ」
湿った、含みのある笑い声。
美咲が僕の腕を、ぎゅっと掴んだ。
彼の言葉の奥に、何か氷のように冷たいものを、確かに感じた。`
    ],
    next: 'night1'
  },

  dinner_noel: {
    chapter: '第二章 / 晩餐',
    mood: 'tense',
    pages: [
`少女は、ふと顔を上げて僕を見た。
ぞくりとするほど透き通った、淡い青の瞳。
吹き付ける雪をそのまま閉じ込めたような、奇妙な色だった。`,

`「お兄ちゃん。
今夜は、誰も寝ちゃダメ」
「えっ……？」`,

`「目を開けていて。
閉じたら、目覚めない人が出るよ」
そう言って彼女は、にっこりと笑い、また視線を皿に戻した。
食堂の照明が、ほんの一瞬、ちらついた。
気のせいだろうか——いや、確かに、ちらついたのだ。`
    ],
    next: 'night1'
  },

  /* ===== 夜、客室で選択 ===== */
  night1: {
    chapter: '第三章 / 夜更け',
    mood: 'tense',
    pages: [
`夜十時。
僕と美咲は、二階の角部屋に通された。
古い洋館らしい四柱式のベッド。窓には分厚いカーテン。
吹雪はいよいよ強さを増し、窓ガラスがピシピシと、まるで悲鳴のように軋んでいる。`,

`美咲はベッドに腰掛け、長い髪をゆっくりと解いた。
「ねえ、{name}くん。
やっぱり、変な感じがするの。
あの黒木さんって人、夕食の間、ずっと誰かを見張ってるみたいだった」`,

`僕は微笑んで答えた。
「考えすぎだよ。明日になったら、雪も止む。
朝には、君の好きな写真を撮りに行こう」
だが——どうにも胸騒ぎが、おさまらない。
さて、どうする？`
    ],
    choices: [
      { t: '部屋のドアにしっかり鍵をかけて休む', to: 'lock' },
      { t: '廊下に出て、屋敷の様子を伺う',     to: 'corridor' },
      { t: '窓の外、雪の中の様子を確認する',   to: 'window' }
    ]
  },

  lock: {
    chapter: '第三章 / 夜更け',
    mood: 'tense',
    pages: [
`念のため、僕はドアにチェーンをかけ、内鍵もしっかりと回した。
重い真鍮の金具が、カチリと小さな音を立てる。
美咲が安心したように笑った。
「ありがとう、{name}くん」`,

`小さく口づけを交わし、灯りを落とした。
吹雪の唸りだけが、世界に残された唯一の音だった。
——どれくらい眠っただろうか。`,

`午前三時。
凍りつくような悲鳴が、屋敷のどこかから響いた。
僕は、跳ね起きた。`
    ],
    shock: [2],
    next: 'murder1'
  },

  corridor: {
    chapter: '第三章 / 夜更け',
    mood: 'horror',
    pages: [
`足音を殺して廊下に出ると、廊下の奥——三階へ続く階段の踊り場で、何かが動いた気がした。
小さな、白い影。ノエルだろうか？`,

`だがそれは、すぐに闇に溶けて消えた。
振り返ると、僕の部屋とは反対側、北側の客室から、
押し殺したような口論の声が漏れている。
桐生の声だった。
「……だから言ってるだろう、もう少し待てば、奴は——」`,

`覗き見は、失礼だ。
僕はそっと自室へ戻り、ドアに鍵をかけた。
深いため息をつき、ベッドに潜り込む。`,

`午前三時。
凍りつくような悲鳴が、屋敷のどこかから響いた。
僕は、跳ね起きた。`
    ],
    shock: [3],
    next: 'murder1'
  },

  window: {
    chapter: '第三章 / 夜更け',
    mood: 'horror',
    pages: [
`カーテンの隙間を、そっと指で開ける。
雪と闇が、ぼうっと広がっていた。
だが——その時、僕は確かに、見たのだ。`,

`雪の上を、ふらふらと、裏庭を歩く黒い人影。
それは何か——大きな袋のようなものを、引きずっているように見えた。
目を凝らした瞬間、人影は灯篭の影に消えた。
気のせい——だろうか。
ぞわりとした寒気を覚え、僕は静かにカーテンを閉じた。`,

`午前三時。
凍りつくような悲鳴が、屋敷のどこかから響いた。
僕は、跳ね起きた。`
    ],
    shock: [2],
    next: 'murder1'
  },

  /* ===== 第一の事件 ===== */
  murder1: {
    chapter: '第四章 / 朱に染まる湯気',
    mood: 'horror',
    pages: [
`廊下に飛び出した僕は、寝間着姿の客たちが集まっているのを見た。
神崎が、震える声で告げた。
「桐生さんが——浴室で——」`,

`ひとつだけ点けられた裸電球の下、共用浴室の白いタイルに、赤い花が咲いていた。
湯船に浸かったまま、桐生隆一は事切れていた。
喉元には、深い切り傷。
湯気は赤く染まり、湯面には——彼の指輪が、ルビーの指輪が、外されて沈んでいた。`,

`美咲が口元を押さえる。
黒木の瞳が、奇妙に光った。
「外には誰の足跡もない。
だとすれば、犯人は——この館の中にいる」
神崎の言葉が、雪嵐の悲鳴の中で、凍りついた。`,

`{name}は、強く拳を握りしめた。
震えを、止めるために。
さて——何から、調べる？`
    ],
    shock: [0],
    choices: [
      { t: '浴室に踏み込んで、遺体を詳しく調べる', to: 'examine_body' },
      { t: '集まった客たちの様子を観察する',       to: 'suspect' },
      { t: '勝手口から外へ出て、足跡を探す',       to: 'outside' }
    ]
  },

  examine_body: {
    chapter: '第四章 / 朱に染まる湯気',
    mood: 'horror',
    pages: [
`僕は意を決して、浴室に踏み込んだ。
神崎は元医師だと言っていた。彼が静かに頷いた。
「君も、手伝ってくれるか」`,

`切り傷は、上から下へ、深く鋭く引かれている。
おそらく背の高い者の仕業——あるいは、被害者が湯船に沈んだ姿勢のところを、上から襲った者の仕業だ。
湯船の縁に、わずかに泥のような跡。
そして——桐生の右手に、千切れた紙片が、固く握られていた。`,

`紙片を、そっと開く。
震える筆跡で、こう書かれていた。
『三年前の・・・忘・れ・・て・・は・・い・な・・い』`,

`紙の端には、銀色の小さな鳥のマークが、印刷されていた。
出版社か、何かの会員証——
僕は、その紙片を、こっそり懐に隠した。`
    ],
    next: 'clue1'
  },

  suspect: {
    chapter: '第四章 / 朱に染まる湯気',
    mood: 'horror',
    pages: [
`僕は、ロビーに戻った客たちの様子を、注意深く観察した。`,

`——神崎は、冷静だった。冷静すぎる、と思うほどに。
医者だった経歴のせいだろうか。それとも——。
——黒木は、奇妙にも、革表紙の取材ノートを抱えていた。
こんな夜更けに、何をメモするつもりだろう。
——ノエルは、平然と、それどころか、楽しげに薄く笑っていた。
あの少女の薄笑い。胸が、ざわつく。
——久世は、額の古い傷を、指でゆっくりとなぞりながら、
僕の視線を、ことさら避けるように、顔を伏せていた。`,

`美咲が、震える声で囁いた。
「{name}くん——誰かが、嘘をついてる。
それも、たぶん、複数」`
    ],
    next: 'clue1'
  },

  outside: {
    chapter: '第四章 / 朱に染まる湯気',
    mood: 'horror',
    pages: [
`僕はコートを羽織って、勝手口から裏庭へ出た。
雪は深く、足首まで埋まる。
だが、その雪面には——確かに、奇妙な跡があった。`,

`一人分の足跡が、館の裏口から、雪の中へと続いている。
しかし、十メートルほど進んだところで、
ぷっつりと——途切れていた。
何かに、舞い上がる雪に、消されたかのように。`,

`足跡の傍に、銀色の小さな鳥のバッジが、ぽつんと落ちていた。
僕はそれを、ハンカチで包んでポケットにしまった。
雪はやはり、容赦なく降り続いていた。`
    ],
    next: 'clue1'
  },

  /* ===== 手掛かりの集約 ===== */
  clue1: {
    chapter: '第五章 / 銀の鳥',
    mood: 'tense',
    pages: [
`再びロビーに集まった全員を前に、
黒木涼子が、静かに口を切った。
「お話ししなくては、なりませんね」`,

`「私はミステリ作家ですが——
本来の仕事は、ノンフィクションの取材者です。
三年前、ここから消えた青年がいる。
彼の名は——藤村慎吾。
投資詐欺で全てを失い、追い詰められて、姿を消した」`,

`「彼は、桐生隆一を訴えていた。
そして、桐生は——彼を闇に葬った張本人だ、と私は推測しています。
桐生のあの指輪。ルビー。
あれは藤村が、亡き母から受け継いだ、たった一つの形見だった」`,

`美咲が、震える声で問うた。
「じゃあ、犯人は……藤村さんの仲間？」
黒木は、ゆっくりと首を振った。
「いいえ。
藤村慎吾は——生きています。
そして、ここに、いる」`,

`その瞬間——食堂の方で、ガラスの割れる激しい音が、館中に響き渡った。`
    ],
    shock: [4],
    next: 'second_attack'
  },

  second_attack: {
    chapter: '第六章 / 消えた男',
    mood: 'horror',
    pages: [
`飛び込んだ食堂は、惨憺たる有様だった。
食器棚は倒れ、ワインの瓶は割れ、深紅の液体が床に広がっている。
そして——その血のような液体の中に、
ノエルが、横たわっていた。`,

`美咲が叫ぶ。
「ノエルちゃん！」
神崎が駆け寄り、彼女の脈を取る。
「……気を失っているだけだ。
額に打撲。だが、命に別状はない」`,

`そして、その時、僕らはようやく、気付いた。
久世晴彦の姿が——消えていた。
彼が座っていたソファには、まだ、温もりだけが残っていた。`,

`さて、どう動く？`
    ],
    choices: [
      { t: '勝手口から外へ出て、久世を追う',         to: 'chase' },
      { t: 'ノエルの介抱を手伝い、ヒントを探す',     to: 'tend' },
      { t: '誰も動かさず、その場の全員を見張る',     to: 'watch' }
    ]
  },

  chase: {
    chapter: '第六章 / 消えた男',
    mood: 'climax',
    pages: [
`僕はコートも羽織らず、勝手口へと走った。
雪が頬を切る。視界は、ほとんど真っ白だ。
だが——新しい足跡が、はっきりと、裏山の方向へ続いていた。`,

`息を切らせて追いかけるうちに、古い物置小屋が見えた。
扉は、半開きになっている。
僕は、震える指で扉を引いた——`,

`久世が、ナイフを手に、こちらを振り返った。
だが、その目には殺意ではなく、深い絶望が浮かんでいた。
「来るな。来るな……
俺じゃない。
誰かが、俺を、陥れようとしている」`,

`彼の足元には、もう一本のナイフと、桐生のものらしい血まみれの指輪が、
わざとらしく——並べて置かれていた。
あまりにも、わざとらしく。`
    ],
    next: 'revelation'
  },

  tend: {
    chapter: '第六章 / 消えた男',
    mood: 'tense',
    pages: [
`僕はノエルを毛布にくるみ、ソファにそっと寝かせた。
彼女のワンピースの裾から、小さな折りたたまれたメモが、ひらりと落ちた。`,

`そこには、震える子供の字で、こう書かれていた。
『おとうさんは、わるくない。
わるいのは、ぎんのとり』`,

`銀の鳥——
桐生の手に握られていた、あの紙片のロゴ。
足跡の傍に落ちていた、あのバッジ。
そして、『おとうさん』。
ノエルの父親は、ここにはいないはずだった。
だが、もしも——彼女が、その『おとうさん』と呼ぶ人物が、この館にいるとしたら？`,

`その時、玄関の方から、神崎の鋭い声がした。
「久世さんが——出て行きました。
彼を追わなければ」
だが、神崎の声は、なぜか少しも焦っていなかった。`
    ],
    next: 'revelation'
  },

  watch: {
    chapter: '第六章 / 消えた男',
    mood: 'tense',
    pages: [
`僕は皆を集め、誰も動くな、と告げた。
神崎は、静かに頷いた。
「賢明だ。冷静な判断だな、{name}くん」
黒木は、奥歯を、ぎりっと噛みしめた。
「だが——犯人は今、外へ出た」`,

`美咲が、僕の手をぎゅっと握り、震える声で言った。
「{name}くん、思い出して。
食事のときの席順を。
誰が、どこに座っていて、誰が今、ここに、いないかを」`,

`久世はいない。
だが——もう一つ、奇妙な点があった。
神崎は、桐生の喉の傷を、最初から知っていたかのように、迷わず指で示していた。
医者だから？
それとも——あの傷を、誰よりも先に、見ていたから？`
    ],
    next: 'revelation'
  },

  /* ===== 推理 ===== */
  revelation: {
    chapter: '第七章 / 推理',
    mood: 'climax',
    pages: [
`全員が、再びロビーに集まった。
吹雪は、激しさを増していた。
古い柱時計が、午前四時を、ゆっくりと打った。
コ——ン、コ——ン、コ——ン、コ——ン。`,

`美咲が、僕の隣で、静かに目を伏せている。
僕は——{name}は、深く息を吸い、一歩、前へ出た。
集まった四つの視線が、僕に集中する。`,

`「真相は——もう、見えています。
銀の鳥。三年前の失踪。ルビーの指輪。
そして、誰よりも遺体に詳しかった『元医師』。
誰よりも遺体に近づきたがった『取材者』。
顔を変えてしまった、傷だらけの『寡黙な男』。
そして——『目を閉じたら目覚めない人が出る』と笑った、白い少女」`,

`「犯人は——あなただ」
さあ、誰を指差す？
ここからは——もう、引き返せない。`
    ],
    choices: [
      { t: '神崎拓海を指差す（オーナーの元医師）',       to: 'solve_kanzaki' },
      { t: '黒木涼子を指差す（取材ノートの作家）',       to: 'solve_kuroki' },
      { t: '久世晴彦を指差す（額に傷のある寡黙な男）',   to: 'solve_kuze' },
      { t: '結城ノエルを指差す（薄笑いの少女）',         to: 'solve_noel' }
    ]
  },

  /* ===== 正解（神崎が犯人）→ ハッピーエンド ===== */
  solve_kanzaki: {
    chapter: '終章 / 雪の朝',
    mood: 'climax',
    pages: [
`「神崎さん。
あなたが、桐生隆一を、殺した」
神崎の眉が、ぴくり、と動いた。
だが、否定はしなかった。`,

`「三年前、ここから『消えた』とされた青年——藤村慎吾。
彼は、本当は消えたのではない。
あなたが匿った。
そして、あの久世晴彦こそ——整形手術で顔を変えた、藤村慎吾本人だ。
額の傷は、整形の痕。だから彼は、いつも額に手をやっていた」`,

`黒木涼子が、静かに頷いた。
「そして神崎さん。
あなたは——藤村慎吾の、本当の父親なのね」
神崎は、ゆっくりと、深く、頷いた。
「……気付かれてしまったか」`,

`「私の息子は、桐生の詐欺で、全てを奪われた。
財産も、婚約者も、誇りも。
警察も司法も、奴を裁けなかった。
だから今夜、私は——三年越しの裁きを、自らの手で、下した」`,

`その時、ベッドから起き上がったノエルが、神崎の腕に、ぽとり、と飛び込んだ。
「おとうさん——」
そう。彼女は、神崎の娘。
父の苦悩を、ずっと傍で見守ってきた、もう一人の被害者だった。
ノエルの『目を閉じるな』という警告は——血を見たくない、という、彼女なりの、必死の悲鳴だったのだ。`,

`神崎は、警察の到着を、自ら待つと約束した。
雪嵐が止むのを待ち、彼は、僕に向かって深く頭を下げた。
「君が、賢明な人で、よかった。
息子を、巻き込まずに、済んだ」`,

`夜が、明けていく。
窓の外、吹雪は嘘のように去り、純白の世界に、淡い金の光が、そっと射し始めていた。
美咲が、僕の手を、温かく握る。
「{name}くん——」
彼女は、何かを言いかけ、けれど結局、何も言わず、ただ笑った。
復讐は、もうひとつの悲劇でしかない。
だが、僕たちは——その夜の全てを、確かに、見届けたのだった。`
    ],
    ending: 'happy',
    mood: 'happy'
  },

  /* ===== 誤答ルート（バッドエンド） ===== */
  solve_kuroki: {
    chapter: '終章 / 銃声',
    mood: 'bad',
    pages: [
`「黒木さん——あなたが、犯人だ」
彼女は、静かに首を振った。
「違うわ、{name}くん。
私は、藤村慎吾の婚約者だった人間。
彼を奪った桐生を、ずっと追ってきた——記録するために」`,

`その時、背後で——神崎が、低く、笑った。
「いやはや、見当違いだ。
だが、{name}くん、おかげで——邪魔が入らない」`,

`彼の手には、いつのまにか、古い拳銃が握られていた。
僕は、咄嗟に、美咲を背に庇った。
だが——`,

`乾いた音。
胸に走る、灼けつくような熱。
視界が、赤く、ぐにゃりと歪み始める。
最後に見えたのは、雪の中で僕の名を叫ぶ、美咲の顔。
ああ——{name}は、致命的な手番を、間違えた。`
    ],
    shock: [2],
    ending: 'bad'
  },

  solve_kuze: {
    chapter: '終章 / 雪に消える真実',
    mood: 'bad',
    pages: [
`「久世さん——あなたが、犯人だ」
久世は、いや、本当の名は藤村慎吾は、力なく、頷いた。
「……そうだ。
父さんが、罪を背負う前に、俺が、引き受ける」`,

`だが、{name}は気付いていなかった。
真の犯人——神崎拓海は、その自白に深く頷き、
吹雪が去るのを待って、警察に通報した。`,

`息子は、父の罪を被って、牢獄へと送られた。
神崎は、表向きは無実のまま、山荘を後にする。
ノエルは、何も言わず、ただ、雪の窓の向こうを見つめていた。`,

`真実は、永遠に、雪の中に埋もれた。
{name}と美咲は、無事に山を下りた。
だが、何かを——決定的に、取り違えてしまった。
胸の奥に、消えない冷たいしこりを残して。`
    ],
    ending: 'bad'
  },

  solve_noel: {
    chapter: '終章 / 銀のナイフ',
    mood: 'bad',
    pages: [
`「ノエルちゃん——あなたが」
少女は、ぱちりと目を見開き、そして——にっこりと笑った。`,

`「ねぇ、お兄ちゃん。
目を閉じちゃダメって、言ったでしょう？」`,

`その瞬間、ノエルの背後から、神崎が——
銀色のナイフを、振り上げた。
「私の娘を疑うなら、退いてもらおう」`,

`美咲の悲鳴。
{name}は、最後に、彼女の手を握ろうと、震える指を伸ばした。
だが、その手は、永遠に、届かなかった——`
    ],
    shock: [2],
    ending: 'bad'
  }
};

/* ---------------- エンジン ---------------- */
const $ = id => document.getElementById(id);

let state = {
  playerName: '',
  scene: null,
  page: 0
};
let audioCtx = null;
let bgmNodes = [];
let currentMood = null;
let muted = false;

function fillName(text){
  return text.replace(/\{name\}/g, state.playerName || '主人公');
}

/* ----- 初期化 ----- */
function init(){
  $('newGameBtn').onclick  = onNewGame;
  $('continueBtn').onclick = openLoadModal;
  $('startBtn').onclick    = onStart;
  $('playerNameInput').addEventListener('keydown', e => {
    if(e.key === 'Enter') onStart();
  });
  $('saveBtn').onclick    = openSaveModal;
  $('loadBtn').onclick    = openLoadModal;
  $('restartBtn').onclick = onRestart;
  $('muteBtn').onclick    = toggleMute;
  $('modalCloseBtn').onclick = () => $('modal').classList.add('hidden');
  $('nextBtn').onclick    = onNext;

  document.body.classList.add('on-title');
  refreshContinueButton();
}

function refreshContinueButton(){
  const hasAny = anySaveExists();
  $('continueBtn').disabled = !hasAny;
}

function onNewGame(){
  $('title-screen').classList.add('hidden');
  $('intro').classList.remove('hidden');
  document.body.classList.remove('on-title');
  setTimeout(() => $('playerNameInput').focus(), 60);
}

function onStart(){
  const name = $('playerNameInput').value.trim();
  state.playerName = name || '主人公';
  state.scene = 'opening';
  state.page = 0;
  enterGame();
}

function enterGame(){
  $('title-screen').classList.add('hidden');
  $('intro').classList.add('hidden');
  $('scene').classList.remove('hidden');
  $('saveBtn').classList.remove('hidden');
  $('loadBtn').classList.remove('hidden');
  $('restartBtn').classList.remove('hidden');
  document.body.classList.remove('on-title');
  ensureAudio();
  render();
}

function onRestart(){
  if(!confirm('最初からやり直しますか？\n（保存データは残ります）')) return;
  state = { playerName: '', scene: null, page: 0 };
  document.body.className = '';
  stopBGM();
  $('scene').classList.add('hidden');
  $('intro').classList.add('hidden');
  $('saveBtn').classList.add('hidden');
  $('loadBtn').classList.add('hidden');
  $('restartBtn').classList.add('hidden');
  $('title-screen').classList.remove('hidden');
  $('playerNameInput').value = '';
  document.body.classList.add('on-title');
  refreshContinueButton();
}

/* ----- レンダリング ----- */
function render(){
  const scene = STORY[state.scene];
  if(!scene){ console.error('Unknown scene', state.scene); return; }

  $('chapter').textContent = scene.chapter || '';
  setMood(scene.mood || 'calm');

  // エンディング画像はデフォルトで非表示。renderEnding で必要なら表示する
  $('ending-img').classList.add('hidden');
  $('scene').classList.remove('ending-happy','ending-bad');

  const totalPages = scene.pages.length;
  const idx = Math.min(state.page, totalPages - 1);
  $('text').textContent = fillName(scene.pages[idx]);

  // ショック演出
  if(scene.shock && scene.shock.includes(idx)){
    triggerShock();
  }

  const $choices = $('choices');
  $choices.innerHTML = '';

  const isLastPage = idx === totalPages - 1;

  if(isLastPage){
    // 終幕
    if(scene.ending){
      $('nextBtn').classList.add('hidden');
      renderEnding(scene.ending);
      return;
    }
    // 選択肢
    if(scene.choices){
      $('nextBtn').classList.add('hidden');
      scene.choices.forEach(ch => {
        const btn = document.createElement('button');
        btn.textContent = ch.t;
        btn.onclick = () => onChoose(ch.to);
        $choices.appendChild(btn);
      });
    } else if(scene.next){
      // 次のシーンへ
      $('nextBtn').classList.remove('hidden');
      $('nextBtn').textContent = '▽ 続き';
    }
  } else {
    // まだページが残っている
    $('nextBtn').classList.remove('hidden');
    $('nextBtn').textContent = '▽ 次のページ';
  }

  // 自動セーブ（毎ページ進行時、最後のスロット=オートセーブ枠扱いはしないが、内部の最終位置は記憶）
  saveCheckpoint();
}

function renderEnding(kind){
  $('scene').classList.add(kind === 'happy' ? 'ending-happy' : 'ending-bad');

  // エンディング用イラストを表示
  const $img = $('ending-img');
  $img.src = kind === 'happy' ? 'assets/end-happy.png' : 'assets/end-bad.png';
  $img.alt = kind === 'happy' ? 'TRUE END' : 'BAD END';
  $img.classList.remove('hidden');

  const $choices = $('choices');
  const restartBtn = document.createElement('button');
  restartBtn.textContent = kind === 'happy'
    ? '✦ おめでとう、最初から遊ぶ'
    : '✦ 違う選択肢を試す（最初から）';
  restartBtn.onclick = onRestart;
  $choices.appendChild(restartBtn);

  if(kind === 'bad'){
    // バッドエンドからは、選択直前へ戻る選択肢も用意
    const backBtn = document.createElement('button');
    backBtn.textContent = '▶ 真相直前まで戻る（推理シーンへ）';
    backBtn.onclick = () => { state.scene='revelation'; state.page=0; render(); };
    $choices.appendChild(backBtn);
  }

  $('status').textContent = kind === 'happy'
    ? '— TRUE END —'
    : '— BAD END —';
}

function onNext(){
  const scene = STORY[state.scene];
  if(state.page < scene.pages.length - 1){
    state.page++;
    render();
  } else if(scene.next){
    state.scene = scene.next;
    state.page = 0;
    render();
  }
}

function onChoose(to){
  state.scene = to;
  state.page = 0;
  render();
}

/* ----- セーブ／ロード ----- */
function slotKey(i){ return SAVE_KEY_PREFIX + i; }

function readSlot(i){
  try{
    const raw = localStorage.getItem(slotKey(i));
    return raw ? JSON.parse(raw) : null;
  } catch(e){ return null; }
}

function writeSlot(i, data){
  localStorage.setItem(slotKey(i), JSON.stringify(data));
}

function anySaveExists(){
  for(let i=1; i<=SAVE_SLOTS; i++){
    if(readSlot(i)) return true;
  }
  return false;
}

function saveCheckpoint(){
  // 内部用：最後にいた位置をスロット0に記録（continue 用）
  const data = makeSaveData();
  localStorage.setItem(SAVE_KEY_PREFIX + 'auto', JSON.stringify(data));
}

function makeSaveData(){
  return {
    playerName: state.playerName,
    scene: state.scene,
    page: state.page,
    chapter: (STORY[state.scene] && STORY[state.scene].chapter) || '',
    savedAt: new Date().toISOString()
  };
}

function openSaveModal(){
  openSlotModal('save');
}

function openLoadModal(){
  openSlotModal('load');
}

function openSlotModal(mode){
  $('modal-title').textContent = mode === 'save' ? 'どこにセーブする？' : 'どこからロードする？';
  const $list = $('slot-list');
  $list.innerHTML = '';

  for(let i=1; i<=SAVE_SLOTS; i++){
    const slot = readSlot(i);
    const row = document.createElement('div');
    row.className = 'slot';

    const info = document.createElement('div');
    info.className = 'slot-info';
    if(slot){
      const date = new Date(slot.savedAt);
      info.innerHTML = `<div class="slot-title">スロット ${i}：${escapeHtml(slot.playerName)}</div>
        <div class="slot-meta">${escapeHtml(slot.chapter)}　/　${date.toLocaleString('ja-JP')}</div>`;
    } else {
      info.innerHTML = `<div class="slot-title">スロット ${i}</div>
        <div class="slot-meta slot-empty">（空き）</div>`;
    }
    row.appendChild(info);

    const actions = document.createElement('div');
    actions.className = 'slot-actions';

    if(mode === 'save'){
      const btn = document.createElement('button');
      btn.textContent = slot ? '上書き' : 'ここに保存';
      btn.onclick = () => {
        if(slot && !confirm(`スロット${i}に上書きしますか？`)) return;
        writeSlot(i, makeSaveData());
        $('status').textContent = `スロット${i}にセーブしました。`;
        $('modal').classList.add('hidden');
        refreshContinueButton();
      };
      actions.appendChild(btn);

      if(slot){
        const del = document.createElement('button');
        del.textContent = '削除';
        del.className = 'danger';
        del.onclick = () => {
          if(!confirm(`スロット${i}を削除しますか？`)) return;
          localStorage.removeItem(slotKey(i));
          openSlotModal(mode);
          refreshContinueButton();
        };
        actions.appendChild(del);
      }
    } else { // load
      const btn = document.createElement('button');
      btn.textContent = 'ロード';
      btn.disabled = !slot;
      if(slot){
        btn.onclick = () => {
          state = {
            playerName: slot.playerName,
            scene: slot.scene,
            page: slot.page
          };
          $('modal').classList.add('hidden');
          enterGame();
          $('status').textContent = `スロット${i}からロードしました。`;
        };
      }
      actions.appendChild(btn);
    }
    row.appendChild(actions);
    $list.appendChild(row);
  }

  $('modal').classList.remove('hidden');
}

function escapeHtml(s){
  return String(s).replace(/[&<>"']/g, m => ({
    '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'
  }[m]));
}

/* ----- BGM／効果音（WebAudio） ----- */
function ensureAudio(){
  if(audioCtx) return;
  try{
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  } catch(e){
    audioCtx = null;
  }
}

function stopBGM(){
  bgmNodes.forEach(n => {
    try{ n.stop && n.stop(); n.disconnect && n.disconnect(); }catch(e){}
  });
  bgmNodes = [];
}

function setMood(mood){
  document.body.classList.remove('mood-calm','mood-tense','mood-horror','mood-climax','mood-happy','mood-bad');
  document.body.classList.add('mood-' + mood);
  if(muted) return;
  if(currentMood === mood) return;
  currentMood = mood;
  ensureAudio();
  if(!audioCtx) return;
  if(audioCtx.state === 'suspended') audioCtx.resume();
  stopBGM();
  buildBGM(mood);
}

function buildBGM(mood){
  const ctx = audioCtx;
  if(!ctx) return;

  // ミックス用マスター
  const master = ctx.createGain();
  master.gain.value = 0.0;
  master.connect(ctx.destination);
  master.gain.linearRampToValueAtTime(0.08, ctx.currentTime + 1.5);
  bgmNodes.push(master);

  if(mood === 'calm'){
    addPad(master, 110, 'sine', 0.35);
    addPad(master, 110*1.5, 'sine', 0.18);
    addLowpass(master, 900);
  } else if(mood === 'tense'){
    addPad(master, 82, 'sawtooth', 0.18);
    addPad(master, 82*1.5, 'sine', 0.14);
    addPad(master, 82*1.06, 'sine', 0.10); // 微妙なディチューン
    addLowpass(master, 600);
    schedulePulses(master, 4.0, 110);
  } else if(mood === 'horror'){
    addPad(master, 55, 'sawtooth', 0.30);
    addPad(master, 55*1.498, 'sine', 0.10);  // 不協和（三全音）
    addLowpass(master, 500);
    scheduleHorrorTicks(master);
  } else if(mood === 'climax'){
    addPad(master, 73, 'sawtooth', 0.20);
    addPad(master, 73*1.5, 'square', 0.10);
    addLowpass(master, 1100);
    schedulePulses(master, 1.6, 146);
    schedulePulses(master, 0.8, 73);
  } else if(mood === 'happy'){
    addPad(master, 130.81, 'sine', 0.18); // C
    addPad(master, 164.81, 'sine', 0.16); // E
    addPad(master, 196.00, 'sine', 0.14); // G
    addPad(master, 261.63, 'sine', 0.10); // C高
    addLowpass(master, 2200);
  } else if(mood === 'bad'){
    addPad(master, 49,  'sawtooth', 0.30); // G1
    addPad(master, 58.27,'sine',     0.16); // A#1（不協和）
    addLowpass(master, 380);
    scheduleHorrorTicks(master);
  }
}

function addPad(dest, freq, type, gainVal){
  const osc = audioCtx.createOscillator();
  const g   = audioCtx.createGain();
  osc.type = type;
  osc.frequency.value = freq;
  g.gain.value = gainVal;

  // ゆっくりとしたゆらぎ
  const lfo = audioCtx.createOscillator();
  const lfoG = audioCtx.createGain();
  lfo.frequency.value = 0.12 + Math.random()*0.15;
  lfoG.gain.value = gainVal * 0.3;
  lfo.connect(lfoG); lfoG.connect(g.gain);

  osc.connect(g); g.connect(dest);
  osc.start(); lfo.start();
  bgmNodes.push(osc, lfo, g, lfoG);
}

function addLowpass(dest, freq){
  // 既存接続を経由する形でローパスを噛ませるのは複雑なので、ここでは省略してパラメータのみ装飾。
}

function schedulePulses(dest, period, freq){
  const ctx = audioCtx;
  const start = ctx.currentTime + 1.5;
  const stopAt = ctx.currentTime + 60;
  for(let t = start; t < stopAt; t += period){
    const o = ctx.createOscillator();
    const g = ctx.createGain();
    o.type = 'triangle';
    o.frequency.value = freq;
    g.gain.setValueAtTime(0, t);
    g.gain.linearRampToValueAtTime(0.06, t + 0.04);
    g.gain.exponentialRampToValueAtTime(0.0001, t + 0.4);
    o.connect(g); g.connect(dest);
    o.start(t); o.stop(t + 0.5);
    bgmNodes.push(o, g);
  }
}

function scheduleHorrorTicks(dest){
  const ctx = audioCtx;
  let t = ctx.currentTime + 2;
  const stopAt = ctx.currentTime + 60;
  while(t < stopAt){
    const len = 0.15;
    const buf = ctx.createBuffer(1, ctx.sampleRate * len, ctx.sampleRate);
    const data = buf.getChannelData(0);
    for(let i=0;i<data.length;i++){
      data[i] = (Math.random()*2-1) * Math.exp(-i/(ctx.sampleRate*0.02));
    }
    const src = ctx.createBufferSource(); src.buffer = buf;
    const g = ctx.createGain(); g.gain.value = 0.05;
    const hp = ctx.createBiquadFilter(); hp.type='bandpass'; hp.frequency.value = 1200;
    src.connect(hp); hp.connect(g); g.connect(dest);
    src.start(t); src.stop(t + len);
    bgmNodes.push(src, g, hp);
    t += 3 + Math.random()*4;
  }
}

/* ショッキングSE */
function triggerShock(){
  if(!muted){
    ensureAudio();
    if(audioCtx){
      if(audioCtx.state === 'suspended') audioCtx.resume();
      playShockSE();
    }
  }
  // 画面フラッシュ＆シェイク
  const flash = document.createElement('div');
  flash.className = 'shock-flash';
  flash.style.cssText = 'position:fixed;inset:0;pointer-events:none;z-index:200;';
  document.body.appendChild(flash);
  document.body.classList.add('shake');
  setTimeout(() => {
    flash.remove();
    document.body.classList.remove('shake');
  }, 500);
}

function playShockSE(){
  const ctx = audioCtx;
  // ノイズバースト + 低音ドン
  const len = 0.8;
  const buf = ctx.createBuffer(1, ctx.sampleRate * len, ctx.sampleRate);
  const data = buf.getChannelData(0);
  for(let i=0;i<data.length;i++){
    const env = Math.exp(-i/(ctx.sampleRate*0.08));
    data[i] = (Math.random()*2-1) * env;
  }
  const noise = ctx.createBufferSource(); noise.buffer = buf;
  const hp = ctx.createBiquadFilter(); hp.type='highpass'; hp.frequency.value=900;
  const noiseGain = ctx.createGain(); noiseGain.gain.value = 0.8;
  noise.connect(hp); hp.connect(noiseGain); noiseGain.connect(ctx.destination);
  noise.start();

  // 低音ドン
  const o = ctx.createOscillator();
  const g = ctx.createGain();
  o.type = 'sine';
  o.frequency.setValueAtTime(140, ctx.currentTime);
  o.frequency.exponentialRampToValueAtTime(40, ctx.currentTime + 0.6);
  g.gain.setValueAtTime(0.0001, ctx.currentTime);
  g.gain.exponentialRampToValueAtTime(0.7, ctx.currentTime + 0.02);
  g.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.8);
  o.connect(g); g.connect(ctx.destination);
  o.start(); o.stop(ctx.currentTime + 0.85);

  // 悲鳴っぽい高音グリッサンド
  const s = ctx.createOscillator();
  const sg = ctx.createGain();
  s.type = 'sawtooth';
  s.frequency.setValueAtTime(1800, ctx.currentTime);
  s.frequency.exponentialRampToValueAtTime(400, ctx.currentTime + 0.5);
  sg.gain.setValueAtTime(0.0001, ctx.currentTime);
  sg.gain.exponentialRampToValueAtTime(0.15, ctx.currentTime + 0.03);
  sg.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.55);
  s.connect(sg); sg.connect(ctx.destination);
  s.start(); s.stop(ctx.currentTime + 0.6);
}

function toggleMute(){
  muted = !muted;
  $('muteBtn').textContent = muted ? '♪ OFF' : '♪ ON';
  if(muted){
    stopBGM();
    currentMood = null;
  } else {
    if(state.scene){
      const m = STORY[state.scene].mood || 'calm';
      currentMood = null;
      setMood(m);
    }
  }
}

window.addEventListener('load', init);
