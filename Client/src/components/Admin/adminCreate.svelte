<script>
    import { Router, Link } from "svelte-navigator";

    let cinema_name;

    async function addCinema() {
        const new_cinema = {
            cinemaName: cinema_name,
        };
        let response = await fetch("http://localhost:8080/api/biograf", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(new_cinema),
        }).then((response) => response.json());
    }
</script>

<h1>Tilføj endnu en biograf</h1>

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
                bind:value={cinema_name}
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
            />
        </div>
        <div>
            <label
                for="company"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Status</label
            >
            <input
                type="text"
                id="company"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Status"
            />
        </div>
        <div>
            <label
                for="phone"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Addresse</label
            >
            <input
                type="tel"
                id="phone"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Addresse"
                pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
            />
        </div>
        <div>
            <label
                for="website"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Åbnings dato</label
            >
            <input
                type="url"
                id="website"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="åbnings dato"
            />
        </div>
        <div>
            <label
                for="visitors"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Lukke dato</label
            >
            <input
                type="number"
                id="visitors"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Lukke dato"
            />
        </div>
    </div>
    <button
        on:click={addCinema}
        type="submit"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >Submit</button
    >
</form>


