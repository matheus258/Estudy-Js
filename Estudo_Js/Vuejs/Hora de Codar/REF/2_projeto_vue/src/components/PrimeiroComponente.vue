<template>
    <div>
        <h1>Olá Vue!</h1>
        <h2>DADOS</h2>
        <p>Meu nome é {{ nome }} e trabalho como {{ profissao }}</p>
        <MultiplosEventos />
    </div>
</template>


<script>
import MultiplosEventos from './MultiplosEventos.vue';

export default {
    name: 'PrimeiroComponente',
    components: {
        MultiplosEventos
    },
    data() {
        return {
            nome: 'Matheus',
            profissao: 'Analista'
        }
    }
}
</script>
