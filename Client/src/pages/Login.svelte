<script>
    import { useNavigate, useLocation } from "svelte-navigator";
    import { user } from "../assets/stores";
    import Toastr from "toastr";
    const navigate = useNavigate();
    const location = useLocation();

    let username;
    let password;

    async function handleSubmit() {
        console.log(password);
        if (password === undefined) {
            password = "";
        }

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
            let login = response.user;
            $user = { login };
            localStorage.setItem("admin", JSON.stringify($user));
            const from =
                ($location.state && $location.state.from) || "/newCinema";
            navigate(from, { replace: true });
        } else {
            Toastr.warning("Wrong login");
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
    <div
  class="block max-w-sm rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
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
</div>
