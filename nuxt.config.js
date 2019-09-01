import purgecss from '@fullhuman/postcss-purgecss'
import postcssCalc from 'postcss-calc'
import axios from 'axios'

export default {
    mode: 'universal',
    env: {
        BASE_URL: process.env.BASE_URL || 'http://localhost:3000'
    },
    /*
    ** Headers of the page
    */
    head: {
        title: process.env.npm_package_name || '',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },
    /*
    ** Customize the progress-bar color
    */
    loading: { color: '#fff' },
    /*
    ** Global CSS
    */
    css: ['~assets/scss/main.scss'],
    
    styleResources: {
        // Variables settings
        scss: ['~assets/scss/_vendors/codyhouse/base/_breakpoints.scss'] 
    },
    /*
    ** Plugins to load before mounting the App
    */
    plugins: [
        { src: '~/plugins/polyfill', ssr: false }, // Set server-side-rendering (ssr) false for applying 'window'
        "~/plugins/Util",
        // Wordpress
        "~/plugins/wp/config",
    ],
    /*
    ** Nuxt.js dev-modules
    */
    devModules: [
    ],
    /*
    ** Nuxt.js modules
    */
    modules: [
         // Doc: https://github.com/nuxt-community/axios-module#usage
        '@nuxtjs/axios',
        '@nuxtjs/style-resources',
    ],
    
    /*
    ** Axios module configuration
    See https://github.com/nuxt-community/axios-module#options
    */
    axios: { 
        baseURL:  process.env.API_URL || 'http://tobybuicom:8888/wp-json/wp/v2'
    },


    /*
    ** Generate configuration
    */
    generate: {
        // Create a cache so that the component can use them without making unnecessary AJAX calls 
        // Prevent all calls for each post
        async routes() {
            let response = await axios.get('http://tobybuicom:8888/wp-json/wp/v2/posts')
            return response.data.map((post) => ({
                route: `blog/${post.slug}`, // where the path goes under 
                payload: post // passing the post the component as the payload
            }))
        }
    },
    /*
    ** Build configuration
    */
    build: {
        extractcss:true, // Remove inline css inside the header
        // vendor: ['p5'],
        assetsSubDirectory: 'assets/[filename]',
        postcss: {
            plugins: [
                // purgecss({
                //     content: ['./pages/**/*.vue', './layouts/**/*.vue', './components/**/*.vue'],
                //     whitelist: ['html', 'body'],
                // }),
                postcssCalc(), 
            ],

            preset: {
                features: {
                    customProperties: false
                },
                autoprefixer: {
                    grid: true
                }
            }
        },
        /*
        ** You can extend webpack config here
        */
        extend (config, ctx) {
        }
    }
}
