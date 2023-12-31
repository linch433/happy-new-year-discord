import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar.tsx";
import { clsx } from "clsx";

interface UserAvatarProps {
  imgUrl: string;
  name: string;
  selected: boolean;
  onSelectionChange: () => void;
}

const UserAvatar = ({
  imgUrl,
  name,
  selected,
  onSelectionChange,
}: UserAvatarProps) => (
  <>
    <div
      key={name}
      className={clsx(
        "flex flex-row text-white px-3 py-1 rounded-2xl gap-4 items-center cursor-pointer font-medium",
        selected
          ? "bg-[#0c0908] border rounded-2xl transition ease-in-out delay-150 "
          : "bg-black-rgba",
      )}
      onClick={onSelectionChange}
    >
      <input
        type="radio"
        checked={selected}
        onChange={() => {}}
        className="hidden"
      />
      <Avatar>
        <AvatarImage src={imgUrl} alt="user avatar" />
        <AvatarFallback>{name}</AvatarFallback>
      </Avatar>
      <p className="cursor-pointer text-[18px]">{name}</p>
    </div>
  </>
);

export default UserAvatar;
