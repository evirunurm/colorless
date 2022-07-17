<template>
	<main>
		<h1 class="font-colorless">
		KEYS... FOR UNLOCKING NEW DEPTHS.
		</h1>
		<div class="keys">
			<img class="key-image" src="/src/assets/keys/Fire_Icon.svg" alt="">
			<img class="key-image" src="/src/assets/keys/Reverence_Icon.svg" alt="">
			<img class="key-image" src="/src/assets/keys/Chaos_Icon.svg" alt="">
			<img class="key-image" src="/src/assets/keys/Order_Icon.svg" alt="">
			<img class="key-image" src="/src/assets/keys/Fear_Icon.svg" alt="">
			<img class="key-image" src="/src/assets/keys/Ice_Icon.svg" alt="">
		</div>
	</main>
</template>

<style>

main {
	margin-bottom: 8rem;
}

h1 {
	margin-bottom: 6rem;
	text-align: center;
	font-weight: normal;
}
.keys {
	display: flex;
	width: 100%;
	justify-content: space-around;
}

.key-image {
	height: 200px;
	opacity: 0.25;
	cursor: pointer;
}

@media (max-width: 600px) {
	.keys {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 2rem
	}

	.key-image {
		margin: auto;
	}

	
}
</style>