import { atom } from "jotai";
import { World } from "../constance";

export const worldAtom = atom(World.Overworld);


const essence: Record<string, number> = { underworld: 0, overworld: 0 }
export const essenceAtom = atom(essence);

type Upgrade = {
    name: string;
    price: number;
    isUnlock: boolean;
}
const upgrades: Record<string, Upgrade> = {
    // Underworld upgrades
    underworld_tier1: { 
        name: "underworld_tier1",
        price: 10,
        isUnlock: false
    },
    underworld_tier2: { 
        name: "underworld_tier2",
        price: 100,
        isUnlock: false
    },
    underworld_tier3: {
        name: "underworld_tier3",
        price: 500,
        isUnlock: false,
    },
    underworld_tier4: {
        name: "underworld_tier4",
        price: 1500,
        isUnlock: false,
    },
    underworld_tier5: {
        name: "underworld_tier5",
        price: 3000,
        isUnlock: false,
    },

    // Overworld upgrades
    overworld_tier1: { 
        name: "underworld_tier1",
        price: 10,
        isUnlock: false
    },
    overworld_tier2: { 
        name: "underworld_tier2",
        price: 100,
        isUnlock: false
    },
    overworld_tier3: {
        name: "underworld_tier3",
        price: 500,
        isUnlock: false,
    },
    overworld_tier4: {
        name: "underworld_tier4",
        price: 1500,
        isUnlock: false,
    },
    overworld_tier5: {
        name: "underworld_tier5",
        price: 3000,
        isUnlock: false,
    }
}

export const upgradeAtom = atom(upgrades);