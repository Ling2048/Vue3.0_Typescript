<template>
  <div class="home">
    <img src="../assets/logo.png">
    <input type="button" value="点TM的" @click="add()"/>
    <span>{{ counter }}</span>
    <p>The button above has been clicked {{ counter }} times.</p>
    <HelloWorld msg="ts"/>
    <el-row>
      <el-button>默认按钮</el-button>
      <el-button type="primary">主要按钮</el-button>
      <el-button type="success">成功按钮</el-button>
      <el-button type="info">信息按钮</el-button>
      <el-button type="warning">警告按钮</el-button>
      <el-button type="danger">危险按钮</el-button>
    </el-row>
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

  //计算属性，这样写才能更新
  get counter() {
    return Store.state.count;
  }

  public add() {
    Store.commit('increment');
    console.log(Store.state.count);
  }
}
</script>
