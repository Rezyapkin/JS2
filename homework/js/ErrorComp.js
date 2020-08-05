Vue.component('error', {
    data(){
      return {
          max_id: 0,
          delay: 3000,
          errors: [        
            ],        
      }
    },

    methods: {
      clearAllErrors() {
          this.errors = [];
      },

      clearOldErrors() {
          this.errors = this.errors.filter((item) => {
              return +(new Date()) - (+item.time) < this.delay;
          });
      },

      addError(error) {
          this.max_id++;
          this.errors.push({
              id: this.max_id,
              error: error,
              time: new Date(),
          });  

          setTimeout(this.clearAllErrors,this.delay);
      }
    },

    mounted() {
    },
 
    template: `
        <div v-if="errors.length"class="error-container">
            <span class="close-btn" @click="clearAllErrors"></span>
            <p v-for='error in errors' :key='error.id'><strong>Ошибка:</strong> {{ error.error }}<br>
            <i>{{ error.time }}</i></p>
        </div>`
});

