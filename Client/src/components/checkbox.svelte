<script>
    export let name;
    export let description;
</script>

<li>
    <div
        class="flex-inline w-full items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600"
    >
        <input
            id="checkbox-item-4"
            type="checkbox"
            value=""
            class="  w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            bind:checked={name}
            />
        <label
            for="checkbox-item-4"
            class="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
            >{name} {description}</label
        >
    </div>
</li>
