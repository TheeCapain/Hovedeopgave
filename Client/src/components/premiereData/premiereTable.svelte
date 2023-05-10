<script>
    import PremiereData from "./premiereData.svelte";
    import { onMount } from "svelte";

    export let premiere_list = [];
    export let listlength;
    onMount(async function getPremieres() {
        let response = await fetch("http://localhost:8080/api/premieres").then(
            (response) => response.json()
        );
        premiere_list = response.movies;
        listlength = premiere_list.length;
    });
</script>

<div class="ml-64 overflow-x-auto">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead
            class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
        >
            <tr>
                <th scope="col" class="px-6 py-3">movieTitle</th>
                <th scope="col" class="px-6 py-3">Originaltitle</th>
                <th scope="col" class="px-6 py-3">distributer</th>
                <th scope="col" class="px-6 py-3">year</th>
                <th scope="col" class="px-6 py-3">Premierebiograf</th>
                <th scope="col" class="px-6 py-3">Censur</th>
            </tr>
        </thead>
        <tbody>
            {#each premiere_list as cinema}
                <PremiereData
                    movieTitle={cinema.movie_title}
                    Originaltitle={cinema.original_title}
                    distributer={cinema.distributor_name}
                    year={cinema.premiere_year}
                    Premierebiograf={cinema.Premiere_period}
                    Censur={cinema.rating}
                />
            {/each}
            <button
                type="button"
                class="w-full text-white bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                disabled
            >
                <svg
                    class="animate-spin h-5 w-5 mr-3 ..."
                    viewBox="0 0 24 24"
                />
                Indlæser biografer...
            </button>
        </tbody>
    </table>
</div>
