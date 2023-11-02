<template>
    <div>
        <p v-if="esta_trabalhando">Estou trabalhando como Analista</p>
        <p v-else>Estou em busca de novas oportunidades</p>
        <p>Utilizo as seguintes tecnologias:</p>
        <ul>
            <li>JavaScript</li>
            <li>Vue</li>
            <li>React</li>
            <li>Node</li>
        </ul>
        <p v-show="email" >Mande uma mensagem para {{ email }}</p>
    </div>
</template>

<script >
    export default {
        name: 'Info',
        data() {
            return {
                esta_trabalhando: false,
                mostrar_email: true,
                email: 'matheus@gmail.com'
            }
        }
    }
</script>