const kanjis = [
  { id: 1, kanji: "日本でいろいろな（経験）をしまいました" },
  { id: 2, kanji: "（店員）にトイレがどこにあるか聞きました" },
  { id: 3, kanji: "今日は（食堂）がこんでいました。" },
  { id: 4, kanji: "この（小説）は面白かったです。" },
  { id: 5, kanji: "（夕方）、雨が降りました。" },


  //もんだい 2

  { id: 6, kanji: "かいぎの(ばしょ)をおしえてください。" },
  { id: 7, kanji: "わたしのいえはえきから(あるいて)5分です。" },
  { id: 8, kanji: "とても（ねむかった）ので、コーヒーを飲みました。" },

  //もんだい 3

  { id: 9, kanji: "けさせんたくしたふくがまだ（　　）いません。" },
  { id: 10, kanji: "スミスさんはいつも（　　）べんきょうしています。" },
  { id: 11, kanji: "わたしはにほんのマンガに（　　）があります。" },
  { id: 12, kanji: "りょこうのにもつはもう（　　）できました。" },
  { id: 13, kanji: "おとうとと（　　）して母にあげるプレゼントをえらびました。" },
  { id: 14, kanji: "このきかいはつかいかたをまちがえるととても（ 　 ）です。" },

  //もんだい 4

  { id: 15, kanji: "バスがしゅっぱつしました。" },
  { id: 16, kanji: "もっとていねいにかいてください。" },
  { id: 17, kanji: "きのうはねぼうしました。" },
  { id: 18, kanji: "田中さんは先生にほめられました。" },


  //もんだい 5
  { id: 19, kanji: "るす" },
  { id: 20, kanji: "おさらをおとして、（わって）しまいました。" },
  { id: 21, kanji: "じゅぎょうに（ちこく）してすみません。" },
];

