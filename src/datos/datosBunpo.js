const preguntas = [
    { id: 1, pregunta: "男の子の顔は父親より母親（）にるという話を聞いた。" },

    { id: 2, pregunta: "妹はおしゃべりだ。静かなのは、食事のとき（）だ。" }, 

    
];

const respuestas = [
    { id: 1, pregunta_id: 1, respuesta: "に", correcta: true },
    { id: 2, pregunta_id: 1, respuesta: "へ", correcta: false },
    { id: 3, pregunta_id: 1, respuesta: "も", correcta: false },
    { id: 4, pregunta_id: 1, respuesta: "を", correcta: false },



    { id: 5, pregunta_id: 2, respuesta: "の", correcta: false },
    { id: 6, pregunta_id: 2, respuesta: "しか", correcta: false },
    { id: 7, pregunta_id: 2, respuesta: "だけ", correcta: true },
    { id: 8, pregunta_id: 2, respuesta: "は", correcta: false },

];



export { preguntas };
export { respuestas };