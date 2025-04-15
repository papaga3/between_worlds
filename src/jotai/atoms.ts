import { atom } from "jotai";
import { Theme, World } from "../constance";

export const worldAtom = atom(World.Overworld);


const essence: Record<string, number> = { Overworld: 0, Underworld: 0 }

export const essenceAtom = atom(essence);

export const themeAtom = atom(Theme.Base);