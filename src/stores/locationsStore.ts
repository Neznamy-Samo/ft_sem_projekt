import { defineStore } from "pinia";
import eventsData from '../events.json';
import type { event } from '@/interfaces/event';

interface LocationState {
    chosenLocations: string[];
    events: event[];
}

export const useLocationStore = defineStore('chosenLocation', {
    state: (): LocationState => ({
        chosenLocations: [],
        events: eventsData.events as event[]  // Access the events property
    }),
    getters: {
        filteredEvents(state) {
            return state.events.filter(event => state.chosenLocations.includes(event.location));
        }
    },
    actions: {
        persistentState(){
            localStorage.setItem('chosenLocation', JSON.stringify(this.$state));
        },
        restoreState(){
            const storedState = localStorage.getItem('chosenLocation')
            if(storedState){
                Object.assign(this.$state,JSON.parse(storedState))
            }
        },
        addChosenLocation(location: string) {
            this.chosenLocations.push(location);
            this.persistentState();
        },
        removeChosenLocation(location: string) {
            this.chosenLocations = this.chosenLocations.filter(l => l !== location);
            this.persistentState();
        },
        clearChosenLocation() {
            this.chosenLocations = [];
            this.persistentState();
        },

    }
});
