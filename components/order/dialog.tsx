import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ClockIcon, PencilSquareIcon } from "@heroicons/react/24/outline";
import { Button } from "../ui/button";
import { Cross2Icon, SizeIcon } from "@radix-ui/react-icons";
import { Card, CardContent, CardFooter, CardTitle } from "../ui/card";
import { Separator } from "../ui/separator";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Package, PlaneIcon, UserRound } from "lucide-react";
  
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
            <DialogDescription className="flex w-full gap-5">
              <div className="w-2/3">
                <Tabs defaultValue="account" className="w-full flex gap-5" orientation="vertical">
                  <Card
                    className="overflow-hidden rounded-lg border-[1px] bg-transparent border-zinc-700 w-5/12"
                  >
                    <CardContent className="p-3">
                      <TabsList className="bg-blue flex-col items-start p-0 gap-4">
                        <TabsTrigger value="account" className="p-0">
                          <div className="flex items-center gap-x-3">
                            <PencilSquareIcon
                              className="h-6 w-6 shrink-0"
                              aria-hidden="true"
                            />
                            Create Booking
                          </div>
                        </TabsTrigger>
                        <TabsTrigger value="password" className="p-0">
                          <div className="flex items-center gap-x-3">
                            <PlaneIcon
                              className="h-6 w-6 shrink-0"
                              aria-hidden="true"
                            />
                            Consigment Details
                          </div>
                        </TabsTrigger>
                        <TabsTrigger value="password" className="p-0">
                          <div className="flex items-center gap-x-3">
                            <UserRound
                              className="h-6 w-6 shrink-0"
                              aria-hidden="true"
                            />
                            Shipper Details
                          </div>
                        </TabsTrigger>
                        <TabsTrigger value="password" className="p-0">
                          <div className="flex items-center gap-x-3">
                            <Package
                              className="h-6 w-6 shrink-0"
                              aria-hidden="true"
                            />
                            Process Rates
                          </div>
                        </TabsTrigger>
                      </TabsList>
                    </CardContent>
                    <Separator className="pl-2 pr-2 bg-zinc-700" />
                    <CardFooter className="p-3">
                      <CardTitle className="truncate leading-loose text-zinc-400">
                        <Link
                          href="#"
                          className="group flex justify-between items-center text-sm font-semibold leading-6 text-zinc-400 hover:bg-zinc-800 hover:text-white"
                        >
                          <div className="flex items-center gap-x-3">
                            <ClockIcon
                              className="h-6 w-6 shrink-0"
                              aria-hidden="true"
                            />
                            Activity Log
                          </div>
                        </Link>
                      </CardTitle>
                    </CardFooter>
                  </Card>
                  <TabsContent value="account" className="w-7/12">Make changes to your account here.</TabsContent>
                  <TabsContent value="password" className="w-7/12">Change your password here.</TabsContent>
                </Tabs>
              </div>
              <div className="w-1/3">
                asd
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default OrderDialog;
