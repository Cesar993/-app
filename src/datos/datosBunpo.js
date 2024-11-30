const preguntas = [
    { id: 1, pregunta: "男の子の顔は父親より母親（）にるという話を聞いた。" },

    { id: 2, pregunta: "妹はおしゃべりだ。静かなのは、食事のとき（）だ。" },

    //2018

    { id: 3, pregunta: "きのうの しゅくだいは 少なかったので、（ ） 終わりました。" },
    { id: 4, pregunta: "ホテルの 朝ご飯の パンが とても おいしかったので、八つ （ ）食べました。" },
    // Pregunta 5
    {
        id: 5,
        pregunta: "この日本語のじしょは、\n年前に外国人（ ）作られました。"
    },
    // Pregunta 6
    {
        id: 6,
        pregunta: "前田「リーさん、いつも（ ）国のかぞくにれんらくしますか。」\nリー「メールを 書くことが多いです。」"
    },
    // Pregunta 7
    {
        id: 7,
        pregunta: "今朝は駅に行くバスが（ ）来なかったので、タクシーで行きました。"
    },
    // Pregunta 8
    {
        id: 8,
        pregunta: "山下「南さん、あしたかあさって、カラオケに行かない? 」\n南「ええ、いいね。あしたは都合が悪いけど、あさって（ ）だいじょうぶだよ。」"
    },
    // Pregunta 9
    {
        id: 9,
        pregunta: "私は（ ）間、スーパーでアルバイトをしていました。"
    },
    // Pregunta 10
    {
        id: 10,
        pregunta: "先週 庭の 木の えだを 切りました。ぜんぶ（ ）時間 かかりました。"
    },
    // Pregunta 11
    {
        id: 11,
        pregunta: "木村「山田さん、あしたの 午後、サッカーの 練習に 行きますか。」\n\n山田「ええ、行きます。でも、午前中に 用事が あるので、（ ）。」"
    },
    // Pregunta 12
    {
        id: 12,
        pregunta: "森 「空いて いる 席が ありませんね。」\n田中「ええ。あ、でも、あそこの 席が （ ） よ。」\n森 「本当ですね。空くまで、少し 待ちましょう。」"
    },
    // Pregunta 13
    {
        id: 13,
        pregunta: "林 「上田さん、会議の じゅんびは 終わりましたか。てつだいましょうか。」\n上田「ありがとうございます。じゃあ、いすが 一つ 足りないので、となりの 会議室から （ ）。」\n林 「はい、わかりました。」"
    },
];

