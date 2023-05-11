<script>
    import { onMount } from "svelte";
    import CinemaTable from "../components/cinemaData/cinemaTable.svelte";
    import Checkbox from "../components/checkbox.svelte";

    let name;
    let yearStart = 1900;
    let yearEnd = 2023;
    let postNr = "";
    let selectedStatus = "";

    let resultAmount;

    let cinema_list = [];

    let postCodeList = [];
    let selectedPostNr;

    let statusList = [];

    async function searchTheater() {
        cinema_list = [];
        console.log(postNr);
        const movie_search = {
            cinemaName: name,
            yearEnd: yearEnd,
            yearStart: yearStart,
            postnr: postNr,
            // @ts-ignore
            status: selectedStatus.status_description,
        };
        let response = await fetch("http://localhost:8080/api/biograf/search", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(movie_search),
        }).then((response) => response.json());
        cinema_list = response.biografer;
        resultAmount = cinema_list.length;
    }

    onMount(async function getBiografer() {
        let response = await fetch("http://localhost:8080/api/biograf").then(
            (response) => response.json()
        );
        cinema_list = response.biografer;
        resultAmount = cinema_list.length;
    });

    onMount(async function biograpostnr() {
        let response = await fetch(
            "http://localhost:8080/api/adresse/postnr"
        ).then((response) => response.json());
        postCodeList = response.postnr;
    });

    onMount(async function biografStatus() {
        let response = await fetch("http://localhost:8080/api/status").then(
            (response) => response.json()
        );
        statusList = response.status;
    });
</script>

<aside
    class="fixed top-36 left-0 z-40 w-64 transition-transform -translate-x-full sm:translate-x-0"
    aria-label="Sidebar"
>
    <div class="h-flex px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
        <ul class="space-y-2 font-medium">
            <li>
                <form>
                    <label
                        for="default-search"
                        class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                        >Search</label
                    >
                    <div class="relative">
                        <div
                            class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
                        >
                            <svg
                                aria-hidden="true"
                                class="w-5 h-5 text-gray-500 dark:text-gray-400"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                                ><path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                /></svg
                            >
                        </div>
                        <input
                            type="search"
                            id="default-search"
                            class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Bio navn"
                            bind:value={name}
                            required
                        />
                    </div>
                </form>
            </li>
            <li>
                <span class="ml-3">Viser: {resultAmount} resultater</span>
            </li>
            <li>
                <span class="ml-3">Biografer aktive mellem:</span>
                <input
                    type="search"
                    id="default-search"
                    class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Årstal Start"
                    bind:value={yearStart}
                    required
                />
                <input
                    type="search"
                    id="default-search"
                    class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Årstal Slut"
                    bind:value={yearEnd}
                    required
                />
            </li>
            <li>
                <h3 class="mb-4 font-semibold text-gray-900 dark:text-white">
                    Postnummer
                </h3>
                <input
                    type="search"
                    id="default-search"
                    class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="postnr"
                    bind:value={postNr}
                    required
                />
                
            </li>
            <li>
                <h3 class="mb-4 font-semibold text-gray-900 dark:text-white">
                    Status
                </h3>

                <select
                    class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Vælg status"
                    bind:value={selectedStatus}
                >
                    {#each statusList as status}
                        <option value={status}>
                            {status.status_description}
                        </option>
                    {/each}
                </select>
            </li>
            <li>
                <button
                    on:click={searchTheater}
                    type="button"
                    class="w-full text-white bg-green-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >Search</button
                >
            </li>
        </ul>
    </div>
</aside>

<CinemaTable {cinema_list} />

<style>
    input {
        display: block;
        width: 500px;
        max-width: 100%;
    }
</style>
