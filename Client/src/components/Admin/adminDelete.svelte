<script>
    import { Link } from "svelte-navigator";
    import { onMount } from "svelte";
    import { user } from "../../assets/stores";
    import toastr from "toastr";
    let cinemaList = [];
    let selectedCinema = [];
    let opened;
    let closed;

    async function deleteCinema() {
        const cinemaDelete = {
            cinemaId: selectedCinema.cinema_id,
        };
        let response = await fetch("http://localhost:8080/api/biograf/delete", {
            method: "DELETE",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(cinemaDelete),
        }).then((response) => response.json());
        toastr.success("Biografen blev fjernet");
    }

    onMount(async function biograf() {
        let response = await fetch("http://localhost:8080/api/biograf").then(
            (response) => response.json()
        );
        cinemaList = response.biografer;
    });

    function handleLogout() {
        $user = null;
    }
</script>

<aside
    class="fixed top-36 left-0 z-40 w-64 transition-transform -translate-x-full sm:translate-x-0"
    aria-label="Sidebar"
>
    <div
        class="h-screen px-3 py-4 overflow-y-auto bg-gray-700 dark:bg-gray-800"
    >
        <ul>
            <li>
                <button
                    type="button"
                    class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                    on:click={handleLogout}>Log ud</button
                >
            </li>
        </ul>
    </div>
</aside>
<div class="ml-64 overflow-x-auto">
    <ul
        class="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400"
    >
        <li class="mr-2">
            <Link to="/newCinema">
                <h1
                    class="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300"
                >
                    Opret ny biograf
                </h1>
            </Link>
        </li>
        <li class="mr-2">
            <Link to="/update">
                <h1
                    class="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300"
                >
                    Opdater biograf
                </h1>
            </Link>
        </li>
        <li class="mr-2">
            <Link to="/deleteCinema">
                <h1
                    class="inline-block p-4 text-blue-600 bg-gray-100 rounded-t-lg dark:bg-gray-800 dark:text-blue-500"
                >
                    Fjern biograf
                </h1>
            </Link>
        </li>
        <li class="mr-2">
            <Link to="/newAddress">
                <h1
                    class="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300"
                >
                    Ny addresse
                </h1>
            </Link>
        </li>
    </ul>

    <div>
        <h3
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
            Find biograf
        </h3>

        <select
            class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Vælg biograf"
            bind:value={selectedCinema}
        >
            {#each cinemaList as cinema}
                <option value={cinema}>
                    {cinema.cinema_name}
                </option>
            {/each}
        </select>
    </div>
    <form>
        <div class="grid gap-6 mb-6 md:grid-cols-2">
            <div>
                <label
                    for="biografName"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >Biograf Navn</label
                >
                <input
                    type="text"
                    id="biografName"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Biograf navn"
                    bind:value={selectedCinema.cinema_name}
                    disabled
                />
            </div>
            <div>
                <label
                    for="AltName"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >Alternative navne</label
                >
                <input
                    type="text"
                    id="AltName"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Alternative"
                    bind:value={selectedCinema.cinema_alt_name}
                    disabled
                />
            </div>
            <div>
                <label
                    for="description"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >Status</label
                >
                <input
                    type="text"
                    id="description"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="status"
                    bind:value={selectedCinema.status_description}
                    disabled
                />
            </div>
            <div>
                <label
                    for="last_name"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >Status</label
                >
                <input
                    type="text"
                    id="last_name"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Alternative"
                    value={selectedCinema.address_road +
                        ", " +
                        selectedCinema.address_postcode +
                        ", " +
                        selectedCinema.address_city}
                    disabled
                />
            </div>
            <div>
                <label for="start">Start date:</label>

                <input
                    type="date"
                    id="start"
                    name="trip-start"
                    bind:value={opened}
                    min="1900-01-01"
                    disabled
                />
                <input
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder={opened}
                    bind:value={selectedCinema.cinema_opened}
                    disabled
                />
            </div>
            <div>
                <label for="start">Lukke dato:</label>

                <input
                    disabled
                    type="date"
                    id="start"
                    name="trip-start"
                    bind:value={closed}
                    min="1900-01-01"
                />
                <input
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder={closed}
                    bind:value={selectedCinema.cinema_closed}
                    disabled
                />
            </div>
        </div>
        <button
            type="button"
            class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
            on:click={deleteCinema}>Slet biograf</button
        >
    </form>
</div>
