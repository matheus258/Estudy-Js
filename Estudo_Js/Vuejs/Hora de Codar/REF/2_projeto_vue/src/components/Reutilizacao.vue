<template>
    <div>
        <button @click="ativar">Clique Aqui!</button>
        <br>
        <span v-show="ativou">Hellow, span ativado</span>
    </div>
</template>

<script>
export default {
    name: 'Reutilizacao',
    data(){
        return{
            ativou: false,
        }
    },
    methods:{
        ativar(){
            this.ativou = !this.ativou;
        }
    }
}
</script>