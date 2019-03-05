<template>
    
        <div class="content1">
            <div class="container ">
                <div class="row justify-content-center h-100">
                    <div class="col-xl-3 col-12 col-sm-12 col-lg-12 mt-2 sell mx-2 d-flex align-items-end">
                        <div class="product-name d-flex align-items-start">
                            <p>{{productName}}</p>
                        </div>
                        <div class="product-value d-flex align-items-start">
                            <p>{{price}}</p>
                        </div>
                        <div class="sell_item ">
                        </div>
                    <div class="sell_item_button d-flex justify-content-center">
                        <v-btn flat small class="btn_buy" v-on:click="$emit('addNewTodo')">Заказать</v-btn>
                        </div>
                        </div>
                    <div class="col-xl-3 col-12 col-sm-12 col-lg-12 mt-2 sell mx-2 d-flex align-items-end"><div class="sell_item"></div><div class="sell_item_button d-flex justify-content-center"><v-btn flat small class="btn_buy" >Заказать</v-btn></div></div>
                    <div class="col-xl-3 col-12 col-sm-12 col-lg-12 mt-2 sell mx-2 d-flex align-items-end"><div class="sell_item"></div><div class="sell_item_button d-flex justify-content-center"><v-btn flat small class="btn_buy" >Заказать</v-btn></div></div>
                    <div class="col-xl-3 col-12 col-sm-12 col-lg-12 mt-2 sell mx-2 d-flex align-items-end"><div class="sell_item"></div><div class="sell_item_button d-flex justify-content-center"><v-btn flat small class="btn_buy" >Заказать</v-btn></div></div>
                    <div class="col-xl-3 col-12 col-sm-12 col-lg-12 mt-2 sell mx-2 d-flex align-items-end"><div class="sell_item"></div><div class="sell_item_button d-flex justify-content-center"><v-btn flat small class="btn_buy" >Заказать</v-btn></div></div>
                    <div class="col-xl-3 col-12 col-sm-12 col-lg-12 mt-2 sell mx-2 d-flex align-items-end"><div class="sell_item"></div><div class="sell_item_button d-flex justify-content-center"><v-btn flat small class="btn_buy" >Заказать</v-btn></div></div>
                    <div class="col-xl-3 col-12 col-sm-12 col-lg-12 mt-2 sell mx-2 d-flex align-items-end"><div class="sell_item"></div><div class="sell_item_button d-flex justify-content-center"><v-btn flat small class="btn_buy" >Заказать</v-btn></div></div>
                    <div class="col-xl-3 col-12 col-sm-12 col-lg-12 mt-2 sell mx-2 d-flex align-items-end"><div class="sell_item"></div><div class="sell_item_button d-flex justify-content-center"><v-btn flat small class="btn_buy" >Заказать</v-btn></div></div>
                    <div class="col-xl-3 col-12 col-sm-12 col-lg-12 mt-2 sell mx-2 d-flex align-items-end"><div class="sell_item"></div><div class="sell_item_button d-flex justify-content-center"><v-btn flat small class="btn_buy" >Заказать</v-btn></div></div>
                    <div class="col-xl-3 col-12 col-sm-12 col-lg-12 mt-2 sell mx-2 d-flex align-items-end"><div class="sell_item"></div><div class="sell_item_button d-flex justify-content-center"><v-btn flat small class="btn_buy" >Заказать</v-btn></div></div>
                     <div class="col-xl-3 col-12 col-sm-12 col-lg-12 mt-2 sell mx-2 d-flex align-items-end"><div class="sell_item"></div><div class="sell_item_button d-flex justify-content-center"><v-btn flat small class="btn_buy" >Заказать</v-btn></div></div>
                    <div class="col-xl-3 col-12 col-sm-12 col-lg-12 mt-2 sell mx-2 d-flex align-items-end"><div class="sell_item"></div><div class="sell_item_button d-flex justify-content-center"><v-btn flat small class="btn_buy" >Заказать</v-btn></div></div>
                </div>
            </div>
        </div>
   

</template>

<script>

export default {
    data() {
        return  { 
            price: "20$",
            productName: "Наименование товара 1",
            nextTodoId: 0
        }
    },
    props:['title'],
    methods: {
        
}
}
</script>

<style scoped>

html,body {
  height: 100%;
}

.sell {
    height: 386px;
    background-color: #ECE7E7;
}
.sell_item {
    position: absolute;
    width: 100%;
    right: 0px;
    height: 111px;
    background-color: #C4C4C4;
    display: flex;
    justify-content: center;
    align-items: flex-end;
   
}
.btn_buy {
    position: relative;
    bottom: 25px;
    width: 180px;
    height: 60px;;
    border-radius: 20px;
     font-family: Roboto;
     font-size: 16px;
     color: #282828;
}
.category {
    text-align: center;
}
.product-name {
    position: absolute;
    top: 0;
    font-family: Roboto;
    font-size: 16px;
    color: #282828;
}
.product-value {
    position: absolute;
    top: 20px;
    font-family: Roboto;
    font-size: 16px;
   color: #282828;
}
</style>
