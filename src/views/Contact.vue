<template>
	<div id="contact" class="main">
		<form class="form-container" name="contact-form-netlify" method="POST" netlify data-netlify-honeypot="bot-field">
			<input type="hidden" name="form-name" value="contact-form-netlify"/>
			<div class="row">
				<div class="input-container">
					<label for="email" class="font-colorless">EMAIL</label>
					<input maxlength="254" id="email" type="text" name="email">
				</div>
				<div class="input-container">
					<div class="several-labels-container">
						<label for="name" class="font-colorless">NAME</label>
						<label class="label-note" for="message">max. 35 char</label>
					</div>
					<input maxlength="35" id="name" type="text" name="name">
				</div>
			</div>
			<div class="row">
				<div class="input-container">
					<div class="several-labels-container">
						<label for="subject" class="font-colorless">SUBJECT</label>
						<label class="label-note" for="message">max. 40 char</label>
					</div>
					<input maxlength="40" id="subject" type="text" name="subject">
				</div>
			</div>
			<div class="input-container input-container-area">
				<div class="several-labels-container">
					<label for="message" class="font-colorless">MESSAGE</label>
					<label class="label-note" for="message">max. 250 char</label>
				</div>

				<textarea id="message" name="message" maxlength="300" rows="5"/>
			</div>
			<div class="send-button">
				<button class="font-colorless" type="submit">SEND</button>
			</div>

		</form>
	</div>
</template>

<script>

</script>

<style scoped>

.main {
	display: flex;
	justify-content: center;
}

.form-container {
	max-width: 1300px;
	width: 100%;
}

label {
	font-size: 2em;
}

.several-labels-container {
	display: flex;
	justify-content: space-between;
	align-items: baseline;
}

.label-note {
	opacity: 50%;
	font-size: 0.75em;
	position: relative;
	top: 3px;
}

input, textarea {
	margin: 0.5em 0 0.3em 0;
	padding: 0.5em;
	font-size: 0.9em;
	background-color: rgba(255, 255, 255, 0.2);
	border: none;
	color: var(--white);
}

input:focus {
	outline-color: white;

}

.main {
	height: fit-content;
}

.input-container {
	display: flex;
	flex-direction: column;
	margin: calc(var(--general-margin) / 4) 0 calc(var(--general-margin) / 4) 0;
}

.send-button {
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
}

.send-button button {
	border: 1px solid white;
	color: var(--white);
	font-weight: bold;
	align-self: center;
	cursor: pointer;
	font-size: 2rem;
	background: none;
	padding: 0.35em 1.25em 0.35em 1.25em;
	margin: 1em 0.5em 0.5em 0.5em;
	transition: 0.1s linear;
	position: relative;
}

.send-button button:before {
	content: "";
	position: absolute;
	top: 0;
	width: 100%;
	height: 100%;
	background: url("/src/assets/outline.svg");
}

.send-button button:hover {
	box-shadow: 0 0 0 0.25em rgba(255, 255, 255, 0.2);
	background-color: var(--black);
	color: var(--white);
}

@media (min-width: 600px) {
	button {
		font-size: 2rem;
		padding: 0.5em 1.5em 0.5em 1.5em;
	}

	label {
		font-size: 2rem;
	}

	.row {
		display: flex;
		justify-content: space-between;
	}

	input,
	textarea {
		padding: 0.75em;
		font-size: 1em;
	}

	.input-container {
		width: 45%;
	}

	.input-container-area {
		width: 100%;
	}
}
</style>
