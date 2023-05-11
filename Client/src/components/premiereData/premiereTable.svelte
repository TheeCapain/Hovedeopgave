<script>
    import PremiereData from "./premiereData.svelte";
    export let premiere_list = [];
</script>

<div class="ml-64 overflow-x-auto">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead
            class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
        >
            <tr>
                <th scope="col" class="px-6 py-3">movieTitle</th>
                <th scope="col" class="px-6 py-3">Originaltitle</th>
                <th scope="col" class="px-6 py-3">distributer</th>
                <th scope="col" class="px-6 py-3">country</th>
                <th scope="col" class="px-6 py-3">year</th>
                <th scope="col" class="px-6 py-3">Premierebiograf</th>
                <th scope="col" class="px-6 py-3">Censur</th>
            </tr>
        </thead>
        <tbody>
            {#await premiere_list}
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
            {#if premiere_list.length == 0}
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
            {/if}
            {:catch error}
                <p style="color: red">{error.message}</p>
            {/await}
        </tbody>
    </table>
</div>
