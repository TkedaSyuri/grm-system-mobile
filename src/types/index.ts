
 export type RoomState =
  | "vacant"
  | "required"
  | "cleaning"
  | "completed"
  | "unnecessary";


export interface Floors {
      id: number;
      roomNumber: string;
      roomState: RoomState;
      isConsecutiveNight: boolean;
    
}