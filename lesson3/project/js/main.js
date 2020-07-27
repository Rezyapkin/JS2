//Сделал 1 и 3 (на промисах), 2е задание - программную часть сделал. Отстилизовать не успеваю (на работе завал). Отстилизую вечером. 
//Но программную часть реализовал, правда не уверен что корректно. Для более быстрого поиска сделал список товаров не через массив.

const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

let getRequest = (url) => {
  return new Promise((resolve, reject) => {
      let xhr = new XMLHttpRequest();
      xhr.open('GET', url, true);
      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
            if (xhr.status !== 200) {
              reject('Error');
            } else {
              resolve(xhr.responseText);
            }
          }
        };
      xhr.send();
    }
  )
};

class ProductList {
  constructor(cart, container = '.products') {
    this.container = container;
    this.cart = cart;
    this.goods = [];
    this.allProducts = [];
    this.#fetchProducts().then(() =>  this.render())
                         .then(() => this.addListenersToBtn());
    //this.#getProducts()
    //    .then((data) => {
    //      this.goods = [...data];
    //      this.render();
    //    });
  }

  #fetchProducts() {
    return new Promise((resolve) => {
        getRequest(`${API}/catalogData.json`).then(data => {
            this.goods = JSON.parse(data);
            console.log(this.goods);
            resolve();
        });
    });
   }

  getProducts() {
    return fetch(`${API}/catalogData.json`)
        .then(result => result.json())
        .catch(error => {
          console.log('Error!', error);
        });
  }

  calcSum() {
    return this.goods.reduce((sum, { price }) => sum + price, 0);
  }

  getGoodById(id) {
    let result;
    this.goods.forEach(good => {
      if(good.id_product == id) result = good
    });
    return result;
  }

  getIdByBtn(btn) {
    let parent = btn.parentElement;
    while (parent.className !== 'product-item') {
      parent = parent.parentElement;
    } 
    
    if (parent.className === 'product-item') {
      return parent.dataset.id;
    }
  }

  clickBtn(event) {
    cart.addToCart(this.getGoodById(this.getIdByBtn(event.target)));
  }

  addListenersToBtn() {
    const block = document.querySelector(this.container);
    block.querySelectorAll('button.buy-btn').forEach(el => el.addEventListener('click',this.clickBtn.bind(this)));  
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
    this.product_name = product.product_name;
    this.price = product.price;
    this.id_product = product.id_product;
    this.img = img;
  }

  render() {
    return `<div class="product-item" data-id="${this.id_product}">
              <img src="${this.img}" alt="Some img">
              <div class="desc">
                  <h3>${this.product_name}</h3>
                  <p>${this.price} \u20bd</p>
                  <button class="buy-btn">Купить</button>
              </div>
          </div>`;
  }
}

class Cart {
  constructor (container='.cart', button='.btn-cart') {
    this.container = container;
    this.button = button;
    this.productInCart = {};
    this.isShow = false;
    document.querySelector(button).addEventListener('click',this.clickBtn.bind(this));
  }

  clickBtn() {
    this.isShow = !this.isShow;
    this.render();
  }

  render() {
    let cartEl = document.querySelector(this.button);
    if (this.isShow) {
      calcSum();
    } else {
      cartEl.innerHTML = "";
    }
  }

  addToCart(item, quantity=1) {
    let {id_product, ...values} = item;

    if (!this.productInCart[id_product]) {
      this.productInCart[id_product] = values;
      this.productInCart[item.id_product].quantity = 0;
    };

    this.productInCart[item.id_product].quantity += quantity;
    this.render();
  }

  deleteInCartByProductId(id) {
    delete this.productInCart[id];
    this.render();
  }

  calcSum() {
    return Object.values(this.productInCart).reduce((sum, { price, quantity }) => sum + price * quantity, 0);
  }
  
}


const cart = new Cart();
const list = new ProductList(cart);
console.log(list.calcSum());
// console.log(list.map());
