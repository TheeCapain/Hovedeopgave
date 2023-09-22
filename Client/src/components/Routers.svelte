<script>
    import { Router, Route, Link } from "svelte-navigator";
    import { user } from "../assets/stores";
    import Admin from "../pages/Admin.svelte";
    import AdminCreate from "./Admin/adminCreate.svelte";
    import AdminUpdate from "./Admin/adminUpdate.svelte";
    import AdminDelete from "./Admin/adminDelete.svelte";
    import Cinemas from "../pages/Cinemas.svelte";
    import Premieres from "../pages/Premieres.svelte";
    import Login from "../pages/Login.svelte";
    import PrivateRoute from "./privateRoutes/PrivateRoute.svelte";
    import AddressCreate from "./Admin/addressCreate.svelte";
</script>

<Router>
    <!--<Route path="login">
        {#if !$user}
            <Login />
        {:else}
            <AdminCreate />
        {/if}
    </Route>
    <PrivateRoute path="admin">
        <Admin />
    </PrivateRoute>
    <PrivateRoute path="newCinema">
        <AdminCreate />
    </PrivateRoute>
    <PrivateRoute path="deleteCinema">
        <AdminDelete />
    </PrivateRoute>
    <PrivateRoute path="update">
        <AdminUpdate />
    </PrivateRoute>
    <PrivateRoute path="newAddress">
        <AddressCreate />
    </PrivateRoute>
    -->
    <Route path="cinemas">
        <Cinemas />
    </Route>
    <Route path="premieres">
        <Premieres />
    </Route>
</Router>

<aside
    id="default-sidebar"
    class="fixed top-0 left-0 z-40 w-64 transition-transform -translate-x-full sm:translate-x-0"
    aria-label="Sidebar"
>
    <div class="h-full px-3 py-4 overflow-y-auto bg-slate-700 dark:bg-gray-800">
        <ul class="space-y-2 font-medium">
            <Router>
                <Link to="/login">
                    <!--
                    <li>
                        <a
                            href="/"
                            class="flex items-center p-2 rounded-lg dark:text-white hover:bg-gray-800 dark:hover:bg-gray-700"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                                />
                            </svg>

                            <span class="ml-3"
                                ><h1
                                    class="text-slate-100 dark:hover:bg-text-700"
                                >
                                    Admin
                                </h1></span
                            >
                        </a>
                    </li>
                    -->
                </Link>
                <Link to="/cinemas">
                    <li>
                        <a
                            href="/"
                            class="flex items-center p-2 rounded-lg dark:text-white hover:bg-gray-800 dark:hover:bg-gray-700"
                        >
                            <svg
                                aria-hidden="true"
                                class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                                ><path
                                    d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"
                                /><path
                                    d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"
                                /></svg
                            >

                            <span class="ml-3"
                                ><h1 class="text-slate-100">
                                    Biograf Database
                                </h1></span
                            >
                        </a>
                    </li>
                </Link>
                <Link to="/premieres">
                    <li>
                        <a
                            href="/"
                            class="flex items-center p-2 rounded-lg dark:text-white hover:bg-gray-800 dark:hover:bg-gray-700"
                        >
                            <svg
                                aria-hidden="true"
                                class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                                ><path
                                    d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"
                                /><path
                                    d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"
                                /></svg
                            >

                            <span class="ml-3"
                                ><h1
                                    class="text-slate-100 dark:hover:bg-text-700"
                                >
                                    Filmpremiere Database
                                </h1></span
                            >
                        </a>
                    </li>
                </Link>
            </Router>
        </ul>
    </div>
</aside>
