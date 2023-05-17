<script>
    import { Router, Route, Link } from "svelte-navigator";
    import AdminCreate from "../components/Admin/adminCreate.svelte";
    import AdminUpdate from "../components/Admin/adminUpdate.svelte";
</script>
<div class="ml-64 overflow-x-auto">
    <h1>Secret admin side</h1>
    <AdminCreate/>
    <AdminUpdate/>
</div>
