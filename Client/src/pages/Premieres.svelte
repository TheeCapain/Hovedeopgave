<script>
    import { onMount } from "svelte";
    import PremiereTable from "../components/premiereData/premiereTable.svelte";
    let premiere_list = []
    let listlength;

    onMount(async function getBiografer() {
        let response = await fetch("http://localhost:8080/api/movies").then(
            (response) => response.json()
        );
        premiere_list = response.biografer;
        listlength = premiere_list.length;
        console.log(premiere_list)
    });
</script>

<PremiereTable {premiere_list} {listlength} />
