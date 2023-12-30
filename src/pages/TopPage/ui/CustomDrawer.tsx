import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer.tsx";
import { Button } from "@/components/ui/button.tsx";
import { Input } from "@/components/ui/input.tsx";
import { useNavigate } from "react-router-dom";

const CustomDrawer = () => {
  const navigate = useNavigate();

  return (
    <Drawer>
      <DrawerTrigger
        asChild
        className="flex justify-center items-center w-full mb-2"
      >
        <div>
          <Button variant="outline">Open Drawer</Button>
        </div>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="flex w-full justify-center items-center flex-col">
          <DrawerTitle>Ви точно впевнені в своєму виборі?</DrawerTitle>
          <DrawerDescription>
            Змінити його вже буде неможливо :(((
          </DrawerDescription>
        </DrawerHeader>
        <div className="flex justify-center items-center">
          <div className="w-96">
            <Input type="text" placeholder="Введіть своє ім'я" />
          </div>
        </div>
        <DrawerFooter>
          <DrawerClose>
            <Button
              onClick={() => {
                navigate("/");
              }}
            >
              Submit
            </Button>
          </DrawerClose>
          <DrawerClose>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default CustomDrawer;
