import { atom } from "jotai";
import { World } from "../constance";

export const worldAtom = atom(World.Overworld);


const essence: Record<string, number> = { Overworld: 0, Underworld: 0 }

export const essenceAtom = atom(essence);