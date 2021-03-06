import { PlayerServerInfo } from "./types";

interface Figure {
  [key: number]: { [key: number]: string };
}
export interface iField {
  row: number;
  column: number;
  state: string;
  index: number;
}

const figures: Figure = {
  0: {
    0: "",
    3: "viking1",
    4: "viking2",
    5: "viking3",
    6: "viking4",
    7: "viking5",
    10: "",
  },
  1: { 5: "viking6" },
  2: {},
  3: { 0: "viking7", 5: "knigh1", 10: "viking8" },
  4: { 0: "viking9", 4: "knigh2", 5: "knigh3", 6: "knigh4", 10: "viking10" },
  5: {
    0: "viking11",
    1: "viking12",
    3: "knigh5",
    4: "knigh6",
    5: "king",
    6: "knigh7",
    7: "knigh8",
    9: "viking13",
    10: "viking14",
  },
  6: { 0: "viking15", 4: "knigh9", 5: "knigh10", 6: "knigh11", 10: "viking16" },
  7: { 0: "viking17", 5: "knigh12", 10: "viking18" },
  8: {},
  9: { 5: "viking19" },
  10: {
    0: "",
    3: "viking20",
    4: "viking21",
    5: "viking22",
    6: "viking23",
    7: "viking24",
    10: "",
  },
};
export const defaultSelectedField = ():iField => ({
  row: -1,
  column: -1,
  state: "",
  index: -1,
});

export const initialBoard = ():iField[] => {
  let board = [];
  let indexes = 0;
  for (let i = 0; i < 11; i++) {
    for (let j = 0; j < 11; j++) {
      board.push({
        index: indexes,
        row: i,
        column: j,
        state: figures[i][j] || "",
      });
      indexes++;
    }
  }
  return board;
};

export const emptyPlayer: PlayerServerInfo = {
  displayName: "",
  side: "king",
  userId: "",
  photoURL: "",
};