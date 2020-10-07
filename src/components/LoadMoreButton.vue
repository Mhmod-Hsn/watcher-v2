<template>
	<div class="my-3">
		<b-btn @click="$emit('click')" variant="primary" class="load-more-btn">
			<b-spinner
				v-if="loading"
				variant="light"
				style="width: 25px;height:25px"
				label="Loading">
			</b-spinner>
			
			<span v-else>
				<i class="fas fa-arrow-down"></i>
				Load More
			</span>
			
			
		</b-btn>
	</div>
</template>

<script>
    export default {
        name: "LoadMoreButton",
	    props:{
            loading:{
                required: false,
	            default: false
            }
	    },
        data() {
            return {}
        },
        mounted() {

        },
        methods: {
        }
    }
</script>

<style lang="scss" scoped>
.load-more-btn{
}
</style>
