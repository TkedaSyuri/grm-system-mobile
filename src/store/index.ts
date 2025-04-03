
import { atom} from "jotai";
import { Floors } from "../components/Room";

export const floorsAtom = atom<Floors[]>([])

console.log(`atomの値${floorsAtom}`)