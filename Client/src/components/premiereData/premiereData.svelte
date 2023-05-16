<script>
    export let movieTitle;
    export let Originaltitle;
    export let distributer;
    export let year;
    export let Premierebiograf;
    export let Censur;
    export let country;
</script>

<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 group/item hover:bg-slate-100">
    <td class="px-6 py-4">
        {movieTitle}
    </td>
    <td class="px-6 py-4"> {Originaltitle} </td>
    <td class="px-6 py-4"> {distributer} </td>
    <td class="px-6 py-4"> {country} </td>
    <td class="px-6 py-4"> {year} </td>
    <td class="px-6 py-4">{Premierebiograf} </td>
    <td class="px-6 py-4"> {Censur} </td>
</tr>
