// When applying vuex, we don't want to set the component's data based on the request reponse, 
// instead update the states and grab the data we need in a computed property from the server side

export const state = () => ({
    posts: []
})

export const mutations = {
    frontPagePosts (state, posts) {
        state.posts = posts
    }
}

