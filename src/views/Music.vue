<template>
	<section id="music" class="main">
		<div class="albums-container">
			<div v-for="track in tracks" class="album-container">
				<SquareImage class="cover-front" imgSrc="covers/cover.png"/>
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
	</section>
</template>

<script>
import SquareImage from "../components/SquareImage.vue";
import tracks from "../tracks/tracks.json";

export default {
  data() {
    return {
      tracks: tracks.tracks,
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
  gap: 1.2em;
}

.album-container {
  position: relative;
  width: fit-content;
  margin: auto;
}

.album-container:hover .cover-front {
  transform: rotateY(180deg);
  backface-visibility: hidden;
  transition: 0.3s ease-out;
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

.album-container:hover .cover-back {
  transform: rotateY(0deg);
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
