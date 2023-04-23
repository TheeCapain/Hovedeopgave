<script>
    export let cinemaName;
    export let cinemaAdress;
    export let closedDate;
    export let openedDate;
    export let cinemaPostNr;
    export let cinemaBy;
    export let cinemaStatus;
</script>

<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
    <td>
        {cinemaName}
    </td>
    <td class="px-6 py-4"> {cinemaAdress} </td>
    <td class="px-6 py-4"> {cinemaPostNr} </td>
    <td class="px-6 py-4"> {cinemaBy} </td>
    <td class="px-6 py-4">{openedDate} </td>
    <td class="px-6 py-4"> {closedDate} </td>
    <td class="px-6 py-4"> {cinemaStatus} </td>
</tr>
