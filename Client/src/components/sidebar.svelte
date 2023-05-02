<script>
    import CinemaTable from "./cinemaTable.svelte";
    import { onMount } from "svelte";
    import Checkbox from "./checkbox.svelte";
    let name;
    let yearStart = 1900;
    let yearEnd = 2023;

    let cinema_list = [];
    let postCodeList = [];
    let statusList = [];

    async function searchTheater() {
        cinema_list = [];
        const movie_search = {
            movietitle: name,
            yearEnd: yearEnd,
            yearStart: yearStart,
        };
        let response = await fetch("http://localhost:8080/api/biograf/search", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(movie_search),
        }).then((response) => response.json());
        cinema_list = response.biografer;
    }

    onMount(async function biograpostnr() {
        let response = await fetch(
            "http://localhost:8080/api/adresse/postnr"
        ).then((response) => response.json());
        postCodeList = response.postnr;
    });

    onMount(async function biograpostnr() {
        let response = await fetch("http://localhost:8080/api/status").then(
            (response) => response.json()
        );
        statusList = response.status;
    });
</script>

<aside
    id="default-sidebar"
    class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
    aria-label="Sidebar"
>
    <div class="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
        <ul class="space-y-2 font-medium">
            <li>
                <a
                    href="/"
                    class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                    <svg
                        aria-hidden="true"
                        class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                        ><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" /><path
                            d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"
                        /></svg
                    >
                    <span class="ml-3">Biograf Database</span>
                </a>
            </li>
            <li>
                <a
                    href="/"
                    class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                    <svg
                        aria-hidden="true"
                        class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                        ><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" /><path
                            d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"
                        /></svg
                    >
                    <span class="ml-3">Filmpremiere Database</span>
                </a>
            </li>
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
                <button
                    id="dropdownBgHoverButton"
                    data-dropdown-toggle="dropdownBgHover"
                    class="text-white w-full bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    type="button"
                    >Vælg Postnr<svg
                        class="w-4 h-4 ml-2"
                        aria-hidden="true"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        ><path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M19 9l-7 7-7-7"
                        /></svg
                    ></button
                >
                <div
                    id="dropdownBgHover"
                    class="z-10 h-72 hidden overflow-auto bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                >
                    <ul
                        class="p-3 w-full space-y-1 text-sm text-gray-700 dark:text-gray-200"
                        aria-labelledby="dropdownBgHoverButton"
                    >
                        {#each postCodeList as code}
                            <Checkbox
                                name={code.address_postcode}
                                description={code.address_city}
                            />
                        {/each}
                    </ul>
                </div>
            </li>
            <li>
                <h3 class="mb-4 font-semibold text-gray-900 dark:text-white">
                    Status
                </h3>
                <button
                    id="dropdownBgHoverButton"
                    data-dropdown-toggle="dropdownBgHover"
                    class="text-white w-full bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    type="button"
                    >Vælg Status<svg
                        class="w-4 h-4 ml-2"
                        aria-hidden="true"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        ><path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M19 9l-7 7-7-7"
                        /></svg
                    ></button
                >
                <div
                    id="dropdownBgHover"
                    class="z-10 h-72 hidden overflow-auto bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                >
                    <ul
                        class="p-3 w-full space-y-1 text-sm text-gray-700 dark:text-gray-200"
                        aria-labelledby="dropdownBgHoverButton"
                    >
                        {#each statusList as status}
                            <Checkbox
                                name={status.status_description}
                                description={""}
                            />
                        {/each}
                    </ul>
                </div>
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
