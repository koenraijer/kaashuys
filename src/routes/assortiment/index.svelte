<script context="module">
	import { browser, dev } from '$app/env';

	// we don't need any JS on this page, though we'll load
	// it in dev so that we get hot module replacement...
	export const hydrate = dev;

	// ...but if the client-side router is already loaded
	// (i.e. we came here from elsewhere in the app), use it
	export const router = browser;

	// since there's no dynamic data here, we can prerender
	// it so that it gets served as a static asset in prod
	export const prerender = true;

	// Fetch product list from JSON
	export const load = async ({ fetch }) => {
      const products = await fetch('/api/products.json')
      const allProducts = await products.json()
    
      return {
        props: {
          products: allProducts
        }
      }
    }

	const foods = [
		{name: 'Nederlandse kazen', img: "cheese.jpg", src: "nederlandse_kazen" }, 
		{name: 'Buitenlandse kazen', img: "cheese.jpg", src: "buitenlandse_kazen"}, 
		{name: 'Tapas', img: "cheese.jpg", src: "tapas"},
		{name: 'Vers gebrande noten', img: "cheese.jpg", src:"noten"},
		{name: 'Wijn & Likeur', img: "cheese.jpg", src: "wijn_en_likeur"},
		{name: 'Bonbons & Chocolade', img: "cheese.jpg", src: "bonbons_en_chocolade"},
		{name: 'Lokale producten', img: "cheese.jpg", src: "lokale_producten"},
		{name: 'Culinaire cadeas', img: "cheese.jpg", src: "culinaire_cadeaus"},
		]
</script>

<script>
    export let products

</script>

<svelte:head>
	<title>'t Kaashuys - Assortiment</title>
</svelte:head>

<section>
	<h1>Assortiment</h1>
	<h2>Klik op de afbeeldingen voor meer informatie!</h2>
</section>

<div class="grid">
	{#each products as product}
		<a href="{product.path}">
			<h2>{product.meta.title}</h2>
			<div>
				<div class="img-filter2"></div>
				<img src="{product.meta.img_link}">
			</div>
		</a>
	{/each}
</div>

<style lang="scss" type="text/scss">
	.grid {
		margin: 2*$vertical-rhythm 0;
		display: grid;
		grid-auto-flow: row;
		grid-template-columns: 1fr 1fr 1fr;
		row-gap: 3*$vertical-rhythm;
		column-gap: 3*$horizontal-rhythm;
		@include respond (tab-port) {
			grid-template-columns: 1fr 1fr;
		}
		@include respond (phone) {
			grid-template-columns: 1fr;
		}
		// Grid child
		a {
			position: relative;
			aspect-ratio: 1;
			&:hover {
				div {
					transform: scale(1.05);
					transition: all 0.3s $ease-bounce;
					.img-filter2 {
						transition: background 0.3s $ease-bounce;
						background:
						linear-gradient(
							hsla(0, 0%, 98%, 0.65),
							hsla(0, 0%, 98%, 0.65)
						);
						// ADD: blur on hover
					}
				}
			}
			// Div containing the img
			div {
				border-radius: $border-radius;
				position: absolute;
				height: 100%;
				width: 100%;
				overflow: hidden;
				img {
					object-fit: cover;
					height: 100%;
					width: 100%;
				}
				// Add as empty div to the img-wrapper
				.img-filter {
					position: absolute;
					height: 100%;
					width: 100%;
					left: 0;
					top: 0;
					transition: background 0.3s $ease-bounce;
					background:
					linear-gradient(
						hsla(0, 0%, 98%, 0.25),
						hsla(0, 0%, 98%, 0.25)
					);
				}
			}
			// Grid child title
			h2 {
				position: absolute;
				z-index: 10 !important;
				left: 50%;
				top: 50%;
				transform: translate(-50%, -50%);
			}
		}
	}

	section {
		h2 {
			font-weight: normal;
		}
	}

</style>
