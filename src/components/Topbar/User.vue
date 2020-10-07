<template>
	<div id="User">
		<b-dropdown variant="link" toggle-class="text-decoration-none" right >
			<template v-slot:button-content>
				<span class="text-secondary font-weight-bold">
					M. Hassan
				</span>
				<span class="sr-only">Search</span>
			</template>
			<b-dropdown-item href="#">Action</b-dropdown-item>
			<b-dropdown-item href="#">Something else here...</b-dropdown-item>
		</b-dropdown>
	</div>
</template>

<script>
    export default {
        name: "User",
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
