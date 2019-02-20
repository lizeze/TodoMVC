<template>
  <div>
    <div class="index-warpper">
      <ol class="index ">
        <li class="item" v-for="(item,index) in items">
          {{index+1}}
        </li>
      </ol>

    </div>
    <div class="content-warpper">
      <div class="title">
        第{{index}}题
      </div>
      <div class="content">
        {{questions[0]}}
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: "index",
    data() {
      return {
        items: [1, 2, 3, 4, 5, 6],
        questions:['javascript和css样式等修改后，部署新版本，但是因为客户浏览器缓存，导致客户端还在使用老版本javascript和css，如何解决该问题？'],
         index:1
      }
    }
  }
</script>

<style scoped>
  .index-warpper {
    display: block;
    margin: 4.266px 0 0;
    margin: .26667rem 0 0;
    background: #fff;
    border-radius: 4px;
    -webkit-box-shadow: 0 0 5px 1px rgba(26, 26, 26, .1);
    box-shadow: 0 0 5px 1px rgba(26, 26, 26, .1);
    position: relative;
    padding-bottom: .1px;
    max-width: 100%;
    display: flex;
  }

  .index {
    display: flex;
  }

  .index .item {
    list-style: none;
    padding: 3px 10px;
    border-radius: 50%;
    border: 1px solid #dcdfe6;
    background: gray;
    margin-left: 8px;
  }

  .content-warpper {
    top: 30px;
    display: block;
    background: #fff;
    border-radius: 4px;
    -webkit-box-shadow: 0 0 5px 1px rgba(26, 26, 26, .1);
    box-shadow: 0 0 5px 1px rgba(26, 26, 26, .1);
    position: relative;
    max-width: 100%;
    display: flex;
    margin: 4.266px 0 0;
    min-height: 200px;

  }

  .content-warpper .title {
     width: 100%;
    margin-left: 10px;
    padding: 10px;
    text-align: left;
    border-bottom: 1px solid #dcdfe6;
     height: 30px;
  }
</style>
