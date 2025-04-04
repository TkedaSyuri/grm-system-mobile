
import { atom} from "jotai";
import { Floors } from "../types";

export const floorsAtom = atom<Floors[]>([])
export const modalAtom = atom<boolean>(false)
export const selectedRoomNumbersAtom = atom<string>("");


