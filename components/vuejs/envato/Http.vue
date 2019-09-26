<script>
import axios from 'axios';
export default {
    props: {
        url: {
            type: String,
            default: ''
        },
    },
    data() {
        return {
            response: {} // empty object
        };
    },
    // Apply the request as soon possible  
    created() {
        // Make a request from url then make a response and assign data to property response
        axios.get(this.url).then(res => this.response = res.data);
    },
    render() {
        // Return a scopedSlot default Vnode with a agrument object (accept data, methods etc)
        return this.$scopedSlots.default({
            data: this.response
        });
    }
}
</script>