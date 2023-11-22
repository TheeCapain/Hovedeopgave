<script>
    import Toastr from "toastr";
    import { onMount } from "svelte";
    import CinemaTable from "../components/cinemaData/cinemaTable.svelte";
    import { convertToCSV, downloadCSV } from "../assets/stores";
    import { supabase } from "../assets/stores";

    let name = "";
    let yearStart = "1900";
    let yearEnd = new Date().getFullYear();
    let postNr = "";
    let selectedStatus = "";
    let order;
    let orderName;
    let resultAmount;
    let cinema_list = [];
    let postCodeList = [];
    let statusList = [];

    function downloadSearch() {
        const csvContent = convertToCSV(cinema_list);
        downloadCSV(csvContent, "cinedata.csv");
        Toastr.success("Resultater eksportere");
    }

    async function test() {
        console.log(yearStart + " " + yearEnd);
        try {
            let { data, error } = await supabase
                .from("cinemas")
                .select(
                    `cinema_id, cinema_name, cinema_opened, cinema_closed, addresses!inner(address_road, address_city, address_postcode),status!inner(status_description)`
                )
                .ilike("cinema_name", "%" + name + "%")
                .ilike("addresses.address_postcode", "%" + postNr + "%")
                .ilike("status.status_description", "%" + selectedStatus + "%")
                .order("cinema_name");
            if (error) {
                throw new Error(error.message);
            }
            console.log(data);
            cinema_list = data;
            resultAmount = cinema_list.length;
            return data;
        } catch (error) {
            console.error("Error:", error);
            throw error;
        }
    }

    async function searchTheater() {
        const movie_search = {
            cinemaName: name,
            yearEnd: yearEnd,
            yearStart: yearStart,
            postnr: postNr,
            status: selectedStatus,
            orderColumn: orderName,
            order: order,
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

    onMount(async function getCinemas() {
        try {
            let { data, error } = await supabase
                .from("cinemas")
                .select(
                    `cinema_id, cinema_name, cinema_opened, cinema_closed, addresses(address_road, address_city,address_postcode),status(status_description)`
                );
            if (error) {
                throw new Error(error.message);
            }
            cinema_list = data;
            resultAmount = cinema_list.length;
            return data;
        } catch (error) {
            console.error("Error:", error);
            throw error;
        }
    });

    onMount(async function biograpostnr() {
        try {
            let { data, error } = await supabase
                .from("addresses")
                .select("address_postcode, address_city");
            if (error) {
                throw new Error(error.message);
            }

            return (postCodeList = data);
        } catch (error) {
            console.error("Error:", error);
            throw error;
        }
    });

    onMount(async function biografStatus() {
        try {
            let { data, error } = await supabase
                .from("status")
                .select("status_description");
            if (error) {
                throw new Error(error.message);
            }

            statusList = data;
        } catch (error) {
            console.error("Error:", error);
            throw error;
        }
    });
</script>

<aside
    class="fixed left-0 z-40 w-64 transition-transform -translate-x-full sm:translate-x-0"
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
                            class="dark:hover:bg-text-700 block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Bio navn"
                            bind:value={name}
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
                <span class="ml-3">
                    <p class="text-slate-100 dark:hover:bg-text-700">
                        Biografer aktive mellem:
                    </p></span
                >
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
                <h3 class="text-slate-100 dark:hover:bg-text-700">
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
                <h3 class="text-slate-100 dark:hover:bg-text-700">Status</h3>

                <select
                    class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Vælg status"
                    bind:value={selectedStatus}
                >
                    {#each statusList as status}
                        <option value={status.status_description}>
                            {status.status_description}
                        </option>
                    {/each}
                </select>
            </li>
            <li>
                <button
                    on:click={test}
                    type="button"
                    class="w-full text-white bg-green-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >Søg</button
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

<CinemaTable {cinema_list} />

<style>
    input {
        display: block;
        width: 500px;
        max-width: 100%;
    }
</style>
