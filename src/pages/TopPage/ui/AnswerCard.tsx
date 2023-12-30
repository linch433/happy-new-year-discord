import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card.tsx";
import { users } from "@/app/constants/users.ts";
import UserAvatar from "@/pages/TopPage/ui/UserAvatar.tsx";
import CustomDrawer from "@/pages/TopPage/ui/CustomDrawer.tsx";
import { useState } from "react";

const AnswerCard = () => {
  const [selectedUser, setSelectedUser] = useState<string | null>(null);

  const handleUserSelection = (username: string) => {
    setSelectedUser(username === selectedUser ? null : username);
  };

  return (
    <Card className="min-w-72 max-w-4xl bg-[#3b00e2]">
      <CardHeader className="flex">
        <CardTitle className="text-xl text-white text-center">
          Хто на Вашу думку найбільше написав повідомлень?
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
      <CustomDrawer />
    </Card>
  );
};

export default AnswerCard;
