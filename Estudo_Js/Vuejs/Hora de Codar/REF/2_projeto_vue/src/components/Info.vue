<template>
    <div>
        <p v-if="esta_trabalhando">Estou trabalhando como Analista</p>
        <p v-else>Estou em busca de novas oportunidades</p>
        <p>Utilizo as seguintes tecnologias:</p>
        <ul>
            <li v-for="tecnologias, index in backend_array" v-bind:key="index" >{{tecnologias}}</li>
        </ul>
        <div>
            <button @click='showEmail' >{{ textoButton}}</button>
        </div>
        <p v-show="mostrar_email" >Mande uma mensagem para {{ email }}</p>
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
                mostrar_email: false,
                email: 'matheus@gmail.com',
                meu_link: 'https://www.google.com.br/',
                textoButton: 'Mostrar e-mail',
                backend_array: ['Node','Express','Ajax','Json','API', 'Axios']
            }
        },
        methods:{
            showEmail(){
                this.mostrar_email = !this.mostrar_email
                if(!this.mostrar_email){
                    this.textoButton = "Mostrar e-mail"
                } else {
                    this.textoButton = 'Ocultar e-mail'
                }
            }
        }
    }
</script>