const respuestas = [
    // Pregunta 1
    {
        id: 1,
        pregunta_id: 1,
        respuesta: "に",
        correcta: true,
        explicacion: "La partícula に se utiliza aquí para indicar el objeto indirecto o la persona a la que se parece alguien. La estructura 'AはBににる' significa 'A se parece a B'. En este caso, '母親ににる' significa 'se parece a la madre'."
    },
    { id: 2, pregunta_id: 1, respuesta: "へ", correcta: false },
    { id: 3, pregunta_id: 1, respuesta: "も", correcta: false },
    { id: 4, pregunta_id: 1, respuesta: "を", correcta: false },

    // Pregunta 2
    { id: 5, pregunta_id: 2, respuesta: "の", correcta: false },
    { id: 6, pregunta_id: 2, respuesta: "しか", correcta: false },
    {
        id: 7,
        pregunta_id: 2,
        respuesta: "だけ",
        correcta: true,
        explicacion: "La partícula だけ significa 'solo' o 'únicamente' y se usa para limitar una situación. En este contexto, '静かなのは、食事のときだけだ' significa 'Es tranquila solo durante la comida', indicando que ese es el único momento en que la hermana es tranquila."
    },
    { id: 8, pregunta_id: 2, respuesta: "は", correcta: false },

    //2018

    // Pregunta 3
    { id: 9, pregunta_id: 3, respuesta: "20 分", correcta: false },
    { id: 10, pregunta_id: 3, respuesta: "20 分しか", correcta: false },
    {
        id: 11,
        pregunta_id: 3,
        respuesta: "20 分で",
        correcta: true,
        explicacion: "La partícula で se utiliza para indicar el tiempo necesario para completar una acción. En este caso, '20 分で終わりました' significa 'terminé en 20 minutos', lo que indica que la tarea fue completada en ese período de tiempo."
    },
    { id: 12, pregunta_id: 3, respuesta: "20 分を", correcta: false },


    // Pregunta 4
    {
        id: 13, pregunta_id: 4, respuesta: "も", correcta: true,
        explicacion: "La partícula も se utiliza aquí para enfatizar la cantidad de pan que se comió. En este contexto, '八つも食べました' significa '¡Comí hasta ocho!', expresando sorpresa o énfasis por lo inusual de la cantidad."
    },
    { id: 14, pregunta_id: 4, respuesta: "に", correcta: false },
    { id: 15, pregunta_id: 4, respuesta: "が", correcta: false },
    { id: 16, pregunta_id: 4, respuesta: "で", correcta: false },
    // Respuestas 5
    {
        id: 17,
        pregunta_id: 5,
        respuesta: "によって",
        correcta: true,
        explicacion: "La partícula によって se utiliza para indicar el agente en una oración pasiva. En este caso, '外国人によって作られました' significa 'Fue hecho por extranjeros', mostrando quién realizó la acción."
    },
    { id: 18, pregunta_id: 5, respuesta: "から", correcta: false },
    { id: 19, pregunta_id: 5, respuesta: "を", correcta: false },
    { id: 20, pregunta_id: 5, respuesta: "について", correcta: false },

    // Respuestas 6
    {
        id: 21,
        pregunta_id: 6,
        respuesta: "どうやって",
        correcta: true,
        explicacion: "La pregunta どうやって se utiliza para preguntar '¿Cómo?' o '¿De qué manera?' se realiza una acción. En este caso, 'どうやって国のかぞくにれんらくしますか' significa '¿Cómo te comunicas con tu familia en tu país?'."
    },
    { id: 22, pregunta_id: 6, respuesta: "どのぐらい", correcta: false },
    { id: 23, pregunta_id: 6, respuesta: "どの", correcta: false },
    { id: 24, pregunta_id: 6, respuesta: "どういう", correcta: false },
    // Respuestas 7
    {
        id: 25,
        pregunta_id: 7,
        respuesta: "なかなか",
        correcta: true,
        explicacion: "なかなか se usa en frases negativas para expresar que algo no sucede fácilmente o toma más tiempo de lo esperado. En este caso, 'バスがなかなか来なかった' significa 'El autobús no llegaba fácilmente'."
    },
    { id: 26, pregunta_id: 7, respuesta: "やっと", correcta: false },
    { id: 27, pregunta_id: 7, respuesta: "きっと", correcta: false },
    { id: 28, pregunta_id: 7, respuesta: "いつか", correcta: false },
    // Respuestas 8
    {
        id: 29,
        pregunta_id: 8,
        respuesta: "なら",
        correcta: true,
        explicacion: "なら se utiliza cuando se menciona una condición o situación en la que algo es posible. En este caso, 南さん está diciendo que si la situación es el pasado mañana ('あさって'), entonces está bien (だいじょうぶだよ)."
    },
    { id: 30, pregunta_id: 8, respuesta: "でも", correcta: false },
    { id: 31, pregunta_id: 8, respuesta: "だから", correcta: false },
    { id: 32, pregunta_id: 8, respuesta: "なのに", correcta: false },
    // Respuestas 9
    {
        id: 33,
        pregunta_id: 9,
        respuesta: "夏休みの",
        correcta: true,
        explicacion: "「の」se usa para indicar posesión o relación, y en este caso conecta '夏休み' (vacaciones de verano) con '間' (período). Por lo tanto, '夏休みの間' significa 'durante las vacaciones de verano', indicando el período en el que ocurrió la acción."
    },
    { id: 34, pregunta_id: 9, respuesta: "夏休みに", correcta: false },
    { id: 35, pregunta_id: 9, respuesta: "夏休みで", correcta: false },
    { id: 36, pregunta_id: 9, respuesta: "夏休み", correcta: false },
    // Respuestas 10
    {
        id: 37,
        pregunta_id: 10,
        respuesta: "切るのに",
        correcta: true,
        explicacion: "「切るのに」se usa para indicar la razón o el propósito de la acción. En este caso, '切るのに時間かかりました' significa 'me llevó tiempo cortar'. La expresión 'のに' aquí expresa que la acción de cortar fue el motivo del tiempo que se necesitó."
    },
    { id: 38, pregunta_id: 10, respuesta: "切ったり", correcta: false },
    { id: 39, pregunta_id: 10, respuesta: "切りに", correcta: false },
    { id: 40, pregunta_id: 10, respuesta: "切るかどう", correcta: false },
    // Respuestas 11
    {
        id: 41,
        pregunta_id: 11,
        respuesta: "遅れるかもしれません",
        correcta: true,
        explicacion: "「遅れるかもしれません」se utiliza para expresar una posibilidad de que algo ocurra en el futuro. En este contexto, 山田さん está diciendo que podría llegar tarde debido a un compromiso en la mañana, indicando una posibilidad de retraso."
    },
    { id: 42, pregunta_id: 11, respuesta: "遅れないで ください", correcta: false },
    { id: 43, pregunta_id: 11, respuesta: "遅れないほうが いいです", correcta: false },
    { id: 44, pregunta_id: 11, respuesta: "遅れては いけません", correcta: false },
    // Respuestas 12
    {
        id: 45,
        pregunta_id: 12,
        respuesta: "空きそうです",
        correcta: true,
        explicacion: "「空きそうです」indica que algo parece estar por suceder en el futuro cercano. En este caso, se utiliza para decir que la silla está a punto de quedar libre. Esta forma muestra una predicción basada en la observación actual."
    },
    { id: 46, pregunta_id: 12, respuesta: "空きました", correcta: false },
    { id: 47, pregunta_id: 12, respuesta: "空いて います", correcta: false },
    { id: 48, pregunta_id: 12, respuesta: "空いたようです", correcta: false },
    // Respuestas 13
    {
        id: 49,
        pregunta_id: 13,
        respuesta: "持って きて もらえますか",
        correcta: true,
        explicacion: "「持って きて もらえますか」es la forma correcta de pedir amablemente a alguien que traiga algo. En este caso, se usa para pedir que lleven una silla desde la sala de reuniones de al lado. Es una pregunta educada que implica la acción de traer algo por parte de otra persona."
    },
    { id: 50, pregunta_id: 13, respuesta: "持って こなくても いいですか", correcta: false },
    { id: 51, pregunta_id: 13, respuesta: "持って こないと いけませんか", correcta: false },
    { id: 52, pregunta_id: 13, respuesta: "持って きて いませんか", correcta: false }
];



export { preguntas };
export { respuestas };