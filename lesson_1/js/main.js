const products = [
    {id: 1, title: 'Notebook', price: 20000},
    {id: 2, title: 'Mouse', price: 1500},
    {id: 3, title: 'Keyboard', price: 5000},
    {id: 4, title: 'Gamepad', price: 4500},
];

const renderProduct = (title='New product', price=0, img='https://placeimg.com/200/150/tech') => 
    `<div class="product-item">
        <h3>${title}</h3>
        <img class="product-item__img" src="${img}" alt="">
        <p>${price} руб.</p>
        <button class="by-btn">Добавить в корзину</button>
    </div>`;

const renderProducts = list => {
    const productList = list.map(item => renderProduct(item.title, item.price));
    //producList - это массив, поэтому при приведении к типу строка (innerHTML - это строка) появляются запятые.
    document.querySelector('.products').innerHTML = productList.join('\n');
};

renderProducts(products);
