import axios from "axios";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card.tsx";
import { users } from "@/app/constants/users.ts";
import UserAvatar from "@/pages/TopPage/ui/UserAvatar.tsx";
import { useState } from "react";
import { localStorageSavedUserKey, url } from "@/app/constants/mainConst.ts";
import { useNavigate } from "react-router-dom";

const AnswerCard = () => {
  const [selectedUser, setSelectedUser] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleUserSelection = (username: string) => {
    setSelectedUser((prevUser) => (prevUser === username ? null : username));
  };

  const handleSubmit = async () => {
    try {
      const localStorageUser = localStorage.getItem(localStorageSavedUserKey);

      if (localStorageUser !== null && selectedUser !== null) {
        const response = await axios.post(url, {
          user: localStorageUser,
          vote: selectedUser,
        });
        console.log(response);
        navigate("/the-end");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Card className="min-w-72 max-w-4xl bg-[#3b00e2]">
      <CardHeader className="flex">
        <CardTitle className="text-[18px] text-white text-center">
          Хто на Вашу думку став людиною року?
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col w-full gap-2">
          {users.map((user, index) => (
            <UserAvatar
              key={`${index} + ${user.userName}`}
              imgUrl={user.imgUrl}
              name={user.userName}
              selected={user.userName === selectedUser}
              onSelectionChange={() => {
                handleUserSelection(user.userName);
              }}
            />
          ))}
        </div>
      </CardContent>
      <div className="flex justify-center items-center w-full">
        <button
          disabled={!selectedUser}
          className="bg-[#cdf564] px-2 py-1 rounded-2xl text-[#3b00e2] font-bold text-[18px]"
          onClick={() => handleSubmit()}
        >
          Відповісти
        </button>
      </div>
    </Card>
  );
};

export default AnswerCard;
