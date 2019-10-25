<script>
  import LightSwitch from "./LightSwitch.svelte";
</script>

<style>
  .hero-media-image {
    width: 40vw;
  }
</style>

<section class="hero">
  <div class="container">
    <div class="hero-inner">
      <div class="hero-copy">
        <h1 class="hero-title mt-0">SeeFood</h1>
        <p class="hero-paragraph">Shazam for food.</p>
        <div class="hero-cta">
          <a class="button button-primary" href="/">Get it now</a>
          <LightSwitch />
        </div>
      </div>
      <div class="hero-media">
        <div class="header-illustration">
          <img
            class="header-illustration-image asset-light"
            src="images/header-illustration-light.svg"
            alt="Header illustration" />
          <img
            class="header-illustration-image asset-dark"
            src="images/header-illustration-dark.svg"
            alt="Header illustration" />
        </div>
        <div class="hero-media-illustration">
          <img
            class="hero-media-illustration-image asset-light"
            src="images/hero-media-illustration-light.svg"
            alt="Hero media illustration" />
          <img
            class="hero-media-illustration-image asset-dark"
            src="images/hero-media-illustration-dark.svg"
            alt="Hero media illustration" />
        </div>
        <div class="hero-media-container">
          <img
            class="hero-media-image asset-light"
            src="images/hotdog.jpg"
            alt="Hero media" />
          <img
            class="hero-media-image asset-dark"
            src="images/hotdog.jpg"
            alt="Hero media" />
        </div>
      </div>
    </div>
  </div>
</section>
