<script>
    export let title
    export let date
    export let subtitle
</script>
  
<svelte:head>
    <title>'t Kaashuys - {title}</title>
    <meta property="og:title" content={title} />
</svelte:head>
<h1>{title}</h1>
<h2>{subtitle}</h2>
<p>Published: {date}</p>

<slot />

<style>
    h2 {
        font-weight: normal;
    }
</style>