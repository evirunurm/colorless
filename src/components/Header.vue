<template>
	<header>
		<div class="container">
			<nav>
				<button @click="navOpened = !navOpened"
						  class="nav__burger-container mobile-nav">
					<img ref="burger" class="nav__burger" src="../assets/burger_menu.svg" alt="Menu Button">
				</button>
				<transition name="move">
					<section class="nav--opened mobile-nav" v-if="navOpened">
					<router-link @click="navOpened = false" class="font-colorless section-title" to="/">Home</router-link>
					<router-link @click="navOpened = false" class="font-colorless section-title" to="/music">Music
					</router-link>
					<router-link @click="navOpened = false" class="font-colorless section-title" to="/lore">Lore
					</router-link>
					<router-link @click="navOpened = false" class="font-colorless section-title" to="/contact">Contact
					</router-link>
					<div class="social-media__container--mobile">
						<div class="social-media__icon ">
							<a target="_blank" href="https://www.youtube.com/channel/UCr3f_Nm2NO8i_1pBMAdd3YQ"><img
								src="../../public/media/youtube.svg" alt="Youtube Link">
							</a>
						</div>
						<div class="social-media__icon ">
							<a target="_blank" href="https://open.spotify.com/artist/75AyHLmBIyxRYMSFTKInkn"><img
								src="../../public/media/spotify.svg" alt="Spotify Link">
							</a>
						</div>
						<div class="social-media__icon ">
							<a target="_blank" href="https://audius.co/colorlessbass">
								<img src="../../public/media/audius.svg" alt="Audius Link">
							</a>
						</div>
						<div class="social-media__icon ">
							<a target="_blank" href="https://music.apple.com/us/artist/colorless/1632927788"><img
								src="../../public/media/applemusic.svg" alt="Apple Music Link"></a>
						</div>
						<div class="social-media__icon ">
							<a target="_blank" href="https://www.instagram.com/colorlessbass/"><img
								src="../../public/media/instagram.svg"
								alt="Instagram Link">
							</a>
						</div>
						<div class="social-media__icon ">
							<a target="_blank" href="https://twitter.com/Colorlesssssss">
								<img src="../../public/media/twitter.svg" alt="Twitter Link">
							</a>
						</div>
						<div class="social-media__icon">
							<a target="_blank" href="https://www.reddit.com/user/__COLORLESS__">
								<img src="../../public/media/reddit.svg" alt="Reddit Link">
							</a>
						</div>
					</div>
				</section>
				</transition>

				<div class="desktop-nav-container">
					<router-link class="desktop-nav font-colorless section-title"
									 :class="selectedSection === 'home' ? 'section--selected' : 'section'" id="home" to="/">Home
					</router-link>
					<router-link class="desktop-nav font-colorless section-title"
									 :class="selectedSection === 'music' ? 'section--selected' : 'section'" id="music"
									 to="/music">Music
					</router-link>
					<div class="logo">
						<img @click="$router.push('/')" src="../assets/logo.svg" alt="Simple white Banshee logo">
					</div>
					<router-link class="desktop-nav font-colorless section-title"
									 :class="selectedSection === 'lore' ? 'section--selected' : 'section'" id="lore" to="/lore">
						Lore
					</router-link>
					<router-link class="desktop-nav font-colorless section-title"
									 :class="selectedSection === 'contact' ? 'section--selected' : 'section'" id="contact"
									 to="/contact">Contact
					</router-link>
				</div>
			</nav>
			<div class="social-media__container desktop">
				<div class="social-media__icon ">
					<a target="_blank" href="https://www.youtube.com/channel/UCr3f_Nm2NO8i_1pBMAdd3YQ">
						<img class="--pointer" src="../../public/media/youtube.svg" alt="Youtube Link">
					</a>
				</div>
				<div class="social-media__icon ">
					<a target="_blank" href="https://open.spotify.com/artist/75AyHLmBIyxRYMSFTKInkn"><img
						 class="--pointer" src="../../public/media/spotify.svg" alt="Spotify Link">
					</a>
				</div>
				<div class="social-media__icon ">
					<a target="_blank" href="https://audius.co/colorlessbass">
						<img  class="--pointer" src="../../public/media/audius.svg" alt="Audius Link">
					</a>
				</div>
				<div class="social-media__icon ">
					<a target="_blank" href="https://music.apple.com/us/artist/colorless/1632927788"><img
						 class="--pointer" src="../../public/media/applemusic.svg" alt="Apple Music Link"></a>
				</div>
				<div class="social-media__icon ">
					<a target="_blank" href="https://www.instagram.com/colorlessbass/"><img
						 class="--pointer" src="../../public/media/instagram.svg"
						alt="Instagram Link">
					</a>
				</div>
				<div class="social-media__icon ">
					<a target="_blank" href="https://twitter.com/Colorlesssssss">
						<img  class="--pointer" src="../../public/media/twitter.svg" alt="Twitter Link">
					</a>
				</div>
				<div class="social-media__icon">
					<a target="_blank" href="https://www.reddit.com/user/__COLORLESS__">
						<img  class="--pointer" src="../../public/media/reddit.svg" alt="Reddit Link">
					</a>
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
			selectedSection: "home"
		}
	},
	methods: {
		animateBurger() {
			if (this.navOpened) {
				this.$refs.burger.classList.add("invert-color")
			} else {
				this.$refs.burger.classList.remove("invert-color");
			}
		},
		updateScroll() {
			if (this.navOpened) {
				document.getElementsByTagName("body")[0].parentNode.style.overflowY = "hidden";
			} else {
				// was "scroll", but it added scroll even if there's no overflow happening.
				document.getElementsByTagName("body")[0].parentNode.style.overflowY = "inherit";
			}
		},
		onResize(e) {
			if (e.target.innerWidth > 800) {
				this.navOpened = false;
			}
		}
	},
	watch: {
		$route(to, from) {
			this.selectedSection = to.name;
		},
		navOpened() {
			this.updateScroll();
			this.animateBurger();
		}
	},
	mounted() {
		this.$nextTick(() => {
			window.addEventListener('resize', this.onResize);
		})
	},
	beforeDestroy() {
		window.removeEventListener('resize', this.onResize);
	}
}
</script>

