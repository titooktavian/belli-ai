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
import { Package, PlaneIcon, ScrollText, UserRound } from "lucide-react";
  
const OrderDialog = () => {
  return (
    <>
      <Dialog>
        <DialogTrigger>
          <Button variant="ghost" size="icon"><PencilSquareIcon className="h-5 w-5" aria-hidden="true" /></Button>
        </DialogTrigger>
        <DialogContent className="!max-w-7xl">
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
            <DialogDescription className="flex w-full gap-5 pt-5 pb-5">
              <div className="w-2/3">
                <Tabs defaultValue="create-booking" className="w-full flex gap-5" orientation="vertical">
                  <Card
                    className="overflow-hidden rounded-lg border-[1px] bg-transparent border-zinc-700 w-5/12"
                  >
                    <CardContent className="p-3">
                      <TabsList className="bg-blue flex-col items-start p-0 gap-4">
                        <TabsTrigger value="create-booking" className="p-0">
                          <div className="flex items-center gap-x-3">
                            <PencilSquareIcon
                              className="h-6 w-6 shrink-0"
                              aria-hidden="true"
                            />
                            Create Booking
                          </div>
                        </TabsTrigger>
                        <TabsTrigger value="consigment-details" className="p-0">
                          <div className="flex items-center gap-x-3">
                            <PlaneIcon
                              className="h-6 w-6 shrink-0"
                              aria-hidden="true"
                            />
                            Consigment Details
                          </div>
                        </TabsTrigger>
                        <TabsTrigger value="shipper-details" className="p-0">
                          <div className="flex items-center gap-x-3">
                            <UserRound
                              className="h-6 w-6 shrink-0"
                              aria-hidden="true"
                            />
                            Shipper Details
                          </div>
                        </TabsTrigger>
                        <TabsTrigger value="process-rates" className="p-0">
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
                  <TabsContent value="create-booking" className="w-7/12 p-0 mt-0">
                    <Card
                      className="overflow-hidden rounded-lg border-[1px] bg-transparent border-zinc-700 text-zinc-400"
                    >
                      <CardContent className="p-3 flex flex-col gap-4">
                        <div className="flex justify-between">
                          <h2 className="text-xl font-semibold text-white">Balance</h2>
                          <h2 className="text-xl text-white">$ 0.00</h2>
                        </div>

                        <Separator className="pl-2 pr-2 bg-zinc-700" />

                        <h2 className="text-base font-semibold">Elroy Carreen</h2>

                        <div className="flex justify-between">
                          <h2 className="text-base">Individual Balance</h2>
                          <h2 className="text-base">$ 0.00</h2>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                  <TabsContent value="consigment-details" className="w-7/12">Consignment Details</TabsContent>
                  <TabsContent value="shipper-details" className="w-7/12">Shipper Details</TabsContent>
                  <TabsContent value="process-rates" className="w-7/12">Process Rates</TabsContent>
                </Tabs>
              </div>
              <div className="w-1/3 flex flex-col gap-5">
                <Card
                  className="overflow-hidden rounded-lg border-[1px] bg-transparent border-zinc-700 text-zinc-400"
                >
                  <CardContent className="p-3 flex flex-col gap-4">
                    <div className="flex justify-between">
                      <h2 className="text-xl font-semibold text-white">Amount Due</h2>
                      <h2 className="text-xl text-white">$ 0.00</h2>
                    </div>

                    <Separator className="pl-2 pr-2 bg-zinc-700" />

                    <div className="flex justify-between">
                      <h2 className="text-base">Booking Code</h2>
                      <h2 className="text-base">AAC0FE</h2>
                    </div>

                    <div className="flex justify-between">
                      <h2 className="text-base">Booking ID</h2>
                      <h2 className="text-base">IP-4372-1501421737</h2>
                    </div>

                    <div className="flex justify-between">
                      <h2 className="text-base">Amound Paid</h2>
                      <h2 className="text-base">$ 20.00</h2>
                    </div>

                    <Separator className="pl-2 pr-2 bg-zinc-700" />

                    <div className="flex justify-between">
                      <h2 className="text-base">Subtotal</h2>
                      <h2 className="text-base">$ 20.00</h2>
                    </div>

                    <div className="flex justify-between">
                      <h2 className="text-base">Grand Total</h2>
                      <h2 className="text-base">$ 20.00</h2>
                    </div>

                    <Separator className="pl-2 pr-2 mb-3 bg-zinc-700" />
                  </CardContent>
                </Card>

                <Card
                  className="overflow-hidden rounded-lg border-[1px] bg-transparent border-zinc-700 text-zinc-400"
                >
                  <CardContent className="p-3 flex flex-col gap-4">
                    <div className="flex justify-between">
                      <h2 className="text-xl font-semibold text-white">Balance</h2>
                      <h2 className="text-xl text-white">$ 0.00</h2>
                    </div>

                    <Separator className="pl-2 pr-2 bg-zinc-700" />

                    <h2 className="text-base font-semibold">Elroy Carreen</h2>

                    <div className="flex justify-between">
                      <h2 className="text-base">Individual Balance</h2>
                      <h2 className="text-base">$ 0.00</h2>
                    </div>
                  </CardContent>
                </Card>

                <Button className="flex gap-2 items-center justify-center bg-button-secondary h-11">
                  <ScrollText className="w-5 h-5" />
                  View Invoice
                </Button>

                <Button className="flex gap-2 items-center justify-center bg-button-primary h-11">
                  Save Reservation
                </Button>
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default OrderDialog;