const respuestas = [




  // Kanji: 経験 
  { id: 1, kanji_id: 1, respuesta: "けいけん", correcta: true },
  { id: 2, kanji_id: 1, respuesta: "けいげん", correcta: false },
  { id: 3, kanji_id: 1, respuesta: "けけん", correcta: false },
  { id: 4, kanji_id: 1, respuesta: "けげん", correcta: false },

  // Kanji: 店員
  { id: 5, kanji_id: 2, respuesta: "て人", correcta: false },
  { id: 6, kanji_id: 2, respuesta: "てんにん", correcta: false },
  { id: 7, kanji_id: 2, respuesta: "ていん", correcta: false },
  { id: 8, kanji_id: 2, respuesta: "てんいん", correcta: true },

  // Kanji: 食堂
  { id: 9, kanji_id: 3, respuesta: "しょくど", correcta: false },
  { id: 10, kanji_id: 3, respuesta: "しょくどう", correcta: true },
  { id: 11, kanji_id: 3, respuesta: "しゅくど", correcta: false },
  { id: 12, kanji_id: 3, respuesta: "しゅくどう", correcta: false },

  // Kanji: 小説
  { id: 13, kanji_id: 4, respuesta: "しょせつ", correcta: false },
  { id: 14, kanji_id: 4, respuesta: "しょぜつ", correcta: false },
  { id: 15, kanji_id: 4, respuesta: "しょうせつ", correcta: true },
  { id: 16, kanji_id: 4, respuesta: "しょうぜつ", correcta: false },

  // Kanji: 夕方
  { id: 17, kanji_id: 5, respuesta: "ゆうほう", correcta: false },
  { id: 18, kanji_id: 5, respuesta: "ゆうがた", correcta: true },
  { id: 19, kanji_id: 5, respuesta: "ゆほう", correcta: false },
  { id: 20, kanji_id: 5, respuesta: "ゆがた", correcta: false },



  //もんだい 2

  // Kanji: 場所
  { id: 21, kanji_id: 6, respuesta: "場所", correcta: true },
  { id: 22, kanji_id: 6, respuesta: "揚所", correcta: false },
  { id: 23, kanji_id: 6, respuesta: "揚所", correcta: false },
  { id: 24, kanji_id: 6, respuesta: "場所", correcta: true },

  // Kanji: 歩いて
  { id: 25, kanji_id: 7, respuesta: "歩いて", correcta: true },
  { id: 26, kanji_id: 7, respuesta: "走いて", correcta: false },
  { id: 27, kanji_id: 7, respuesta: "遊いて", correcta: false },
  { id: 28, kanji_id: 7, respuesta: "描いて", correcta: false },

  // Kanji: 眠かった
  { id: 29, kanji_id: 8, respuesta: "眠かった", correcta: true },
  { id: 30, kanji_id: 8, respuesta: "眠むかった", correcta: false },
  { id: 31, kanji_id: 8, respuesta: "瞑かっむた", correcta: false },
  { id: 32, kanji_id: 8, respuesta: "瞑むかった", correcta: false },

  //もんだい 3

  // Kanji: かわいて
  { id: 33, kanji_id: 9, respuesta: "ぬれて", correcta: false },
  { id: 34, kanji_id: 9, respuesta: "ひえて", correcta: false },
  { id: 35, kanji_id: 9, respuesta: "なおて", correcta: false },
  { id: 36, kanji_id: 9, respuesta: "かわいて", correcta: true },


  // Kanji: ねっしんに
  { id: 37, kanji_id: 10, respuesta: "ねっしんに", correcta: true }, // Correcto, significa "con entusiasmo" o "dedicadamente"
  { id: 38, kanji_id: 10, respuesta: "だいじに", correcta: false }, // Incorrecto, significa "con cuidado"
  { id: 39, kanji_id: 10, respuesta: "たいせつに", correcta: false }, // Incorrecto, significa "con importancia"
  { id: 40, kanji_id: 10, respuesta: "まっすぐに", correcta: false }, // Incorrecto, significa "directamente"

  // Kanji: きょうみ
  { id: 41, kanji_id: 11, respuesta: "きょうみ", correcta: true }, // Correcto, significa "interés"
  { id: 42, kanji_id: 11, respuesta: "きぶん", correcta: false }, // Incorrecto, significa "estado de ánimo"
  { id: 43, kanji_id: 11, respuesta: "こころ", correcta: false }, // Incorrecto, significa "corazón"
  { id: 44, kanji_id: 11, respuesta: "しゅみ", correcta: false }, // Incorrecto, significa "hobby"

  // Kanji: ようい
  { id: 45, kanji_id: 12, respuesta: "ようい", correcta: true }, // Correcto, significa "preparación"
  { id: 46, kanji_id: 12, respuesta: "やくそく", correcta: false }, // Incorrecto, significa "promesa"
  { id: 47, kanji_id: 12, respuesta: "りよう", correcta: false }, // Incorrecto, significa "uso"
  { id: 48, kanji_id: 12, respuesta: "せわ", correcta: false }, // Incorrecto, significa "cuidado"

  // Kanji: そうだん
  { id: 49, kanji_id: 13, respuesta: "そうだん", correcta: true }, // Correcto, significa "consultar"
  { id: 50, kanji_id: 13, respuesta: "さんせい", correcta: false }, // Incorrecto, significa "apoyo"
  { id: 51, kanji_id: 13, respuesta: "あいさつ", correcta: false }, // Incorrecto, significa "saludo"
  { id: 52, kanji_id: 13, respuesta: "へんじ", correcta: false }, // Incorrecto, significa "respuesta"

  // Kanji: きけん
  { id: 53, kanji_id: 14, respuesta: "きけん", correcta: true }, // Correcto, significa "peligroso"
  { id: 54, kanji_id: 14, respuesta: "けっこう", correcta: false }, // Incorrecto, significa "bastante" o "suficiente"
  { id: 55, kanji_id: 14, respuesta: "じゆう", correcta: false }, // Incorrecto, significa "libre" o "libertad"
  { id: 56, kanji_id: 14, respuesta: "あんぜん", correcta: false }, // Incorrecto, significa "seguro" o "seguridad"


  //もんだい 4

  // Kanji: しゅっぱつしました
  { id: 57, kanji_id: 15, respuesta: "バスがでました", correcta: true }, // Correcto, significa "El autobús ha salido"
  { id: 58, kanji_id: 15, respuesta: "バスがとまりました", correcta: false }, // Incorrecto, significa "El autobús se detuvo"
  { id: 59, kanji_id: 15, respuesta: "バスがつきました", correcta: false }, // Incorrecto, significa "El autobús ha llegado"
  { id: 60, kanji_id: 15, respuesta: "バスがまがりました", correcta: false }, // Incorrecto, significa "El autobús giró"

  // Kanji: ていねいにかいてください
  { id: 61, kanji_id: 16, respuesta: "もっときれいにかいてください", correcta: true }, // Correcto, significa "escribir más bonito"
  { id: 62, kanji_id: 16, respuesta: "もっとおおきくかいてください", correcta: false }, // Incorrecto, significa "escribir más grande"
  { id: 63, kanji_id: 16, respuesta: "もっとふとくかいてください", correcta: false }, // Incorrecto, significa "escribir más grueso"
  { id: 64, kanji_id: 16, respuesta: "もっとかんたんにかいてください", correcta: false }, // Incorrecto, significa "escribir más fácil"

  // Kanji: ねぼうしました
  { id: 65, kanji_id: 17, respuesta: "きのうはおきるのがおそくなってしまいました", correcta: true }, // Correcto, significa "me desperté tarde"
  { id: 66, kanji_id: 17, respuesta: "きのうはねるのがおそくなってしまいました", correcta: false }, // Incorrecto, significa "me acosté tarde"
  { id: 67, kanji_id: 17, respuesta: "きのうははやくねってしまいました", correcta: false }, // Incorrecto, significa "me acosté temprano"
  { id: 68, kanji_id: 17, respuesta: "きのうははやくおきてしまいました", correcta: false }, // Incorrecto, significa "me levanté temprano"


  // Kanji: ほめられました
  { id: 69, kanji_id: 18, respuesta: "先生は田中さんに「とてもよかったですよ」と言いました。", correcta: true }, // Correcto, expresa elogio
  { id: 70, kanji_id: 18, respuesta: "先生は田中さんに「気をつけてね」と言いました。", correcta: false }, // Incorrecto, expresa advertencia o preocupación
  { id: 71, kanji_id: 18, respuesta: "先生は田中さんに「ちょっと休みましょう」と言いました。", correcta: false }, // Incorrecto, expresa invitación a descansar
  { id: 72, kanji_id: 18, respuesta: "先生は田中さんに「たいへんですね」と言いました。", correcta: false }, // Incorrecto, expresa empatía


  //もんだい 5


  // Kanji: るす
  { id: 73, kanji_id: 19, respuesta: "ともだちのいえに行ったら（るす）でした。", correcta: true }, // Correcto, expresa que alguien no estaba en casa
  { id: 74, kanji_id: 19, respuesta: "さいきんいそがしくて、しごとが（るす）になりません。", correcta: false }, // Incorrecto, "るす" no es adecuado aquí
  { id: 75, kanji_id: 19, respuesta: "あのデパートはきょうは（るす）です。", correcta: false }, // Incorrecto, "るす" no aplica a edificios comerciales
  { id: 76, kanji_id: 19, respuesta: "このひこうきには（るす）のせきがありません。", correcta: false }, // Incorrecto, "るす" no aplica a asientos vacíos
 
  // Kanji: わる (割る)
 { id: 77, kanji_id: 20, respuesta: "おさらをおとして、（わって）しまいました。", correcta: true }, // Correcto, indica "romper un plato"
 { id: 78, kanji_id: 20, respuesta: "しんぶんを（わって）しんぶんをかばんに入れました。", correcta: false }, // Incorrecto, se debería usar やぶる para desgarrar papel
 { id: 79, kanji_id: 20, respuesta: "ようふくを（わって）母におこられました。", correcta: false }, // Incorrecto, やぶる sería mejor para ropa
 { id: 80, kanji_id: 20, respuesta: "このジャムを三本のびんに（わって）ください。", correcta: false }, // Incorrecto, aunque posible, 分ける es mejor

 // Kanji: 遅刻
 { id: 81, kanji_id: 21, respuesta: "あのとけいはちょっと（ちこく）しています。", correcta: false }, // Incorrecto, "おくれている" sería más adecuado
 { id: 82, kanji_id: 21, respuesta: "じゅぎょうに（ちこく）してすみません。", correcta: true }, // Correcto, indica llegar tarde a clase
 { id: 83, kanji_id: 21, respuesta: "10時のでんしゃに（ちこく）してしまいました。", correcta: false }, // Incorrecto, "でんしゃ" es general para tren, 乗り遅れる sería más claro
 { id: 84, kanji_id: 21, respuesta: "れんらくが（ちこく）してすみません。", correcta: false }, // Incorrecto, usar "おくれる" sería mejor en este contexto
 


];



export { kanjis };
export { respuestas };

