import { atom } from "jotai";
import { World } from "../constance";

export const worldAtom = atom(World.Overworld);


const essence: Record<string, number> = { underworld: 0, overworld: 0 }

export const essenceAtom = atom(essence);