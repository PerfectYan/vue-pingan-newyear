<template>
    <div id="app">
        <keep-alive>
            <router-view/>
        </keep-alive>
    </div>
</template>

<style lang="scss">
    #app {
        width: 100%;
        height: 100%;
        font-family: "Microsoft YaHei", Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        background: linear-gradient(to bottom, #832621, #832621);
    }
</style>
