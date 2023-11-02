<template>
  <div>
    <PrimeiroComponente />
    <LifeCycle />
    <Pessoa />
    <Form />
  </div>
</template>

<script>
import PrimeiroComponente from './components/PrimeiroComponente.vue';
import LifeCycle from './components/lifeCycle.vue';
import Pessoa from './components/Pessoa.vue'
import Form from './components/Form.vue'

export default {
  name: 'App',
  components: {
    PrimeiroComponente,
    LifeCycle,
    Pessoa,
    Form
  }
}
</script>
