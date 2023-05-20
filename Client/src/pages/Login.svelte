<script>
    import { useNavigate, useLocation } from "svelte-navigator";
    import { user } from "../assets/stores";
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

<div class="ml-72 overflow-x-auto">
    <h1>Admin</h1>
    <form >
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
