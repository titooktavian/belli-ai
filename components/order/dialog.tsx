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
import CreateBooking from "./TabList/CreateBooking";
import ConsignmentDetails from "./TabList/ConsignmentDetails";
import ProcessRates from "./TabList/ProcessRates";
import RightSection from "./RightSection";
import OrderNavigator from "./OrderNavigator";

const TAB_LIST = [
  {
    id: 'create-booking',
    label: 'Create Booking',
    icon: <PencilSquareIcon className="h-6 w-6 shrink-0" aria-hidden="true" />,
  },
  {
    id: 'consignment-details',
    label: 'Consignment Details',
    icon: <PlaneIcon className="h-6 w-6 shrink-0" aria-hidden="true" />,
  },
  {
    id: 'shipper-details',
    label: 'Shipper Details',
    icon: <UserRound className="h-6 w-6 shrink-0" aria-hidden="true" />,
  },
  {
    id: 'process-rates',
    label: 'Process Rates',
    icon: <Package className="h-6 w-6 shrink-0" aria-hidden="true" />,
  },
];

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
              {/* Left sidebar & Dialog Content */}
              <div className="w-2/3">
                <Tabs defaultValue="create-booking" className="w-full flex gap-5" orientation="vertical">
                  <Card
                    className="overflow-hidden rounded-lg border-[1px] bg-transparent border-zinc-700 w-5/12 h-fit"
                  >
                    {/* Left Sidebar */}
                    <CardContent className="p-3">
                      <TabsList className="bg-blue flex-col items-start p-0 gap-4">
                        {TAB_LIST.map(list => (
                          <TabsTrigger value={list.id} className="p-0" key={list.id}>
                            <OrderNavigator
                              leftIcon={list.icon}
                              label={list.label}
                            />
                          </TabsTrigger>
                        ))}
                      </TabsList>
                    </CardContent>
                    <Separator className="pl-2 pr-2 bg-zinc-700" />
                    <CardFooter className="p-3">
                      <CardTitle className="truncate leading-loose text-zinc-400">
                        <Link
                          href="#"
                          className="group flex justify-between items-center text-sm font-semibold leading-6 text-zinc-400 hover:bg-zinc-800 hover:text-white"
                        >
                          <OrderNavigator
                            leftIcon={
                              <ClockIcon
                                className="h-6 w-6 shrink-0"
                                aria-hidden="true"
                              />
                            }
                            label="Activity Log"
                          />
                        </Link>
                      </CardTitle>
                    </CardFooter>
                  </Card>

                  {/* Content */}
                  <TabsContent value="create-booking" className="w-7/12 p-0 mt-0">
                    <CreateBooking />
                  </TabsContent>

                  <TabsContent value="consignment-details" className="w-7/12 p-0 mt-0">
                    <ConsignmentDetails />
                  </TabsContent>

                  <TabsContent value="shipper-details" className="w-7/12 p-0 mt-0">Shipper Details</TabsContent>

                  <TabsContent value="process-rates" className="w-7/12 p-0 mt-0">
                    <ProcessRates />
                  </TabsContent>
                </Tabs>
              </div>

              {/* Right Sidebar */}
              <RightSection />

            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default OrderDialog;
