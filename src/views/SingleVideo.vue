<template>
	<LoadingCard v-if="!item"/>
	
	<div
		:style="{ backgroundImage: `linear-gradient(
									  -180deg,
									  rgba(0, 0, 0, 0) 0%,
									  rgba(36 ,36, 36, 1) 50%
									),
									url(${item.main_image.url})`}"
		
		style="background-size: contain!important;background-position: top center!important;"
		class="position-relative bg-image"
		v-else
	>
	
		<div
			class="container py-lg-5 py-md-3 py-2"
			id="single-video"
		>
			
			<div class="row">
				<div class="col-md-4 col-sm-6">
					<b-aspect
						:style="{ backgroundImage: `url(${item.poster.formats.medium.url})` }"
						aspect="2:3"
						class="position-relative br-10 bg-image poster shadow border border-dark-light"
						tag="div"
					>
					</b-aspect>
				</div>
				<div class="col-md-8 col-sm-6">
					<div class="card bg-dark-light br-10 h-100">
						<div class="card-body d-flex  flex-column">
							<div class="d-flex justify-content-between  h5 mb-3 ">
								<div class="d-flex justify-content-between">
									<b-badge pill variant="warning">
										<i class="far fa-star mr-2"></i>
										{{item.rate}}
									</b-badge>
									
									<b-badge class="ml-2" pill variant="primary">
										{{item.release_year}}
									</b-badge>
									
									<b-badge class="ml-2" pill variant="secondary">
										{{item.category.name}}
									</b-badge>
									
									<b-badge class="ml-2" pill variant="success">
										<i class="far fa-eye"></i>
										{{item.watch_count}}
									</b-badge>
								</div>
								
								<b-badge pill v-if="item.adult" variant="danger">
									<i class="far fa-exclamation-triangle"></i>
									+18
								</b-badge>
							
							</div>
							
							<h2 class="name">{{item.name}}</h2>
							
							<div class="row">
								<div class="col-6">
									Tags:
									<div class="tags">
										<b-badge class="mb-1 mr-2" pill
										         v-for="tag in item.tags"
										         :key="tag.id"
										         variant="secondary">
											{{tag.name}}
										</b-badge>
									</div>
								</div>
								<div class="col-6">
									Actors:
									<div class="tags">
										<b-badge
											class="mb-1 mr-2" pill
									        v-for="actor in item.actors"
											:key="actor.id"
											variant="secondary"
										>
											{{actor.name}}
										</b-badge>
									</div>
								</div>
							</div>
							
							<p class="story">{{item.story}}</p>
							
							<b-button
								@click="watchTrailer"
								block
								variant="dark"
								class="mt-auto"
							>Trailer
							</b-button>
						
						</div>
					</div>
				</div>
			</div>
			
			<div class="watch mt-4 shadow">
				<plyr v-if="(item.adult && (item.skipper || !lock)) || !item.adult ">
					<video @timeupdate="watchTime" crossorigin="anonymous" id="player">
						<source :src="base_url+item.media.url" :type="item.media.mime"/>
						
						
						<!-- Captions are optional -->
						<track
							:default="index === 0"
							:key="sub.id"
							:label="sub.language"
							:src="base_url+sub.file.url"
							:srclang="sub.language_code"
							kind="captions"
							v-for="(sub,index) in item.subtitles"
						/>
					
					</video>
				</plyr>
				<div
					class="p-3"
					v-else>
					this video is adult and has no skipper
					
					
					<b-button
						@click="lock=false"
						variant="danger"
						class="mt-auto ml-3"
					>
						<i class="far fa-exclamation-triangle"></i>
						Unlock anyway
					</b-button>
				</div>
			</div>
			
			<div class="card mt-5 bg-dark-light">
				<div class="card-body">
					<p>This section for skipper test purposes</p>
					
					<code><pre>{{item.skipper}}</pre></code>
				
				</div>
			</div>
		</div>
	</div>

</template>

<script>
    import Plyr from 'vue-plyr/dist/vue-plyr'
    import LoadingCard from "../components/LoadingCard";

    export default {
        name: "SingleVideo",
        components: {Plyr, LoadingCard},
        data() {
            return {
                lock: true,
                
                item: null,
                subtitleReady: null,
                subtitle: null,
                skipContent: null
            }
        },
        mounted() {
            this.getVideo();
        },
        computed: {
            base_url() {
                return process.env.VUE_APP_BASE_URL
            },
        },
        methods: {
            getVideo() {
                this.$store.dispatch("video/getVideo", this.$route.params.id)
                    .then(response => {
                        this.item = response.data;
                        this.skipContent = this.parseTimes(response.data.skipper);
                        // document.getElementsByTagName('title')[0].innerText = `${this.appName} | ${this.item.name}`
                        this.addWatchCount();
                        
                        document.title = `${this.appName} - ${this.item.name}`
                    })
            },
            watchTrailer() {
                this.$store.commit('video/trailer', this.item.trailer)
                this.$bvModal.show('trailerModal')
            },
            watchTime() {
                let player = document.getElementById('player');

                /* if (this.skipContent[0].start < player.currentTime && player.currentTime < this.skipContent[0].end){
					 player.currentTime = this.skipContent[0].end;
				  
					 console.log(`skipped from ${this.skipContent[0].start} to ${this.skipContent[0].end}`)
					 this.skipContent.splice(0,1);
					 console.log(this.skipContent)
				  }*/

                if (this.skipContent){
	                this.skipContent.forEach(scene => {
	                    if (scene.start < player.currentTime && player.currentTime < scene.end) {
	                        player.currentTime = scene.end;
	
	                        console.log(`skipped from ${scene.start} to ${scene.end}`)
	                    }
	                })
                }

            },
            parseTimes(json) {
                if (json) {
                    let final = []
                    json.forEach(item => {
                        if (isNaN(item.start)) {
                            let i = item;

                            let temp = {
                                start: item.start.split(':'),
                                end: item.end.split(':')
                            };
                            
                            console.log(temp)

                            i.start = (Number(temp.start[0]) * 60 * 60) + (Number(temp.start[1]) * 60) + (Number(temp.start[2]))
                            i.end = (Number(temp.end[0]) * 60 * 60) + (Number(temp.end[1]) * 60) + (Number(temp.end[2]))

                            final.push(i)
                        } else {
                            final.push(item)
                        }
                    });
                    return final
                }
            },
            addWatchCount(){

                this.$store.dispatch("video/update", {id: this.$route.params.id, data: {'watch_count': this.item.watch_count+1}})
                    .then(response => {
                        this.item = response.data;
                    })
            }
        }
    }
</script>

<style lang="scss" scoped>
	.poster {
		max-height: 400px;
	}

</style>
