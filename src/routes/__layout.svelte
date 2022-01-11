<script context="module">
	export const load = ({ url }) => {
	  const currentRoute = url.pathname
  
	  return {
		props: {
		  currentRoute
		}
	  }
	}
</script>
<script>
	// Regular components
	import Header from '$lib/header/Header.svelte';
	import Footer from '$lib/footer/Footer.svelte';
	import { fade } from 'svelte/transition'

	export let currentRoute;
</script>

<div class="wrapper">


	<Header />

{#key currentRoute}
  <main in:fade={{ duration: 150, delay: 150 }} out:fade={{ duration: 150 }}>
    <slot />
  </main>
{/key}
	
	<Footer />

</div>


<style lang="scss" type="text/scss">
	//
</style>
