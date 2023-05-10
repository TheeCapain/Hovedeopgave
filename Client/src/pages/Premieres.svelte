<script>
    import { onMount } from "svelte";
    import PremiereTable from "../components/premiereData/premiereTable.svelte";

    let movieName = "";
    let yearStart = 1900;
    let yearEnd = 2023;
    let country = "";
    let distributør = "";
    let premiere_list = [];

    onMount(async function getMovies() {
        let response = await fetch("http://localhost:8080/api/premieres").then(
            (response) => response.json()
        );
        premiere_list = response.movies;
        console.log(premiere_list)
    });

    async function searchMovies() {
        premiere_list = [];
        const movie_search = {
            movieName: movieName,
            yearEnd: yearEnd,
            yearStart: yearStart,
            country: country,
            distributor: distributør,
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
        premiere_list = response.movies;
    }
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
                            placeholder="Film navn"
                            bind:value={movieName}
                            required
                        />
                    </div>
                </form>
            </li>
            <li>
                <span class="ml-3">Find film der havde premiere mellem</span>
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
                <h3 class="mb-4 font-semibold text-gray-900 dark:text-white">
                    Land
                </h3>
                <input
                    type="search"
                    id="default-search"
                    class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Land"
                    bind:value={country}
                    required
                />
            </li>
            <li>
                <h3 class="mb-4 font-semibold text-gray-900 dark:text-white">
                    Distributør
                </h3>
                <input
                    type="search"
                    id="default-search"
                    class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Distributør"
                    bind:value={distributør}
                    required
                />
            </li>
            <li>
                <h3 class="mb-4 font-semibold text-gray-900 dark:text-white">
                    Censur
                </h3>
                <input
                    type="search"
                    id="default-search"
                    class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Censur"
                    bind:value={distributør}
                    required
                />
            </li>
            <li>
                <button
                    on:click={searchMovies}
                    type="button"
                    class="w-full text-white bg-green-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >Search</button
                >
            </li>
        </ul>
    </div>
</aside>

<PremiereTable {premiere_list} />
