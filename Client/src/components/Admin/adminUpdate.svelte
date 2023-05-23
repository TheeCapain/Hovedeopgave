<script>
    import { Router, Link } from "svelte-navigator";
    import { onMount } from "svelte";

    let cinemaList = [];
    let selectedCinema = [];
    let newName;
    let newAlt;
    let cinemaId;
    let cinemaSearched = [];
    let cinema_name;

    let statusList = [];
    let addressList = [];
    let selectedStatus;
    let selectedaddress;
    let opened;
    let closed;

    async function updateCinema() {
        console.log(selectedCinema);
        console.log(selectedaddress);
        const cinemaupdates = {
            cinemaId: selectedCinema.cinema_id,
            cinemaName: selectedCinema.cinema_name,
            cinemaAlt: selectedCinema.cinema_alt_names,
            cinemaStatus: selectedCinema.status_id,
            cinemaAddress: selectedCinema.address_id,
            cinemaOpened: selectedCinema.cinema_opened,
            cinemaClosed: selectedCinema.cinema_closed
        };
        let response = await fetch("http://localhost:8080/api/biograf/update", {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(cinemaupdates),
        }).then((response) => response.json());
    }

    onMount(async function biograf() {
        let response = await fetch("http://localhost:8080/api/biograf").then(
            (response) => response.json()
        );
        cinemaList = response.biografer;
    });

    onMount(async function status() {
        let response = await fetch("http://localhost:8080/api/statusId").then(
            (response) => response.json()
        );
        statusList = response.status;
        console.log(statusList);
    });

    onMount(async function adresses() {
        let response = await fetch("http://localhost:8080/api/addresses").then(
            (response) => response.json()
        );
        addressList = response.addresses;
    });
</script>

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
                    class="inline-block p-4 text-blue-600 bg-gray-100 rounded-t-lg dark:bg-gray-800 dark:text-blue-500"
                >
                    Opdater biograf
                </h1>
            </Link>
        </li>
        <li class="mr-2">
            <Link to="/newCinema">
                <h1
                    class="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300"
                >
                    fjern biograf
                </h1>
            </Link>
        </li>
        <li class="mr-2">
            <Link to="/newAddress">
                <h1
                    class="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300"
                >
                    ny addresse
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
                    for="first_name"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >Biograf Navn</label
                >
                <input
                    type="text"
                    id="first_name"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Biograf navn"
                    bind:value={selectedCinema.cinema_name}
                    required
                />
            </div>
            <div>
                <label
                    for="last_name"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >Alternative navne</label
                >
                <input
                    type="text"
                    id="last_name"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Alternative"
                    bind:value={selectedCinema.cinema_alt_names}
                />
            </div>
            <div>
                <h3
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                    Status
                </h3>
                <select
                    class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Vælg status"
                    bind:value={selectedCinema.status_id}
                >
                    {#each statusList as status}
                        <option value={status.status_id}>
                            {status.status_description}
                        </option>
                    {/each}
                </select>
            </div>
            <div>
                <h3
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                    Adresse
                </h3>

                <select
                    class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Vælg addresse"
                    bind:value={selectedaddress}
                >
                    {#each addressList as address}
                        <option value={address.address_id}>
                            {address.address_road +
                                ", " +
                                address.address_postcode +
                                ", " +
                                address.address_city}
                        </option>
                    {/each}
                </select>
            </div>
            <div>
                <label for="start">Start date:</label>

                <input
                    type="date"
                    id="start"
                    name="trip-start"
                    bind:value={opened}
                    min="1900-01-01"
                />
                <input
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder={opened}
                    bind:value={selectedCinema.cinema_opened}
                />
            </div>
            <div>
                <label for="start">Lukke dato:</label>

                <input
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
                />
            </div>
        </div>
        <button
            type="button"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            on:click={updateCinema}>Submit</button
        >
    </form>
</div>
