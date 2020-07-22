
class ProductList {
  #privateProp;

  constructor(container = '.products') {
    this.container = container;
    this.goods = [];
    this.allProducts = [];
    this.#privateProp = '123';

    this.#fetchProducts();
    this.render();
  }

  get prop() {
    return this.#privateProp;
  }

  set prop(value) {
    this.#privateProp = value;
  }

  #fetchProducts() {
    this.goods = [
      {id: 1, title: 'Notebook', price: 20000},
      {id: 2, title: 'Mouse', price: 1500},
      {id: 3, title: 'Keyboard', price: 5000},
      {id: 4, title: 'Gamepad', price: 4500},
    ];
  }

  //Можно конечно и map использовать и обычные циклы, но решил так)
  getTotalPrice() {
      let sum = 0;
      this.goods.forEach(item => sum += item.price);
      return sum;
  }

  render() {
    const block = document.querySelector(this.container);

    for (let product of this.goods) {
      const productObject = new ProductItem(product);

      this.allProducts.push(productObject);
      block.insertAdjacentHTML('beforeend', productObject.render());
    }
  }
}

class ProductItem {
  constructor(product, img = 'https://placehold.it/200x150') {
    this.title = product.title;
    this.price = product.price;
    this.id = product.id;
    this.img = img;
  }

  render() {
    return `<div class="product-item" data-id="${this.id}">
              <img src="${this.img}" alt="Some img">
              <div class="desc">
                  <h3>${this.title}</h3>
                  <p>${this.price} \u20bd</p>
                  <button class="buy-btn">Купить</button>
              </div>
          </div>`;
  }
}

//В принципе товар в корзине этот тотже ProductItem только с количеством
class CartItem extends ProductItem {
     constructor (product, quatntity = 1, img = 'https://placehold.it/200x150') {
         super(product, img);
         this.quatntity = quatntity;
     }
}

class Cart {

  #totalPrice;

  constructor (container = '.cart') {
    this.container = container;
    this.clearCart();
  }


  //Очищает корзину;
  clearCart() {
      this.productsInCart = [];
      this.#totalPrice = 0;
  }

  //Добавляет товар в корзину
  addToCart (item, quatntity) {
    calcTotalPrice();

  }

  //Удаляет товар из корзины
  delInCart (item) {
    calcTotalPrice();

  }

  //Корретирует количество товара в корзине
  correctQuantityProductInCart (item, newQuantity) {
    calcTotalPrice();

  }

  //Показывает всплывающее окно с товарами в корзине
  showCart() {

  }

  //Прячем всплывающее окно с товарами в корзине
  hideCart() {

  }

  //Рассчитывает стоимость товаров в корзине;
  calcTotalPrice() {
      
  }

  //Возвращает стоимость всех товаров в корзине
  getTotalPrice() {
      calcTotalPrice();
      return this.#totalPrice;
  }

  //Возвращает количество товаров в корзине.
  getTotalQuantity() {

  }
 
}

const list = new ProductList();
console.log(list.getTotalPrice());

// const products = [
//   {id: 1, title: 'Notebook', price: 20000},
//   {id: 2, title: 'Mouse', price: 1500},
//   {id: 3, title: 'Keyboard', price: 5000},
//   {id: 4, title: 'Gamepad', price: 4500},
// ];
//
// const renderProduct = (item, img='https://placehold.it/200x150') => `<div class="product-item" data-id="${this.id}">
//               <img src="${img}" alt="Some img">
//               <div class="desc">
//                   <h3>${item.title}</h3>
//                   <p>${item.price} \u20bd</p>
//                   <button class="buy-btn">Купить</button>
//               </div>
//           </div>`;
//
// const renderProducts = list => {
// document.querySelector('.products').insertAdjacentHTML('beforeend', list.map(item => renderProduct(item)).join(''));
// };
//
// renderProducts(products);
//
