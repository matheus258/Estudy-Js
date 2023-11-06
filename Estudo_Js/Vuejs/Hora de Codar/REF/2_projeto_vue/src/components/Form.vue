<template>
    <div>
        <h2>Meu formulário</h2>
        <form action="" @submit="nameInput($event)">
            <div>
                <InputText /> <!--v-model="name" -->
            </div>
            <div>
                <InputText /> <!--v-model="sobrenome"-->
            </div>
            <div>
                <input type="text" v-model="frase">
            </div>
            <div>
                <SubmitForm />
            </div>
        </form>
    </div>
</template>

<script>
    import InputText from './Form/FormText.vue';
    import SubmitForm from './Form/Submit.vue';

    export default {
        name: 'Form',
        components: {
            InputText,
            SubmitForm
        },
        data () {
            return {
                name: '',
                sobrenome: '',
                frase: ''
            }
        },
        methods: {
            nameInput(e){
                e.preventDefault();

                console.log(this.name)
                console.log(this.sobrenome)
                console.log(this.frase)

            }
        }
    }
</script>