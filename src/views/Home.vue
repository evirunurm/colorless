<template>
	<section id="home" class="home main">
		<article class="main-article">
			<SquareImage :imgSrc="'public/covers/' + latest.cover"/>
			<div class="text-container">
				<h3 class="title font-colorless">LATEST REALEASE</h3>
				<p class="text">
					{{ latest.name }}
				</p>
				<p class="text">
					"Track description"
				</p>
			</div>
		</article>
	</section>
</template>

<script>
import SquareImage from "../components/SquareImage.vue";
import otracks from "../tracks/tracks.json";

export default {
	components: {
		SquareImage
	},
	data() {
		return {
			tracks: otracks.tracks,
			latest: {}
		}
	},
	methods: {
		getLatestRelease() {
			this.tracks.sort( (a, b) => {
				return new Date(b.release) - new Date(a.release)
			});
			this.latest = this.tracks[0];
		}
	},
	mounted() {
		this.getLatestRelease();
	}
}

</script>

<style scoped>

.home {
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-bottom: var(--general-margin);
}

.main-article {
	display: flex;
	gap: 2.5rem;
	max-width: 1000px;
	width: 100%;
}

.title {
	font-size: 2rem;
}

.text-container {
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
}

.text:nth-child(2) {
	margin-bottom: 1.5rem;
}

@media (max-width: 500px) {
	.main-article {
		flex-direction: column;
	}
}
</style>
