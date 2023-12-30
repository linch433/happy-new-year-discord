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
