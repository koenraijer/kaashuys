<script>
    export let posts

</script>

<ul>
    {#each posts as post}
        <li>
            <a href={post.path}>
                <article id="post">
                    <h2>
                        {post.meta.title}
                    </h2>
                    <p>{post.meta.subtitle}</p>
                    <span>{post.meta.date}</span>
                </article>
            </a>
        </li>
    {/each}
</ul>
    
<style lang="scss" type="text/scss">
    ul {
        list-style-type: none;
        margin-left: 0;
        padding-left: 0;
    }
    a {
        text-decoration: none;
        color: inherit;
        article {
            position: relative;
            background: transparent;
            padding: $vertical-rhythm $horizontal-rhythm $vertical-rhythm;
            margin: $vertical-rhythm 0 $vertical-rhythm;
            h2 {
                margin-top: 0;
            }
            border-radius: 10px;
            &:hover {
                &:after {
                    transform: scale(1.025);
                }
                h2 {
                    color: $link-color;
                } 
            }
            &:after {
                content: ' ';
                z-index: -5 !important;
                transition: all 0.3s $ease-bounce;
                position: absolute;
                height: 100%;
                width: 100%;
                left: 0;
                top: 0;
                background: $light-surface2;
                border-radius: 10px;
            }
        }
    }
    
</style>