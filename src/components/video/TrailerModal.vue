<template>
	<b-modal id="trailerModal" size="xl" centered title="BootstrapVue">
		<b-embed
			type="iframe"
			aspect="16by9"
			:src="trailerURL"
			allowfullscreen
		></b-embed>
	</b-modal>
</template>

<script>
    export default {
        name: "TrailerModal",
        
	    data() {
            return {}
        },
        mounted() {
			console.log(this.trailerURL)
        },
	    computed:{
            trailerURL(){
                console.log(this.$store.state.video.trailer)
                return `https://www.youtube.com/embed/${this.$store.state.video.trailer}?autoplay=1`
            }
	    },
        methods: {}
    }
</script>

<style lang="scss" >
#trailerModal{
	
	header,footer{
		display: none;
	}
	.modal-body{
		padding: 0;
	}
	
	.modal-content{
		background-color: transparent;
	}
	
	iframe{
		/*width: -webkit-fill-available;*/
		
		/*height: 80vh;*/
		/*max-height: 100%;*/
		/*border:  0;*/
	}
}
</style>
