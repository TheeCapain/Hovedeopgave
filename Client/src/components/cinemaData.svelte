<script>
    export let cinemaName;
    export let cinemaAdress;
    export let closedDate;
    export let openedDate;
</script>

<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
    <td class="px-6 py-4">
        {cinemaName}
    </td>
    <td class="px-6 py-4"> {cinemaAdress} </td>
    <td class="px-6 py-4">{openedDate} </td>
    <td class="px-6 py-4"> {closedDate} </td>
</tr>
