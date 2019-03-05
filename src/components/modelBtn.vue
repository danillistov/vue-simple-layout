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
                    <div class="col-xl-7 buy-list mx-1">
                        <div id="todo-list-example">
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
      v-on:addNewTodo="addNewTodo"
      v-on:remove="todos.splice(index, 1)"
      v-bind:class="{'cart-list-item': isActive}"
    ></cart-item>
    </ul>
</div>
                    </div>
                    <div class="col-xl-2 value-list mx-1"></div>
                    <div class="col-xl-2 cancel-btn mx-1"></div>
                </div>
            </div>
            </v-layout>
          </v-container>
         
        </v-card-text>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12 sm6 md4>
                <v-text-field label="Legal first name*" required></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 md4>
                <v-text-field label="Legal middle name" hint="example of helper text only on focus"></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 md4>
                <v-text-field
                  label="Legal last name*"
                  hint="example of persistent helper text"
                  persistent-hint
                  required
                ></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field label="Email*" required></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field label="Password*" type="password" required></v-text-field>
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
        price: "20$",
        productName: "Наименование товара 1",
        nextTodoId: 0,
    todos: [
      {
        id: 0,
        title: "Первый товар"
      }
    ],
    nextTodoId: 1
      }
    },
    components: {cartItem,second},
    props: ['title'],
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
}
.value-list {
border: 1px solid black;
height: 250px;
}
.cancel-btn {
    height: 250px;
    border: 1px solid black;
}
.cart-list-item {
  list-style-type: none;
  font-family: Roboto;
  font-size: 16px;
}
</style>
