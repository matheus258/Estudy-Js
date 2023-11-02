<template>
    <div>
        <h2>Meu formulário</h2>
        <form action="">
            <div>
                <InputText />
            </div>
            <div>
                <InputText />
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
        }
    }
</script>