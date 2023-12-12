<!-- 首页板块 -->
<script setup>
import backgroundImage from "../imgs/home-background.jpg"

</script>
<template>
    <div class="page-background">
        <div class="background-image" :style="{ 'background-image': `url(${backgroundImage})` }">
            <div class="page">
                <div class="mengmain">
                    <div class="title">
                        <h1>神奇小破站</h1>
                        <h2>分享有意思的东西</h2>
                        <div class="p">
                            <div class="shwoWorld">
                                <div class="line"></div>
                            </div>
                        </div>
                    </div>
                    <div class="editing">
                        <img class="editingtop" src="../imgs/home-edit.png" />
                        <div class="editinging">
                            <p># 神奇小破站</p>
                            <p>## 分享有意思的东西</p>
                            <p>
                            <div class="shwoWorld">
                                <div class="line"></div>
                            </div>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.editingtop {
    background-color: transparent;
    width: 100%;
}

.title {
    padding-left: 1rem;
    padding-right: 1rem;
    padding-bottom: 1rem;
    color: rgb(255 206 0);
    text-shadow: 0rem 0rem 0.2rem #000000;
}

html.dark .title {
    color: rgb(255 206 0);
}

.title,
.editing {
    margin-bottom: 3rem;
    margin-left: 1rem;
    margin-right: 1rem;
}

.title>h1 {
    font-size: 4rem;
}

.title>h2 {
    font-size: 3rem;
}

.title>.p {
    font-size: 2rem;
}

@media(max-width: 470px) {
    .title>h1 {
        font-size: 3.5rem;
    }

    .title>h2 {
        font-size: 2.5rem;
    }

    .title>.p {
        font-size: 1.5rem;
    }
}

.editinging>p {
    margin: 0;
}

.editinging {
    font-size: 1.2rem;
    padding-left: 0.5rem;
    border-top: 0.1rem solid var(--border-color);
}

.editing {
    width: 20rem;
    border: 0.1rem solid var(--border-color);
    border-radius: 1rem;
    overflow: hidden;
    height: 13rem;
    background-color: var(--background-color);
}

@media(max-width: 330px) {
    .editinging {
        font-size: 1rem;
    }

    .editing {
        width: 18rem;
    }

    .title>h1 {
        font-size: 3rem;
    }

    .title>h2 {
        font-size: 2rem;
    }

    .title>.p {
        font-size: 1rem;
    }
}

.mengmain {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
}

.page-background {
    background: linear-gradient(356deg, #242614 8%, #286254 25%, #C19B70 44%, #507764 62%, #133A43 94%);
    background-attachment: fixed;
    background-position: center center;
    background-size: cover;
}

.page {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: nowrap;
    background-color: rgba(255, 255, 255, 0.05);
}

html.dark .page {
    background-color: rgba(0, 0, 0, 0.4);
}


.background-image {
    /* 背景图片 */
    background-attachment: fixed;
    background-position: center center;
    background-size: cover;
}

.line {
    display: inline-block;
    height: 1em;
    border-right: 0.1rem solid black;
    margin-left: 0.1rem;
}

.shwoWorld::before {
    animation: 5s linear 0s infinite running shwoWorld;
    content: "";
}

@keyframes shwoWorld {
    0% {
        content: "";
    }

    2% {
        content: "j";
    }

    4% {
        content: "ji";
    }

    6% {
        content: "jin"
    }

    8% {
        content: "jin"
    }

    10% {
        content: "jint"
    }

    12% {
        content: "jinti"
    }

    14% {
        content: "jintia"
    }

    16% {
        content: "jintian"
    }

    18% {
        content: "今天x"
    }

    20% {
        content: "今天xi"
    }

    22% {
        content: "今天xie"
    }

    24% {
        content: "今天写"
    }

    28% {
        content: "今天写d"
    }

    30% {
        content: "今天写di"
    }

    32% {
        content: "今天写dia"
    }

    34% {
        content: "今天写dian"
    }

    36% {
        content: "今天写点s"
    }

    38% {
        content: "今天写点sh"
    }

    40% {
        content: "今天写点she"
    }

    42% {
        content: "今天写点shen"
    }

    44% {
        content: "今天写点shenm"
    }

    46% {
        content: "今天写点shenme"
    }

    48% {
        content: "今天写点什么"
    }

    50% {
        content: "今天写点什么h"
    }

    52% {
        content: "今天写点什么ha"
    }

    54% {
        content: "今天写点什么hao"
    }

    56% {
        content: "今天写点什么好"
    }

    58% {
        content: "今天写点什么好n"
    }

    60% {
        content: "今天写点什么好ne"
    }

    62% {
        content: "今天写点什么好呢"
    }

    64% {
        content: "今天写点什么好呢?"
    }

    76% {
        content: "今天写点什么好呢"
    }

    78% {
        content: "今天写点什么好"
    }

    79% {
        content: "今天写点什么"
    }

    80% {
        content: "今天写点什"
    }

    82% {
        content: "今天写点"
    }

    84% {
        content: "今天写"
    }

    86% {
        content: "今天"
    }

    88% {
        content: "今"
    }

    90% {
        content: ""
    }
}
</style>