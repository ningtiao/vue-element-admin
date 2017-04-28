<template>
   <div class="cartcontrol">
    <transition name="move">
   	  <div class="cart-decrease" @click.stop.prevent="decreaseCart">
   	  	<span class="inner icon-remove_circle_outline"></span>
   	  </div>
   	 </transition>
   	  <div class="cart-count">{{count}}</div>
   	  <div class="cart-add icon-add_circle" @click.stop.prevent="addCart"></div>
   </div>
</template>

<script type="text/ecmascript-6">
  import Vue from 'vue';

  export default {
    props: {
      foods: {
        type: Array
      }
    },
    data() {
      return {
         count:0,  
      }
    },
    methods: {
      addCart() {
          this.count++;
      },
      decreaseCart(event) {
        if (!event._constructed) {
          return;
        }
        if (this.foods.count) {
          this.foods.count--;
        }
      }
    }
  };
</script> 

<style lang="stylus" rel="stylesheet/stylus">
  .cartcontrol
    font-size: 0
    .cart-decrease
      display: inline-block
      padding: 6px
      opacity: 1
      transform: translate3d(0, 0, 0)
      .inner
        display: inline-block
        line-height: 24px
        font-size: 24px
        color: rgb(0, 160, 220)
        transition: all 0.4s linear
        transform: rotate(0)
      &.move-enter-active, &.move-leave-active
        transition: all 0.4s linear
      &.move-enter, &.move-leave-active
        opacity: 0
        transform: translate3d(24px, 0, 0)
        .inner
          transform: rotate(180deg)
    .cart-count
      display: inline-block
      vertical-align: top
      width: 12px
      padding-top: 6px
      line-height: 24px
      text-align: center
      font-size: 10px
      color: rgb(147, 153, 159)
    .cart-add
      display: inline-block
      padding: 6px
      line-height: 24px
      font-size: 24px
      color: rgb(0, 160, 220)

</style>  
