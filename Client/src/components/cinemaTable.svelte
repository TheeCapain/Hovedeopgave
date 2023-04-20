<script>
    import { onMount } from "svelte";
    import { each } from "svelte/internal";
    import CinemaData from "./cinemaData.svelte";

    let cinemas = [];

    onMount(async function getBiografer() {
        let response = await fetch("http://localhost:8080/api/biograf").then(
            (response) => response.json()
        );

        cinemas = response.biografer;

        console.log(cinemas);
    });
</script>

<div class="relative overflow-x-auto">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead
            class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
        >
            <tr>
                <th scope="col" class="px-6 py-3"> Cinema name </th>
                <th scope="col" class="px-6 py-3"> cinemaAdress </th>
                <th scope="col" class="px-6 py-3"> closedDate </th>
                <th scope="col" class="px-6 py-3"> openedDate </th>
            </tr>
        </thead>
        <tbody>
            {#each cinemas as cinema}
                <CinemaData
                    cinemaName={cinema.Biograf}
                    cinemaAdress={cinema.Adresse}
                    closedDate={cinema.Lukket}
                    openedDate={cinema.Åbnet}
                />
            {/each}
        </tbody>
    </table>
</div>
