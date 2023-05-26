<script>
    import PremiereData from "./premiereData.svelte";
    export let premiereList = [];
    let order = "asc";

    function sortName() {
        if (order === "asc") {
            premiereList = premiereList.sort((a, b) => {
                let fa = a.movie_title.toLowerCase(),
                    fb = b.movie_title.toLowerCase();

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
            premiereList = premiereList.sort((a, b) => {
                let fa = a.movie_title.toLowerCase(),
                    fb = b.movie_title.toLowerCase();

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

    function sortOriginal() {
        if (order === "asc") {
            premiereList = premiereList.sort((a, b) => {
                let fa = a.original_title.toLowerCase(),
                    fb = b.original_title.toLowerCase();

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
            premiereList = premiereList.sort((a, b) => {
                let fa = a.original_title.toLowerCase(),
                    fb = b.original_title.toLowerCase();

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

    function sortDistributor() {
        if (order === "asc") {
            premiereList = premiereList.sort((a, b) => {
                let fa = a.distributor_name.toLowerCase(),
                    fb = b.distributor_name.toLowerCase();

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
            premiereList = premiereList.sort((a, b) => {
                let fa = a.distributor_name.toLowerCase(),
                    fb = b.distributor_name.toLowerCase();

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

    function sortCountry() {
        if (order === "asc") {
            premiereList = premiereList.sort((a, b) => {
                let fa = a.Country_name.toLowerCase(),
                    fb = b.Country_name.toLowerCase();

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
            premiereList = premiereList.sort((a, b) => {
                let fa = a.Country_name.toLowerCase(),
                    fb = b.Country_name.toLowerCase();

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

    function sortYear() {
        console.log(order);
        if (order === "asc") {
            premiereList = premiereList.sort((a, b) => {
                order = "desc";
                return b.premiere_year - a.premiere_year;
            });
        } else if (order === "desc") {
            order = "asc";
            premiereList = premiereList.sort((a, b) => {
                return a.premiere_year - b.premiere_year;
            });
        }
    }
</script>

<div class="ml-64 overflow-x-auto">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="">
            <tr>
                <button
                    class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
                    ><th scope="col" class="px-6 py-3">
                        <button
                            on:click={sortName}
                            class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
                            >Film titel</button
                        ></th
                    ></button
                >
                <th scope="col" class="px-6 py-3">
                    <button
                        on:click={sortOriginal}
                        class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
                        >Original titel</button
                    ></th
                >
                <th scope="col" class="px-6 py-3">
                    <button
                        on:click={sortDistributor}
                        class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
                        >Distributør</button
                    ></th
                >
                <th scope="col" class="px-6 py-3">
                    <button
                        on:click={sortCountry}
                        class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
                        >Land</button
                    ></th
                >
                <th scope="col" class="px-6 py-3">
                    <button
                        on:click={sortYear}
                        class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
                        >År</button
                    ></th
                >
                <th scope="col" class="px-6 py-3">Premierebiograf</th>
                <th scope="col" class="px-6 py-3">Censur</th>
            </tr>
        </thead>
        <tbody>
            {#await premiereList}
                {#if premiereList.length === 0}
                    <button
                        type="button"
                        class="w-full text-white bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        disabled
                    >
                        <svg
                            class="animate-spin h-5 w-5 mr-3 ..."
                            viewBox="0 0 24 24"
                        />
                        Ingen resultater
                    </button>
                {:else}
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
                {/if}
            {:then premiere_list}
                {#each premiere_list as movie}
                    <PremiereData
                        movieTitle={movie.movie_title}
                        Originaltitle={movie.original_title}
                        distributer={movie.distributor_name}
                        country={movie.Country_name}
                        year={movie.premiere_year}
                        Premierebiograf={movie.Premiere_period}
                        Censur={movie.rating}
                    />
                {/each}
            {:catch error}
                <p style="color: red">{error.message}</p>
            {/await}
        </tbody>
    </table>
</div>
