<script>
    import { onMount } from "svelte";
    import CinemaData from "./cinemaData.svelte";
    export let cinema_list = [];
    let order = "asc";

    function sortName() {
        if (order === "asc") {
            console.log("sorting names asc");
            cinema_list = cinema_list.sort((a, b) => {
                let fa = a.Biograf.toLowerCase(),
                    fb = b.Biograf.toLowerCase();

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
            console.log("sorting names desc");
            cinema_list = cinema_list.sort((a, b) => {
                let fa = a.Biograf.toLowerCase(),
                    fb = b.Biograf.toLowerCase();

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
                let fa = a.Adresse.toLowerCase(),
                    fb = b.Adresse.toLowerCase();

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
                let fa = a.Adresse.toLowerCase(),
                    fb = b.Adresse.toLowerCase();

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
                let fa = a.By.toLowerCase(),
                    fb = b.By.toLowerCase();

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
                let fa = a.By.toLowerCase(),
                    fb = b.By.toLowerCase();

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
            console.log(cinema_list[0]);
            cinema_list = cinema_list.sort((a, b) => {
                order = "desc";
                return b.Postnr - a.Postnr;
            });
        } else if (order === "desc") {
            order = "asc";
            cinema_list = cinema_list.sort((a, b) => {
                return a.Postnr - b.Postnr;
            });
        }
    }

    function sortOpened() {
        if (order === "asc") {
            cinema_list = cinema_list.sort((a, b) => {
                let fa = a.Åbnet.toLowerCase(),
                    fb = b.Åbnet.toLowerCase();

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
                let fa = a.Åbnet.toLowerCase(),
                    fb = b.Åbnet.toLowerCase();

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
                let fa = a.Lukket.toLowerCase(),
                    fb = b.Lukket.toLowerCase();

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
                let fa = a.Lukket.toLowerCase(),
                    fb = b.Lukket.toLowerCase();

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
                let fa = a.Status.toLowerCase(),
                    fb = b.Status.toLowerCase();

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
                let fa = a.Status.toLowerCase(),
                    fb = b.Status.toLowerCase();

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
                        on:click={sortClosed}
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
                            cinemaName={cinema.Biograf}
                            closedDate={cinema.Lukket}
                            openedDate={cinema.Åbnet}
                            cinemaStatus={cinema.Status}
                            cinemaAdress={cinema.Adresse}
                            cinemaPostNr={cinema.Postnr}
                            cinemaBy={cinema.By}
                        />
                    {/if}
                {/each}
            {/await}
        </tbody>
    </table>
</div>
