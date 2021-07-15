// Напиши скрипт, который для каждого элемента массива
// ingredients создаст отдельный li, после чего вставит все
// li за одну операцию в список ul.ingredients.Для создания
// DOM - узлов используй document.createElement().

const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
];

const containerEl = document.querySelector('#ingredients');

const elements = ingredients.map(product => {
    const productEl = document.createElement('li');
    productEl.textContent = product;
    console.log(productEl);
    return productEl;
})
console.log(elements);
containerEl.append(...elements);