<script context="module">
    export const load = async ({ fetch }) => {
      const posts = await fetch('/api/posts.json')
      const allPosts = await posts.json()
    
      return {
        props: {
          posts: allPosts
        }
      }
    }
</script>

<script>
    export let posts;

    import PostList from '$lib/blog/PostList.svelte'

</script> 

<svelte:head>
    <title>'t Kaashuys - Nieuws</title>
</svelte:head>

<section>
  <h1>Nieuws</h1>
  <h2>Volg de laatste ontwikkelingen bij 't Kaashuys!</h2>
</section>

<PostList {posts}/>

<style lang="scss" type="text/scss">
	h2 {
    font-weight: normal;
  }
</style>