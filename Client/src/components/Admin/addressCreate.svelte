<script>
    import { Link } from "svelte-navigator";
    import { user } from "../../assets/stores";
    import toastr from "toastr";
    let roadName;
    let cityName;
    let postCode;

    async function addAddress() {
        const newAddress = {
            roadName: roadName,
            cityName: cityName,
            postCode: postCode,
        };
        let response = await fetch("http://localhost:8080/api/address", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(newAddress),
        }).then((response) => response.json());
        if (response.ok) {
            toastr.success("Addresse er oprettet");
        }
    }

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
                    class="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300"
                >
                    Fjern biograf
                </h1>
            </Link>
        </li>
        <li class="mr-2">
            <Link to="/newAddress">
                <h1
                    class="inline-block p-4 text-blue-600 bg-gray-100 rounded-t-lg active dark:bg-gray-800 dark:text-blue-500"
                >
                    Ny addresse
                </h1>
            </Link>
        </li>
    </ul>

    <form>
        <div class="grid gap-6 mb-6 md:grid-cols-2">
            <div>
                <label
                    for="first_name"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >Vej navn</label
                >
                <input
                    type="text"
                    id="first_name"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Indtast vej navn"
                    bind:value={roadName}
                    required
                />
            </div>
            <div>
                <label
                    for="first_name"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >By</label
                >
                <input
                    type="text"
                    id="first_name"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Indtast By navn"
                    bind:value={cityName}
                    required
                />
            </div>
            <div>
                <label
                    for="first_name"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >Postnummer</label
                >
                <input
                    type="text"
                    id="first_name"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="indtast postnr"
                    bind:value={postCode}
                    required
                />
            </div>
        </div>
        <button
            on:click={addAddress}
            type="button"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >Opret Adresse</button
        >
    </form>
</div>
