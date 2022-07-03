<template>
	<section id="music" class="main">
		<div class="albums-container">
			<div v-for="(track, index) in tracks" @click.self="rotate($event)" @mouseleave.self="rotateBack($event)" class="album-container" :key="index">
				<div class="cover-front">
					<SquareImage :imgSrc="'covers/' + track.cover"/>
				</div>

				<div class="cover-back">
					<h3 class="track-title">{{ track.name }}</h3>
					<p class="track-listen-text">LISTEN ON</p>
					<div class="album-links">
						<div class="album-link" v-for="link in getLinks(track)">
							<img :src="'src/assets/social-media/' + link.replace('link', '').toLowerCase() + '.svg'"
								  :alt="link">
						</div>
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
		rotate(event) {
			let element = event.target
			let coverFront = element.getElementsByClassName("cover-front")[0];
			let coverBack = element.getElementsByClassName("cover-back")[0];

			coverFront.style.transform = "rotateY(180deg)";
			coverBack.style.transform = "rotateY(0deg)";
		},
		rotateBack(event) {
			let element = event.target
			let coverFront = element.getElementsByClassName("cover-front")[0];
			let coverBack = element.getElementsByClassName("cover-back")[0];

			coverFront.style.transform = "rotateY(0deg)";
			coverBack.style.transform = "rotateY(180deg)";
		}
	},
	components: {
		SquareImage,
	}
}
</script>

<style scoped>
.albums-container {
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 1.5em;
}

.album-container {
	position: relative;
	width: fit-content;
	margin: auto;
	cursor: pointer;
}

.album-container:hover .cover-front::before {
	content: "";
	position: absolute;
	height: calc(100% + 20px);
	width: calc(100% + 20px);
	top: -10px;
	left: -10px;
	z-index: 10;
	background-image: url("src/assets/logo.svg");
	background-repeat: no-repeat;
	background-position: center;
	background-size: cover;

}

.cover-back {
	background-color: rgba(255, 255, 255, 0.25);
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	transform: rotateY(180deg);
	backface-visibility: hidden;
	overflow: hidden;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	padding: 2em 2em 2em 2em;
}

/* Cover front and back  */

.cover-front, cover-back {
	pointer-events: none;
}

.cover-front {
  backface-visibility: hidden;
  transition: 0.3s ease-out;
}

.cover-back {
  transition: 0.3s ease-out;
}

/* COVER BACK CONTENT */

.track-title {
	padding-bottom: 0.5rem;
}

.album-links {
	height: 100%;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}

.album-link {
	height: 2em;
	width: 2em;
	overflow: hidden;
	cursor: pointer;
	display: flex;
	justify-content: center;
	align-items: center;
}

.album-link img {
	width: 100%;
}


/*  */

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
