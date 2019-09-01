<template>
    <div>
        <div class="container">
            <div class="post">
                <article class="text-component">
                    <h2 class="mb-8">{{ post.title.rendered }}</h2>
                    <div v-html="post.content.rendered"></div>
                </article>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                id: this.$route.params.slug
            }
        },
        async asyncData ({params, $axios, payload}) {
            let post
            // if the data is exist then post is our payload
            if (payload) {
                post = payload
                console.log('getting post', post.slug, 'from payload')
            } else {
                post = await $axios.$get(`posts/${params.id}`)
                console.log('hitting the API for the post', post.slug)
            }
            return {post}
        }
    }
</script>