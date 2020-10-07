<template>
	<div id="search">
		<b-input-group>
			<template v-slot:prepend>
				<i class="fas fa-search text-primary mx-2"></i>
			</template>
			<b-form-input
				v-model="text"
				placeholder="Enter search word"
				autocomplete="off"
			></b-form-input>
		</b-input-group>
	</div>
</template>

<script>
    export default {
        name: "Search",
        data() {
            return {
                text: ''
            }
        },
        mounted() {

        },
        methods: {}
    }
</script>

<style lang="scss">
#search{
	.input-group{
		align-items: center;
	}
	.form-control:focus{
		box-shadow: 0 0 0 0.1rem rgb(132 210 249 / 0.25)
	}
	input{
		
		background: transparent;
		border: 0;
		color: var(--secondary);
	}
	
}
</style>
