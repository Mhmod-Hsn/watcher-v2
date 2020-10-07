<template>
	<div id="app">
		<TopBar/>
		<Navbar />
		
		<transition mode="out-in" name="slide-down">
			<div class="py-3">
				<router-view/>
			</div>
		</transition>
		
		<Footer />
	
		<TrailerModal />
	</div>
</template>

<script>
    import TopBar from "./components/Topbar/TopBar";
    import Navbar from "./components/Navbar/Navbar";
    import Footer from "./layout/Footer";
    import TrailerModal from "./components/video/TrailerModal";
    export default {
        components: {TrailerModal, Footer, Navbar, TopBar},
        data: () => ({}),
        methods: {},
	    
    };
</script>

<style lang="scss">
	@import "assets/css/styles";
	
	.w-full {
		width: 100%;
	}
</style>
