const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

const app = new Vue({
  el: '#app',
  data: {
    catalogUrl: '/catalogData.json',
    products: [],
    filteredGoods: [],
    imgCatalog: 'https://placehold.it/200x150',
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
