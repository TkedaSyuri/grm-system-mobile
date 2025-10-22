
import { atom} from "jotai";
import type { Chats, Floors, Tasks } from "../types";

export const floorsAtom = atom<Floors[]>([])
export const tasksAtom = atom<Tasks[]>([])
export const chatsAtom = atom<Chats[]>([])
export const floorNumberAtom = atom("2")
export const selectedRoomNumbersAtom = atom<string>("");
export const selectedRoomIdAtom = atom<number>(0)
export const isModalAtom = atom<boolean>(false)
export const isFloorModalAtom = atom<boolean>(false)


