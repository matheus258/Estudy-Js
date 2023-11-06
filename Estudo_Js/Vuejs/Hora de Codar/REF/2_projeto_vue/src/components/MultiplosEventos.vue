<template>
    <div>
        <button @click="primeiro($event), segundo($event), terceiro(txt1, $event)">Ativar mútiplos eventos</button> <!-- Terceiro recebe texto Definido no DATA -->
        <p>{{ multiplos_eventos }}</p>
    </div>
</template>

<script>
export default {
    name: 'MultiplosEventos',

    data() {
        return{
            multiplos_eventos: '',
            txt1: 'Texto Definido',
        }
    },
    methods: {
        primeiro(e){
            this.multiplos_eventos = 'Primeiro evento ativado!'
        },
        segundo(e){
            setTimeout(() => {
                this.multiplos_eventos += ' Segundo evento ativado!'
            }, 1000)
        },
        terceiro(txt1, e) { // Usa o texto definido.
            setInterval(() => {
                this.multiplos_eventos = txt1;
            }, 2000)
        }
    }
}

</script>

<style scoped>
    div {
        margin: 100px;
    }
</style>