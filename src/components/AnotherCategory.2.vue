<template>
    
        <div class="content1">
            <div class="container ">
                <div class="row justify-content-center h-100">
                    <div class="col-xl-3 col-12 col-sm-12 col-md-4 col-lg-4 mt-2 sell mx-2 d-flex align-items-end"><div class="sell_item"></div><div class="sell_item_button d-flex justify-content-center"><v-btn flat small class="btn_buy" >Заказать</v-btn></div></div>
                    <div class="col-xl-3 col-12 col-sm-12 col-md-4 col-lg-4 mt-2 sell mx-2 d-flex align-items-end"><div class="sell_item"></div><div class="sell_item_button d-flex justify-content-center"><v-btn flat small class="btn_buy" >Заказать</v-btn></div></div>
                    <div class="col-xl-3 col-12 col-sm-12 col-md-4 col-lg-4 mt-2 sell mx-2 d-flex align-items-end"><div class="sell_item"></div><div class="sell_item_button d-flex justify-content-center"><v-btn flat small class="btn_buy" >Заказать</v-btn></div></div>
                    <div class="col-xl-3 col-12 col-sm-12 col-md-4 col-lg-4 mt-2 sell mx-2 d-flex align-items-end"><div class="sell_item"></div><div class="sell_item_button d-flex justify-content-center"><v-btn flat small class="btn_buy" >Заказать</v-btn></div></div>
                    <div class="col-xl-3 col-12 col-sm-12 col-md-4 col-lg-4 mt-2 sell mx-2 d-flex align-items-end"><div class="sell_item"></div><div class="sell_item_button d-flex justify-content-center"><v-btn flat small class="btn_buy" >Заказать</v-btn></div></div>
                    <div class="col-xl-3 col-12 col-sm-12 col-md-4 col-lg-4 mt-2 sell mx-2 d-flex align-items-end"><div class="sell_item"></div><div class="sell_item_button d-flex justify-content-center"><v-btn flat small class="btn_buy" >Заказать</v-btn></div></div>
                    <div class="col-xl-3 col-12 col-sm-12 col-md-4 col-lg-4 mt-2 sell mx-2 d-flex align-items-end"><div class="sell_item"></div><div class="sell_item_button d-flex justify-content-center"><v-btn flat small class="btn_buy" >Заказать</v-btn></div></div>
                    <div class="col-xl-3 col-12 col-sm-12 col-md-4 col-lg-4 mt-2 sell mx-2 d-flex align-items-end"><div class="sell_item"></div><div class="sell_item_button d-flex justify-content-center"><v-btn flat small class="btn_buy" >Заказать</v-btn></div></div>
                    <div class="col-xl-3 col-12 col-sm-12 col-md-4 col-lg-4 mt-2 sell mx-2 d-flex align-items-end"><div class="sell_item"></div><div class="sell_item_button d-flex justify-content-center"><v-btn flat small class="btn_buy" >Заказать</v-btn></div></div>
                    <div class="col-xl-3 col-12 col-sm-12 col-md-4 col-lg-4 mt-2 sell mx-2 d-flex align-items-end"><div class="sell_item"></div><div class="sell_item_button d-flex justify-content-center"><v-btn flat small class="btn_buy" >Заказать</v-btn></div></div>
                    <div class="col-xl-3 col-12 col-sm-12 col-md-4 col-lg-4 mt-2 sell mx-2 d-flex align-items-end"><div class="sell_item"></div><div class="sell_item_button d-flex justify-content-center"><v-btn flat small class="btn_buy" >Заказать</v-btn></div></div>
                    <div class="col-xl-3 col-12 col-sm-12 col-md-4 col-lg-4 mt-2 sell mx-2 d-flex align-items-end"><div class="sell_item"></div><div class="sell_item_button d-flex justify-content-center"><v-btn flat small class="btn_buy" >Заказать</v-btn></div></div>
                </div>
            </div>
        </div>
   

</template>

<script>

export default {
    data() {
        return {
            count: 1
        }
    },
    methods: {
      
        
    }
}

</script>

<style scoped>

html,body {
  height: 100%;
}

.sell {
     position: relative;
    
    height: 386px;
    background-color: #00757E;
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

</style>
