<script>
  import Main from "../components/Main.svelte";
  import Hero from "../components/Hero.svelte";
  import Features from "../components/Features.svelte";
  import CTA from "../components/CTA.svelte";

  let onLoad = () => {
    const sr = ScrollReveal();
    sr.reveal(".feature", {
      duration: 600,
      distance: "20px",
      easing: "cubic-bezier(0.215, 0.61, 0.355, 1)",
      origin: "right",
      viewFactor: 0.2
    });
  };
</script>

<style lang="scss">

</style>

<svelte:window on:load={onLoad} />

<svelte:head>
  <title>SeeFood brought by Sillycon Valley</title>
</svelte:head>

<Main>
  <Hero />
  <Features />
  <CTA />
</Main>
