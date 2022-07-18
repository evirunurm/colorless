<template>
	<section id="music" class="main">
		<div class="albums-container">
			<div v-for="(track, index) in tracks" class="album-container" :key="index"
				  >
				<div class="cover" @click.stop="showDetails($event)"
				  @mouseleave.self="hideDetails($event)">
					<SquareImage class="cover-image" :imgSrc="'covers/' + track.cover"/>
					<div   class="details">
						<a target="_blank" class="album-link" v-for="link in getLinks(track)" :href="track[link]">
														<img :src="'../assets/social-media/' + link.replace('link', '').toLowerCase() + '.svg'"
																						  :alt="link">
						</a>
					</div>
				</div>
			</div>
		</div>
		<h2 v-if="tracks.length === 0" class="warning">Oh no! This section seems to be empty...</h2>
	</section>
</template>

<script>
import SquareImage from "../components/SquareImage.vue";
import otracks from "../tracks/tracks.json";

export default {
	data() {
		return {
			tracks: otracks.tracks,
		}
	},
	methods: {
		getLinks(track) {
			let links = [];
			for (const property in track) {
				if (property.startsWith("link") && track[property] !== "") {
					links.push(property);
				}
			}
			return links;
		},
		showDetails(event) {
			let element = event.target;
			element.classList.add("cover--opened");
		},
		hideDetails(event) {
			let element = event.target;
			element.classList.remove("cover--opened");
		},
		sortTracks() {
			this.tracks.sort( (a, b) => {
				return new Date(b.release) - new Date(a.release)
			});
		}
	},
	components: {
		SquareImage,
	},
	mounted() {
		this.sortTracks();
	}
}
</script>

<style scoped>
.albums-container {
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 3rem;
	width: fit-content;
	margin: auto;
}

.album-container {
	position: relative;
	cursor: pointer;
}

.cover {
	position: relative;
	overflow: hidden;
}

.cover-image {
	pointer-events: none;
}

/* COVER HOVER ANIMATIONS */


.cover div {
	transition: transform 0.09s ease-in;
}

.album-container:hover .cover {
	transition: transform 0.15s ease-in;
	transform: scale(1.05);
}

div.details {
	display: none;
	position: absolute;
	top: 0;
	right: -5px;
	width: 38.2%;
	height: 100%;
	z-index: 100;
	background: white;
	mix-blend-mode: difference;
}

.details img {
	mix-blend-mode: difference;
	max-width: 30%;
}

.details a {
	display: grid;
	place-items: center;
}

.cover--opened {
	position: relative;
}

.cover--opened div.details {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 1rem;
	animation: move 0.15s ease-in-out;
}


@keyframes move {
	from {
		right: -100px;
	}
	to {
		right: -5px;
	}
}


/* COVER LINKS CONTENT */

.album-link img {
	width: 100%;
}

h2.warning {
	text-align: center;
}

@media (max-width: 700px) {
	.albums-container {
		grid-template-columns: 1fr;
	}
}

@media (min-width: 1300px) {
	.albums-container {
		grid-template-columns: 1fr 1fr 1fr;
		gap: 3em;
	}
}

@media (min-width: 1300px) {
	.albums-container {
		grid-template-columns: 1fr 1fr 1fr 1fr;
		gap: 3em;
	}
}
</style>
