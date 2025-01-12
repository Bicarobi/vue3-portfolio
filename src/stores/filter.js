import { defineStore } from "pinia";

export const useFilterStore = defineStore("filter", {
    state: () => ({
        filterValue: "",
    }),
    actions: {
        changeFilter(value) {
            this.filterValue = value;
        },
    },
});
