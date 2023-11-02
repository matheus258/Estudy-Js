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
        <p>Para acessar meu portifólio <a v-bind:href="meu_link" target="blank">basta clicar aqui</a></p>
        <Picture />
    </div>
</template>

<script >
    import Picture from './Picture.vue'
    export default {
        name: 'Info',
        components: {
            Picture
        },
        data() {
            return {
                esta_trabalhando: false,
                mostrar_email: true,
                email: 'matheus@gmail.com',
                meu_link: 'https://www.google.com.br/'
            }
        }
    }
</script>