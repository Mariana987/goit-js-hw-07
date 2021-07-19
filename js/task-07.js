// Напиши скрипт, который реагирует на изменение значения input#font - size - control(событие input) и изменяет
// инлайн - стиль span#text обновляя свойство
// font - size.В результате при перетаскивании ползунка будет меняться размер текста.


const inputFontSizeEl = document.querySelector('#font-size-control')
const textSizeEl = document.querySelector('#text')

inputFontSizeEl.addEventListener('input', onSizeChange)

function onSizeChange(event) {
    console.log(event.currentTarget.value)
    const fontSize = Number(event.currentTarget.value)

    textSizeEl.style.fontSize = `${fontSize}px`
}