<style scoped>
header {
	display: flex;
	justify-content: center;
	width: 100%;
}

.desktop {
	display: none;
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
	justify-content: center;
	align-items: center;
	gap: 2em;
	z-index: 1000;
	backdrop-filter: invert();
	background: var(--white);
	background-image: url("/src/assets/dragon_logo_black.svg");
	background-repeat: no-repeat;
	background-position: center;
	background-size: 60%;
	background-blend-mode: overlay;
}

.nav--opened a {
	text-decoration: none;
	color: var(--black);
	z-index: 20;
	cursor: pointer;
}

.selection-container a:hover {
	text-decoration: line-through;
}


/* BURGER */

.nav__burger-container {
	position: fixed;
	width: 3.25rem;
	height: 3.25rem;
	display: flex;
	right: calc(var(--general-margin) - 0.5rem);
	top: 2.25rem;
	align-items: center;
	justify-content: center;
	z-index: 10000;
	background: none;
	border: none;
}

.nav__burger {
	width: 50%;
	cursor: pointer;
}


/* DESKTOP NAV */
nav {
	width: 100%;
	display: flex;
	justify-content: space-between;
	padding: var(--general-margin) var(--general-margin) 0 var(--general-margin);
}

.desktop-nav-container {
	display: flex;
	width: 100%;
	justify-content: space-around;
	align-items: center;
	gap: 2rem;
	margin: 1.25rem 0 0 0;
}

.desktop-nav-container a {
	color: var(--white);
	text-decoration: none;
	cursor: pointer;
}

.desktop-nav {
	display: none;
}

/* DESKTOP NAV SELECTOR */

.section--selected {
	position: relative;
}

.section--selected:after {
	content: "x";
	font-size: 1.25rem;
	position: absolute;
	top: 100%;
	left: 50%;
	transform: translateX(-50%);
}

/* ****** */
/* HEADER */
/* ****** */

.container {
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 0 0 var(--general-margin) 0;
	gap: 1.5rem;
}

.logo {
	display: flex;
	align-items: center;
	justify-content: center;
}

.logo img {
	width: 50%;
	min-width: 125px;
	max-width: 500px;
}

.social-media__container {
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 1rem;
}

.social-media__icon img {
	height: 1.2rem;
	cursor: pointer;
}

.section-title {
	font-size: 3rem;
}

/* Mobile nav links */
.mobile-nav > a {
	font-size: 2.25rem;
}

/* Mobile nav socials */
.social-media__container--mobile {
	position: fixed;
	z-index: 100;
	filter: invert();
	right: calc(var(--general-margin) - 0.25rem); /* Minus the padding from it's parent. */
	display: flex;
	flex-direction: column;
	gap: 1.5rem;
}

.social-media__container--mobile a {
	display: grid;
	place-items: center;
	padding: 0.25rem; /* So it's more accessible to the finger */
}

/* INVERT COLOR BURGER */
.invert-color {
	filter: invert();
}

/* MOBILE NAV ANIMATION */

.move-enter-from {
	transform: translateX(1000px);
}

.move-enter-active {
	transition: all 0.05s ease-in;
}

.move-leave-to {
	transform: translateX(1000px);
}

.move-leave-active {
	transition: all 0.25s ease-in-out;
}


@media (min-width: 1056px) {
	.mobile-nav {
		display: none;
	}

	.desktop-nav {
		display: flex;
	}

	.desktop {
		display: inherit;
	}

	.logo img {
		width: 100%;
	}

}

@media (min-width: 700px) {
	.nav__burger-container {
		width: 4rem;
		height: 4rem;
	}

}
</style>
