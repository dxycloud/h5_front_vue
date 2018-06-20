<template>

  <body>
    <h2 class="clearfix title">
      <div class="l">
        <span class="sresel">筛选</span>
        <select class="sresel typeSel" v-model="filter" v-on:change="changesreid">
          <option>全部</option>
          <option v-for="tag in all_tags" :key="tag">
            {{tag}}
          </option>
        </select>
      </div>
      <div class="r">
        <span class="sortsel">排序</span>
        <select class="sortsel resortSel" v-model="sort_option" v-on:change="changesortid">
          <option>推荐排序</option>
          <option>用户数最多</option>
        </select>
      </div>
    </h2>
    <p class="tip">据大数据统计，同时申请4家，下款成功率接近99%</p>

    <ul class="loanlist" v-for="shop in shops" :key="shop.name">
      <li class="clearfix">
        <a :href="shop.url">
          <img :src="shop.logo_url" class="loan l">
          <div class="l loanbox">
            <h3>{{shop.name}}
              <em class="label"> {{ shop.tags[0] }} </em>
            </h3>
            <p class="msgp"> {{ shop.describe }}
              <img :src="listback_png" class="r listback">
            </p>
            <p class="clearfix nump">
              <span class="l">
                <b></b>
              </span>
              <span class="r">
                <b> {{ shop.user_n }} </b>人</span>
            </p>
          </div>
          <i class="icon icon1"> {{shop.feature}} </i>
        </a>
      </li>
    </ul>
  </body>
</template>

<script>
const axios = require("axios");

export default {
  name: "App",
  data() {
    return {
      filter: "全部",
      sort_option: "推荐排序",
      listback_png: require("./assets/listback.png"), // 正确的图片使用方式
      shops: [],
      default_sorted_shops: [],
      all_tags: []
    };
  },
  created: async function(event) {
    try {
      let res = await axios.get(
        "https://serious-playing.com.cn:3000/api/1.0/shop/findAll"
      );
      if (res.data.code == 0) {
        this.$data.shops = res.data.data;
        this.$data.default_sorted_shops = res.data.data;
        // 获取所有的tag
        let all_tags = [];
        for (let i = 0; i < this.$data.shops.length; i++) {
          for (let j = 0; j < this.$data.shops[i].tags.length; j++) {
            all_tags.push(this.$data.shops[i].tags[j]);
          }
        }
        this.$data.all_tags = all_tags.filter(function(item, pos) {
          return all_tags.indexOf(item) == pos;
        });
      } else {
        alert("商户获取失败");
      }
    } catch (err) {
      alert("网络错误" + err.message);
    }
  },
  methods: {
    // 过滤
    changesreid: function() {
      console.log(this.$data.filter);
      if (this.$data.filter == "全部") {
        this.$data.shops = this.$data.default_sorted_shops;
      } else {
        let tmp_shops = [];
        for (let i = 0; i < this.$data.default_sorted_shops.length; i++) {
          if (
            this.$data.default_sorted_shops[i].tags.includes(this.$data.filter)
          ) {
            tmp_shops.push(this.$data.default_sorted_shops[i]);
          }
        }

        this.$data.shops = tmp_shops;
      }
    },
    changesortid: async function() {
      if (this.$data.sort_option == "用户数最多") {
        this.$data.shops.sort(function(shopa, shopb) {
          return shopb.user_n - shopa.user_n;
        });
      } else if (this.$data.sort_option == "推荐排序") {
        if (this.$data.default_sorted_shops) {
          this.$data.shops = this.$data.default_sorted_shops;
        } else {
          let res = await axios.get(
            "https://serious-playing.com.cn:3000/api/1.0/shop/findAll"
          );
          if (res.data.code == 0) {
            this.$data.shops = res.data.data;
            this.$data.default_sorted_shops = res.data.data;
          }
        }
      }
    }
  }
};
</script>

<style>
</style>
