
<template>
  <div class="corpo">
    <h1 class="centralizado">{{ titulo }}</h1>

    <input type="search" class="filter" v-on:input='filtro = $event.target.value' placeholder="Filtro por parte do titulo">
    <ul class="lista-fotos">
      <li class="lista-fotos-item" v-for="(foto, index) of fotosComFiltro" :key="index">
        <meu-painel :titulo="foto.titulo">
            <imagem-responsiva :url='foto.url' :titulo='foto.titulo'/>
        </meu-painel>
      </li>
    </ul>

  </div>
</template>

<script>
import Painel from './components/shared/painel/Painel.vue';
import ImagemResponsiva from './components/shared/imagem-responsiva/ImagemResponsiva.vue'

export default {

  components: {
    'meu-painel' : Painel,
    'imagem-responsiva' : ImagemResponsiva
  },

  data() {

    return {
      titulo: 'Alurapic Curso Vue', 
      fotos: [],
      filtro: ''
    }
  },

  computed: {
    fotosComFiltro() {
      
      if(this.filtro) {
        let exp = new RegExp(this.filtro.trim(), 'i');
        return this.fotos.filter(foto => exp.test(foto.titulo))
      } else {
        return this.fotos;
      }
    }
  },

  created() {
    this.$http.get('http://localhost:3000/v1/fotos')
      .then(res => res.json())
      .then(fotos => this.fotos = fotos, err => console.log(err));
  }
}

</script>

<style>
  .corpo {
    font-family: Helvetica, sans-serif;
    width: 96%;
    margin: 0 auto;
  }
  .centralizado {
    text-align: center;
  }
  .lista-fotos {
    list-style: none;
  }
  .lista-fotos .lista-fotos-item {
    display: inline-block;
  }
  .filter{
    display:block;
    width: 100%;
    height: 40px;
    border-radius: 5px;
    padding-left: 10px ;
  }
</style>
