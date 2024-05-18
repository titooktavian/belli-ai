import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { MagnifyingGlassIcon, TrashIcon } from "@heroicons/react/24/outline";
import { Card, CardContent } from "../../ui/card";
import { Input } from "../../ui/input";
import { Separator } from "@/components/ui/separator";
import { PlusSquareIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CalendarDaysIcon } from "@heroicons/react/24/solid";
import { Calendar } from "@/components/ui/calendar";
  
const ShipperDetails = () => {
  return (
    <div className="flex flex-col relative">
      <div className="flex absolute">
        <div className="border-zinc-700 border-t-[1px] border-l-[1px] border-r-[1px] pt-2 px-4 pb-3 bg-zinc-800 rounded-t-lg text-white cursor-pointer">Route 1</div>
        <div className="pt-2 px-4 pb-3 text-white cursor-pointer">+</div>
      </div>
      <Card
        className="overflow-hidden rounded-lg border-[1px] bg-transparent border-zinc-700 text-zinc-400 mt-10 rounded-tl-none"
      >
        <CardContent className="p-3 flex flex-col gap-4 py-4">
          <div className="flex gap-3">
            <div className="flex flex-col gap-2 w-1/2">
              <div className="flex gap-1 items-center text-white">
                <div className="text-sm">Vol (KG)</div>
              </div>
              <Select>
                <SelectTrigger className="border-zinc-700 w-full">
                  <SelectValue placeholder="Truck" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="TYPE-1">TYPE-1</SelectItem>
                    <SelectItem value="TYPE-2">TYPE-2</SelectItem>
                    <SelectItem value="TYPE-3">TYPE-3</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>

            <div className="flex flex-col gap-2 w-1/2">
              <div className="flex gap-1 items-center text-white">
                <div className="text-sm">Origin *</div>
              </div>
              <Input className="border-zinc-700" rightIcon={<MagnifyingGlassIcon className="h-4 w-4 text-zinc-400" />} placeholder="AH1" />
            </div>
          </div>

          <div className="flex gap-3">
            <div className="flex flex-col gap-2 w-1/2">
              <div className="flex gap-1 items-center text-white">
                <div className="text-sm">Destination *</div>
              </div>
              <Input className="border-zinc-700" rightIcon={<MagnifyingGlassIcon className="h-4 w-4 text-zinc-400" />} />
            </div>

            <div className="flex flex-col gap-2 w-1/2">
              <div className="flex gap-1 items-center text-white">
                <div className="text-sm">Partner Type</div>
              </div>
              <Select>
                <SelectTrigger className="border-zinc-700 w-full">
                  <SelectValue placeholder="AIR" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="TYPE-1">TYPE-1</SelectItem>
                    <SelectItem value="TYPE-2">TYPE-2</SelectItem>
                    <SelectItem value="TYPE-3">TYPE-3</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex gap-3">
            <div className="flex flex-col gap-2 w-1/2">
              <div className="flex gap-1 items-center text-white">
                <div className="text-sm">Partner Code</div>
              </div>
              <Select>
                <SelectTrigger className="border-zinc-700 w-full">
                  <SelectValue placeholder="SG" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="TYPE-1">TYPE-1</SelectItem>
                    <SelectItem value="TYPE-2">TYPE-2</SelectItem>
                    <SelectItem value="TYPE-3">TYPE-3</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>

            <div className="flex flex-col gap-2 w-1/2">
              <div className="flex gap-1 items-center text-white">
                <div className="text-sm">Dates *</div>
              </div>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={"outline"}
                    className={`flex justify-between border-zinc-700 bg-zinc-800 pl-3 pr-3`}
                  >
                    <span>Pick a date</span>
                    <CalendarDaysIcon className="h-4 w-4 text-zinc-400" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={new Date()}
                    onSelect={() => {}}
                    disabled={false}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
          </div>

          <div className="flex gap-3">
            <div className="flex flex-col gap-2 w-1/2">
              <div className="flex gap-1 items-center text-white">
                <div className="text-sm">Flight Code *</div>
              </div>
              <Input className="border-zinc-700" />
            </div>

            <div className="flex flex-col gap-2 w-1/2">
              <div className="flex gap-1 items-center text-white">
                <div className="text-sm">Allotment Code</div>
              </div>
              <Input className="border-zinc-700" />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex gap-1 items-center text-white">
              <div className="text-sm">AWB Status</div>
            </div>
            <Select>
              <SelectTrigger className="border-zinc-700 w-full">
                <SelectValue placeholder="SG" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="TYPE-1">TYPE-1</SelectItem>
                  <SelectItem value="TYPE-2">TYPE-2</SelectItem>
                  <SelectItem value="TYPE-3">TYPE-3</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <Separator className="pl-2 pr-2 bg-zinc-700" />

          <div className="flex gap-2">
            <Button className="flex gap-2 items-center justify-center bg-button-primary h-11 flex-grow">
              <PlusSquareIcon className="w-5 h-5" />
              New Route
            </Button>
            <Button className="flex gap-2 items-center justify-center bg-button-primary h-11" size="icon">
              <TrashIcon className="w-5 h-5" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
    
  );
}

export default ShipperDetails;
