<template>
  <div class="m-guide">
    <div class="swiper-container" id="guide-swiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="img in imgs">
          <img v-if="$index==2" v-bind:src="img" v-link="{path:'/index'}">
          <img v-else v-bind:src="img">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import { tabChanger } from '../vuex/actions';
  export default {
    vuex: {
      actions: {
        change: tabChanger
      }
    },
    data() {
      return {
        imgs: ['./images/guide.jpg', './images/guide04.png', './images/guide02.png']
      }
    },
    ready() {
      let mySwiper = new Swiper("#guide-swiper");
      this.change(0);
    }
  }
</script>
