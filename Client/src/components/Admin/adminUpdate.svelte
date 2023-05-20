<script>
    import { Router, Link } from "svelte-navigator";
    import { onMount } from "svelte";

    let cinemaList = [];
    let selectedCinema;
    let cinemaId;
    let cinemaSearched = [];

    async function searchTheater() {
        const movie_search = {
            cinemaId: selectedCinema,
        };
        let response = await fetch("http://localhost:8080/api/biograf/id", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(movie_search),
        }).then((response) => response.json());
        cinemaSearched = response.biografer;
    }

    onMount(async function biografStatus() {
        let response = await fetch("http://localhost:8080/api/biograf").then(
            (response) => response.json()
        );
        cinemaList = response.biografer;
    });
</script>

<div class="ml-64 overflow-x-auto">
    <ul
        class="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400"
    >
        <li class="mr-2">
            <Link to="/newCinema">
                <h1
                    class="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300"
                >
                    Opret ny biograf
                </h1>
            </Link>
        </li>
        <li class="mr-2">
            <Link to="/update">
                <h1
                    class="inline-block p-4 text-blue-600 bg-gray-100 rounded-t-lg dark:bg-gray-800 dark:text-blue-500"
                >
                    Opdater biograf
                </h1>
            </Link>
        </li>
        <li class="mr-2">
            <Link to="/newCinema">
                <h1
                    class="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300"
                >
                    fjern biograf
                </h1>
            </Link>
        </li>
    </ul>

    <div>
        <h3
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
            Søg biograf
        </h3>

        <select
            class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Vælg status"
            bind:value={selectedCinema}
        >
            {#each cinemaList as cinema}
                <option value={cinema.cinema_id}>
                    {cinema.cinema_name}
                </option>
            {/each}
        </select>
    </div>
    <button
        type="button"
        class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        on:click={searchTheater}>Search</button
    >
</div>
