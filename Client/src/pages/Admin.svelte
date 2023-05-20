<script>
    import { Router, Route, Link } from "svelte-navigator";
    import AdminCreate from "../components/Admin/adminCreate.svelte";
    import AdminUpdate from "../components/Admin/adminUpdate.svelte";
</script>

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
