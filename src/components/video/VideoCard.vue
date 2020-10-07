<template>
	<div class="video-item p-2">
		<div class="card br-10 border-0 overflow-hidden bg-image"
		     :style="{ backgroundImage: `url(${item.poster.formats.medium.url})` }"
		>
			<div class="card-body p-0" >
				<b-aspect
					tag="div"
					class="position-relative br-10 "
					aspect="2:3"
				>
					<div class="overlay p-2 h-100 d-flex flex-column justify-content-between text-white">
						<div class="top d-flex justify-content-between">
							<b-badge
								pill
								variant="primary"
							>
								<i class="fas fa-star mr-2"></i>
								{{item.rate}}
							</b-badge>
							
							<b-badge
								pill
								variant="light"
							>
								{{item.release_year}}
							</b-badge>
						</div>
						<div class="bottom mb-3">
							<router-link
								:to="{name: 'SingleVideo',params:{id: item.id}}"
								class="h3 name text-capitalize "
							>
								{{item.name}}
							</router-link>
							
							<p class="story my-3">{{item.story.slice(0,100)}}</p>
							
							<div class="d-flex">
								<div class="flex-fill pr-2">
									<b-button
										variant="dark"
										class="font-weight-bold"
										block
										@click="watchTrailer"
									>
										<i class="far fa-play-circle h5 mb-0 mr-2"></i>
										
										Trailer</b-button>
								</div>
							</div>
						</div>
					</div>
				</b-aspect>
			</div>
		</div>
	</div>
</template>

<script>
    export default {
        name: "VideoCard",
	    props:{
            item:{
                required: true
            }
	    },
        data() {
            return {}
        },
        mounted() {

        },
        methods: {
            goToVideo(){
              console.log(`go to video ${this.item.name}`)
	            
	            this.$router.push({name: 'SingleVideo',params:{id: this.item.id}})
            },
            watchTrailer(){
                let link = `https://www.youtube.com/embed/${this.item.trailer}?autoplay=1`;
				this.$store.commit('video/trailer',this.item.trailer)
                
                this.$bvModal.show('trailerModal')

                console.log(`watchTrailer ${link}`)
            }
        }
    }
</script>

<style lang="scss" scoped>
.video-item{
	.card{
		*{
			transition: all 0.3s ease-in;
		}
		
		
		.bottom{
			left: 10px;
			right: 10px;
			position: absolute;
			opacity: 0;
			bottom: -50%;
		}
		
		&:hover {
			box-shadow: 0 0 7px #333;
			
			.overlay {
				background-image: linear-gradient(
						-180deg,
						rgba(0, 0, 0, 0) 0%,
						rgba(0, 0, 0, 0.8) 100%
				);
			}
			
			.bottom {
				opacity: 1;
				bottom: 0;
			}
		}
	}
}
</style>
