<script>
	import { page } from '$app/stores';

	import DarkMode from "svelte-dark-mode";
	import { afterUpdate } from "svelte";

	let theme;

	$: switchTheme = theme === "dark" ? "light" : "dark";

	afterUpdate(() => {
    	document.body.className = theme; // "dark" or "light"
  	});

	
	// Customize darkmode icons here
	let sunBackground = '#E5E5FF';
	let moonBackground = '#00004d';

</script>

<DarkMode bind:theme />

<header>
	<div class="full-bleed"></div>

		<h1><a href="/">'t Kaashuys</a></h1>

		<nav>
			<ul>
				<li class:active={$page.url.pathname === '/'}><a sveltekit:prefetch href="/">Home</a></li>
				<li class:active={$page.url.pathname === '/assortiment'}>
					<a sveltekit:prefetch href="/assortiment">Assortiment</a>
				</li>
				<li class:active={$page.url.pathname === '/blog'}>
					<a sveltekit:prefetch href="/blog">Nieuws</a>
				</li>
				<li>
					<div class="toggle-wrapper">
						<input id="toggle" type="checkbox" on:click={() => (theme = switchTheme)}>
						<label id="toggle-label" for="toggle">
						{#if theme === "dark"}
							<!--Sun-->
							<svg shape-rendering="geometricPrecision" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="sun">
								<circle cx="256" cy="256" r="256" stroke="{sunBackground}" 
                    			stroke-width="3" fill="{sunBackground}" />
								<path d="M277.3 32h-42.7v64h42.7V32zm129.1 43.7L368 114.1l29.9 29.9 38.4-38.4-29.9-29.9zm-300.8 0l-29.9 29.9 38.4 38.4 29.9-29.9-38.4-38.4zM256 128c-70.4 0-128 57.6-128 128s57.6 128 128 128 128-57.6 128-128-57.6-128-128-128zm224 106.7h-64v42.7h64v-42.7zm-384 0H32v42.7h64v-42.7zM397.9 368L368 397.9l38.4 38.4 29.9-29.9-38.4-38.4zm-283.8 0l-38.4 38.4 29.9 29.9 38.4-38.4-29.9-29.9zm163.2 48h-42.7v64h42.7v-64z"></path>
							</svg>
						{:else}
							<!--Moon-->
							<svg shape-rendering="geometricPrecision" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="moon">
								<circle cx="256" cy="256" r="256" stroke="{moonBackground}" 
                    			stroke-width="3" fill="{moonBackground}" />
								<path d="M195 125c0-26.3 5.3-51.3 14.9-74.1C118.7 73 51 155.1 51 253c0 114.8 93.2 208 208 208 97.9 0 180-67.7 202.1-158.9-22.8 9.6-47.9 14.9-74.1 14.9-106 0-192-86-192-192z"></path>
							</svg>
						{/if}
						</label>
					</div>
				</li>
			</ul>
		</nav>
</header>

<style lang="scss" text="text/scss">
@import "../scss/components/nav";
</style>
