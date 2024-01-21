import { defineStore } from "pinia";
import type { event } from '@/interfaces/event';

interface LocationState {
    chosenLocations: string[];
    chosenMonths: number[];
}

export const useLocationStore = defineStore('chosenLocation', {
    state: (): LocationState => ({
        chosenLocations: ['Bratislava'],
        chosenMonths: [(new Date().getMonth()) % 12 + 1]
    }),
    actions: {
        filteredEventsByLocation(events: event[]) {
            return events.filter(event => this.$state.chosenLocations.includes(event.location));
        },
        filteredEventsByMonth(events: event[]) {
            return events.filter(event => this.$state.chosenMonths.includes(event.month));
        },
        persistState(){
            localStorage.setItem('userChoice', JSON.stringify(this.$state));
        },
        restoreState(){
            const storedState = localStorage.getItem('userChoice')
            if(storedState){
                Object.assign(this.$state,JSON.parse(storedState))
            }
        },
        addChosenLocation(location: string) {
            this.chosenLocations.push(location);
            this.persistState();
        },
        removeChosenLocation(location: string) {
            this.chosenLocations = this.chosenLocations.filter(l => l !== location);
            this.persistState();
        },
        addChosenMonth(month: number) {
            this.chosenMonths.push(month);
            this.persistState();
        },
        removeChosenMonth(month: number) {
            this.chosenMonths = this.chosenMonths.filter(l => l !== month);
            this.persistState();
        }
    }
});
