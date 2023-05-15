<script>
</script>

<div class="ml-64 overflow-x-auto">
    <h1>This is the admin page</h1>
    <button>Download Sheet</button>

    <div>
        <div class="relative">
            <input
                type="text"
                id="filled_success"
                aria-describedby="filled_success_help"
                class="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-green-600 dark:border-green-500 appearance-none dark:text-white dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
                placeholder=" "
            />
            <label
                for="filled_success"
                class="absolute text-sm text-green-600 dark:text-green-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
                >Filled success</label
            >
        </div>
        <p
            id="filled_success_help"
            class="mt-2 text-xs text-green-600 dark:text-green-400"
        >
            <span class="font-medium">Well done!</span> Some success message.
        </p>
    </div>
    <div>
        <div class="relative">
            <input
                type="text"
                id="filled_error"
                aria-describedby="filled_error_help"
                class="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 appearance-none dark:text-white dark:border-red-500 focus:outline-none focus:ring-0 border-red-600 focus:border-red-600 dark:focus-border-red-500 peer"
                placeholder=" "
            />
            <label
                for="filled_error"
                class="absolute text-sm duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 text-red-600 dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
                >Filled error</label
            >
        </div>
        <p
            id="filled_error_help"
            class="mt-2 text-xs text-red-600 dark:text-red-400"
        >
            <span class="font-medium">Oh, snapp!</span> Some error message.
        </p>
    </div>
</div>
