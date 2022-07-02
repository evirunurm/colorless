<template>
	<header>
		<div class="container">
			<nav>
				<button @click="navOpened = !navOpened; animateBurger(); toggleScroll();"
						  class="nav__burger-container mobile-nav">
					<img ref="burger" class="nav__burger" src="../assets/burger_menu.svg" alt="Menu Button">
				</button>
				<section class="nav--opened mobile-nav" v-if="navOpened">
					<div class="nav--opened__background"/>
					<router-link class="font-colorless section-title" to="/">Home</router-link>
					<router-link class="font-colorless section-title" to="/music">Music</router-link>
					<router-link class="font-colorless section-title" to="/lore">Lore</router-link>
					<router-link class="font-colorless section-title" to="/contact">Contact</router-link>
				</section>
				<div class="desktop-nav">
					<router-link class="font-colorless section-title" to="/">Home</router-link>
					<router-link class="font-colorless section-title" to="/music">Music</router-link>
					<div class="logo">
						<img src="../assets/logo.svg" alt="Simple white Banshee logo">
					</div>
					<router-link class="font-colorless section-title" to="/lore">Lore</router-link>
					<router-link class="font-colorless section-title" to="/contact">Contact</router-link>
				</div>
			</nav>

			<div class="social-media__container">
				<div class="social-media__icon">
					<a target="_blank" href="https://open.spotify.com/artist/7F5xtm8aWGxlxJaoqVT82f"><img
						src="../assets/social-media/spotify.svg" alt="Spotify Link"></a>
				</div>
				<div class="social-media__icon">
					<a target="_blank" href=""><img src="../assets/social-media/audius.svg" alt="Audius Link"></a>
				</div>
				<div class="social-media__icon">
					<a target="_blank" href=""><img src="../assets/social-media/soundcloud.svg" alt="Audius Link"></a>
				</div>
				<div class="social-media__icon">
					<a target="_blank" href="https://www.youtube.com/channel/UCr3f_Nm2NO8i_1pBMAdd3YQ"><img
						src="../assets/social-media/youtube.svg" alt="Youtube Link"></a>
				</div>
				<div class="social-media__icon">
					<a target="_blank" href=""><img src="../assets/social-media/instagram.svg" alt="Instagram Link"></a>
				</div>
				<div class="social-media__icon">
					<a target="_blank" href=""><img src="../assets/social-media/twitter.svg" alt="Twitter Link"></a>
				</div>
				<div class="social-media__icon">
					<a target="_blank" href="https://open.spotify.com/artist/7F5xtm8aWGxlxJaoqVT82f"><img
						src="../assets/social-media/reddit.svg" alt="Reddit Link"></a>
				</div>
			</div>
		</div>
	</header>
</template>

<script>
export default {
	data() {
		return {
			navOpened: false,
		}
	},
	methods: {
		animateBurger() {
			if (this.navOpened) {
				this.$refs.burger.classList.remove("rotate-90");
				this.$refs.burger.classList.add("rotate90")
			} else {
				this.$refs.burger.classList.remove("rotate90");
				this.$refs.burger.classList.add("rotate-90");
			}
		},
		toggleScroll() {
			if (this.navOpened) {
				this.$emit("blockScroll");
			} else {
				this.$emit("unblockScroll");
			}
		}
	},
}
</script>

<style scoped>
header {
	display: flex;
	justify-content: center;
	width: 100%;
}

/* *** */
/* NAV */
/* *** */

.nav--opened {
	top: 0;
	left: 0;
	position: fixed;
	display: flex;
	width: 100vw;
	height: 100vh;
	flex-direction: column;
	backdrop-filter: blur(4px) brightness(50%) contrast(120%);
	justify-content: center;
	align-items: center;
	gap: 1.5em;
	z-index: 10;
}

.nav--opened a {
	text-decoration: none;
	font-size: 2em;
	color: var(--white);
	z-index: 20;
	cursor: pointer;
}

.selection-container {
	position: relative;
}

.section__selector {
	position: absolute;
	top: 0.75em;
	left: -1.25em;
	width: 0.5em;
	height: 0.5em;
	background-color: var(--white);
	border-radius: 50%;
}

.selection-container a:hover {
	text-decoration: line-through;
}


/* BURGER */

.nav__burger-container {
	position: absolute;
	width: 4rem;
	height: 4rem;
	display: flex;
	left: 0;
	align-items: center;
	justify-content: center;
	z-index: 20;
	background: none;
	border: none;
}

.nav__burger {
	width: 50%;
	cursor: pointer;
}

.nav__burger img {
	color: var(--white);
}


/* DESKTOP NAV */
nav {
	width: 100%;
	display: flex;
	justify-content: space-between;
	min-height: 9em;
}

.desktop-nav {
	display: flex;
	width: 100%;
	justify-content: space-around;
	align-items: center;
}

.desktop-nav__links {
	display: none;
	width: 100%;
	justify-content: space-around;
	align-items: center;
}

.desktop-nav__link {
	display: flex;
	align-items: center;
	justify-content: center;
	width: 10em;
	position: relative;
}

.desktop-nav a {
	color: var(--white);
	text-decoration: none;
	margin: 0 1.25em 0 1.25em;
	cursor: pointer;
	font-size: 1.25em;
}

.section__selector--desktop {
	position: absolute;
	bottom: -75%;
	left: 50%;
	transform: translate(-50%);
	width: 0.5em;
	height: 0.5em;
	background-color: var(--white);
	border-radius: 50%;
}

/* ****** */
/* HEADER */
/* ****** */

.container {
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 0 var(--general-margin) calc(var(--general-margin) / 1.25) var(--general-margin);
}

.logo {
	height: 5.5em;
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 0.75em 0 0.75em 0;
	position: absolute;
}

.logo img {
	height: 100%;
}

.social-media__container {
	display: flex;
	align-items: center;
	justify-content: space-between;
}

.social-media__icon img {
	height: 1.5em;
	margin: 0 0.5em 0 0.5em;
	cursor: pointer;
}

.section-title {
	font-size: 2.5rem;
}


/* ********* */
/* ANIMATION */
/* ********* */

@keyframes rotate90 {
	from {
		transform: rotate(0deg);
	}

	to {
		transform: rotate(90deg);
	}
}

@keyframes rotate-90 {
	from {
		transform: rotate(90deg);
	}

	to {
		transform: rotate(0deg);
	}
}

.rotate90 {
	animation: rotate90 0.15s ease-in-out forwards;
}

.rotate-90 {
	animation: rotate-90 0.15s ease-in-out forwards;
}

@media (min-width: 800px) {
	.mobile-nav {
		display: none;
	}

	.desktop-nav__links {
		display: flex;
	}

	.social-media__icon img {
		height: 1.5em;
	}
}
</style>
