
<script>


export default {

    components: {
            TopMenu: TopMenu,
        },

    data() {
      return {
        form: {
          name: '',
          oneUnitPrice: 0,
          threeUnitPrice: 0,
          fiveUnitPrice: 0,
        },
        message: '',
        products: [],

      };
    },

    methods: {
      submitForm() {
        axios.post('/products/store', this.form)
          .then(response => {
            console.log("Sikeres termék felvétel");
            this.message = "Sikeres termék felvétel";
            this.form = {
                name: '',
                oneUnitPrice: 0,
                threeUnitPrice: 0,
                fiveUnitPrice: 0,
            };
            this.fetchProducts();
          })
          .catch(error => {
            console.log("Nem sikerült termék felvétele");
            this.message = "Nem sikerült termék felvétele";
          });
      },

      fetchProducts() {
        axios.get('/products/list')
            .then(response => {
            this.products = response.data;
            })
            .catch(error => {
            console.error("Hiba a termékek lekérésekor: " + error);
            });
        },
        },
        mounted() {
            this.fetchProducts(); // Oldal betöltésekor termékek lekérése
        },




  };


</script>


<template>


<div>
    <TopMenu />
    <router-view></router-view>
</div>

    <div class="container">
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label for="name">Termék neve</label>
          <input type="text" id="name" v-model="form.name" class="form-control" required>
        </div>
        <div class="form-group">
          <label for="oneUnitPrice">Egységára</label>
          <input type="number" id="oneUnitPrice" v-model="form.oneUnitPrice" class="form-control" required>
        </div>
        <div class="form-group">
          <label for="threeUnitPrice">3 Termék ára</label>
          <input type="number" id="threeUnitPrice" v-model="form.threeUnitPrice" class="form-control" required>
        </div>
        <div class="form-group">
          <label for="fiveUnitPrice">5 Termék ára</label>
          <input type="number" id="fiveUnitPrice" v-model="form.fiveUnitPrice" class="form-control" required>
        </div>
        <button type="submit" class="btn btn-primary">Mentés</button>
      </form>


      <div v-if="message" class="alert alert-success mt-3">
        {{ message }}
      </div>


      <table class="table table-bordered mt-3">
      <thead>
        <tr>
          <th scope="col">Név</th>
          <th scope="col">Egységár</th>
          <th scope="col">3 Termék ára</th>
          <th scope="col">5 Termék ára</th>
          <th scope="col">Státusz</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in products" :key="product.id">
          <td>{{ product.name }}</td>
          <td>{{ product.oneUnitPrice }}</td>
          <td>{{ product.threeUnitPrice }}</td>
          <td>{{ product.fiveUnitPrice }}</td>
          <td>{{ product.status }}</td>
        </tr>
      </tbody>
    </table>


    </div>
  </template>



  <style>

  </style>
