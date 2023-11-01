const MyNameApp = {
    data() {
        return {
            name: 'John Doe',
            age: 30,
            city: 'New York',
            inputName: ''
        }
    },
    methods: {
        submitForm(e){
            e.preventDefault(); // prevent form from submitting normally
            this.name = this.input_nome
        }
    },
}

Vue.createApp(MyNameApp).mount('#app')