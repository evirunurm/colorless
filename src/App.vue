<template>
	<div id="noise" ></div>
	<div ref="backgroundImage" id="background-image" ></div>
	<Header></Header>
	<main>
		<router-view v-slot="{ Component }">
			<transition name="route" mode="out-in">
				<component :is="Component"></component>
			</transition>
		</router-view>
	</main>
	<Footer></Footer>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default {
	components: {
		Header,
		Footer
	},
	methods: {
		backgroundController() {
			let scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop;
			this.$refs.backgroundImage.style.backgroundPosition = `50% ${((scrollTop * 0.25) - 80) * -1 }px`;
			console.log(this.$refs.backgroundImage.style.backgroundPosition)
		}
	},
	mounted() {
		document.addEventListener("scroll", () => {
			this.backgroundController();
		});
	},
}


</script>

<style>
@font-face {
	font-family: Colorless-Regular;
	src: url("assets/fonts/Colorless-Regular.otf") format("opentype");
}

:root {
	--white: #F1F1F1;
	--black: #0f0f0f;
	--general-margin: 3em;
	--global-margin: 3em;
}

* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	font-family: sans-serif;
}

.font-colorless {
	font-family: Colorless-Regular;
}

main {
	margin: 0 var(--general-margin) 0 var(--general-margin);
}

body {
	color: var(--white);
	background-repeat: no-repeat;
	background-position: top;
	background-blend-mode: overlay;
	background-size: cover;
	background-color: var(--black);
}

/* Background logo  image */

#background-image {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-image: url("assets/logo.svg");
	background-repeat: no-repeat;
	opacity: 10%;
	pointer-events: none;
	background-size: 100%;
	background-position: 50% 80px;
}

/* Noise effect */

#noise {
	pointer-events: none;
	height: 100vh;
	width: 100vw;
	position: fixed;
	z-index: 1000;
	top: 0;
	left: 0;
	background: url("assets/noise.gif");
	opacity: 0.025;
}


/* Route transitions */
.route-enter-from {
	opacity: 0;
	transform: translateX(100px);
}

.route-enter-active {
	transition: all 0.3s ease-out;
}

.route-leave-to {
	opacity: 0;
	transform: translateX(-100px);
}

.route-leave-active {
	transition: all 0.3s ease-out;
}

</style>
