import { atom } from "jotai";
import { World } from "../constance";

export const worldAtom = atom(World.Overworld);

const essence: Record<string, number> = { underworld: 0, overworld: 0 }
export const essenceAtom = atom(essence);

type upgradeObj {
    ttl: number;
    ready: boolean;
}
const objectPool: Record<string, Record<string, Object>> = {
    underworld: {
        tier1: {},
        tier2: {},
        tier3: {},
        tier4: {},
        tier5: {},
    },
    overworld: {
        tier1: {},
        tier2: {},
        tier3: {},
        tier4: {},
        tier5: {},
    }
};

export const objectPoolAtom = atom(objectPool);