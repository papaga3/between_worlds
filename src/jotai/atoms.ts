import { atom } from "jotai";
import { World } from "../constance";

export const worldAtom = atom(World.Overworld);

const essence: Record<string, number> = { underworld: 0, overworld: 0 }
export const essenceAtom = atom(essence);

type UpgradeObj =  {
    ttl: number,
    ready: boolean,
}
const objectPool: Record<string, Record<string, UpgradeObj>> = {
    underworld: {
        tier1: { ttl: 0, ready: false },
        tier2: { ttl: 0, ready: false },
        tier3: { ttl: 0, ready: false },
        tier4: { ttl: 0, ready: false },
        tier5: { ttl: 0, ready: false },
    },
    overworld: {
        tier1: { ttl: 0, ready: false },
        tier2: { ttl: 0, ready: false },
        tier3: { ttl: 0, ready: false },
        tier4: { ttl: 0, ready: false },
        tier5: { ttl: 0, ready: false },
    }
};

export const objectPoolAtom = atom(objectPool);