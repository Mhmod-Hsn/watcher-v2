<template>
	<div class=" border-top border-bottom border-l-gray shadow">
		<div id="navbar" class="container d-flex justify-content-between bg-dark">
			<router-link
				class="link mr-5 flex-fill d-flex flex-column align-items-center text-center text-uppercase py-2"
				:to="{name: 'Home'}"
			>
				<img src="../../assets/logo.svg" width="65px" class="h5" alt="">
			</router-link>
			
			<router-link
				v-for="(link,index) in links"
				:key="index"
				class="link flex-fill d-flex flex-column align-items-center text-center text-uppercase py-3"
				:to="{name: link.routerName}"
			>


				<i
					class="link-icon d-inline-block  mb-2 h4"
					:class="link.icon" style="--fa-primary-color: var(--primary); --fa-secondary-color: var(--secondary);"></i>
				<span class="link-text d-inline-block font-weight-bold">{{link.text}}</span>
			</router-link>
		</div>
	</div>
</template>

<script>
    export default {
        name: "Navbar",
        data() {
            return {
                links:[
                    {
                        icon: 'fad fa-popcorn',
                        routerName: 'Recommended',
	                    text: 'Recommended'
                    },
                    {
                        icon: 'fad fa-bullseye-arrow',
	                    routerName: 'TopWatched',
	                    text: 'Top watched'
                    },
                   /* {
                        icon: 'fad fa-calendar-plus',
	                    routerName: 'Test',
	                    text: 'Newly added'
                    },
                    {
                        icon: 'fad fa-eye',
	                    routerName: 'Test',
	                    text: 'Discover'
                    },*/
                    {
                        icon: 'fad fa-tv-retro',
	                    routerName: 'OldDays',
	                    text: 'Old days'
                    },
                ]
            }
        },
        mounted() {

        },
        methods: {}
    }
</script>

<style lang="scss" scoped>
.link{
	border-top: 3px solid transparent;
	
	.link-text{
		color: rgba(255,255,255,0.5);
	}
	
	&:hover{
		.link-text {
			color: #fff;
		}		
	}
	
	
	&.router-link-exact-active.router-link-active{
		border-color: var(--primary);
		background: #1a1f23;
		
		.link-text{
			color: var(--primary);
			
		}
	}
}
</style>
