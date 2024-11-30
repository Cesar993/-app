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
  { id: 20, kanji: "わって" },
  { id: 21, kanji: "ちこく"},


  // Nuevas preguntas
  { id: 22, kanji: "私は自（転車）にのれません。" },
  { id: 23, kanji: "何時に（出発）しますか。" },
  { id: 24, kanji: "そのカメラはどこで（売って）いますか。" },


  // Examen 2018
  //////////////////////////////////////////////////////////
  // もんだい 1
  { id: 25, kanji: "はやしさん（以外）はみんな来ました" },
  { id: 26, kanji: "その電車は（急行）ですよ。" },
  { id: 27, kanji: "これは（写さないで）ください" },
  { id: 28, kanji: "そのいけには（反対）です。" },

  // もんだい 2

  { id: 29, kanji: "かさを（かして）ください。" },
  { id: 30, kanji: "あしたはサッカーの（しあい）があります。" },

  // もんだい 3

  { id: 31, kanji: "これからきかいのつかいかたを（　　）しますから、よく聞いてください。" },
  { id: 32, kanji: "もりさんをでーとに（　　）が、行けないと言われました。" },
  { id: 33, kanji: "お店で３だいのパソコンを（　　）、いちばんかるいパソコンをえらびました。" },
  { id: 34, kanji: "たなかさんおいえの電気かついていませんね。たなかさんは（　　）のようです。" },
  
  //ampliando vocabulario

  { id: 35, kanji: "(水泳)は体にいいです。" },
  { id: 36, kanji: "(飾る)は部屋をきれいにするために使います。" },
  { id: 37, kanji: "(見学)は工場で行われます。" },
  { id: 38, kanji: "(工事)は今、駅前で行われています。" },

  { id: 39, kanji: "そのニュースを聞いて、彼は（　　）ました。" },
  { id: 40, kanji: "この本は日本の歴史（　　）書かれています。" },
  { id: 41, kanji: "田中さんは今、（　　）です。" },
  { id: 42, kanji: "次の文の中で（     ）が正しい使い方はどれですか？" },
  { id: 43, kanji: "この仕事は（     ）進まないですね。" },
];

