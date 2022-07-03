<template>
<div class="img-container">
  <img class="img" :src="imgSrc" :alt="imgSrc">
</div>
</template>

<script>
export default {
  props: {
    imgSrc: "",
  }
}
</script>

<style scoped>
/* Creates a square container for photos of any aspect ratio */
.img-container {
  position: relative;
  width: 100%;
  overflow: hidden;
  aspect-ratio: 1;
  max-height: 300px;
  max-width: 300px;
  box-shadow: 0em 0.5em 1em 0.25em rgba(0, 0, 0, 0.25);
  margin: 0;
}

.img {
  height: 100%;
  width: 100%;
  min-width: 200px;
  min-height: 200px;
  object-fit: cover;
}

</style>