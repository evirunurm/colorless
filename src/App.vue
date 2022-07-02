

<template>
	<Header></Header>
	<main>
		<router-view v-slot="{ Component }">
	  		<transition name="route" mode="out-in">
		  		<component :is="Component"></component>
	  		</transition>
  		</router-view>
	</main>

	<ul>
		<router-link to="/">Home</router-link>
		<router-link to="/music">Music</router-link>
		<router-link to="/lore">Lore</router-link>
	</ul>



</template>

<script >
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import Home from "./components/Home.vue";
import Music from "./components/Music.vue";

export default {
	components: {
		Header
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
  --general-margin: 3em;
  --global-margin: 3em;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: sans-serif;
}

body {
  color: var(--white);
  background-repeat: no-repeat;
  background-position: top;
  background-blend-mode: overlay;
  background-size: cover;
  background-color: var(--black);
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