const respuestas = [




   // Kanji: 経験 
   {
    id: 1,
    kanji_id: 1,
    respuesta: "けいけん", 
    correcta: true, 
    explicacion: "経験（けいけん） significa 'experiencia', especialmente en el contexto de haber vivido o experimentado algo. Se utiliza comúnmente para hablar de conocimientos o habilidades adquiridos a través de vivencias. En este caso, '日本でいろいろな経験をしました' significa 'Tuve muchas experiencias en Japón'."
  },
  { id: 2, kanji_id: 1, respuesta: "けいげん", correcta: false },
  { id: 3, kanji_id: 1, respuesta: "けけん", correcta: false },
  { id: 4, kanji_id: 1, respuesta: "けげん", correcta: false },

  // Kanji: 店員
  { id: 5, kanji_id: 2, respuesta: "て人", correcta: false },
  { id: 6, kanji_id: 2, respuesta: "てんにん", correcta: false },
  { id: 7, kanji_id: 2, respuesta: "ていん", correcta: false },
  { id: 8, kanji_id: 2, respuesta: "てんいん", correcta: true, explicacion: "'店員' se lee como 'てんいん' y significa 'empleado de tienda' o 'dependiente'." },

  // Kanji: 食堂
  { id: 9, kanji_id: 3, respuesta: "しょくど", correcta: false },
  { id: 10, kanji_id: 3, respuesta: "しょくどう", correcta: true, explicacion: "'食堂' (しょくどう) significa 'comedor' o 'cafetería'." },
  { id: 11, kanji_id: 3, respuesta: "しゅくど", correcta: false },
  { id: 12, kanji_id: 3, respuesta: "しゅくどう", correcta: false },

  // Kanji: 小説
  { id: 13, kanji_id: 4, respuesta: "しょせつ", correcta: false },
  { id: 14, kanji_id: 4, respuesta: "しょぜつ", correcta: false },
  { id: 15, kanji_id: 4, respuesta: "しょうせつ", correcta: true, explicacion: "'小説' significa 'novela' y su lectura es 'しょうせつ'." },
  { id: 16, kanji_id: 4, respuesta: "しょうぜつ", correcta: false },

  // Kanji: 夕方
  { id: 17, kanji_id: 5, respuesta: "ゆうほう", correcta: false },
  { id: 18, kanji_id: 5, respuesta: "ゆうがた", correcta: true, explicacion: "'夕方' significa 'tarde' o 'al anochecer'." },
  { id: 19, kanji_id: 5, respuesta: "ゆほう", correcta: false },
  { id: 20, kanji_id: 5, respuesta: "ゆがた", correcta: false },



  //もんだい 2

  // Kanji: 場所
  { id: 21, kanji_id: 6, respuesta: "場所", correcta: true, explicacion: "'場所' (ばしょ) significa 'lugar'." },
  { id: 22, kanji_id: 6, respuesta: "揚所", correcta: false },
  { id: 23, kanji_id: 6, respuesta: "揚所", correcta: false },
  { id: 24, kanji_id: 6, respuesta: "場しょ", correcta: false },

  // Kanji: 歩いて
  { id: 25, kanji_id: 7, respuesta: "歩いて", correcta: true, explicacion: "'歩いて' (あるいて) significa 'caminando'." },
  { id: 26, kanji_id: 7, respuesta: "走いて", correcta: false },
  { id: 27, kanji_id: 7, respuesta: "遊いて", correcta: false },
  { id: 28, kanji_id: 7, respuesta: "描いて", correcta: false },

  // Kanji: 眠かった
  { id: 29, kanji_id: 8, respuesta: "眠かった", correcta: true, explicacion: "'眠かった' (ねむかった) significa 'estaba cansado' o 'tenía sueño'." },
  { id: 30, kanji_id: 8, respuesta: "眠むかった", correcta: false },
  { id: 31, kanji_id: 8, respuesta: "瞑かっむた", correcta: false },
  { id: 32, kanji_id: 8, respuesta: "瞑むかった", correcta: false },

  //もんだい 3

  // Kanji: かわいて
  { id: 33, kanji_id: 9, respuesta: "ぬれて", correcta: false },
  { id: 34, kanji_id: 9, respuesta: "ひえて", correcta: false },
  { id: 35, kanji_id: 9, respuesta: "なおて", correcta: false },
  { id: 36, kanji_id: 9, respuesta: "かわいて", correcta: true, explicacion: "'乾いて' (かわいて) significa 'seco' o 'secado'." },


  // Kanji: ねっしんに
  { id: 37, kanji_id: 10, respuesta: "ねっしんに", correcta: true, explicacion: "'熱心に' (ねっしんに) significa 'con entusiasmo'." }, // Correcto, significa "con entusiasmo" o "dedicadamente"
  { id: 38, kanji_id: 10, respuesta: "だいじに", correcta: false }, // Incorrecto, significa "con cuidado"
  { id: 39, kanji_id: 10, respuesta: "たいせつに", correcta: false }, // Incorrecto, significa "con importancia"
  { id: 40, kanji_id: 10, respuesta: "まっすぐに", correcta: false }, // Incorrecto, significa "directamente"

  // Kanji: きょうみ
  { id: 41, kanji_id: 11, respuesta: "きょうみ", correcta: true, explicacion: "'興味' (きょうみ) significa 'interés'." }, // Correcto, significa "interés"
  { id: 42, kanji_id: 11, respuesta: "きぶん", correcta: false }, // Incorrecto, significa "estado de ánimo"
  { id: 43, kanji_id: 11, respuesta: "こころ", correcta: false }, // Incorrecto, significa "corazón"
  { id: 44, kanji_id: 11, respuesta: "しゅみ", correcta: false }, // Incorrecto, significa "hobby"

  // Kanji: ようい
  { id: 45, kanji_id: 12, respuesta: "ようい", correcta: true, explicacion: "'用意' (ようい) significa 'preparación' o 'disposición'." }, // Correcto, significa "preparación"
  { id: 46, kanji_id: 12, respuesta: "やくそく", correcta: false }, // Incorrecto, significa "promesa"
  { id: 47, kanji_id: 12, respuesta: "りよう", correcta: false }, // Incorrecto, significa "uso"
  { id: 48, kanji_id: 12, respuesta: "せわ", correcta: false }, // Incorrecto, significa "cuidado"

  // Kanji: そうだん
  { id: 49, kanji_id: 13, respuesta: "そうだん", correcta: true, explicacion: "'相談' (そうだん) significa 'consulta' o 'discutir'." },// Correcto, significa "consultar"
  { id: 50, kanji_id: 13, respuesta: "さんせい", correcta: false }, // Incorrecto, significa "apoyo"
  { id: 51, kanji_id: 13, respuesta: "あいさつ", correcta: false }, // Incorrecto, significa "saludo"
  { id: 52, kanji_id: 13, respuesta: "へんじ", correcta: false }, // Incorrecto, significa "respuesta"

  // Kanji: きけん
  { id: 53, kanji_id: 14, respuesta: "きけん", correcta: true, explicacion: "'危険' (きけん) significa 'peligro'." }, // Correcto, significa "peligroso"
  { id: 54, kanji_id: 14, respuesta: "けっこう", correcta: false }, // Incorrecto, significa "bastante" o "suficiente"
  { id: 55, kanji_id: 14, respuesta: "じゆう", correcta: false }, // Incorrecto, significa "libre" o "libertad"
  { id: 56, kanji_id: 14, respuesta: "あんぜん", correcta: false }, // Incorrecto, significa "seguro" o "seguridad"


  //もんだい 4

  // Kanji: しゅっぱつしました
  {
    "id": 57,
    "kanji_id": 15,
    "respuesta": "バスがでました",
    "correcta": true,
    "explicacion": "La respuesta es correcta porque 'でました' significa que el autobús ha salido. Se usa '出発する' (しゅっぱつする) para referirse a la salida de un vehículo como un autobús."
  },
  { id: 58, kanji_id: 15, respuesta: "バスがとまりました", correcta: false }, // Incorrecto, significa "El autobús se detuvo"
  { id: 59, kanji_id: 15, respuesta: "バスがつきました", correcta: false }, // Incorrecto, significa "El autobús ha llegado"
  { id: 60, kanji_id: 15, respuesta: "バスがまがりました", correcta: false }, // Incorrecto, significa "El autobús giró"

  // Kanji: ていねいにかいてください
  { 
    id: 61, 
    kanji_id: 16, 
    respuesta: "もっときれいにかいてください", 
    correcta: true, 
    explicacion: "'もっときれいにかいてください' significa 'Escriba más bonito'. El adjetivo きれい (bonito) es el adecuado en este contexto, ya que se está pidiendo que la escritura sea más estética. Es incorrecto usar ふとく (grueso) o おおきく (grande)."
  },
  { id: 62, kanji_id: 16, respuesta: "もっとおおきくかいてください", correcta: false }, // Incorrecto, significa "escribir más grande"
  { id: 63, kanji_id: 16, respuesta: "もっとふとくかいてください", correcta: false }, // Incorrecto, significa "escribir más grueso"
  { id: 64, kanji_id: 16, respuesta: "もっとかんたんにかいてください", correcta: false }, // Incorrecto, significa "escribir más fácil"

  // Kanji: ねぼうしました
  { 
    id: 65, 
    kanji_id: 17, 
    respuesta: "きのうはおきるのがおそくなってしまいました", 
    correcta: true, 
    explicacion: "'きのうはおきるのがおそくなってしまいました' significa 'Me desperté tarde ayer'. El verbo ねぼうする (quedarse dormido) indica un retraso en el acto de despertarse, y la expresión es correcta en este contexto."
  }, 
  { id: 66, kanji_id: 17, respuesta: "きのうはねるのがおそくなってしまいました", correcta: false }, // Incorrecto, significa "me acosté tarde"
  { id: 67, kanji_id: 17, respuesta: "きのうははやくねってしまいました", correcta: false }, // Incorrecto, significa "me acosté temprano"
  { id: 68, kanji_id: 17, respuesta: "きのうははやくおきてしまいました", correcta: false }, // Incorrecto, significa "me levanté temprano"


  // Kanji: ほめられました
  { 
    id: 69, 
    kanji_id: 18, 
    respuesta: "先生は田中さんに「とてもよかったですよ」と言いました。", 
    correcta: true, 
    explicacion: "'先生は田中さんに「とてもよかったですよ」と言いました。' significa 'El maestro elogió a Tanaka-san diciendo Estuvo muy bien'. Este tipo de elogio es lo que se espera en este contexto."
  },
  { id: 70, kanji_id: 18, respuesta: "先生は田中さんに「気をつけてね」と言いました。", correcta: false }, // Incorrecto, expresa advertencia o preocupación
  { id: 71, kanji_id: 18, respuesta: "先生は田中さんに「ちょっと休みましょう」と言いました。", correcta: false }, // Incorrecto, expresa invitación a descansar
  { id: 72, kanji_id: 18, respuesta: "先生は田中さんに「たいへんですね」と言いました。", correcta: false }, // Incorrecto, expresa empatía


  //もんだい 5


  // Kanji: るす
  { 
    id: 73, 
    kanji_id: 19, 
    respuesta: "ともだちのいえに行ったら（るす）でした。", 
    correcta: true, 
    explicacion: "'ともだちのいえに行ったら（るす）でした。' significa 'Cuando fui a la casa de mi amigo, no estaba'. La palabra るす se usa para indicar que alguien no está en casa."
  },
  { id: 74, kanji_id: 19, respuesta: "さいきんいそがしくて、しごとが（るす）になりません。", correcta: false }, // Incorrecto, "るす" no es adecuado aquí
  { id: 75, kanji_id: 19, respuesta: "あのデパートはきょうは（るす）です。", correcta: false }, // Incorrecto, "るす" no aplica a edificios comerciales
  { id: 76, kanji_id: 19, respuesta: "このひこうきには（るす）のせきがありません。", correcta: false }, // Incorrecto, "るす" no aplica a asientos vacíos

  // Kanji: わる (割る)
  { 
    id: 77, 
    kanji_id: 20, 
    respuesta: "おさらをおとして、（わって）しまいました。", 
    correcta: true, 
    explicacion: "'おさらをおとして、（わって）しまいました。' significa 'Se me rompió un plato'. El verbo わる (romper) se usa adecuadamente para expresar la acción de romper un objeto al caer."
  },
  { id: 78, kanji_id: 20, respuesta: "しんぶんを（わって）しんぶんをかばんに入れました。", correcta: false }, // Incorrecto, se debería usar やぶる para desgarrar papel
  { id: 79, kanji_id: 20, respuesta: "ようふくを（わって）母におこられました。", correcta: false }, // Incorrecto, やぶる sería mejor para ropa
  { id: 80, kanji_id: 20, respuesta: "このジャムを三本のびんに（わって）ください。", correcta: false }, // Incorrecto, aunque posible, 分ける es mejor

  // Kanji: 遅刻
  { id: 81, kanji_id: 21, respuesta: "あのとけいはちょっと（ちこく）しています。", correcta: false }, // Incorrecto, "おくれている" sería más adecuado
  { 
    id: 82, 
    kanji_id: 21, 
    respuesta: "じゅぎょうに（ちこく）してすみません。", 
    correcta: true, 
    explicacion: "'じゅぎょうに（ちこく）してすみません。' significa 'Lo siento por llegar tarde a la clase'. La palabra ちこく se usa para referirse a llegar tarde, especialmente en contextos formales como la escuela o el trabajo."
  },
  
  { id: 83, kanji_id: 21, respuesta: "10時のでんしゃに（ちこく）してしまいました。", correcta: false }, // Incorrecto, "でんしゃ" es general para tren, 乗り遅れる sería más claro
  { id: 84, kanji_id: 21, respuesta: "れんらくが（ちこく）してすみません。", correcta: false }, // Incorrecto, usar "おくれる" sería mejor en este contexto

   //nuevas preguntas

  // Kanji: 自転車
  { id: 85, kanji_id: 22, respuesta: "じどうしゃ", correcta: false }, // automóvil
  { id: 86, kanji_id: 22, respuesta: "じとうしゃ", correcta: false }, // incorrecto
  { id: 87, kanji_id: 22, respuesta: "じでんしゃ", correcta: false }, // incorrecto
  { 
    id: 88, 
    kanji_id: 22, 
    respuesta: "じてんしゃ", 
    correcta: true, 
    explicacion: "'じてんしゃ' significa 'bicicleta'. Es la forma correcta para referirse a una bicicleta en japonés."
  },

  // Kanji: 出発
  { id: 89, kanji_id: 23, respuesta: "しょっぱつ", correcta: false }, // incorrecto
  { id: 90, kanji_id: 23, respuesta: "しょっぽつ", correcta: false }, // incorrecto
  { 
    id: 91, 
    kanji_id: 23, 
    respuesta: "しゅっぱつ", 
    correcta: true, 
    explicacion: "'しゅっぱつ' significa 'salida' o 'partida'. Este es el término correcto para referirse al acto de salir, como en 'salir de un lugar' o 'partir'."
  },
  { id: 92, kanji_id: 23, respuesta: "しゅっぽつ", correcta: false }, // incorrecto

  // Kanji: 売って
  { id: 93, kanji_id: 24, respuesta: "しって", correcta: false }, // incorrecto, significa "saber"
  { id: 94, kanji_id: 24, respuesta: "あって", correcta: false }, // incorrecto, significa "haber"
  { id: 95, kanji_id: 24, respuesta: "かって", correcta: false }, // incorrecto, significa "comprar"
  { 
    id: 96, 
    kanji_id: 24, 
    respuesta: "うって", 
    correcta: true, 
    explicacion: "'うって' es la forma correcta del verbo 売る (vender) en su forma te. Se utiliza para indicar la acción de vender algo, como en '¿Dónde venden esta cámara?'."
  },


  // Examen 2018
  //////////////////////////////////////////////////////////
// もんだい 1
  // Respuestas para 以外
  { id: 97, kanji_id: 25, respuesta: "にそと", correcta: false },
  { id: 98, kanji_id: 25, respuesta: "にがい", correcta: false },
  { id: 99, kanji_id: 25, respuesta: "いそと", correcta: false },
  { 
    id: 100, 
    kanji_id: 25, 
    respuesta: "いがい", 
    correcta: true, 
    explicacion: "'いがい' significa 'excepto'. En este contexto, 'はやしさん（いがい）はみんな来ました' significa 'Todos llegaron excepto el Sr. Hayashi'."
  },

  // Respuestas para 急行
  { id: 101, kanji_id: 26, respuesta: "きゅこ", correcta: false },
  { id: 102, kanji_id: 26, respuesta: "きゅこう", correcta: false },
  { id: 103, kanji_id: 26, respuesta: "きゅうこ", correcta: false },
  { 
    id: 104, 
    kanji_id: 26, 
    respuesta: "きゅうこう", 
    correcta: true, 
    explicacion: "'きゅうこう' significa 'expreso'. En el contexto de un tren, '急行' se refiere a un tren expreso que hace menos paradas que los trenes normales."
  },

  // Respuestas para 写さないで
  { id: 105, kanji_id: 27, respuesta: "おさないで", correcta: false },
  { 
    id: 106, 
    kanji_id: 27, 
    respuesta: "うつさないで", 
    correcta: true, 
    explicacion: "'うつさないで' significa 'no fotografíes'. El verbo '写す' (うつす) significa 'fotografiar', y en su forma negativa '写さないで' se usa para pedir a alguien que no lo haga."
  },
  { id: 107, kanji_id: 27, respuesta: "けさないで", correcta: false },
  { id: 108, kanji_id: 27, respuesta: "おとさないで", correcta: false },

  // Respuestas para 反対
  { 
    id: 109, 
    kanji_id: 28, 
    respuesta: "はんたい", 
    correcta: true, 
    explicacion: "'はんたい' significa 'oposición' o 'en contra'. En este caso, 'そのいけには（反対）です' significa 'Estoy en contra de ese pozo'."
  },
  { id: 110, kanji_id: 28, respuesta: "ほんたい", correcta: false },
  { id: 111, kanji_id: 28, respuesta: "はんだい", correcta: false },
  { id: 112, kanji_id: 28, respuesta: "ほんだい", correcta: false },


// もんだい 2
 // Respuestas para 貸して
 { id: 113, kanji_id: 29, respuesta: "皆して", correcta: false },
 { id: 114, kanji_id: 29, respuesta: "資して", correcta: false },
 { 
  id: 115, 
  kanji_id: 29, 
  respuesta: "貸して", 
  correcta: true, 
  explicacion: "'貸して' es la forma te del verbo '貸す' (prestar). En el contexto de la frase 'かさを（かして）ください' significa 'Por favor, préstame un paraguas'."
},
 { id: 116, kanji_id: 29, respuesta: "質して", correcta: false },

 // Respuestas para 試合
 { id: 117, kanji_id: 30, respuesta: "誠会", correcta: false },
 { id: 118, kanji_id: 30, respuesta: "誠合", correcta: false },
 { id: 119, kanji_id: 30, respuesta: "試会", correcta: false },
 { 
  id: 120, 
  kanji_id: 30, 
  respuesta: "試合", 
  correcta: true, 
  explicacion: "'試合' significa 'partido' o 'competencia'. En el contexto de la frase 'あしたはサッカーの（しあい）があります' significa 'Mañana hay un partido de fútbol'."
},


// もんだい 3
 // Respuestas para せつめい
 { id: 121, kanji_id: 31, respuesta: "じゅんび", correcta: false },
 { id: 122, kanji_id: 31, respuesta: "りよう", correcta: false },
 { 
  id: 123, 
  kanji_id: 31, 
  respuesta: "せつめい", 
  correcta: true, 
  explicacion: "'せつめい' significa 'explicación'. La frase completa 'これからきかいのつかいかたを（せつめい）しますから、よく聞いてください' significa 'Ahora les voy a explicar cómo usar la máquina, por favor escuchen bien'."
},
 { id: 124, kanji_id: 31, respuesta: "せいさん", correcta: false },

 // Respuestas para さそいました
 { 
  id: 125, 
  kanji_id: 32, 
  respuesta: "さそいました", 
  correcta: true, 
  explicacion: "'さそいました' es la forma pasada de 'さそう' (invitar). En la frase 'もりさんをでーとに（さそいました）が、行けないと言われました' significa 'Invité a Mori-san a una cita, pero me dijo que no podía ir'."
},
 { id: 126, kanji_id: 32, respuesta: "つたえました", correcta: false },
 { id: 127, kanji_id: 32, respuesta: "あんないしました", correcta: false },
 { id: 128, kanji_id: 32, respuesta: "しょうかいしました", correcta: false },

 // Respuestas para くらべて
 { id: 129, kanji_id: 33, respuesta: "かたづけて", correcta: false },
 { id: 130, kanji_id: 33, respuesta: "かぞえて", correcta: false },
 { 
  id: 131, 
  kanji_id: 33, 
  respuesta: "くらべて", 
  correcta: true, 
  explicacion: "'くらべて' es la forma te del verbo 'くらべる' (comparar). En el contexto de la frase 'お店で３だいのパソコンを（くらべて）、いちばんかるいパソコンをえらびました' significa 'Comparé tres computadoras en la tienda y elegí la más ligera'."
},
 { id: 132, kanji_id: 33, respuesta: "はらって", correcta: false },

 // Respuestas para るす
 { id: 133, kanji_id: 34, respuesta: "うそ", correcta: false },
 { id: 134, kanji_id: 34, respuesta: "じゆう", correcta: false },
 { id: 135, kanji_id: 34, respuesta: "ちゅうし", correcta: false },
 { 
  id: 136, 
  kanji_id: 34, 
  respuesta: "るす", 
  correcta: true, 
  explicacion: "'るす' significa 'ausencia' o 'estar fuera de casa'. En este contexto, 'たなかさんおいえの電気かついていませんね。たなかさんは（るす）のようです' significa 'La luz de la casa de Tanaka-san está apagada. Parece que Tanaka está fuera'."
},


 //ampliando vocabulario

 // Pregunta すいえい
 { 
  id: 137, 
  kanji_id: 35, 
  respuesta: "すいえい", 
  correcta: true, 
  explicacion: "'すいえい' significa 'natación'. Es la forma correcta para referirse al deporte de nadar."
},
 { id: 138, kanji_id: 35, respuesta: "すいせい", correcta: false },
 { id: 139, kanji_id: 35, respuesta: "みずおよぎ", correcta: false },
 { id: 140, kanji_id: 35, respuesta: "みずえい", correcta: false },


   // Pregunta かざる
   { 
    id: 141, 
    kanji_id: 36, 
    respuesta: "かざる", 
    correcta: true, 
    explicacion: "'かざる' significa 'decorar'. Es el verbo que se utiliza para indicar la acción de decorar algo, como en '部屋をかざる' (decorar la habitación)."
  },
   { id: 142, kanji_id: 36, respuesta: "しょくる", correcta: false },
   { id: 143, kanji_id: 36, respuesta: "けんさつ", correcta: false },
   { id: 144, kanji_id: 36, respuesta: "お飾り", correcta: false },
 
   // Pregunta けんがく
   { 
    id: 145, 
    kanji_id: 37, 
    respuesta: "けんがく", 
    correcta: true, 
    explicacion: "'けんがく' significa 'observación' o 'visita de estudio'. Se refiere a una actividad donde se aprende observando, como en una visita a una fábrica."
  },
   { id: 146, kanji_id: 37, respuesta: "けんきゅう", correcta: false },
   { id: 147, kanji_id: 37, respuesta: "けんちく", correcta: false },
   { id: 148, kanji_id: 37, respuesta: "けんり", correcta: false },
 
   // Pregunta こうじ
   { 
    id: 149, 
    kanji_id: 38, 
    respuesta: "こうじ", 
    correcta: true, 
    explicacion: "'こうじ' significa 'construcción'. Es el término utilizado para referirse a obras de construcción, como en '駅前のこうじ' (la construcción en frente de la estación)."
  },
   { id: 150, kanji_id: 38, respuesta: "こうさ", correcta: false },
   { id: 151, kanji_id: 38, respuesta: "こうし", correcta: false },
   { id: 152, kanji_id: 38, respuesta: "こうやく", correcta: false },


   { 
    id: 153, 
    kanji_id: 39, 
    respuesta: "おどろきます", 
    correcta: true, 
    explicacion: "'おどろきます' significa 'sorprenderse'. Es el verbo adecuado para describir una reacción de sorpresa ante algo inesperado."
  },
  { id: 154, kanji_id: 39, respuesta: "わらいます", correcta: false },
  { id: 155, kanji_id: 39, respuesta: "ねむります", correcta: false },
  { id: 156, kanji_id: 39, respuesta: "おこります", correcta: false },

  // Pregunta について
  { 
    id: 157, 
    kanji_id: 40, 
    respuesta: "について", 
    correcta: true, 
    explicacion: "'について' significa 'sobre' o 'acerca de'. Se usa para hablar de un tema específico, como en 'この本は日本の歴史について書かれています' (Este libro está escrito sobre la historia de Japón)."
  },
  { id: 158, kanji_id: 40, respuesta: "のために", correcta: false },
  { id: 159, kanji_id: 40, respuesta: "にたいして", correcta: false },
  { id: 160, kanji_id: 40, respuesta: "において", correcta: false },

  // Pregunta るす
  { 
    id: 161, 
    kanji_id: 41, 
    respuesta: "るす", 
    correcta: true, 
    explicacion: "'るす' significa 'ausencia' o 'estar fuera de casa'. En la frase '田中さんは今、（るす）です' significa 'Tanaka-san no está en casa ahora'."
  },
  { id: 162, kanji_id: 41, respuesta: "ひま", correcta: false },
  { id: 163, kanji_id: 41, respuesta: "いない", correcta: false },
  { id: 164, kanji_id: 41, respuesta: "あそんでいます", correcta: false },

// Pregunta どのように
{ 
  id: 165, 
  kanji_id: 42, 
  respuesta: "どのように", 
  correcta: true, 
  explicacion: "'どのように' significa 'cómo'. Se usa para preguntar de qué manera o en qué forma se hace algo, como en 'どのように勉強しますか' (¿Cómo estudias?)."
},
  { id: 166, kanji_id: 42, respuesta: "どうして", correcta: false }, // incorrecto, significa "por qué"
  { id: 167, kanji_id: 42, respuesta: "だれ", correcta: false }, // incorrecto, significa "quién"
  { id: 168, kanji_id: 42, respuesta: "なぜ", correcta: false }, // incorrecto, significa "por qué"

  // Pregunta なかなか
  { 
    id: 169, 
    kanji_id: 43, 
    respuesta: "なかなか", 
    correcta: true, 
    explicacion: "'なかなか' significa 'bastante' o 'por mucho tiempo'. En el contexto de la frase 'なかなか進まないですね' significa 'No está avanzando mucho'."
  },
  { id: 170, kanji_id: 43, respuesta: "たくさん", correcta: false }, // incorrecto, significa "mucho" o "muchos"
  { id: 171, kanji_id: 43, respuesta: "ちょっと", correcta: false }, // incorrecto, significa "un poco"
  { id: 172, kanji_id: 43, respuesta: "すこし", correcta: false }, // incorrecto, significa "un poco"
];



export { kanjis };
export { respuestas };

