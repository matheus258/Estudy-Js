<template>
    <div>
        <h2>Está é a descrição da pessoa {{nome}}</h2>
        <Info compEmail="mmdev@gmail.com" />
    </div>
</template>

<script>
    import Info from './Info.vue'

    export default {
        name: "Pessoa",
        components: {
            Info
        },
        data(){
            return{
                nome: 'Matheus'
            }
        }
    }
</script>
