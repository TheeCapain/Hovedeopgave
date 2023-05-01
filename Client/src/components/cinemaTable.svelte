<script>
    import CinemaData from "./cinemaData.svelte";
    export let cinema_list = [];
    import { onMount } from "svelte";

    onMount(async function getBiografer() {
        let response = await fetch("http://localhost:8080/api/biograf").then(
            (response) => response.json()
        );
        cinema_list = response.biografer;
    });
</script>

<div class="ml-64 overflow-x-auto">
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
            {#if cinema_list.length === 0}
                <h1 class="px-6 py-3">Ingen resultater</h1>
            {/if}

            {#each cinema_list as cinema}
                <CinemaData
                    cinemaName={cinema.cinema_name}
                    closedDate={cinema.cinema_closed}
                    openedDate={cinema.cinema_opened}
                    cinemaStatus={cinema.cinema_status}
                    cinemaAdress={cinema.address_road}
                    cinemaPostNr={cinema.address_postcode}
                    cinemaBy={cinema.address_city}
                />
            {:else}
                <h1 class="px-6 py-3">Indlæser...</h1>
            {/each}
        </tbody>
    </table>
</div>
