
<template>
    <div class="painel">
        <h2 class="painel-titulo" @click='visivel = !visivel'>{{ titulo }}</h2>
        <transition name='painel-fade'>
          <div class="painel-conteudo" v-show="visivel">
            <slot></slot>
          </div>
        </transition>
        
    </div>
</template>

<script>
export default {

    props: ['titulo'],

    data() {
      return {
        visivel: true
      }
    }
}

</script>

<style scoped>
/* Estilo do painel */
   .painel {
    padding: 0 auto;
    border: solid 2px grey;
    display: inline-block;
    margin: 5px;
    box-shadow: 4px 4px 8px grey;
    width: 200px;
    height: 100%;
    vertical-align: top;
    text-align: center;
  }

  .painel .painel-titulo {
    text-align: center;
    border: solid 2px;
    background: rgba(221, 178, 238, 0.726); /* lightblue */
    margin: 0 0 15px 0;
    padding: 10px;
    text-transform: uppercase;
  }
  * {
      box-shadow: 4px 4px 4px;
  }
  .painel-fade-enter, .painel-fade-leave-active {
    opacity: 0;
  } 
  .painel-fade-enter-active, .painel-fade-leave-active {
    transition: opacity .4s;
  }

</style>
