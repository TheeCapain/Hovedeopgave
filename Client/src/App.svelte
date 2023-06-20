<script>
  import { Router, Route, Link } from "svelte-navigator";
  import { useNavigate, useLocation } from "svelte-navigator";
  import "toastr/build/toastr.css";
  import "flowbite";
  import "./app.css";
  import Routers from "./components/Routers.svelte";
  import { onMount } from "svelte";

</script>

<link href="toastr.css" rel="stylesheet" />
<aside
  class="fixed top-36 left-0 z-40 w-64 transition-transform -translate-x-full sm:translate-x-0"
  aria-label="Sidebar"
>
  <div
    class="h-screen px-3 py-4 overflow-y-auto bg-gray-700 dark:bg-gray-800"
  />
</aside>
<Routers />
