<script>
    import { onMount } from "svelte";
    import PremiereTable from "../components/premiereData/premiereTable.svelte";

    let movieName = "";
    let yearStart = 1900;
    let yearEnd = 2023;
    let selectedCountry = "";
    let selectedRating = "";
    let selectedDistributør = "";
    let premiereList = [];
    let countryList = [];
    let ratingList = [];
    let distributorList = [];
    let resultAmount;

    //Dette skal forstås
    function convertArrayOfObjectsToCSV(array) {
        const header = Object.keys(array[0]);
        const csvRows = array.map((obj) =>
            header.map((field) => JSON.stringify(obj[field])).join(",")
        );
        return [header.join(","), ...csvRows].join("\n");
    }

    function downloadCSV(csvContent, fileName) {
        const blob = new Blob([csvContent], {
            type: "text/csv;charset=utf-8;",
        });
        const link = document.createElement("a"); 
            if (link.download !== undefined) {
            const url = URL.createObjectURL(blob);
            link.setAttribute("href", url);
            link.setAttribute("download", fileName); 
            link.style.visibility = "hidden";
            link.click();
        }
    }
    function downloadSearch() {
        const csvContent = convertArrayOfObjectsToCSV(premiereList);
        downloadCSV(csvContent, "premiereData.csv");
    }

    onMount(async function getMovies() {
        let response = await fetch("http://localhost:8080/api/premieres").then(
            (response) => response.json()
        );
        premiereList = response.movies;
        resultAmount = premiereList.length;
    });

    async function searchMovies() {
        const movie_search = {
            movieName: movieName,
            yearEnd: yearEnd,
            yearStart: yearStart,
            // @ts-ignore
            country: selectedCountry,
            // @ts-ignore
            distributor: selectedDistributør,
            // @ts-ignore
            rating: selectedRating,
        };
        let response = await fetch(
            "http://localhost:8080/api/premieres/search",
            {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(movie_search),
            }
        ).then((response) => response.json());
        premiereList = response.movies;
        resultAmount = premiereList.length;
    }

    onMount(async function getCountries() {
        let response = await fetch("http://localhost:8080/api/country").then(
            (response) => response.json()
        );
        countryList = response.countries;
    });

    onMount(async function getRating() {
        let response = await fetch("http://localhost:8080/api/rating").then(
            (response) => response.json()
        );
        ratingList = response.ratings;
    });

    onMount(async function getRating() {
        let response = await fetch(
            "http://localhost:8080/api/distributors"
        ).then((response) => response.json());
        distributorList = response.distributors;
    });
</script>

<aside
    class="fixed top-36 left-0 z-40 w-64 transition-transform -translate-x-full sm:translate-x-0"
    aria-label="Sidebar"
>
    <div
        class="h-screen px-3 py-4 overflow-y-auto bg-gray-700 dark:bg-gray-800"
    >
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
                            class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Film navn"
                            bind:value={movieName}
                            required
                        />
                    </div>
                </form>
            </li>
            {#if resultAmount != undefined}
                <li>
                    <span class="ml-3"
                        ><p class="text-slate-100 dark:hover:bg-text-700">
                            Viser: {resultAmount} resultater
                        </p></span
                    >
                </li>
            {/if}
            <li>
                <span class="ml-3"
                    ><p class="text-slate-100 dark:hover:bg-text-700">
                        Find film der havde mellem:
                    </p></span
                >
                <input
                    type="search"
                    id="default-search"
                    class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Premiere år"
                    bind:value={yearStart}
                    required
                />
                <input
                    type="search"
                    id="default-search"
                    class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Premiere år"
                    bind:value={yearEnd}
                    required
                />
            </li>
            <li>
                <h3 class="text-slate-100 dark:hover:bg-text-700">Land</h3>

                <select
                    class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Vælg status"
                    bind:value={selectedCountry}
                >
                    {#each countryList as country}
                        <option value={country.Country_name}>
                            {country.Country_name}
                        </option>
                    {/each}
                </select>
            </li>
            <li>
                <h3 class="text-slate-100 dark:hover:bg-text-700">
                    Distributør
                </h3>
                <select
                    class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Vælg status"
                    bind:value={selectedDistributør}
                >
                    {#each distributorList as distributor}
                        <option value={distributor.distributor_name}>
                            {distributor.distributor_name}
                        </option>
                    {/each}
                </select>
            </li>
            <li>
                <h3 class="text-slate-100 dark:hover:bg-text-700">Censur</h3>
                <select
                    class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Vælg status"
                    bind:value={selectedRating}
                >
                    {#each ratingList as rating}
                        <option value={rating.rating}>
                            {rating.rating}
                        </option>
                    {/each}
                </select>
            </li>
            <li>
                <button
                    on:click={searchMovies}
                    type="button"
                    class="w-full text-white bg-green-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >Search</button
                >
            </li>
            <li>
                <button
                    on:click={downloadSearch}
                    type="button"
                    class="w-full text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >Download søgning som CSV</button
                >
            </li>
        </ul>
    </div>
</aside>

<PremiereTable {premiereList} />
