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
                <th scope="col" class="px-6 py-3">Navn</th>
                <th scope="col" class="px-6 py-3">Adresse</th>
                <th scope="col" class="px-6 py-3">Postnummer</th>
                <th scope="col" class="px-6 py-3">By</th>
                <th scope="col" class="px-6 py-3">Åbnet</th>
                <th scope="col" class="px-6 py-3">Lukket</th>
             
                <th scope="col" class="px-6 py-3">Status</th>

            
            </tr>
        </thead>
        <tbody>
            {#each cinemas as cinema}
                <CinemaData
                    cinemaName={cinema.Biograf}
                    cinemaAdress={cinema.Adresse}
                    cinemaPostNr={cinema.Postnr}
                    cinemaBy={cinema.By}
                    closedDate={cinema.Lukket}
                    openedDate={cinema.Åbnet}
                    cinemaStatus={cinema.Status}
                />
            {/each}
        </tbody>
    </table>
</div>
