<script lang="ts">
    import {timeCalc} from "$lib/_util";
    import type { PageData } from "./$types";

    export let data: PageData;

    const user = data.user;
    const posts = data.posts;
</script>

<div class="flex flex-col justify-center items-center h-screen">
    <h1 class="text-4xl mb-2">Welcome!</h1>
    {#if user}
        <div>{user}</div>
    {/if}
    <h2 class="text-2xl mb-10">Habit Paper</h2>
    {#if user}
        <a class="rounded-full shadow-md px-3 m-2" href="/logout">logout</a>
        <a class="rounded-full shadow-md px-3 m-2" href="/test">Make Test!</a>
    {:else}
        <a class="rounded-full shadow-md px-3 m-2" href="/login">login</a>
        <a class="rounded-full shadow-md px-3 m-2" href="/signup">Sign up</a>
    {/if}
    {#each posts as post}
			<div class="transition w-full mb-5 shadow-lg hover:shadow-2xl bg-slate-50">
				<a href="/test/{post.id}">
					<div class="sm:text-2xl text-xl font-bold p-4">
						Test
					</div>
				</a>
			</div>
		{/each}
</div>
