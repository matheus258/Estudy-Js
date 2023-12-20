<template>
    <div>
        <header class="header">
            <h1 class="title">{{ title }}</h1>
            <ul class="header-list">
                <li><a href="">Home</a></li>
                <li><a href="">Contato</a></li>
                <li><a href="">Sobre</a></li>
            </ul>
        </header>
    </div>
</template>
<script>
    export default {
        name: 'ThisHeader',
        data() {
            return {
                title: "Seja bem vindo ao projeto Vue.js App"
            }
        }
    }
</script>
<style>
    .title{
        color: rgb(255, 255, 255);
        font-size: 1.3em;

    }
    .header {
        flex-direction: column;
        background-color: black;
        height: 200px;
        display: flex;
        text-align: center;
        justify-content: center;
        align-items: center;
    }
    .header-list {
        flex-direction: row;
        display: flex;
        list-style: none;
        padding: 0;
    }
    .header-list li {
        margin: 20px 20px;
    }
    .header-list li a {
        color: rgb(214, 91, 91);
        text-decoration: none;
        transition: 1s;
    }
    .header-list li a:hover {
        color: rgb(255, 255, 255);
        text-decoration: none;
    }
</style>