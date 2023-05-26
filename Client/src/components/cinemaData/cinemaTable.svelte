<script>
    import CinemaData from "./cinemaData.svelte";
    export let cinema_list = [];
    let tempList = [];
    let order = "asc";

    function sortName() {
        if (order === "asc") {
            cinema_list = cinema_list.sort((a, b) => {
                let fa = a.cinema_name.toLowerCase(),
                    fb = b.cinema_name.toLowerCase();

                if (fa < fb) {
                    return -1;
                }

                if (fa > fb) {
                    return 1;
                }
                order = "desc";
                return 0;
            });
        } else if (order === "desc") {
            cinema_list = cinema_list.sort((a, b) => {
                let fa = a.cinema_name.toLowerCase(),
                    fb = b.cinema_name.toLowerCase();

                if (fa > fb) {
                    return -1;
                }

                if (fa < fb) {
                    return 1;
                }
                order = "asc";
                return 0;
            });
        }
    }

    function sortAddress() {
        if (order === "asc") {
            cinema_list = cinema_list.sort((a, b) => {
                let fa = a.address_road.toLowerCase(),
                    fb = b.address_road.toLowerCase();

                if (fa < fb) {
                    return -1;
                }

                if (fa > fb) {
                    return 1;
                }
                order = "desc";
                return 0;
            });
        } else if (order === "desc") {
            cinema_list = cinema_list.sort((a, b) => {
                let fa = a.address_road.toLowerCase(),
                    fb = b.address_road.toLowerCase();

                if (fa > fb) {
                    return -1;
                }

                if (fa < fb) {
                    return 1;
                }
                order = "asc";
                return 0;
            });
        }
    }

    function sortCity() {
        if (order === "asc") {
            cinema_list = cinema_list.sort((a, b) => {
                let fa = a.address_city.toLowerCase(),
                    fb = b.address_city.toLowerCase();

                if (fa < fb) {
                    return -1;
                }

                if (fa > fb) {
                    return 1;
                }
                order = "desc";
                return 0;
            });
        } else if (order === "desc") {
            cinema_list = cinema_list.sort((a, b) => {
                let fa = a.address_city.toLowerCase(),
                    fb = b.address_city.toLowerCase();

                if (fa > fb) {
                    return -1;
                }

                if (fa < fb) {
                    return 1;
                }
                order = "asc";
                return 0;
            });
        }
    }

    function sortPostNr() {
        console.log(order);
        if (order === "asc") {
            cinema_list = cinema_list.sort((a, b) => {
                order = "desc";
                return b.address_postcode - a.address_postcode;
            });
        } else if (order === "desc") {
            order = "asc";
            cinema_list = cinema_list.sort((a, b) => {
                return a.address_postcode - b.address_postcode;
            });
        }
    }

    function sortOpened() {
        if (order === "asc") {
            cinema_list = cinema_list.sort((a, b) => {
                let fa = a.cinema_opened.toLowerCase(),
                    fb = b.cinema_opened.toLowerCase();

                if (fa < fb) {
                    return -1;
                }

                if (fa > fb) {
                    return 1;
                }
                order = "desc";
                return 0;
            });
        } else if (order === "desc") {
            cinema_list = cinema_list.sort((a, b) => {
                let fa = a.cinema_opened.toLowerCase(),
                    fb = b.cinema_opened.toLowerCase();

                if (fa > fb) {
                    return -1;
                }

                if (fa < fb) {
                    return 1;
                }
                order = "asc";
                return 0;
            });
        }
    }

    function sortClosed() {
        if (order === "asc") {
            cinema_list = cinema_list.sort((a, b) => {
                let fa = a.cinema_closed.toLowerCase(),
                    fb = b.cinema_closed.toLowerCase();

                if (fa < fb) {
                    return -1;
                }

                if (fa > fb) {
                    return 1;
                }
                order = "desc";
                return 0;
            });
        } else if (order === "desc") {
            cinema_list = cinema_list.sort((a, b) => {
                let fa = a.cinema_closed.toLowerCase(),
                    fb = b.cinema_closed.toLowerCase();

                if (fa > fb) {
                    return -1;
                }

                if (fa < fb) {
                    return 1;
                }
                order = "asc";
                return 0;
            });
        }
    }

    function sortStatus() {
        if (order === "asc") {
            cinema_list = cinema_list.sort((a, b) => {
                let fa = a.status_description.toLowerCase(),
                    fb = b.status_description.toLowerCase();

                if (fa < fb) {
                    return -1;
                }

                if (fa > fb) {
                    return 1;
                }
                order = "desc";
                return 0;
            });
        } else if (order === "desc") {
            cinema_list = cinema_list.sort((a, b) => {
                let fa = a.status_description.toLowerCase(),
                    fb = b.status_description.toLowerCase();

                if (fa > fb) {
                    return -1;
                }

                if (fa < fb) {
                    return 1;
                }
                order = "asc";
                return 0;
            });
        }
    }
</script>

<div class="ml-64 overflow-x-auto">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead
            class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
        >
            <tr>
                <th scope="col" class="px-6 py-3">
                    <button
                        on:click={sortName}
                        class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
                        >Navn</button
                    ></th
                >

                <th scope="col" class="px-6 py-3">
                    <button
                        on:click={sortAddress}
                        class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
                        >Adresse</button
                    ></th
                >

                <th scope="col" class="px-6 py-3">
                    <button
                        on:click={sortPostNr}
                        class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
                        >Postnummer</button
                    ></th
                >
                <th scope="col" class="px-6 py-3">
                    <button
                        on:click={sortCity}
                        class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
                        >By</button
                    ></th
                >
                <th scope="col" class="px-6 py-3">
                    <button
                        on:click={sortOpened}
                        class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
                        >Åbnet</button
                    ></th
                >
                <th scope="col" class="px-6 py-3">
                    <button
                        on:click={sortOpened}
                        class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
                        >Lukket</button
                    ></th
                >
                <th scope="col" class="px-6 py-3">
                    <button
                        on:click={sortStatus}
                        class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
                        >Status</button
                    ></th
                >
            </tr>
        </thead>
        <tbody>
            {#await cinema_list then cinema_list}
                {#each cinema_list as cinema}
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
                        <CinemaData
                            cinemaName={cinema.cinema_name}
                            closedDate={cinema.cinema_closed}
                            openedDate={cinema.cinema_opened}
                            cinemaStatus={cinema.status_description}
                            cinemaAdress={cinema.address_road}
                            cinemaPostNr={cinema.address_postcode}
                            cinemaBy={cinema.address_city}
                        />
                    {/if}
                {/each}
            {/await}
        </tbody>
    </table>
</div>
