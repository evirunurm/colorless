<template>
	<footer>
		<h3><a class="font-colorless back-to-top" @click="scrollToTop">BACK TO THE TOP</a></h3>
		<hr/>
		<div class="horizontal">
			<p class="credits">Copyright © 2022 | Alonso Hogue Virto</p>
			<p class="credits">Designed by <span class="font-colorless bigger">COLORLESS</span>
				<br/>
				Developed by <a href="https://github.com/evirunurm" target="_blank">Evelin Virunurm</a>
			</p>
		</div>

	</footer>
</template>

<script>
export default {
	methods: {
		scrollToTop() {
			const c = document.documentElement.scrollTop || document.body.scrollTop;
			  if (c > 0.3) {
				 window.requestAnimationFrame(this.scrollToTop);
				 window.scrollTo(0, c - c / 8);
			  }
		}
	}
}

</script>

<style scoped>
footer {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 1em;
	margin: 2.5rem var(--general-margin) 2rem var(--general-margin);
}

a {
	text-decoration: none;
	color: var(--white);
}

hr {
	width: 100%;
	opacity: 35%;
}

.credits {
	font-size: 0.75em;
	color: rgba(255, 255, 255, 0.50);
}

.horizontal {
	display: flex;
	justify-content: space-between;
	align-items: baseline;
	width: 100%;
}

.bigger {
	font-size: 1.3em;
}

.back-to-top {
	font-size: 2rem;
	font-weight: normal;
	cursor: pointer;
}

@media (min-width: 700px) {
	.credits {
		font-size: 1em;
	}

	.back-to-top {
	font-size: 2.25rem;
}

}
</style>
