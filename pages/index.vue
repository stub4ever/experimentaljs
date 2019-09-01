<template>
    <section class="section">
        <div class="section__inner">
            <p class="margin-bottom-xl">Home page</p>

            <div class="post margin-bottom-md" v-for="post in posts" :key="post.id">
                <div class="text-component">
                    <h4>{{ post.title.rendered }}</h4>
                    <div class="post-content" v-html="post.excerpt.rendered"></div>
                    <nuxt-link 
                        :to="{
                            name: 'blog-slug',
                            params: { slug: post.slug, id: post.id }
                        }"
                    > Read more</nuxt-link>
                </div>
            </div>
        </div>
    </section>

</template>

<script>      
    // Define each line what it does
    export default {
        mounted () {
            console.log(this.posts)
        },

        async asyncData ({$axios}) {
            // let posts = await axios.get('https://..')
            // Use await key, this will wait untill this promise is complete then continue
            let posts = await $axios.$get('posts')
            
            // Posts is return from a reference state of our store 
            // posts is a object that will be merged with this.data object => asyncData
            return {posts}
        },
    }
</script>

<style lang="scss" scoped>


</style>
