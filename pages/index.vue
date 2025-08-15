<template>
  <div class="wrap">
    <Sidebar></Sidebar>
    <div class="tess">
      <h3>Đây là 1 ảnh chó</h3>
      <button @click = "fetchDog">CLick to regenerate</button>
      <!-- <div v-if = "url" class ="img-box">
        <img :src = "url"/>
      </div> -->
      <div class ="test" >
        <p v-for="province in provinces" :key = "province.code">{{province.name}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from "../components/common/sidebar.vue";

export default {

  name: "IndexPage",
  components: {
    Sidebar,
  },
  data(){
    return {
      url: '',
      provinces: []
    }
  },
  async fetch() {
  try {
    const res = await fetch("https://provinces.open-api.vn/api/v1/?depth=1")
    const province = await res.json()
    this.provinces = province;

  } catch (err) {
    console.error("Fetch error", err);
  }
},

  methods:{
    fetchDog(){
      this.$fetch();
    }
  }
};

</script>

<style>
.wrap{
  display: flex;
  align-items: flex-start;
}
.test{
  display: grid;
  grid-template-columns: repeat(10,1fr);
  gap: 20px
}
.img-box{
  width: 100px;
  height: 100px;
  overflow:hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}
.img-box img{
  width: 100%;
  height: 100%;
}
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
