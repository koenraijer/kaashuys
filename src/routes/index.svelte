<script context="module">
	export const prerender = true;
</script>

<script>

</script>

<svelte:head>
	<title>'t Kaashuys - Home</title>
</svelte:head>

<section class="grid">
	<div>
		<h1>Een lekker borrelplankje samenstellen?</h1>
		<h2>Dan bent u bij 't Kaashuys op de juiste plek!</h2>
		<h3>Wij verkopen een uitgebreid Hollands en buitenlands kaasassortiment. Ook kunt u bij ons terecht voor tapas, vers gebrande noten, wijn, bonbons en (seizoens)choco- lade, streekproducten en culinaire cadeaus.</h3>
		<h3>Heeft u vragen, bent u ergens niet tevreden over of juist wel; laat het ons weten!</h3>
	</div>
	<div class="glass-wrapper">
		<div>
			<h2>Openingstijden</h2>
			<table>
				<tr>
					<td>Maandag</td>
					<td>9.00 - 18.00</td>
				</tr>
				<tr>
					<td>Dinsdag</td>
					<td>9.00 - 18.00</td>
				</tr>
				<tr>
					<td>Woensdag</td>
					<td>9.00 - 18.00</td>
				</tr>
				<tr>
					<td>Donderdag</td>
					<td>9.00 - 18.00</td>
				</tr>
				<tr>
					<td>Vrijdag</td>
					<td>9.00 - 18.00</td>
				</tr>
				<tr>
					<td>Zaterdag</td>
					<td>11.00 - 17.00</td>
				</tr>
				<tr>
					<td>Zondag</td>
					<td>gesloten</td>
				</tr>
			</table>
		</div>
		<div>
			<h2>Contactgegevens</h2>
			<table>
				<tr>
					<td>Telefoon: </td>
					<td class="link"><a target="_blank" rel="noopener" href="tel:0031774741234">+31 77 4741234</a>
				</tr>
				<tr>
					<td>E-mail:</td>
					<td class="link"><a target="_blank" rel="noopener" href="mailto:kaas@winkel.nl">kaas@winkel.nl</a></td>
				</tr>
				<tr>
					<td>Adres:</td>
					<td class="link"><a target="_blank" rel="noopener" href="https://goo.gl/maps/r8116A5o9x72mrqr6">Pastoor Vranckenlaan 24<br>5953CP Reuver</a>
				</tr>
				<tr>
					<td></td>
					<td>
					</td>
				</tr>
			</table>
		</div>
		<div class="glass"></div>
	</div>
</section>
<section class="img-wrapper full-bleed">
	<div class="img-filter"></div>
	<img alt="cheese" src="cheese.jpg">
</section>
<section>
	<!--Header-image overlap-->
	<h1 id="h1-img-overlap">Een groot assortiment in hartje Reuver</h1>
	<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate porro voluptatum eligendi alias id eius rem quod perferendis, incidunt, maiores quas amet nesciunt, esse unde obcaecati aperiam? Tenetur, laboriosam magni?</p>
	<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate porro voluptatum eligendi alias id eius rem quod perferendis, incidunt, maiores quas amet nesciunt, esse unde obcaecati aperiam? Tenetur, laboriosam magni?</p>	
</section>

<section>
	<h1>The product</h1>
	<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate porro voluptatum eligendi alias id eius rem quod perferendis, incidunt, maiores quas amet nesciunt, esse unde obcaecati aperiam? Tenetur, laboriosam magni?</p>
	<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate porro voluptatum eligendi alias id eius rem quod perferendis, incidunt, maiores quas amet nesciunt, esse unde obcaecati aperiam? Tenetur, laboriosam magni?</p>
	<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate porro voluptatum eligendi alias id eius rem quod perferendis, incidunt, maiores quas amet nesciunt, esse unde obcaecati aperiam? Tenetur, laboriosam magni?</p>
</section>

<section>
	<h1>Where to buy</h1>
	<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate porro voluptatum eligendi alias id eius rem quod perferendis, incidunt, maiores quas amet nesciunt, esse unde obcaecati aperiam? Tenetur, laboriosam magni?</p>
</section>

<style lang="scss" type="text/scss">
	.content {
		width: 100%;
		max-width: var(--column-width);
		margin: var(--column-margin-top) auto 0 auto;
	}

	.grid {
		// Allow image-hours overlap
		margin-bottom: -3rem;
		display: grid;
		column-gap: $horizontal-rhythm * 3;
		grid-template-columns: 8fr 5fr;
		@include respond(tab-port) {
				grid-template-columns: 1fr;
			}
		// Add padding to prevent image-text overlap
		div:nth-child(1) {
			h2 {
				font-weight: normal;
			}
			h3 {
				font-weight: 500;
			}
		}
		div:nth-child(2) {
			h2 {
				font-weight: 700;
			}
		}
	}
	.glass {
		@include respond(tab-land) {
			border-bottom-right-radius: 0;
			border-top-right-radius: 0;
    	}
		@include respond(tab-port) {
			width: 100%;
			right: -0.5rem;
			border-bottom-right-radius: $border-radius;
			border-top-right-radius: $border-radius;
		}
		@include respond(phone) {
			width: 100%;
			left: 0;
		}
		overflow: hidden;
		z-index: -1;
		background: hsla(0, 0%, 98%, .7);
		box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
		backdrop-filter: blur( 5.5px );
		-webkit-backdrop-filter: blur( 5.5px );
		border-radius: $border-radius;
		position: absolute;
		top: 0;
		right: -2rem;
		height: calc(100% - 1rem);
		// Increase width to allow movement to the right to counteract wrapper margin
		width: calc(100% + 2* $horizontal-rhythm);
	}

	.glass-wrapper {
		display: flex;
		flex-flow: row wrap;
		justify-content: start;
		grid-gap: $vertical-rhythm;
		@include respond (tab-port) {
			grid-gap: 2*$horizontal-rhythm;
		}
		position: relative;
		margin-left: $horizontal-rhythm;
		// To get image overlap
		z-index: 100;
		padding: $vertical-rhythm 0 2*$vertical-rhythm calc(2* $horizontal-rhythm);
	}
	
	table {
		width: 100%;
		border-collapse:collapse; 
		td {
			border: 0px solid transparent;
			background-clip: padding-box;
		}
		tr > td + td {
			// Inner column spacing
			border-left-width: 0.5rem;
		}

		tr + tr > td {
			// Inner row spacing
			border-top-width: 0.25rem;
		}
	}

	// Image styling with filter
    // Wraps image
	.img-wrapper {
		display: flex;
		justify-content: center;
		align-items: center;
		overflow: hidden;
		margin-bottom: 3*$vertical-rhythm;
	}
	img {
		object-fit: cover;
		height: 100%;
		max-height: 40vh;
		width: 100%;
	}

		// Add as empty div to the img-wrapper
	.img-filter {
		position: absolute;
		height: 100%;
		width: 100%;
		left: 0;
		top: 0;
		background:
		linear-gradient(
			hsla(0, 0%, 98%, .5),
			hsla(0, 0%, 98%, .5)
	),
}
</style>
