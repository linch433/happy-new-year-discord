import linch from "@/assets/linch.jpg";
import vermari from "@/assets/vermari.webp";
import murmaider from "@/assets/murmaider.webp";
import Beatraid from "@/assets/Beatraid.webp";
import modest from "@/assets/modest.webp";
import mblate from "@/assets/mblate.webp";
import berstyx from "@/assets/berstyx.webp";
import vuk from "@/assets/vuk.webp";
import juliet from "@/assets/juliet.webp";
import csaos from "@/assets/csaos.webp";
import Bogdan from "@/assets/Bogdan.webp";

export interface UsersProp {
  imgUrl: string;
  userName: string;
}

export interface UsersStatsProp {
  userName: string;
  msgCount: number;
  reactionCount: number;
  averageOnlineTime: string;
  msgMood: string;
  mentionCount: number;
  gifCount: number;
}

export const users: UsersProp[] = [
  {
    imgUrl: Bogdan,
    userName: "BogdanBakugan",
  },
  {
    imgUrl: mblate,
    userName: "mblate",
  },
  {
    imgUrl: vermari,
    userName: "?",
  },
  {
    imgUrl: modest,
    userName: "1modest / ad",
  },

  {
    imgUrl: berstyx,
    userName: "berstyx",
  },
  {
    imgUrl: Beatraid,
    userName: "Beatraid",
  },

  {
    imgUrl: juliet,
    userName: "Juliet",
  },
  {
    imgUrl: murmaider,
    userName: "I'm So FUckIng BaD",
  },
  {
    imgUrl: vuk,
    userName: "VuK",
  },
  {
    imgUrl: csaos,
    userName: "chaos",
  },
  {
    imgUrl: linch,
    userName: "linch",
  },
];

export const userStats: UsersStatsProp[] = [
  {
    userName: "BogdanBakugan",
    averageOnlineTime: "23:00",
    mentionCount: 159,
    msgCount: 1722,
    msgMood: "нейтральний",
    reactionCount: 49,
    gifCount: 90,
  },
  {
    userName: "mblate",
    averageOnlineTime: "21:00",
    mentionCount: 79,
    msgCount: 333,
    msgMood: "нейтральний",
    reactionCount: 52,
    gifCount: 14,
  },
  {
    userName: "?",
    averageOnlineTime: "23:00",
    mentionCount: 113,
    msgCount: 489,
    msgMood: "негативний",
    reactionCount: 14,
    gifCount: 11,
  },
  {
    userName: "1modest / ad",
    averageOnlineTime: "20:00",
    mentionCount: 211,
    msgCount: 1350,
    msgMood: "позитивний",
    reactionCount: 5,
    gifCount: 12,
  },
  {
    userName: "berstyx",
    averageOnlineTime: "20:00",
    mentionCount: 287,
    msgCount: 1816,
    msgMood: "негативний",
    reactionCount: 292,
    gifCount: 4,
  },
  {
    userName: "Beatraid",
    averageOnlineTime: "21:00",
    mentionCount: 39,
    msgCount: 110,
    msgMood: "негативний",
    reactionCount: 3,
    gifCount: 0,
  },
  {
    userName: "Juliet",
    averageOnlineTime: "16:00",
    mentionCount: 393,
    msgCount: 4973,
    msgMood: "негативний",
    reactionCount: 72,
    gifCount: 183,
  },
  {
    userName: "I'm So FUckIng BaD",
    averageOnlineTime: "15:00",
    mentionCount: 186,
    msgCount: 653,
    msgMood: "нейтральний",
    reactionCount: 71,
    gifCount: 15,
  },
  {
    userName: "VuK",
    averageOnlineTime: "17:00",
    mentionCount: 287,
    msgCount: 2416,
    msgMood: "нейтральний",
    reactionCount: 27,
    gifCount: 88,
  },
  {
    userName: "chaos",
    averageOnlineTime: "18:00",
    mentionCount: 4,
    msgCount: 30,
    msgMood: "негативний",
    reactionCount: 1,
    gifCount: 0,
  },
  {
    userName: "linch",
    averageOnlineTime: "15:00",
    mentionCount: 431,
    msgCount: 2607,
    msgMood: "позитивний",
    reactionCount: 188,
    gifCount: 30,
  },
];
