<script>
    import { Router, Route, Link } from "svelte-navigator";
    import { user } from "../assets/stores";
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
        class="h-screen flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400"
    >
        <li class="mr-2">
            <Link to="/newCinema">
                <h1
                    class="inline-block p-4 text-blue-600 bg-gray-100 rounded-t-lg active dark:bg-gray-800 dark:text-blue-500"
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
                    class="inline-block p-4 text-blue-600 bg-gray-100 rounded-t-lg dark:bg-gray-800 dark:text-blue-500"
                >
                    fjern biograf
                </h1>
            </Link>
        </li>
    </ul>
</div>
