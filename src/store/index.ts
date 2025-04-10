
import { atom} from "jotai";
import { Floors, Tasks } from "../types";

export const floorsAtom = atom<Floors[]>([])
export const tasksAtom = atom<Tasks[]>([])
export const floorNuberAtom = atom("2")
export const selectedRoomNumbersAtom = atom<string>("");
export const selectedRoomIdAtom = atom<number>(0)
export const modalAtom = atom<boolean>(false)
export const isFloorModalAtom = atom<boolean>(false)


