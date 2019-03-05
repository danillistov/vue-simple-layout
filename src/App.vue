<template>
<div id="app" >
  <div class="container-fluid">
    <div class="row" >
    <div class="col-xl-12 header d-flex align-items-center"> 
      <div class="row">
      <div class="col-xl-1 col-12 menu_btn"><v-btn fab dark small><v-icon>menu</v-icon></v-btn></div>
      <div class="col-xl-2 d-flex align-items-center">
        <span class="company_name">Victoria's Cupcakes</span>
        <div class="dropdown">
             <button class="btn btn-secondary" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">МЕНЮ
             <v-icon color="white">expand_more</v-icon>
             </button>
             <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
             <a class="dropdown-item" href="#">О нас</a>
             <a class="dropdown-item" href="#">Галлерея</a>
             <a class="dropdown-item" href="#">Контакты</a>
  </div>
</div>
      </div>
      <div class="col-xl-4 offset-xl-5 col-12 search_form">
        <form>
         <dialoge></dialoge>
          <input type="text" class="search" placeholder="Поиск...">
          <v-btn  fab dark small><v-icon>search</v-icon></v-btn>
        </form>
      </div>
      </div>
    </div>
    </div>
  </div>
   <div class="container-fluid second-block ">
    <div class="row">
    <div class="col-xl-2 main_menu">
        <div class="row menu-list" >
          <div class="col-xl-12 menu_name_item d-flex align-items-center"><span>Товары</span></div>
          <div class="col-xl-12 menu_item d-flex align-items-center" v-bind:class="{ menu_item_active_version: isActive }" v-on:click='change()'><span>Категория товара</span></div>
          <div class="col-xl-12 menu_item d-flex align-items-center" v-bind:class="{ menu_item_active_version: isActive1 }" v-on:click='change1()'><span>Категория товара</span></div>
          <div class="col-xl-12 menu_item d-flex align-items-center" v-bind:class="{ menu_item_active_version: isActive2 }" v-on:click='change2()'><span>Категория товара</span></div>
          <div class="col-xl-12 menu_item d-flex align-items-center" v-bind:class="{ menu_item_active_version: isActive3 }" v-on:click='change3()'><span>Категория товара</span></div>
      </div>
    </div>
    <div class="col-xl-10 content h-100 ">
      <main-content v-if="isActive"></main-content>
      <another v-if="isActive1"></another>
      <another-one v-if="isActive2"></another-one>
      <another-two v-if="isActive3"></another-two>
       <button class="btn btn-scroll" v-on:click="up()" ><v-icon>arrow_upward</v-icon></button>
    </div>
  </div>
  </div>
 
  <!-- <footer class="footer"></footer> -->
  </div>
</template>

<script>
import MainContent from "./components/MainContent.vue"
import Another from "./components/AnotherCategory.vue"
import AnotherOne from "./components/AnotherCategory.1.vue"
import AnotherTwo from "./components/AnotherCategory.2.vue"
import dialoge from "./components/modelBtn.vue"

export default {
  components:{MainContent, Another, AnotherOne, AnotherTwo,dialoge},
  data () {
    return {
      isActive: true,
      isActive1: false,
      isActive2: false,
      isActive3: false,
      clipped: false,
      drawer: true,
      fixed: false,
      isMove: false,
      isMenu: true,
    }
  },
  methods: {
    change: function() {
       this.isActive = true
      this.isActive1 = false
      this.isActive2 = false
      this.isActive3 = false
      
    },
    change1: function() {
       this.isActive1 = true;
      this.isActive = false;
      this.isActive2 = false;
      this.isActive3 = false;
     
    },
    change2: function() {
      this.isActive2= true;
      this.isActive1 = false;
      this.isActive = false;
      this.isActive3 = false;
      
    },
    change3: function() {
       this.isActive3 = true;
      this.isActive1 = false;
      this.isActive2 = false;
      this.isActive = false;
      
    },
    move: function(){
      this.isMove = true
      this.isMenu =false
    },
    up: function()  {
       if (window.pageYOffset > 0) {
      window.scrollBy(0, -80);
      setTimeout(this.up, 10);
    }
    }
},
  name: 'App'
}
</script>
 
 <style>


 /* .app {
   height: 100%;
 }
 .container{
   position:relative
   }
*/
.btn-scroll {
  position: fixed;
  bottom: 0;
  right: 0;

  z-index: 7;
}
.menu { 
  color: #fff;
  position: sticky;
}
.dropdown-item {
 font-family: Roboto;
}
.dropdown-item:hover {
  background: #282828;
  color: #fff;
}
.main_menu_perent {
  position: relative;
}
 .header { 
  height: 60px;
  background-color: #ECE7E7;
  position: fixed;
  z-index: 3;
  
} 
.block {
  position: relative;
}
/* .content {
  position: absolute;
border: 1px solid red;
left: 0;
right: 0;
width: 100%;
height: 100%;
margin-top: 60px;
z-index: -1;

}*/

.menu__name {
  color: #fff;
  margin: 10px;
  font-size: 20px;
}
/* .menu_list {
  color:#282828;
  height: 200px;
  font-size: 16px;
  
} */
.menu_list_item {
  
  height: 50px;
  background-color:#282828;
  color: #fff;
  
}


.active, .active1, .active2, .active3 {
  background-color: #fff;
  color: #282828; 
}

.main_menu {
  background-color: #282828;
  
}
.second-block {
  margin-top: 60px;
  position: relative;
  z-index: 1;
}
.content {
  background-color: #fff;
}
.menu_item {
  background-color: #282828;
  height: 50px;
  font-family: Roboto;
  font-size: 16px;
  color: #fff;
}
.menu-list{
  position: fixed;
}
.menu_item_active_version {
   background-color: #fff;
  height: 50px;
  font-family: Roboto;
  font-size: 16px;
  color:#282828;
}
.menu_name_item {
  color: #fff;
  height: 50px;
  font-family: Roboto;
  font-size: 20px;

}
.search {
  background: #FFFFFF;
box-shadow: inset 0px 1px 1px rgba(0, 0, 0, 0.25);
border-radius: 20px;
height: 40px;
border: 0px solid black;
padding: 10px;
}
.search_bar {
  display: inline;
}
.search_form {
text-align: right;
}
/* убираем стандартную обводку  */
a:active, a:focus { outline: none; }

input, textarea {outline:none;}
input:active, textarea:active {outline:none;}
:focus {outline:none;}
textarea {resize:none;}
textarea {resize:vertical;}
textarea {resize:horizontal;}
button:active, button:focus {
  outline: none;
}
button::-moz-focus-inner {
  border: 0;
}
 .footer {
   height: 71px;
   background-color:#ECE7E7;
 }
 .company_name {
   font-size: 20px;
   font-family: Roboto;
 }
 .btn-secondary {
   background: #282828;
   font-size: 16px;
   border-radius:  20px;
   font-family: Roboto;
 }
@media (max-width: 576px) { 
  .header {
    height: 100px;
  }
 .menu_btn {
   display: none;
 }
 .search_form {
   text-align: center;
 }
 .menu_item {
   text-align: center;
 }
 .header {
   position: relative;
 }
 .menu-list{
  position: relative;
}
.second-block {
  margin-top: 0px;
}
  .menu_name_item {
  text-align: center;

}
 }

 
 </style>
 