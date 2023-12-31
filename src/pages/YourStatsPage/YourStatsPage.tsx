import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { localStorageSavedUserKey } from "@/app/constants/mainConst.ts";
import { UsersStatsProp, userStats } from "@/app/constants/users.ts";
import { useNavigate } from "react-router-dom";
import {
  popUp,
  slideIn,
  songCard,
  stagger,
  staggerTwo,
} from "@/pages/YourStatsPage/constants/animationVariants.ts";

const YourStatsPage = () => {
  const [userNameByLocalStorage, setUserNameByLocalStorage] = useState("");
  const [userStatsData, setUserStatsData] = useState<UsersStatsProp | null>(
    null,
  );
  const navigate = useNavigate();

  useEffect(() => {
    const userByKey = localStorage.getItem(localStorageSavedUserKey);

    if (userByKey !== null) {
      setUserNameByLocalStorage(userByKey);
    }
  }, []);

  useEffect(() => {
    const user = userStats.find(
      (user) => user.userName === userNameByLocalStorage,
    );

    setUserStatsData(user || null);
  }, [userNameByLocalStorage]);

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
          <motion.div variants={slideIn}>
            А тепер ваша статистика за цей рік
          </motion.div>
        </motion.div>
        <motion.div variants={staggerTwo} className="DIV`">
          <motion.div variants={slideIn}>
            Будь ласка, лиш не бийте...
          </motion.div>
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
            className="p-2 flex items-center justify-center flex-col"
            variants={popUp}
            initial="in"
            animate="anim"
            exit="out"
          >
            {userStatsData ? (
              <div className="text-xl text-white gap-2 flex flex-col">
                <h2 className="font-bold text-2xl text-center">
                  Статистика для {userNameByLocalStorage}
                </h2>
                <div className="bg-white h-0.5 w-full rounded-3xl"></div>
                <p>
                  Найбільше активний(-а) в: {userStatsData.averageOnlineTime}
                </p>
                <p>Тебе тегали: {userStatsData.mentionCount} разів</p>
                <p>Кількість повідомлень: {userStatsData.msgCount}</p>
                <p>Кількість твоїх реакцій: {userStatsData.reactionCount}</p>
                <p>Скинув гіфок: {userStatsData.gifCount}</p>
                <p>Настрій повідомлень: {userStatsData.msgMood}</p>
              </div>
            ) : (
              <p className="text-4xl font-bold text-white">
                Щось я нічого не знайшов, пупсик :(
              </p>
            )}
            <button
              className="bg-[#cdf564] px-2 py-1 rounded-2xl text-[#3b00e2] font-bold mt-4 text-[18px]"
              onClick={() => {
                navigate("/top");
              }}
            >
              Продовжимо далі?
            </button>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default YourStatsPage;
