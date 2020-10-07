function getTitle (vm) {
    const { title } = vm.$options
    if (title) {
        return typeof title === 'function'
            ? title.call(vm)
            : title
    }
}
export default {
    computed:{
        appName() {
            return process.env.VUE_APP_NAME
        },
    },
    created () {
        const title = getTitle(this)
        if (title) {
            document.title = `${this.appName} - ${title}`
        }
    }
}
