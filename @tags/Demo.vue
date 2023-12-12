<script setup lang="ts">
const props = defineProps<{
    title?:String
}>();

</script>
<template>
    <div class="demo">
        <p v-if="props.title" class="title">{{ props.title }}</p>
        <div class="demo-body">
            <slot></slot>
        </div>
    </div>
</template>
<style scoped>
.title {
    border-radius: 8px 8px 0px 0px;
    padding: 0.5rem 0.8rem;
    font-size: 1rem;
    font-weight: bolder;
    background-color: var(--background-color1);
    margin: 0;
}
.demo-body{
    padding: 1rem;
}
.demo{
    border-radius: 8px;
    border: 0.1rem solid var(--border-color);
    box-shadow: 0 3px 12px rgba(116, 116, 116, 0.281), 0 1px 4px rgba(116, 116, 116, 0.267);
    margin-bottom: 1.2em;
}
</style>
