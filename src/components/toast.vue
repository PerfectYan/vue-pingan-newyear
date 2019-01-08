<template>
    <div class="toast">{{ content }}</div>
</template>

<script>
    export default {
        name: 'Toast',
        props: {
           content: '',
        },
        data(){
          return {
            
          }
        }        
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
   .toast{
     position: fixed;
     left: 50%;
     top:40%;
     z-index: 100;
     width: 3rem;
     font-size: 0.28rem;
     padding: 0.2rem 0;
     margin-left: -1.5rem;
     color: #fff;
     border-radius: 0.1rem;
     background: rgba(0,0,0,0.6);

   }
</style>
