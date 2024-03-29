<template >
	<div @mousemove="setCursorFollower" @mouseleave="this.$refs.cursorFollower.style.left ='-100px'; this.$refs.cursorFollower.style.top = '-100px';">
		<div ref="cursorFollower" id="cursorFollower" class="cursor-follower">
			<div ref="cursorFollowerPointer" class="cursorFollower--pointer"/>
		</div>
		<div id="noise"></div>
		<div ref="backgroundImage" id="background-image"></div>
		<Header></Header>
		<main>
			<router-view v-slot="{ Component }">
				<transition name="route" mode="out-in">
					<component :is="Component"></component>
				</transition>
			</router-view>
		</main>
		<Footer></Footer>
	</div>
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
			this.$refs.backgroundImage.style.backgroundPosition = `50% ${((scrollTop * 0.25) - 80) * -1}px`;
		},
		setCursorFollower(event) {
			let element = event.target;
			let width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
			
			if (width > 900) {
				this.$refs.cursorFollower.style.left = `${event.pageX}px`;
				this.$refs.cursorFollower.style.top = `${event.pageY}px`;
				// Was testing for {{ window.getComputedStyle(event.target).cursor === "pointer" }} to be true
				// Changed because I want to hide to cursor by setting cursor = "none"
				if ( element.nodeName !== "#document" && (element.nodeName === "BUTTON" || element.nodeName === "A" || element.classList.contains("--pointer"))) {
					this.$refs.cursorFollowerPointer.style.opacity = "1";
					return;
				}
				this.$refs.cursorFollowerPointer.style.opacity = "0";
			} else {
				this.$refs.cursorFollower.style.left = "-100px";
				this.$refs.cursorFollower.style.top = "-100px";
			}
		},
		onMount(event) {
			this.backgroundController();
			// Fixes the cursor staying in the same place when scrolling.
			this.setCursorFollower(event);
		}
	},
	mounted() {
		document.addEventListener("scroll", this.onMount.bind(event));
	},
	beforeDestroy() {
		document.removeEventListener('scroll', this.onMount.bind(event));
	}
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
	--general-margin: 2em;
	--global-margin: 2em;
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
	background-image: url("assets/dragon-logo.svg");
	background-repeat: no-repeat;
	opacity: 10%;
	pointer-events: none;
	background-size: 65%;
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
	transition: all 0.1s ease-out;
}

.route-leave-to {
	opacity: 0;
	transform: translateX(-100px);
}

.route-leave-active {
	transition: all 0.1s ease-out;
}

/* CURSOR */

#cursorFollower {
	top: -100px;
	position: absolute;
	height: 1.25em;
	width: 1.25em;
	border-radius: 50%;
	transform: translate(-50%, -50%);
	z-index: 100000;
	pointer-events: none;
	backdrop-filter: invert(100%);
}

.cursorFollower--pointer {
	opacity: 0;
	position: relative;
	height: 200%;
	width: 200%;
	transform: translate(-50%, -50%);
	top: 50%;
	left: 50%;
	border: 2px solid white; /* Maybe can be changed to have backdrop filter. */
	border-radius: 50%;
	transition: 0.1s linear;
}


@media (min-width: 900px) {
	:root {
		--white: #F1F1F1;
		--black: #0f0f0f;
		--general-margin: 5em;
		--global-margin: 3em;
	}

	#background-image {
		background-size: 40%;
	}

	* {
		cursor: none !important;
	}

}

</style>
