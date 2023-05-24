<script>
    import { useNavigate, useLocation } from "svelte-navigator";
    import { user } from "../assets/stores";
    import Toastr from "toastr";
    const navigate = useNavigate();
    const location = useLocation();

    let username;
    let password;

    async function handleSubmit() {
        const userLogin = {
            username: username,
            password: password,
        };
        let response = await fetch("http://localhost:8080/api/login", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(userLogin),
        }).then((response) => response.json());
        if (response.user) {
            Toastr.success("test");
            let login = response.user;
            $user = { login };
            localStorage.setItem("admin", JSON.stringify($user));
            const from = ($location.state && $location.state.from) || "/admin";
            navigate(from, { replace: true });
        } else {
            alert("there was an error");
        }
    }
</script>

<aside
    class="fixed top-36 left-0 z-40 w-64 transition-transform -translate-x-full sm:translate-x-0"
    aria-label="Sidebar"
>
    <div
        class="h-screen px-3 py-4 overflow-y-auto bg-gray-700 dark:bg-gray-800"
    />
</aside>

<div class="ml-72 overflow-x-auto">
    <h1>Admin</h1>
    <form>
        <input
            bind:value={username}
            type="text"
            name="username"
            placeholder="Username"
        />
        <br />
        <input
            bind:value={password}
            type="password"
            name="password"
            placeholder="Password"
        />
        <br />
        <button type="button" on:click={handleSubmit}>Login</button>
    </form>
</div>
