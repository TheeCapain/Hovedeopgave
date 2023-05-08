<script>
  import { Router, Route, Link } from "svelte-navigator";
  import "flowbite";
  import "./app.css";
  import Sidebar from "./components/sidebar.svelte";
  import Admin from "./pages/Admin.svelte";
  import Cinemas from "./pages/Cinemas.svelte";
  import Premieres from "./pages/Premieres.svelte";
</script>

<Router>
  <Route path="admin">
    <Admin />
  </Route>
  <Route path="cinemas">
    <Cinemas />
  </Route>
  <Route path="premieres">
    <Premieres />
  </Route>
</Router>
<Sidebar />
