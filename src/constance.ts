import { Upgrade } from "./commonTypes";

export enum World {
    Underworld = "underworld",
    Overworld = "overworld"
}

// Common tailwind classes
export const header1 = "text-center text-xl font-bold font-serif";
export const header2 = "text-center text-lg font-bold font-serif";

export const upgrades: Record<string, Record<string, Upgrade>> = {
    // Underworld upgrades
    underworld: {
        tier1: {
            name: "underworld_tier1",
            price: 10,
            ttl: 5,
            output: 4, 
            // isUnlock: false
        },
        tier2: {
            name: "underworld_tier2",
            price: 100,
            ttl: 5,
            output: 40, 
            // isUnlock: false
        },
        tier3: {
            name: "underworld_tier3",
            price: 500,
            ttl: 5,
            output: 200, 
            // isUnlock: false,
        },
        tier4: {
            name: "underworld_tier4",
            price: 1500,
            ttl: 5,
            output: 600, 
            // isUnlock: false,
        },
        tier5: {
            name: "underworld_tier5",
            price: 3000,
            ttl: 5,
            output: 1200,
            // isUnlock: false,
        }
    },

    // Overworld upgrades
    overworld: {
        tier1: {
            name: "overworld_tier1",
            price: 10,
            ttl: 5,
            output: 4,
            // isUnlock: false
        },
        tier2: {
            name: "overworld_tier2",
            price: 100,
            ttl: 5,
            output: 40,
            // isUnlock: false
        },
        tier3: {
            name: "overworld_tier3",
            price: 500,
            ttl: 5,
            output: 200,
            // isUnlock: false,
        },
        tier4: {
            name: "overworld_tier4",
            price: 1500,
            ttl: 5,
            output: 600,
            // isUnlock: false,
        },
        tier5: {
            name: "overworld_tier5",
            price: 3000,
            ttl: 5,
            output: 1200
            // isUnlock: false,
        }
    }
}
