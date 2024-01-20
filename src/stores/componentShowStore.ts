import { defineStore } from "pinia";
export const useComponentShowStore = defineStore({
    id: 'componentShowStore',
    state:() => ({
        isShowedState: false,

    }),
    actions: {
        setNotFoundView(value: boolean) {
            this.isShowedState = value;
        },
    },
});