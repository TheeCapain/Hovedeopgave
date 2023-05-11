<script>
    import CinemaData from "./cinemaData.svelte";
    export let cinema_list = [];
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
            {:else}
                {#await cinema_list then cinema_list}
                    {#each cinema_list as cinema}
                        <CinemaData
                            cinemaName={cinema.cinema_name}
                            closedDate={cinema.cinema_closed}
                            openedDate={cinema.cinema_opened}
                            cinemaStatus={cinema.status_description}
                            cinemaAdress={cinema.address_road}
                            cinemaPostNr={cinema.address_postcode}
                            cinemaBy={cinema.address_city}
                        />
                    {/each}
                {/await}
            {/if}
        </tbody>
    </table>
</div>
