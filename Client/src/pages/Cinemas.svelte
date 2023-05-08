<script>
    import { onMount } from "svelte";
    import CinemaTable from "../components/cinemaData/cinemaTable.svelte";
    export let cinema_list = [];
    let listlength;

    onMount(async function getBiografer() {
        let response = await fetch("http://localhost:8080/api/biograf").then(
            (response) => response.json()
        );
        cinema_list = response.biografer;
        listlength = cinema_list.length;
    });
</script>

<CinemaTable {cinema_list} {listlength} />
