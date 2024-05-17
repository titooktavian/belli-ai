import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { PencilSquareIcon } from "@heroicons/react/24/outline";
import { Button } from "../ui/button";
import { Cross2Icon, SizeIcon } from "@radix-ui/react-icons";
  
const OrderDialog = () => {
  return (
    <>
      <Dialog>
        <DialogTrigger>
          <Button variant="ghost" size="icon"><PencilSquareIcon className="h-5 w-5" aria-hidden="true" /></Button>
        </DialogTrigger>
        <DialogContent className="max-w-5xl">
          <DialogHeader>
            <DialogTitle className="flex justify-between">
              <div>New Orders</div>
              <div className="flex gap-2">
                <Button variant="ghost" size="icon"><SizeIcon /></Button>
                <DialogClose>
                  <Button variant="ghost" size="icon"><Cross2Icon /></Button>
                </DialogClose>
              </div>
            </DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your account
              and remove your data from our servers.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default OrderDialog;
