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

    <div class="answer-warpper">
 <div class="title"><h1>答</h1></div>
      <p> 可以添加文件的版本号信息，每次发布时更新版本号信息，用户在访问时能重新加载文件
      </p>
      <p> 在测试阶段如果发布频繁的话也可以在客户端浏览器设置退出时清除缓存
      </p>
      <p><el-rate show-text v-model="score"></el-rate></p>
    </div>

  </div>
</template>

<script>
  export default {
    name: "first",
    data() {
      return {
        items: [1, 2, 3, 4, 5, 6],
        questions: ['javascript和css样式等修改后，部署新版本，但是因为客户浏览器缓存，导致客户端还在使用老版本javascript和css，如何解决该问题？'],
        index: 1,
        score:0
      }
    },
    methods:{


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
 .index .item a {
   color: inherit;
   text-decoration: none;

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
    margin: 4.266px 0 0;
    min-height: 200px;

  }

  .content-warpper .title {
    width: 90%;
    margin-left: 10px;
    padding: 10px;
    text-align: left;
    border-bottom: 1px solid #dcdfe6;
    height: 30px;
  }

  .content-warpper .content {
    text-align: left;
    font-weight: 600;
    height: 40px;
    margin-left: 10px;
    padding: 10px;
    width: 90%;
    line-height: 40px;
    border-bottom: 1px solid #dcdfe6;
  }

  .answer-warpper {
    display: block;
    background: #fff;
    border-radius: 4px;
    -webkit-box-shadow: 0 0 5px 1px rgba(26, 26, 26, .1);
    box-shadow: 0 0 5px 1px rgba(26, 26, 26, .1);
    position: relative;
    max-width: 100%;
    margin: 4.266px 0 0;
    min-height: 200px;
    text-align: left;

  }

  .answer-warpper .title{
     margin-left: 10px;
  }
  .answer-warpper p {
    margin-left: 10px;
    font-weight: 500;
  }

</style>
