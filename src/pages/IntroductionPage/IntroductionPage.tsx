import { motion } from "framer-motion";
import "./styles/IntroductionPage.styles.css";
import {
  popUp,
  slideIn,
  songCard,
  stagger,
  staggerTwo,
} from "@/pages/IntroductionPage/constant/animationVariants.ts";
import { users } from "@/app/constants/users.ts";
import UserAvatar from "@/pages/TopPage/ui/UserAvatar.tsx";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { localStorageSavedUserKey } from "@/app/constants/mainConst.ts";

const IntroductionPage = () => {
  const [selectedUser, setSelectedUser] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleUserSelection = (username: string) => {
    setSelectedUser(username === selectedUser ? null : username);
  };

  const handleSaveUserName = () => {
    if (selectedUser) {
      localStorage.setItem(localStorageSavedUserKey, selectedUser);
      navigate("/top-msgs");
    }
  };

  return (
    <motion.div className="TopFiveSongs" exit={{ transition: { delay: 5 } }}>
      <motion.div
        className="initial-animate"
        variants={stagger}
        initial="in"
        animate="anim"
        exit="out"
        onAnimationComplete={() => {
          const initialAnimateElement =
            document.querySelector(".initial-animate");
          const listElement = document.querySelector(".top-song-list");
          const textBgElement = document.querySelector(".text-bg");

          if (
            initialAnimateElement !== null &&
            listElement !== null &&
            textBgElement !== null
          ) {
            initialAnimateElement.classList.add("display-none");
            listElement.classList.remove("display-none");
            textBgElement.classList.remove("display-none");
          }
        }}
      >
        <motion.div variants={staggerTwo} className="DIV ONE">
          <motion.div variants={slideIn}>Але, давайте спочатку</motion.div>
          <motion.div variants={slideIn}>з вами познайомимось!</motion.div>
        </motion.div>
        <motion.div variants={staggerTwo} className="DIV`">
          <motion.div variants={slideIn}>А то я не знаю</motion.div>
          <motion.div variants={slideIn}>хто ви такі взагалі...</motion.div>
        </motion.div>
      </motion.div>
      <motion.div
        className="top-song-list"
        variants={songCard}
        initial="in"
        animate="anim"
      >
        <div className="p-2">
          <motion.div
            className="border-2 rounded-md border-white p-2 flex items-center justify-center flex-col"
            variants={popUp}
            initial="in"
            animate="anim"
            exit="out"
          >
            <div className="text-4xl text-white">Ти хто?</div>
            <div className="text-white flex justify-center items-center text-center my-1">
              Спочатку на себе, а далі на велику жовту кнопочку
            </div>
            <div className="flex gap-1 flex-col w-full">
              {users.map((user) => (
                <UserAvatar
                  key={user.userName}
                  imgUrl={user.imgUrl}
                  name={user.userName}
                  selected={user.userName === selectedUser}
                  onSelectionChange={() => handleUserSelection(user.userName)}
                />
              ))}
            </div>
            <button
              className="bg-[#cdf564] px-2 py-1 rounded-2xl text-[#3b00e2] font-bold mt-2"
              disabled={!selectedUser}
              onClick={() => {
                handleSaveUserName();
              }}
            >
              Клікни
            </button>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default IntroductionPage;
