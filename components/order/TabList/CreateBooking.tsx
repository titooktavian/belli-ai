import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Button } from "../../ui/button";
import { InfoCircledIcon, ReloadIcon } from "@radix-ui/react-icons";
import { Card, CardContent } from "../../ui/card";
import { Checkbox } from "../../ui/checkbox";
  
const CreateBooking = () => {
  return (
    <Card
      className="overflow-hidden rounded-lg border-[1px] bg-transparent border-zinc-700 text-zinc-400"
    >
      <CardContent className="p-3 flex flex-col gap-4 py-4">
        <div className="flex flex-col gap-2">
          <div className="flex gap-1 items-center text-white">
            <div className="text-sm">Booking Type</div>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <InfoCircledIcon />
                </TooltipTrigger>
                <TooltipContent side="right">
                  <p>Lorem</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          <Select>
            <SelectTrigger className="border-zinc-700 w-full">
              <SelectValue placeholder="" />
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

        <div className="flex flex-col gap-2">
          <div className="flex gap-1 items-center text-white">
            <div className="text-sm">Partner Prefix *</div>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <InfoCircledIcon />
                </TooltipTrigger>
                <TooltipContent side="right">
                  <p>Lorem</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          <Select>
            <SelectTrigger className="border-zinc-700 w-full">
              <SelectValue placeholder="" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="A1">A1</SelectItem>
                <SelectItem value="B2">B2</SelectItem>
                <SelectItem value="C3">C3</SelectItem>
                <SelectItem value="D4">D4</SelectItem>
                <SelectItem value="E5">E5</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex gap-1 items-center text-white">
            <div className="text-sm">AWB#</div>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <InfoCircledIcon />
                </TooltipTrigger>
                <TooltipContent side="right">
                  <p>Lorem</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          <Select>
            <SelectTrigger className="border-zinc-700 w-full">
              <SelectValue placeholder="" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="AWB001">AWB001</SelectItem>
                <SelectItem value="AWB002">AWB002</SelectItem>
                <SelectItem value="AWB003">AWB003</SelectItem>
                <SelectItem value="AWB004">AWB004</SelectItem>
                <SelectItem value="AWB005">AWB005</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex gap-1 items-center text-white">
            <div className="text-sm">Partner Code *</div>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <InfoCircledIcon />
                </TooltipTrigger>
                  <TooltipContent side="right">
                    <p>Lorem</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <Select>
              <SelectTrigger className="border-zinc-700 w-full">
                <SelectValue placeholder="" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="A1">A1</SelectItem>
                  <SelectItem value="B2">B2</SelectItem>
                  <SelectItem value="C3">C3</SelectItem>
                  <SelectItem value="D4">D4</SelectItem>
                  <SelectItem value="E5">E5</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <div className="flex gap-3">
            <div className="flex items-center space-x-2">
              <Checkbox id="isPhysical" className="border-zinc-500" />
              <label
                htmlFor="isPhysical"
                className="text-sm text-white peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Is Physical
              </label>
            </div>
            <Button className="bg-button-primary" size="icon">
              <MagnifyingGlassIcon
                className="h-5 w-5 text-white"
                aria-hidden="true"
              />
            </Button>
            <Button className="bg-button-primary" size="icon">
              <ReloadIcon
                className="h-5 w-5 text-white"
                aria-hidden="true"
              />
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }
  
  export default CreateBooking;
  