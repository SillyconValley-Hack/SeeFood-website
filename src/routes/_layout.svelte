<script>
  import Header from "../components/Header.svelte";
  import Footer from "../components/Footer.svelte";
  import { lightsOff } from "../store.js";

  let isLoaded = false;

  let onLoad = () => {
    isLoaded = true;
  };
</script>

<style lang="scss" global>
  @import "./style/style.scss";
</style>

<svelte:window on:load={onLoad} />

<svelte:head>
  <link
    href="https://fonts.googleapis.com/css?family=Heebo:400,700|IBM+Plex+Sans:600"
    rel="stylesheet" />
  <script src="https://unpkg.com/scrollreveal@4.0.0/dist/scrollreveal.min.js">

  </script>
</svelte:head>

<div
  class="is-boxed has-animations"
  class:is-loaded={isLoaded}
  class:lights-off={$lightsOff}>
  <div class="body-wrap boxed-container">
    <Header />
    <slot />
    <Footer />
  </div>
</div>
