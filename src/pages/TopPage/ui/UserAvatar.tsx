import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar.tsx";

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
      className="flex flex-row bg-cyan-900 text-white px-4 py-2 rounded-2xl gap-4 items-center justify-center cursor-pointer"
      onClick={onSelectionChange}
    >
      <input type="radio" checked={selected} onChange={() => {}} />
      <Avatar>
        <AvatarImage src={imgUrl} alt="user avatar" />
        <AvatarFallback>{name}</AvatarFallback>
      </Avatar>
      <p className="cursor-pointer">{name}</p>
    </div>
  </>
);

export default UserAvatar;
