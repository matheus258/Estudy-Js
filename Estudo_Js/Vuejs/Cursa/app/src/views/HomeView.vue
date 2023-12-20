<template>
  <div class="home">
    <ThisHeader v-show="showHeader" />
    <button @click='mostrarHeader'>MOSTRAR / ESCONDER</button>
    <div v-if="acessLevel === 'admin'">
      <h1>Administrador</h1>
      <ul>
        <li>GESTOR DE VENDAS</li>
        <li>PEDIDOS</li>
        <li>CONTATOS</li>
      </ul>
    </div>
    <div v-else-if="acessLevel === 'marketing'">
      <h1>Marketing</h1>
      <ul>
        <li>Mapa de gestor</li>
        <li>Anuncios</li>
        <li>Tarefas</li>
      </ul>
    </div>
    <div v-else>
      <h1>Usuario Normal</h1>
      <p>Não tem acesso a funcionalidades do administrador ou marketing.</p>
    </div>
    <br>
    <div :class="array-todos">
      <div v-for="obj in todos"
      :key="obj.length">
        {{ obj.title }}
      </div>
    </div>
    <div>
      <h2 :class="{titleSecundary}">
        Olá, vamos estudar varios assuntos de programação.
      </h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti vitae molestias blanditiis iste ipsum quo. Aperiam veritatis fuga illum! Rerum totam modi minus voluptatem, voluptates maiores in sint eius commodi?
      </p>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import ThisHeader from '@/components/ThisHeader.vue';

export default {
  name: 'HomeView',
  components: {
    ThisHeader
  },
  data(){
    return{
      showHeader: true,
      acessLevel: 'admin',
      titleSecundary: true,
      todos: [
        {
          "userId": 1,
          "id": 1,
          "title": "delectus aut autem",
          "completed": false
        },
        {
          "userId": 1,
          "id": 2,
          "title": "quis ut nam facilis et officia qui",
          "completed": false
        },
        {
          "userId": 1,
          "id": 3,
          "title": "fugiat veniam minus",
          "completed": false
        },
        {
          "userId": 1,
          "id": 4,
          "title": "et porro tempora",
          "completed": true
        },
        {
          "userId": 1,
          "id": 5,
          "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
          "completed": false
        }
      ]
    }
  },
  methods:{
    mostrarHeader(){
      this.showHeader = !this.showHeader;
    }
  }
}
</script>

<style>
.titleSecundary{
  font-size: 30px;
  color: #253340;
  text-align: center;
  margin-top: 50px;
}
</style>
