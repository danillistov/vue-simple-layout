<template>

<v-dialog v-model="dialog" persistent max-width="600px">
      <v-btn slot="activator" color="primary" fab dark small><v-icon>shopping_cart</v-icon></v-btn>
      <v-card>
        <v-card-title>
          <span class="headline">Корзина</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
                <span>Список товаров:</span>
            <div class="container">
                <div class="row">
                    <div class="col-xl-12 buy-list mx-1">
                        <div id="todo-list-example" >
                <!-- <form v-on:submit.prevent="addNewTodo">
                <label for="new-todo">Добавить задачу</label>
                   <input
                     v-model="newTodoText.cart"
                     id="new-todo"
                     placeholder="Например, покормить кота"
                    >
                 <button>Добавить</button>
                 </form> -->
  <ul>
  <cart-item
      v-for="(todo, index) in todos"
      v-bind:key="todo.id"
      v-bind:title="todo.title"
      v-bind:price="todo.price"
      v-bind:count="todo.count"
      v-bind:total="total"
      v-on:addNewTodo="addNewTodo"
      v-on:remove="todos.splice(index, 1)"
      v-bind:class="{'cart-list-item': isActive}"
    ></cart-item>
    </ul>
</div>
                    </div>
                   
                </div>
            </div>
            </v-layout>
          </v-container>
         
        </v-card-text>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12 sm6 md4>
                <v-text-field label="Имя*" required></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 md4>
                <v-text-field label="Фамилия*" ></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 md4>
                <v-text-field
                  label="Отчество"
                  
                  persistent-hint
                  required
                ></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field label="Email*" required hint="Вам придет письмо с подтверждением заказа"></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field label="Страна*"  required></v-text-field>
              </v-flex>
              <v-flex xs6>
                <v-text-field label="Город*"  required></v-text-field>
              </v-flex>
              <v-flex xs6>
                <v-text-field label="Улица*"  required></v-text-field>
              </v-flex>
              <v-flex xs4>
                <v-text-field label="Дом*"  required></v-text-field>
              </v-flex>
                <v-flex xs4>
                <v-text-field label="Корпус"  required></v-text-field>
              </v-flex>
                <v-flex xs4>
                <v-text-field label="Квартира*"  required></v-text-field>
              </v-flex>
              <v-flex xs4>
                <v-text-field label="Индекс*"  required></v-text-field>
              </v-flex>
               <v-flex xs8>
                <v-text-field label="Контактный телефон*"  required></v-text-field>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="darken-1" flat @click="dialog = false">Закрыть</v-btn>
          <v-btn color="darken-1" flat @click="dialog = false">Заказать</v-btn>
        </v-card-actions>
      </v-card>
      
    </v-dialog>

</template>

<script>
import cartItem from "./cart-item.vue"
import second from "./AnotherCategory.vue"
 export default {
    data () {
      return {
        dialog: false,
        isActive: true,
        newTodoText: "",
        nextTodoId: 0,
        total: 0,
    todos: [
      {
        id: 0,
        title: "Первый товар",
        price: 20,
        count: 3
      }
    ],
    nextTodoId: 1
      }
    },
    components: {cartItem,second},
      props:['title','price','count','total'],
    methods: {
      remove: function() {
        return this.todos.splice(index, 1)
      },
      addNewTodo: function () {
      this.todos.push({
        id: this.nextTodoId++,
        title: this.productName
      })
     console.log(this.todos[0].title)
    }
    }
  }
</script>

<style scoped>

.buy-list { 
    height: 250px;
    overflow: auto;
    background-color: #ECE7E7;
    text-align: start;
}
.value-list {
background-color: #ECE7E7;
height: 250px;
}
.cancel-btn {
    height: 250px;
    background-color: #ECE7E7;
    
}
.cart-list-item {
  list-style-type: none;
  font-family: Roboto;
  font-size: 16px;
}
</style>
