<template>
<<<<<<< HEAD
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

=======
    <main class="page load-intro">
        <h2>Courses</h2>
        <ol>
            <li class="margin-bottom-xxs" v-for="item in items" v-bind:key="item">
                <nuxt-link :to="item.linkPath">{{ item.linkName }}</nuxt-link>
            </li>
        </ol>

        <h2>Components</h2>
        <ol>
            <li class="margin-bottom-xxs" v-for="item in components" v-bind:key="item">
                <nuxt-link :to="item.linkPath">{{ item.linkName }}</nuxt-link>
            </li>
        </ol>

        <h2>Experimentals</h2>
        <ol>
            <li class="margin-bottom-xxs" v-for="item in experimentals" v-bind:key="item">
                <nuxt-link :to="item.linkPath">{{ item.linkName }}</nuxt-link>
            </li>
        </ol>
    </main>
>>>>>>> 8bbc5c0a27cb2e333507a990a293f96ec60a2d81
</template>

<script>      
    // Define each line what it does
    export default {
<<<<<<< HEAD
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
=======
        components: {},
        data() {
            return {
                items: [
                    { linkName: '1. Creative Maths', linkPath: '/maths' },
                    { linkName: '2. Creative Motions', linkPath: '/motions' },
                ],
                components: [
                    { linkName: '1. slideshow', linkPath: '/slideshows' },
                ],
                experimentals: [
                    { linkName: '1. Random Experimental', linkPath: '/experimentals' },
                ],
            }
>>>>>>> 8bbc5c0a27cb2e333507a990a293f96ec60a2d81
        },
    }
</script>

<style lang="scss" scoped>
<<<<<<< HEAD

=======
    main {
        padding: 50px;
    }
>>>>>>> 8bbc5c0a27cb2e333507a990a293f96ec60a2d81

</style>
