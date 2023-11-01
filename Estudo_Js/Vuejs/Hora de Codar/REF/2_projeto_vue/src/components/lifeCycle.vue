<template>
    <div>
        <h2>Meu nome é {{ nome }}</h2>
    </div>
</template>

<script>
export default {
    name: 'LifeCycle',
    data() {
        return {
            nome: 'Ainda não sei'
        }
    },
    created() {
        setTimeout(() => {
            this.nome = "Victor";
        }, 2000)
        // this.nome = "Victor";
    },
    mounted () {
        setTimeout(()=>{
            this.nome = 'Pedro'
        }, 3000)
        // this.nome = 'Pedro'
    }
}
</script>


