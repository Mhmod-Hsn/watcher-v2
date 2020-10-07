<template>
	<div id="TopBar" class="container d-flex justify-content-between bg-dark py-2">
		<Search />
		<User />
	</div>
</template>

<script>
    import Search from "./Search";
    import User from "./User";
    export default {
        name: "TopBar",
        components: {User, Search},
        data() {
            return {}
        },
        mounted() {

        },
        methods: {}
    }
</script>

<style lang="scss" scoped>

</style>
