<!-- 篇文章 -->
<script setup lang="ts">
import '../css/github-markdown.css'
import '../css/jjaw-prismjs.css'
import '../css/md-enhance-hint.css'
import '../css/md-enhance-codetabs.css'
import { dateFormat } from '../composables/Time';
import { useCommitMaxPerson ,useUpdatedTime} from '../composables/ArticleInformations';

//-------------------------------------------------------------------------------
//文章信息
const tiemF = (tiem: number) => dateFormat(new Date(tiem), (Y, M, D, h, m) => `${Y}-${M}-${D} ${h}:${m}`);
const commitMaxPerson = useCommitMaxPerson();
const updatedTime = useUpdatedTime();

</script>
<template>
    <div class="article">
        <!-- 文章信息 -->
        <div class="article-title">
            <!-- 最多提交者和发布日期 -->
            <div>
                <span class="article-author" v-if="commitMaxPerson">{{ commitMaxPerson.name }}</span>
                <span v-if="commitMaxPerson" class="article-email">{{ commitMaxPerson.email }}</span>
            </div>
            <!-- 最后更新时间 -->
            <div>
                <span v-if="updatedTime" class="article-updatedTime">最后更新 {{ tiemF(updatedTime) }}</span>
            </div>
        </div>
        <!-- 文章 -->
        <article>
            <Content class="markdown-body" />
        </article>
    </div>
</template>
<style scoped>
.article-email,
.article-updatedTime{
  font-size: 0.9rem;
}
.article{
  /* background-color: var(--background-color); */
  overflow: hidden;
  border: 0.1rem solid var(--border-color);
  border-radius: 0.5rem;
}
.article-title {
  height: 3rem;
  background-color: var(--background-color1);
  padding-left: 1rem;
  padding-right: 1rem;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
.article-author {
  font-weight: bolder;
  padding-right: 0.5rem;
}
</style>

<style>
.markdown-body {
  margin: 1.5rem;
  width: calc(100% - 3rem);
  box-sizing: border-box;
}

/* .markdown-body a.header-anchor {
  display: inline-block;
  width: 0;
  position: relative;
  top: calc(0px - var(--nav-height) - 1rem);
  opacity: 0;
  z-index: -99;
  height: 1em;
} */

</style>