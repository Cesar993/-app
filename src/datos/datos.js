const kanjis = [
  { id: 1, kanji: "走" },
  { id: 2, kanji: "笑" },
  { id: 3, kanji: "思" },
  { id: 4, kanji: "会" },
  { id: 5, kanji: "知" },
  { id: 6, kanji: "言" },
  { id: 7, kanji: "見" },
  { id: 8, kanji: "歩" },
  { id: 9, kanji: "昨" },
  { id: 10, kanji: "明" },
  { id: 11, kanji: "正" },
  { id: 12, kanji: "動" },
  { id: 13, kanji: "写" },
  { id: 14, kanji: "貸" },
  { id: 15, kanji: "借" },
  { id: 16, kanji: "待" },
  { id: 17, kanji: "着" },
  { id: 18, kanji: "乗" },
  { id: 19, kanji: "飛" },
  { id: 20, kanji: "勉" },
  { id: 21, kanji: "質" },
  { id: 22, kanji: "旅" },
  { id: 23, kanji: "遊" },
  { id: 24, kanji: "道" },
  { id: 25, kanji: "薬" },
  { id: 26, kanji: "力" },
  { id: 27, kanji: "役" },
  { id: 28, kanji: "運" },
  { id: 29, kanji: "経験" },
  { id: 30, kanji: "教" },
  { id: 31, kanji: "寝" },
  { id: 32, kanji: "起" },
  { id: 33, kanji: "話" },
  { id: 34, kanji: "開" },
  { id: 35, kanji: "思" },
  { id: 36, kanji: "楽" },
  { id: 37, kanji: "聞" },
  { id: 38, kanji: "読" },
  { id: 39, kanji: "教" },
  { id: 40, kanji: "歌" },
  { id: 41, kanji: "使" },
  { id: 42, kanji: "手" },
  { id: 43, kanji: "足" },
  { id: 44, kanji: "合" },
  { id: 45, kanji: "心" },
  { id: 46, kanji: "間" },
  { id: 47, kanji: "米" },
  { id: 48, kanji: "肉" },
  { id: 49, kanji: "野" },
  { id: 50, kanji: "山" },
  { id: 51, kanji: "川" },
  { id: 52, kanji: "風" },
  { id: 53, kanji: "空" },
  { id: 54, kanji: "海" },
  { id: 55, kanji: "電" },
  { id: 56, kanji: "食" },
  { id: 57, kanji: "飲" },
  { id: 58, kanji: "買" },
  { id: 59, kanji: "売" },
  { id: 60, kanji: "働" },
  { id: 61, kanji: "受" },
  { id: 62, kanji: "出" },
  { id: 63, kanji: "入" },
  { id: 64, kanji: "作" },
  { id: 65, kanji: "選" },
  { id: 66, kanji: "進" },
  { id: 67, kanji: "帰" },
  { id: 68, kanji: "着" },
  { id: 69, kanji: "持" },
  { id: 70, kanji: "選" },
  { id: 71, kanji: "知" },
  { id: 72, kanji: "行" },
  { id: 73, kanji: "出" },
  { id: 74, kanji: "分" },
  { id: 75, kanji: "多" },
  { id: 76, kanji: "少" },
  { id: 77, kanji: "遠" },
  { id: 78, kanji: "近" },
  { id: 79, kanji: "大" },
  { id: 80, kanji: "小" },
  { id: 81, kanji: "高" },
  { id: 82, kanji: "安" },
  { id: 83, kanji: "新" },
  { id: 84, kanji: "古" },
  { id: 85, kanji: "長" },
  { id: 86, kanji: "短" },
  { id: 87, kanji: "良" },
  { id: 88, kanji: "悪" },
  { id: 89, kanji: "楽" },
  { id: 90, kanji: "運" },
  { id: 91, kanji: "気" },
  { id: 92, kanji: "体" },
  { id: 93, kanji: "心" },
  { id: 94, kanji: "顔" },
  { id: 95, kanji: "声" },
  { id: 96, kanji: "音" },
  { id: 97, kanji: "道" },
  { id: 98, kanji: "正" },
  { id: 99, kanji: "運" },
  { id: 100, kanji: "悪" }
];

