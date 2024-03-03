<script>
    import { base } from '$app/paths';
    // Receive y Props
    export let y;
    let tabs = [
        {
            name: "Home",
            link: "{base}#",
        },
        {
            name: "Projects",
            link: "{base}#projects",
        },
        {
            name: "About",
            link: "{base}#about",
        },
    ]
</script>

<header
        class={'sticky z-[10] top-5 duration-200 px-6 flex items-center justify-between border border-solid' + (
    y > 0
    ? 'py-4 bg-slate-950 border-violet-950'
    : 'py-6 bg-transparent border-transparent'
    )}
>
    <h1 class="font-medium">
        <b class="font-bold poppins">My</b> Portfolio
    </h1>
    <div class="sm:flex items-center gap-4 hidden">
        {#each tabs as tab, index}
            <a href = {tab.link} class="duration-200 hover:text-violet-400" >
                <p>{tab.name}</p>
            </a>
            {/each}
    </div>
<!-- My Contact Details -->
    <a href="https://www.linkedin.com/in/mohitchn/" target="_parent" class="blueShadow relative overflow-hidden px-5 py-2 group rounded-full bg-white text-slate-950">
        <div
                class="absolute top-0 right-full w-full h-full bg-violet-400 opacity-20 group-hover:translate-x-full z-0 duration-200"
        />
        <h4 class = "relative z-9">Resume ⬇️</h4>
    </a>
</header>
