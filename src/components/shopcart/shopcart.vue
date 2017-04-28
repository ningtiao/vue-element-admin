<template>
    <div class="shopcart">
      <div class="content">
        <div class="content-left">
          <div class="logo-wrapper">
            <div class="logocart" :class="{'highlight':totalCount>0}">
              <i class="icon-shopping_cart" :class="{'highlight':totalCount>0}"></i>
            </div>
            <div class="num" v-show="totalCount>0">{{totalCount}}</div>
          </div>
          <div class="price" :class="{'highlight':totalPrice>0}">¥{{totalPrice}}</div>
          <div class="desc">另需配送费{{deliveryPrice}}</div>
        </div>
        <div class="content-right">
          <div class="pay" :class="payClass">{{payDesc}}</div>
        </div>
      </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  props: {
    foods: {
      type: Array,
      default() {
        return [
          {
          price: 20,
          count: 1
          }
          ];
      }
    },
    deliveryPrice: {
      type: Number,
      default: 0
    },
    minPrice: {
      type: Number,
      default: 0
    }
  },
    computed: {
      totalPrice() {
      let total = 0;
      this.foods.forEach((food) => {
        total += food.price * food.count;
      });
      return total;
    },
    totalCount() {
      let count = 0;
      this.foods.forEach((food) => {
        count += food.count;
      });
      return count;
    },
    payDesc() {
      let minPrice = 20
    if (this.totalPrice === 0) {
      return `¥${minPrice}元起送`;
    } else if (this.totalPrice < minPrice) {
      let diff = minPrice - this.totalPrice;
      console.log(diff)
      return `还差¥${diff}元起送`;
    } else {
        return `去结算`;
      }
    },
    payClass() {
      let minPrice = 20
      if (this.totalPrice < minPrice) {
        return 'not-enough';
      } else {
        return 'enough';
      }
    },
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin";
  .shopcart
    position: fixed
    z-index: 50
    left:230px
    bottom: 0
    width: 85%
    height: 48px
    background: #000
    .content
      display: flex
      background: #141d27
      .content-left
        flex: 1
        .logo-wrapper
          vertical-align: top
          display: inline-block
          position: relative
          top: -10px
          width: 56px
          height: 56px
          margin: 0 12px
          padding: 6px
          box-sizing: border-box
          border-radius: 50%
          background: #141d27
          .logocart
            width: 100%
            height: 100%
            border-radius: 50%
            background: #2b343c
            text-align: center
            &.highlight
              background: rgb(0, 160, 220)
            .icon-shopping_cart
              font-size: 24px
              display: inline-block
              line-height: 44px
              color: #80858a
              &.highlight
                color: #ffffff
          .num
            position: absolute
            top: 0
            right: 0
            width: 24px
            height: 16px
            line-height: 16px
            text-align: center
            border-radius: 16px
            font-size: 12px
            font-weight: 700
            background: rgb(240, 20, 20)
            color: #ffffff
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4);
        .price
          display: inline-block
          vertical-align: top
          line-height: 24px
          margin-top: 12px
          box-sizing: border-box
          padding-right: 12px
          border-right:1px solid rgba(255, 255, 255, 0.1)
          color: rgba(255, 255, 255, 0.4)
          font-size: 16px
          font-weight: 700
          &.highlight
            color: #ffffff
        .desc
          display: inline-block
          vertical-align: top
          margin: 12px 0 0 12px
          line-height: 24px
          color: rgba(255, 255, 255, 0.4)
      .content-right
        flex: 0 0 105px
        width: 105px
        .pay
          height: 48px
          line-height: 48px
          text-align: center
          font-size: 12px
          color: rgba(255, 255, 255, 0.4)
          background: #2b333b
          &.not-enough
            background: #2b333b
          &.enough
            background: #00b43c
            color: #ffffff
            font-size: 16px
</style> 