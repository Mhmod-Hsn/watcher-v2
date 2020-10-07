<template>
	<b-container fluid>
		<div class="Recommended ">
			<div
				v-if="!loadMoreActive && !videos.length">
				<EmptyContent />
			</div>
			<b-skeleton-wrapper
				v-else
				:loading="!videos.length">
				<template v-slot:loading>
					
					<div class="row">
						<div
							:key="index"
							class="col-lg-3 col-md-4 col-sm-6 col-12 mb-3"
							v-for="(item,index) in 4"
						>
							<b-skeleton-img></b-skeleton-img>
						</div>
					</div>
				</template>
				
				<div class="row">
					<div
						:key="index"
						class="col-lg-3 col-md-4 col-sm-6 col-12"
						v-for="(item,index) in videos"
					>
						<VideoCard
							:item="item"
						/>
					</div>
				</div>
				
				<div class="d-flex justify-content-center">
					<LoadMoreButton
						v-if="loadMoreActive"
						@click="page++"
						:loading="loading" />
				</div>
			</b-skeleton-wrapper>
			
		</div>
	</b-container>
</template>

<script>

    import VideoCard from "../components/video/VideoCard";
    import LoadMoreButton from "../components/LoadMoreButton";
    import EmptyContent from "../components/EmptyContent";

    export default {
        name: "Recommended",
        components: {EmptyContent, LoadMoreButton, VideoCard},
        data: () => ({
	        loading: false,
	        loadMoreActive: true,
            videos: [],
            page: 1,
	        limit: 20
        }),
        mounted() {
            this.getVideos();
        },
	    watch:{
          page(){
              this.getVideos()
		    }
	    },
        computed: {},
        methods: {
            getVideos() {
                this.loading = true;
                this.$store
                    .dispatch("video/getVideos", `?_sort=created_at:DESC&recommended=1&_limit=${this.limit}&_start=${(this.page-1)*this.limit}`)
                    .then(response => {

                        // disable load more button
                        if (response.data.length < this.limit){
                            this.loadMoreActive = false;
                        }
                        
                        this.videos.push(...response.data);
                        
                    }).then(()=>{
	                    this.loading = false;
                })
            },
        },
    };
</script>
