<template>
  <div class="home">
    <img src="../assets/logo.png">
    <input type="button" value="点TM的" @click="add()"/>
    <span>{{ counter }}</span>
    <p>The button above has been clicked {{ counter }} times.</p>
    <HelloWorld msg="ts"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue,Prop } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import Store from '../store';

@Component({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {
  constructor() {
    super();
  }
  created () {
    console.log('created'); // -> Hello
  }

  get counter() {
    return Store.state.count;
  }

  public add() {
    Store.commit('increment');
    console.log(Store.state.count);
  }
}
</script>
