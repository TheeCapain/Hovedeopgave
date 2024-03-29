import { writable } from "svelte/store";
import { createClient } from "@supabase/supabase-js";


export const user = writable(null);

export function convertToCSV(searchResult) {
    const header = Object.keys(searchResult[0]);
    const csvRows = searchResult.map((obj) =>
        header.map((field) => JSON.stringify(obj[field])).join(",")
    );
    return [header.join(","), ...csvRows].join("\n");
}

export function downloadCSV(csvContent, fileName) {
    const blob = new Blob([csvContent], {
        type: "text/csv;charset=utf-8;",
    });
    const link = document.createElement("a");
    if (link.download !== undefined) {
        const url = URL.createObjectURL(blob);
        link.setAttribute("href", url);
        link.setAttribute("download", fileName);
        link.style.visibility = "hidden";
        link.click();
    }
}

export const supabase = createClient(
    import.meta.env.VITE_SUPABASE_URL,
    import.meta.env.VITE_SUPABASE_KEY
);
