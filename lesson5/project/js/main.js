const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

const app = new Vue({
  el: '#app',
  data: {
    catalogUrl: '/catalogData.json',
    products: [],
    filteredGoods: [],
    productsInCart: [],
    imgCatalog: 'https://placehold.it/200x150',
    imgCart: 'https://placehold.it/50x100',
    isVisibleCart: false,
    searchLine: '',
  },
  methods: {
    getJson(url){
      return fetch(url)
          .then(result => result.json())
          .catch(error => {
            console.log(error);
          })
    },
    
    addProduct(product) {    
      this.getJson(`${API}/addToBasket.json`)
      .then(data => {
      if(data.result === 1){
        let productId = +product.id_product;
        let find = this.productsInCart.find(product => product.id_product === productId);
        if(find){
          find.quantity++;
        } else {
          let find = this.products.find(product => product.id_product === productId);
          find.quantity = 1;
          this.productsInCart.push(find);
        }
      } else {
        alert('Error');
      }
    })

      console.log(product);
    },

    filterGoods() {
      const regexp = new RegExp(this.searchLine, 'i');
      this.filteredGoods = this.products.filter(product => regexp.test(product.product_name));
    }
  },
  beforeCreate() {

  },
  created() {
      this.getJson(`${API + this.catalogUrl}`)
          .then(data => {
            for(let el of data){
              this.products.push(el);
            }
            this.filteredGoods = [...this.products];
          });
  },
  beforeMount() {

  },
  mounted(){

  },
  beforeUpdate() {

  },
  updated() {

  },
  beforeDestroy() {

  },
  destroyed() {

  },
});
