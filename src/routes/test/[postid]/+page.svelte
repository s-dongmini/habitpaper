<script>
    export let data

    const post = data.posts[0].item

    const keys = Object.keys(post);
    
    let tempKey = keys[Math.floor(Math.random() * keys.length)];
    let flag = 0;

    function helper() {
        if (flag === 0) {
            flag = 1;
        } else {
            flag = 0;
            tempKey = keys[Math.floor(Math.random() * keys.length)];
        }
    }
</script>

<div class="flex flex-col justify-center items-center h-screen"
     on:click={helper}>
    <div>{tempKey}</div>
    {#if flag === 1}
        <div>{post[tempKey]}</div>
    {/if}
</div>