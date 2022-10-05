<script lang="ts">
    import { fly } from "svelte/transition";

    let id: string = "";
    let password: string = "";
    let confirmPassword: string = "";
    let error: string = "";
    let errorCount: number = 0;

    function handleSubmit(e: SubmitEvent) {
        if (!id) {
            error = "Please enter the id";
            errorCount++;
            e.preventDefault();
        } else if (!password) {
            error = "Please enter the password";
            errorCount++;
            e.preventDefault();
        } else if (!confirmPassword) {
            error = "Please enter the confirm password";
            errorCount++;
            e.preventDefault();
        } else if (password !== confirmPassword) {
            error = "Passwords do not match";
            errorCount++;
            e.preventDefault();
        }
    }
</script>

<div
    in:fly={{ y: -30 }}
    class="w-full h-screen flex flex-col justify-center items-center"
>
    <div
        class="bg-white w-96 h-[30rem] flex flex-col items-center shadow-xl shadow-slate-700"
    >
        <div
            class="bg-rose-800 py-5  text-center text-xl w-full text-white font-semibold tracking-widest"
        >
            S i g n U p
        </div>
        <form
            class="flex flex-col items-center relative"
            action=""
            on:submit={handleSubmit}
        >
            <input
                class="transition mt-20 p-2 outline-none shadow-lg focus:shadow-violet-200"
                type="text"
                id="id"
                name="id"
                placeholder="ID"
                bind:value={id}
            />
            <input
                class="transition mt-5 p-2 outline-none shadow-lg focus:shadow-violet-200"
                type="password"
                id="password"
                name="password"
                placeholder="PASSWORD"
                bind:value={password}
            />
            <input
                class="transition mt-5 p-2 outline-none shadow-lg focus:shadow-violet-200"
                type="password"
                id="confirm-password"
                name="confirm-password"
                placeholder="Confirm PASSWORD"
                bind:value={confirmPassword}
            />
            {#if error}
                {#key errorCount}
                    <p
                        in:fly={{ y: 20 }}
                        class="text-red-700 text-xs m-2 absolute top-64"
                    >
                        {error}
                    </p>
                {/key}
            {/if}
            <input
                class="mt-10 p-3 w-full outline-none rounded-full shadow-lg focus:shadow-violet-200 text-slate-800 font-semibold"
                id="submit"
                type="submit"
                value="submit"
            />
        </form>
        <p class="m-5 font-light text-xs text-slate-800">
            Already have an account? <a class="font-semibold" href="/login"
                >Login</a
            >
        </p>
    </div>
</div>
