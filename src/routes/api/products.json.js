export const get = async () => {
    const allProductFiles = import.meta.glob('../assortiment/*.md')
    const iterableProductFiles = Object.entries(allProductFiles)
  
    const allProducts = await Promise.all(
      iterableProductFiles.map(async ([path, resolver]) => {
        const { metadata } = await resolver()
        const postPath = path.slice(2, -3)
  
        return {
          meta: metadata,
          path: postPath,
        }
      })
    )
  
    const sortedPosts = allProducts.sort((a, b) => {
      return new Date(b.meta.date) - new Date(a.meta.date)
    })
  
    return {
      body: allProducts
    }
  }