const respuestas = [
  // Kanji: 走
  { id: 1, kanji_id: 1, respuesta: "はしる", correcta: true },
  { id: 2, kanji_id: 1, respuesta: "かける", correcta: false },
  { id: 3, kanji_id: 1, respuesta: "あるく", correcta: false },
  { id: 4, kanji_id: 1, respuesta: "いく", correcta: false },

  // Kanji: 笑
  { id: 5, kanji_id: 2, respuesta: "わらう", correcta: true },
  { id: 6, kanji_id: 2, respuesta: "えがお", correcta: false },
  { id: 7, kanji_id: 2, respuesta: "うれしい", correcta: false },
  { id: 8, kanji_id: 2, respuesta: "かお", correcta: false },

  // Kanji: 思
  { id: 9, kanji_id: 3, respuesta: "おもう", correcta: true },
  { id: 10, kanji_id: 3, respuesta: "かんがえる", correcta: false },
  { id: 11, kanji_id: 3, respuesta: "しる", correcta: false },
  { id: 12, kanji_id: 3, respuesta: "かく", correcta: false },

  // Kanji: 会
  { id: 13, kanji_id: 4, respuesta: "あう", correcta: true },
  { id: 14, kanji_id: 4, respuesta: "いく", correcta: false },
  { id: 15, kanji_id: 4, respuesta: "かいしゃ", correcta: false },
  { id: 16, kanji_id: 4, respuesta: "はなす", correcta: false },

  // Kanji: 知
  { id: 17, kanji_id: 5, respuesta: "しる", correcta: true },
  { id: 18, kanji_id: 5, respuesta: "しっている", correcta: false },
  { id: 19, kanji_id: 5, respuesta: "わかる", correcta: false },
  { id: 20, kanji_id: 5, respuesta: "おぼえる", correcta: false },

  // Kanji: 言
  { id: 21, kanji_id: 6, respuesta: "いう", correcta: true },
  { id: 22, kanji_id: 6, respuesta: "はなす", correcta: false },
  { id: 23, kanji_id: 6, respuesta: "かく", correcta: false },
  { id: 24, kanji_id: 6, respuesta: "きく", correcta: false },

  // Kanji: 見
  { id: 25, kanji_id: 7, respuesta: "みる", correcta: true },
  { id: 26, kanji_id: 7, respuesta: "かんがえる", correcta: false },
  { id: 27, kanji_id: 7, respuesta: "きく", correcta: false },
  { id: 28, kanji_id: 7, respuesta: "わらう", correcta: false },

  // Kanji: 歩
  { id: 29, kanji_id: 8, respuesta: "あるく", correcta: true },
  { id: 30, kanji_id: 8, respuesta: "はしる", correcta: false },
  { id: 31, kanji_id: 8, respuesta: "いく", correcta: false },
  { id: 32, kanji_id: 8, respuesta: "いえる", correcta: false },

  // Kanji: 昨
  { id: 33, kanji_id: 9, respuesta: "さく", correcta: true },
  { id: 34, kanji_id: 9, respuesta: "きのう", correcta: false },
  { id: 35, kanji_id: 9, respuesta: "まえ", correcta: false },
  { id: 36, kanji_id: 9, respuesta: "あした", correcta: false },

  // Kanji: 明
  { id: 37, kanji_id: 10, respuesta: "あかるい", correcta: true },
  { id: 38, kanji_id: 10, respuesta: "あした", correcta: false },
  { id: 39, kanji_id: 10, respuesta: "まえ", correcta: false },
  { id: 40, kanji_id: 10, respuesta: "かがやく", correcta: false },

  // Kanji: 正
  { id: 41, kanji_id: 11, respuesta: "ただしい", correcta: true },
  { id: 42, kanji_id: 11, respuesta: "あたる", correcta: false },
  { id: 43, kanji_id: 11, respuesta: "せいかい", correcta: false },
  { id: 44, kanji_id: 11, respuesta: "まちがう", correcta: false },

  // Kanji: 動
  { id: 45, kanji_id: 12, respuesta: "うごく", correcta: true },
  { id: 46, kanji_id: 12, respuesta: "かたる", correcta: false },
  { id: 47, kanji_id: 12, respuesta: "おちる", correcta: false },
  { id: 48, kanji_id: 12, respuesta: "みる", correcta: false },

  // Kanji: 写
  { id: 49, kanji_id: 13, respuesta: "うつす", correcta: true },
  { id: 50, kanji_id: 13, respuesta: "かかる", correcta: false },
  { id: 51, kanji_id: 13, respuesta: "みる", correcta: false },
  { id: 52, kanji_id: 13, respuesta: "おさえる", correcta: false },

  // Kanji: 貸
  { id: 53, kanji_id: 14, respuesta: "かす", correcta: true },
  { id: 54, kanji_id: 14, respuesta: "かりる", correcta: false },
  { id: 55, kanji_id: 14, respuesta: "あげる", correcta: false },
  { id: 56, kanji_id: 14, respuesta: "みる", correcta: false },

  // Kanji: 借
  { id: 57, kanji_id: 15, respuesta: "かりる", correcta: true },
  { id: 58, kanji_id: 15, respuesta: "かす", correcta: false },
  { id: 59, kanji_id: 15, respuesta: "あげる", correcta: false },
  { id: 60, kanji_id: 15, respuesta: "いく", correcta: false },

  // Kanji: 待
  { id: 61, kanji_id: 16, respuesta: "まつ", correcta: true },
  { id: 62, kanji_id: 16, respuesta: "かえる", correcta: false },
  { id: 63, kanji_id: 16, respuesta: "いく", correcta: false },
  { id: 64, kanji_id: 16, respuesta: "しる", correcta: false },

  // Kanji: 着
  { id: 65, kanji_id: 17, respuesta: "つく", correcta: true },
  { id: 66, kanji_id: 17, respuesta: "あう", correcta: false },
  { id: 67, kanji_id: 17, respuesta: "はいる", correcta: false },
  { id: 68, kanji_id: 17, respuesta: "しる", correcta: false },

  // Kanji: 乗
  { id: 69, kanji_id: 18, respuesta: "のる", correcta: true },
  { id: 70, kanji_id: 18, respuesta: "おりる", correcta: false },
  { id: 71, kanji_id: 18, respuesta: "かえる", correcta: false },
  { id: 72, kanji_id: 18, respuesta: "いく", correcta: false },

  // Kanji: 飛
  { id: 73, kanji_id: 19, respuesta: "とぶ", correcta: true },
  { id: 74, kanji_id: 19, respuesta: "はしる", correcta: false },
  { id: 75, kanji_id: 19, respuesta: "まいる", correcta: false },
  { id: 76, kanji_id: 19, respuesta: "おちる", correcta: false },

  // Kanji: 勉
  { id: 77, kanji_id: 20, respuesta: "べんきょう", correcta: true },
  { id: 78, kanji_id: 20, respuesta: "する", correcta: false },
  { id: 79, kanji_id: 20, respuesta: "しる", correcta: false },
  { id: 80, kanji_id: 20, respuesta: "みる", correcta: false },

  // Kanji: 質
  { id: 81, kanji_id: 21, respuesta: "しつ", correcta: true },
  { id: 82, kanji_id: 21, respuesta: "りつ", correcta: false },
  { id: 83, kanji_id: 21, respuesta: "あたる", correcta: false },
  { id: 84, kanji_id: 21, respuesta: "わかる", correcta: false },

  // Kanji: 旅
  { id: 85, kanji_id: 22, respuesta: "たび", correcta: true },
  { id: 86, kanji_id: 22, respuesta: "いく", correcta: false },
  { id: 87, kanji_id: 22, respuesta: "あたる", correcta: false },
  { id: 88, kanji_id: 22, respuesta: "まちがう", correcta: false },

  // Kanji: 遊
  { id: 89, kanji_id: 23, respuesta: "あそぶ", correcta: true },
  { id: 90, kanji_id: 23, respuesta: "まつ", correcta: false },
  { id: 91, kanji_id: 23, respuesta: "いく", correcta: false },
  { id: 92, kanji_id: 23, respuesta: "みる", correcta: false },

  // Kanji: 道
  { id: 93, kanji_id: 24, respuesta: "みち", correcta: true },
  { id: 94, kanji_id: 24, respuesta: "どうろ", correcta: false },
  { id: 95, kanji_id: 24, respuesta: "いく", correcta: false },
  { id: 96, kanji_id: 24, respuesta: "かえる", correcta: false },

  // Kanji: 薬
  { id: 97, kanji_id: 25, respuesta: "くすり", correcta: true },
  { id: 98, kanji_id: 25, respuesta: "ちりょう", correcta: false },
  { id: 99, kanji_id: 25, respuesta: "あんぜん", correcta: false },
  { id: 100, kanji_id: 25, respuesta: "いりょう", correcta: false },

  // Kanji: 力
  { id: 101, kanji_id: 26, respuesta: "ちから", correcta: true },
  { id: 102, kanji_id: 26, respuesta: "いき", correcta: false },
  { id: 103, kanji_id: 26, respuesta: "きょく", correcta: false },
  { id: 104, kanji_id: 26, respuesta: "おもい", correcta: false },

  // Kanji: 役
  { id: 105, kanji_id: 27, respuesta: "やく", correcta: true },
  { id: 106, kanji_id: 27, respuesta: "かたる", correcta: false },
  { id: 107, kanji_id: 27, respuesta: "かりる", correcta: false },
  { id: 108, kanji_id: 27, respuesta: "みる", correcta: false },

  // Kanji: 運
  { id: 109, kanji_id: 28, respuesta: "うん", correcta: true },
  { id: 110, kanji_id: 28, respuesta: "いく", correcta: false },
  { id: 111, kanji_id: 28, respuesta: "あたる", correcta: false },
  { id: 112, kanji_id: 28, respuesta: "かける", correcta: false },

  // Kanji: 経験
  { id: 113, kanji_id: 29, respuesta: "けいけん", correcta: true },
  { id: 114, kanji_id: 29, respuesta: "ちりょう", correcta: false },
  { id: 115, kanji_id: 29, respuesta: "たび", correcta: false },
  { id: 116, kanji_id: 29, respuesta: "みる", correcta: false },

  // Kanji: 教
  { id: 117, kanji_id: 30, respuesta: "おしえる", correcta: true },
  { id: 118, kanji_id: 30, respuesta: "かける", correcta: false },
  { id: 119, kanji_id: 30, respuesta: "いく", correcta: false },
  { id: 120, kanji_id: 30, respuesta: "かんがえる", correcta: false },

  // Kanji: 寝
  { id: 121, kanji_id: 31, respuesta: "ねる", correcta: true },
  { id: 122, kanji_id: 31, respuesta: "すわる", correcta: false },
  { id: 123, kanji_id: 31, respuesta: "おきる", correcta: false },
  { id: 124, kanji_id: 31, respuesta: "いる", correcta: false },

  // Kanji: 起
  { id: 125, kanji_id: 32, respuesta: "おきる", correcta: true },
  { id: 126, kanji_id: 32, respuesta: "ねる", correcta: false },
  { id: 127, kanji_id: 32, respuesta: "あるく", correcta: false },
  { id: 128, kanji_id: 32, respuesta: "いく", correcta: false },

  // Kanji: 話
  { id: 129, kanji_id: 33, respuesta: "はなす", correcta: true },
  { id: 130, kanji_id: 33, respuesta: "きく", correcta: false },
  { id: 131, kanji_id: 33, respuesta: "みる", correcta: false },
  { id: 132, kanji_id: 33, respuesta: "あう", correcta: false },

  // Kanji: 開
  { id: 133, kanji_id: 34, respuesta: "あける", correcta: true },
  { id: 134, kanji_id: 34, respuesta: "しめる", correcta: false },
  { id: 135, kanji_id: 34, respuesta: "あう", correcta: false },
  { id: 136, kanji_id: 34, respuesta: "まつ", correcta: false },

  // Kanji: 思 (repetido)
  { id: 137, kanji_id: 35, respuesta: "おもう", correcta: true },
  { id: 138, kanji_id: 35, respuesta: "かんがえる", correcta: false },
  { id: 139, kanji_id: 35, respuesta: "しる", correcta: false },
  { id: 140, kanji_id: 35, respuesta: "かく", correcta: false },

  // Kanji: 楽
  { id: 141, kanji_id: 36, respuesta: "たのしい", correcta: true },
  { id: 142, kanji_id: 36, respuesta: "わらう", correcta: false },
  { id: 143, kanji_id: 36, respuesta: "かんがえる", correcta: false },
  { id: 144, kanji_id: 36, respuesta: "しる", correcta: false },

  // Kanji: 聞
  { id: 145, kanji_id: 37, respuesta: "きく", correcta: true },
  { id: 146, kanji_id: 37, respuesta: "はなす", correcta: false },
  { id: 147, kanji_id: 37, respuesta: "みる", correcta: false },
  { id: 148, kanji_id: 37, respuesta: "あう", correcta: false },

  // Kanji: 読
  { id: 149, kanji_id: 38, respuesta: "よむ", correcta: true },
  { id: 150, kanji_id: 38, respuesta: "かく", correcta: false },
  { id: 151, kanji_id: 38, respuesta: "みる", correcta: false },
  { id: 152, kanji_id: 38, respuesta: "かんがえる", correcta: false },

  // Kanji: 教 (repetido)
  { id: 153, kanji_id: 39, respuesta: "おしえる", correcta: true },
  { id: 154, kanji_id: 39, respuesta: "しる", correcta: false },
  { id: 155, kanji_id: 39, respuesta: "みる", correcta: false },
  { id: 156, kanji_id: 39, respuesta: "あう", correcta: false },

  // Kanji: 歌
  { id: 157, kanji_id: 40, respuesta: "うたう", correcta: true },
  { id: 158, kanji_id: 40, respuesta: "きく", correcta: false },
  { id: 159, kanji_id: 40, respuesta: "はなす", correcta: false },
  { id: 160, kanji_id: 40, respuesta: "みる", correcta: false },

  // Kanji: 使
  { id: 161, kanji_id: 41, respuesta: "つかう", correcta: true },
  { id: 162, kanji_id: 41, respuesta: "しる", correcta: false },
  { id: 163, kanji_id: 41, respuesta: "かける", correcta: false },
  { id: 164, kanji_id: 41, respuesta: "あう", correcta: false },

  // Kanji: 手
  { id: 165, kanji_id: 42, respuesta: "て", correcta: true },
  { id: 166, kanji_id: 42, respuesta: "うで", correcta: false },
  { id: 167, kanji_id: 42, respuesta: "かた", correcta: false },
  { id: 168, kanji_id: 42, respuesta: "あし", correcta: false },

  // Kanji: 足
  { id: 169, kanji_id: 43, respuesta: "あし", correcta: true },
  { id: 170, kanji_id: 43, respuesta: "あう", correcta: false },
  { id: 171, kanji_id: 43, respuesta: "て", correcta: false },
  { id: 172, kanji_id: 43, respuesta: "あたる", correcta: false },

  // Kanji: 合
  { id: 173, kanji_id: 44, respuesta: "あう", correcta: true },
  { id: 174, kanji_id: 44, respuesta: "あたる", correcta: false },
  { id: 175, kanji_id: 44, respuesta: "いく", correcta: false },
  { id: 176, kanji_id: 44, respuesta: "みる", correcta: false },

  // Kanji: 心
  { id: 177, kanji_id: 45, respuesta: "こころ", correcta: true },
  { id: 178, kanji_id: 45, respuesta: "しん", correcta: false },
  { id: 179, kanji_id: 45, respuesta: "かんがえる", correcta: false },
  { id: 180, kanji_id: 45, respuesta: "いく", correcta: false },

  // Kanji: 間
  { id: 181, kanji_id: 46, respuesta: "あいだ", correcta: true },
  { id: 182, kanji_id: 46, respuesta: "いく", correcta: false },
  { id: 183, kanji_id: 46, respuesta: "とき", correcta: false },
  { id: 184, kanji_id: 46, respuesta: "かける", correcta: false },

  // Kanji: 米
  { id: 185, kanji_id: 47, respuesta: "こめ", correcta: true },
  { id: 186, kanji_id: 47, respuesta: "くさ", correcta: false },
  { id: 187, kanji_id: 47, respuesta: "たべもの", correcta: false },
  { id: 188, kanji_id: 47, respuesta: "やさい", correcta: false },

  // Kanji: 肉
  { id: 189, kanji_id: 48, respuesta: "にく", correcta: true },
  { id: 190, kanji_id: 48, respuesta: "やさい", correcta: false },
  { id: 191, kanji_id: 48, respuesta: "たべもの", correcta: false },
  { id: 192, kanji_id: 48, respuesta: "くだもの", correcta: false },

  // Kanji: 野
  { id: 193, kanji_id: 49, respuesta: "の", correcta: true },
  { id: 194, kanji_id: 49, respuesta: "やま", correcta: false },
  { id: 195, kanji_id: 49, respuesta: "かわ", correcta: false },
  { id: 196, kanji_id: 49, respuesta: "うみ", correcta: false },

  // Kanji: 山
  { id: 197, kanji_id: 50, respuesta: "やま", correcta: true },
  { id: 198, kanji_id: 50, respuesta: "たかい", correcta: false },
  { id: 199, kanji_id: 50, respuesta: "き", correcta: false },
  { id: 200, kanji_id: 50, respuesta: "かざん", correcta: false },

    // Kanji: 川
    { id: 1, kanji_id: 51, respuesta: "かわ", correcta: true },
    { id: 2, kanji_id: 51, respuesta: "しん", correcta: false },
    { id: 3, kanji_id: 51, respuesta: "かわい", correcta: false },
    { id: 4, kanji_id: 51, respuesta: "うみ", correcta: false },
  
    // Kanji: 風
    { id: 5, kanji_id: 52, respuesta: "ふう", correcta: true },
    { id: 6, kanji_id: 52, respuesta: "かぜ", correcta: false },
    { id: 7, kanji_id: 52, respuesta: "ひ", correcta: false },
    { id: 8, kanji_id: 52, respuesta: "みず", correcta: false },
  
    // Kanji: 空
    { id: 9, kanji_id: 53, respuesta: "そら", correcta: true },
    { id: 10, kanji_id: 53, respuesta: "うみ", correcta: false },
    { id: 11, kanji_id: 53, respuesta: "かわ", correcta: false },
    { id: 12, kanji_id: 53, respuesta: "いえ", correcta: false },
  
    // Kanji: 海
    { id: 13, kanji_id: 54, respuesta: "うみ", correcta: true },
    { id: 14, kanji_id: 54, respuesta: "かわ", correcta: false },
    { id: 15, kanji_id: 54, respuesta: "そら", correcta: false },
    { id: 16, kanji_id: 54, respuesta: "いけ", correcta: false },
  
    // Kanji: 電
    { id: 17, kanji_id: 55, respuesta: "でんき", correcta: true },
    { id: 18, kanji_id: 55, respuesta: "ひかり", correcta: false },
    { id: 19, kanji_id: 55, respuesta: "かぜ", correcta: false },
    { id: 20, kanji_id: 55, respuesta: "みず", correcta: false },
  
    // Kanji: 食
    { id: 21, kanji_id: 56, respuesta: "たべる", correcta: true },
    { id: 22, kanji_id: 56, respuesta: "のみ", correcta: false },
    { id: 23, kanji_id: 56, respuesta: "みる", correcta: false },
    { id: 24, kanji_id: 56, respuesta: "きく", correcta: false },
  
    // Kanji: 飲
    { id: 25, kanji_id: 57, respuesta: "のむ", correcta: true },
    { id: 26, kanji_id: 57, respuesta: "たべる", correcta: false },
    { id: 27, kanji_id: 57, respuesta: "みる", correcta: false },
    { id: 28, kanji_id: 57, respuesta: "きく", correcta: false },
  
    // Kanji: 買
    { id: 29, kanji_id: 58, respuesta: "かう", correcta: true },
    { id: 30, kanji_id: 58, respuesta: "うる", correcta: false },
    { id: 31, kanji_id: 58, respuesta: "しる", correcta: false },
    { id: 32, kanji_id: 58, respuesta: "もつ", correcta: false },
  
    // Kanji: 売
    { id: 33, kanji_id: 59, respuesta: "うる", correcta: true },
    { id: 34, kanji_id: 59, respuesta: "かう", correcta: false },
    { id: 35, kanji_id: 59, respuesta: "みる", correcta: false },
    { id: 36, kanji_id: 59, respuesta: "のむ", correcta: false },
  
    // Kanji: 働
    { id: 37, kanji_id: 60, respuesta: "はたらく", correcta: true },
    { id: 38, kanji_id: 60, respuesta: "はたらき", correcta: false },
    { id: 39, kanji_id: 60, respuesta: "あそぶ", correcta: false },
    { id: 40, kanji_id: 60, respuesta: "みる", correcta: false },
  
    // Kanji: 受
    { id: 41, kanji_id: 61, respuesta: "うける", correcta: true },
    { id: 42, kanji_id: 61, respuesta: "あげる", correcta: false },
    { id: 43, kanji_id: 61, respuesta: "かける", correcta: false },
    { id: 44, kanji_id: 61, respuesta: "わかる", correcta: false },
  
    // Kanji: 出
    { id: 45, kanji_id: 62, respuesta: "でる", correcta: true },
    { id: 46, kanji_id: 62, respuesta: "はいる", correcta: false },
    { id: 47, kanji_id: 62, respuesta: "くる", correcta: false },
    { id: 48, kanji_id: 62, respuesta: "いく", correcta: false },
  
    // Kanji: 入
    { id: 49, kanji_id: 63, respuesta: "はいる", correcta: true },
    { id: 50, kanji_id: 63, respuesta: "でる", correcta: false },
    { id: 51, kanji_id: 63, respuesta: "あける", correcta: false },
    { id: 52, kanji_id: 63, respuesta: "おきる", correcta: false },
  
    // Kanji: 作
    { id: 53, kanji_id: 64, respuesta: "つくる", correcta: true },
    { id: 54, kanji_id: 64, respuesta: "つかう", correcta: false },
    { id: 55, kanji_id: 64, respuesta: "いく", correcta: false },
    { id: 56, kanji_id: 64, respuesta: "わかる", correcta: false },
  
    // Kanji: 選
    { id: 57, kanji_id: 65, respuesta: "せんたく", correcta: true },
    { id: 58, kanji_id: 65, respuesta: "えらぶ", correcta: false },
    { id: 59, kanji_id: 65, respuesta: "つかう", correcta: false },
    { id: 60, kanji_id: 65, respuesta: "はたらく", correcta: false },
  
    // Kanji: 進
    { id: 61, kanji_id: 66, respuesta: "すすむ", correcta: true },
    { id: 62, kanji_id: 66, respuesta: "いく", correcta: false },
    { id: 63, kanji_id: 66, respuesta: "かける", correcta: false },
    { id: 64, kanji_id: 66, respuesta: "あたる", correcta: false },
  
    // Kanji: 帰
    { id: 65, kanji_id: 67, respuesta: "かえる", correcta: true },
    { id: 66, kanji_id: 67, respuesta: "いく", correcta: false },
    { id: 67, kanji_id: 67, respuesta: "きる", correcta: false },
    { id: 68, kanji_id: 67, respuesta: "うかがう", correcta: false },
  
    // Kanji: 着
    { id: 69, kanji_id: 68, respuesta: "つく", correcta: true },
    { id: 70, kanji_id: 68, respuesta: "いく", correcta: false },
    { id: 71, kanji_id: 68, respuesta: "くる", correcta: false },
    { id: 72, kanji_id: 68, respuesta: "かける", correcta: false },
  
    // Kanji: 持
    { id: 73, kanji_id: 69, respuesta: "もつ", correcta: true },
    { id: 74, kanji_id: 69, respuesta: "かう", correcta: false },
    { id: 75, kanji_id: 69, respuesta: "あう", correcta: false },
    { id: 76, kanji_id: 69, respuesta: "のむ", correcta: false },
  
    // Kanji: 選 (repetido)
    { id: 77, kanji_id: 70, respuesta: "えらぶ", correcta: true },
    { id: 78, kanji_id: 70, respuesta: "せんたく", correcta: false },
    { id: 79, kanji_id: 70, respuesta: "つくる", correcta: false },
    { id: 80, kanji_id: 70, respuesta: "あう", correcta: false },
  
    // Kanji: 知
    { id: 81, kanji_id: 71, respuesta: "しる", correcta: true },
    { id: 82, kanji_id: 71, respuesta: "わかる", correcta: false },
    { id: 83, kanji_id: 71, respuesta: "みる", correcta: false },
    { id: 84, kanji_id: 71, respuesta: "きく", correcta: false },
  
    // Kanji: 行
    { id: 85, kanji_id: 72, respuesta: "いく", correcta: true },
    { id: 86, kanji_id: 72, respuesta: "はたらく", correcta: false },
    { id: 87, kanji_id: 72, respuesta: "たべる", correcta: false },
    { id: 88, kanji_id: 72, respuesta: "のむ", correcta: false },
  
    // Kanji: 出 (repetido)
    { id: 89, kanji_id: 73, respuesta: "でる", correcta: true },
    { id: 90, kanji_id: 73, respuesta: "いく", correcta: false },
    { id: 91, kanji_id: 73, respuesta: "はいる", correcta: false },
    { id: 92, kanji_id: 73, respuesta: "あける", correcta: false },
  
    // Kanji: 分
    { id: 93, kanji_id: 74, respuesta: "わかる", correcta: true },
    { id: 94, kanji_id: 74, respuesta: "ふん", correcta: false },
    { id: 95, kanji_id: 74, respuesta: "あたる", correcta: false },
    { id: 96, kanji_id: 74, respuesta: "おく", correcta: false },
  
    // Kanji: 多
    { id: 97, kanji_id: 75, respuesta: "おおい", correcta: true },
    { id: 98, kanji_id: 75, respuesta: "すくない", correcta: false },
    { id: 99, kanji_id: 75, respuesta: "よく", correcta: false },
    { id: 100, kanji_id: 75, respuesta: "あう", correcta: false },
  
    // Kanji: 少
    { id: 101, kanji_id: 76, respuesta: "すくない", correcta: true },
    { id: 102, kanji_id: 76, respuesta: "おおい", correcta: false },
    { id: 103, kanji_id: 76, respuesta: "ふん", correcta: false },
    { id: 104, kanji_id: 76, respuesta: "あたる", correcta: false },
  
    // Kanji: 遠
    { id: 105, kanji_id: 77, respuesta: "とおい", correcta: true },
    { id: 106, kanji_id: 77, respuesta: "ちかい", correcta: false },
    { id: 107, kanji_id: 77, respuesta: "いく", correcta: false },
    { id: 108, kanji_id: 77, respuesta: "かける", correcta: false },
  
    // Kanji: 近
    { id: 109, kanji_id: 78, respuesta: "ちかい", correcta: true },
    { id: 110, kanji_id: 78, respuesta: "とおい", correcta: false },
    { id: 111, kanji_id: 78, respuesta: "あたる", correcta: false },
    { id: 112, kanji_id: 78, respuesta: "いく", correcta: false },
  
    // Kanji: 大
    { id: 113, kanji_id: 79, respuesta: "おおきい", correcta: true },
    { id: 114, kanji_id: 79, respuesta: "ちいさい", correcta: false },
    { id: 115, kanji_id: 79, respuesta: "うすい", correcta: false },
    { id: 116, kanji_id: 79, respuesta: "かるい", correcta: false },
  
    // Kanji: 小
    { id: 117, kanji_id: 80, respuesta: "ちいさい", correcta: true },
    { id: 118, kanji_id: 80, respuesta: "おおきい", correcta: false },
    { id: 119, kanji_id: 80, respuesta: "あたる", correcta: false },
    { id: 120, kanji_id: 80, respuesta: "とおい", correcta: false },
  
    // Kanji: 高
    { id: 121, kanji_id: 81, respuesta: "たかい", correcta: true },
    { id: 122, kanji_id: 81, respuesta: "ひくい", correcta: false },
    { id: 123, kanji_id: 81, respuesta: "おおきい", correcta: false },
    { id: 124, kanji_id: 81, respuesta: "あたる", correcta: false },
  
    // Kanji: 安
    { id: 125, kanji_id: 82, respuesta: "やすい", correcta: true },
    { id: 126, kanji_id: 82, respuesta: "たかい", correcta: false },
    { id: 127, kanji_id: 82, respuesta: "すくない", correcta: false },
    { id: 128, kanji_id: 82, respuesta: "おおきい", correcta: false },
  
    // Kanji: 新
    { id: 129, kanji_id: 83, respuesta: "あたらしい", correcta: true },
    { id: 130, kanji_id: 83, respuesta: "ふるい", correcta: false },
    { id: 131, kanji_id: 83, respuesta: "おおきい", correcta: false },
    { id: 132, kanji_id: 83, respuesta: "すくない", correcta: false },
  
    // Kanji: 古
    { id: 133, kanji_id: 84, respuesta: "ふるい", correcta: true },
    { id: 134, kanji_id: 84, respuesta: "あたらしい", correcta: false },
    { id: 135, kanji_id: 84, respuesta: "おおきい", correcta: false },
    { id: 136, kanji_id: 84, respuesta: "たかい", correcta: false },
  
    // Kanji: 長
    { id: 137, kanji_id: 85, respuesta: "ながい", correcta: true },
    { id: 138, kanji_id: 85, respuesta: "みじかい", correcta: false },
    { id: 139, kanji_id: 85, respuesta: "おおきい", correcta: false },
    { id: 140, kanji_id: 85, respuesta: "すくない", correcta: false },
  
    // Kanji: 短
    { id: 141, kanji_id: 86, respuesta: "みじかい", correcta: true },
    { id: 142, kanji_id: 86, respuesta: "ながい", correcta: false },
    { id: 143, kanji_id: 86, respuesta: "おおきい", correcta: false },
    { id: 144, kanji_id: 86, respuesta: "たかい", correcta: false },
  
    // Kanji: 良
    { id: 145, kanji_id: 87, respuesta: "よい", correcta: true },
    { id: 146, kanji_id: 87, respuesta: "わるい", correcta: false },
    { id: 147, kanji_id: 87, respuesta: "おおきい", correcta: false },
    { id: 148, kanji_id: 87, respuesta: "たかい", correcta: false },
  
    // Kanji: 悪
    { id: 149, kanji_id: 88, respuesta: "わるい", correcta: true },
    { id: 150, kanji_id: 88, respuesta: "よい", correcta: false },
    { id: 151, kanji_id: 88, respuesta: "すくない", correcta: false },
    { id: 152, kanji_id: 88, respuesta: "ちいさい", correcta: false },
  
    // Kanji: 楽
    { id: 153, kanji_id: 89, respuesta: "たのしい", correcta: true },
    { id: 154, kanji_id: 89, respuesta: "つらい", correcta: false },
    { id: 155, kanji_id: 89, respuesta: "おおきい", correcta: false },
    { id: 156, kanji_id: 89, respuesta: "すくない", correcta: false },
  
    // Kanji: 運
    { id: 157, kanji_id: 90, respuesta: "うん", correcta: true },
    { id: 158, kanji_id: 90, respuesta: "いく", correcta: false },
    { id: 159, kanji_id: 90, respuesta: "はたらく", correcta: false },
    { id: 160, kanji_id: 90, respuesta: "たべる", correcta: false },
  
    // Kanji: 気
    { id: 161, kanji_id: 91, respuesta: "き", correcta: true },
    { id: 162, kanji_id: 91, respuesta: "みる", correcta: false },
    { id: 163, kanji_id: 91, respuesta: "あたる", correcta: false },
    { id: 164, kanji_id: 91, respuesta: "すくない", correcta: false },
  
    // Kanji: 体
    { id: 165, kanji_id: 92, respuesta: "からだ", correcta: true },
    { id: 166, kanji_id: 92, respuesta: "あたる", correcta: false },
    { id: 167, kanji_id: 92, respuesta: "おおきい", correcta: false },
    { id: 168, kanji_id: 92, respuesta: "すくない", correcta: false },
  
    // Kanji: 心
    { id: 169, kanji_id: 93, respuesta: "こころ", correcta: true },
    { id: 170, kanji_id: 93, respuesta: "からだ", correcta: false },
    { id: 171, kanji_id: 93, respuesta: "あたる", correcta: false },
    { id: 172, kanji_id: 93, respuesta: "すくない", correcta: false },
  
    // Kanji: 顔
    { id: 173, kanji_id: 94, respuesta: "かお", correcta: true },
    { id: 174, kanji_id: 94, respuesta: "あたる", correcta: false },
    { id: 175, kanji_id: 94, respuesta: "みる", correcta: false },
    { id: 176, kanji_id: 94, respuesta: "すくない", correcta: false },
  
    // Kanji: 声
    { id: 177, kanji_id: 95, respuesta: "こえ", correcta: true },
    { id: 178, kanji_id: 95, respuesta: "あたる", correcta: false },
    { id: 179, kanji_id: 95, respuesta: "みる", correcta: false },
    { id: 180, kanji_id: 95, respuesta: "すくない", correcta: false },
  
    // Kanji: 音
    { id: 181, kanji_id: 96, respuesta: "おと", correcta: true },
    { id: 182, kanji_id: 96, respuesta: "しずか", correcta: false },
    { id: 183, kanji_id: 96, respuesta: "あたる", correcta: false },
    { id: 184, kanji_id: 96, respuesta: "すくない", correcta: false },
  
    // Kanji: 道
    { id: 185, kanji_id: 97, respuesta: "みち", correcta: true },
    { id: 186, kanji_id: 97, respuesta: "あたる", correcta: false },
    { id: 187, kanji_id: 97, respuesta: "いく", correcta: false },
    { id: 188, kanji_id: 97, respuesta: "すくない", correcta: false },
  
    // Kanji: 正
    { id: 189, kanji_id: 98, respuesta: "ただしい", correcta: true },
    { id: 190, kanji_id: 98, respuesta: "あたる", correcta: false },
    { id: 191, kanji_id: 98, respuesta: "みる", correcta: false },
    { id: 192, kanji_id: 98, respuesta: "すくない", correcta: false },
  
    // Kanji: 運 (repetido)
    { id: 193, kanji_id: 99, respuesta: "うん", correcta: true },
    { id: 194, kanji_id: 99, respuesta: "はたらく", correcta: false },
    { id: 195, kanji_id: 99, respuesta: "おおきい", correcta: false },
    { id: 196, kanji_id: 99, respuesta: "たべる", correcta: false },
  
    // Kanji: 悪 (repetido)
    { id: 197, kanji_id: 100, respuesta: "わるい", correcta: true },
    { id: 198, kanji_id: 100, respuesta: "よい", correcta: false },
    { id: 199, kanji_id: 100, respuesta: "すくない", correcta: false },
    { id: 200, kanji_id: 100, respuesta: "ちいさい", correcta: false },
];


  
  export { kanjis };
  export { respuestas };

  