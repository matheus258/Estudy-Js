<template>
    <div>
        <h1>Olá Vue!</h1>
        <h2>DADOS</h2>
        <p>Meu nome é {{ nome }} e trabalho como {{ profissao }}</p>
    </div>
</template>


<script>
export default {
    name: 'PrimeiroComponente',
    data() {
        return {
            nome: 'Matheus',
            profissao: 'Analista'
        }
    }
}
</script>
