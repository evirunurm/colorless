<template>
	<footer>
		<h3><a class="font-kontanter back-to-top" @click="scrollToTop">BACK TO THE TOP</a></h3>
		<hr/>
		<p class="credits">Developed by <a href="https://github.com/evirunurm" target="_blank" class="credits__link">Evelin
			Virunurm</a></p>
	</footer>
</template>

<script>
export default {
	methods: {
		scrollToTop() {
			window.scrollTo({ top: 0, behavior: 'smooth' });
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
	padding: 0 var(--general-margin) calc(var(--general-margin) / 3) var(--general-margin);
}

a {
	text-decoration: none;
	color: var(--white);
}

hr {
	width: 100%;
	opacity: 25%;
}

.credits {
	margin: calc(var(--general-margin) / 4) 0 calc(var(--general-margin) / 4) 0;
	font-size: 0.75em;
	align-self: flex-end;
	color: rgba(255, 255, 255, 0.25);
}

.credits__link {
	opacity: 0.5;
}

.back-to-top {
	font-size: 2.25rem;
	font-weight: normal;
}

@media (min-width: 700px) {
	.credits {
		font-size: 1em;
	}
}
</style>
