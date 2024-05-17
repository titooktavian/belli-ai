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
import { ListBulletIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Button } from "../../ui/button";
import { InfoCircledIcon } from "@radix-ui/react-icons";
import { Card, CardContent } from "../../ui/card";
import { Input } from "../../ui/input";
  
const ConsignmentDetails = () => {
  return (
    <Card
      className="overflow-hidden rounded-lg border-[1px] bg-transparent border-zinc-700 text-zinc-400"
    >
      <CardContent className="p-3 flex flex-col gap-4 py-4">
        <div className="flex gap-3">
          <div className="flex flex-col gap-2 w-1/2">
            <div className="flex gap-1 items-center text-white">
              <div className="text-sm">Origin *</div>
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

          <div className="flex flex-col gap-2 w-1/2">
            <div className="flex gap-1 items-center text-white">
              <div className="text-sm">Destination *</div>
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
            <Input className="border-zinc-700" rightIcon={<MagnifyingGlassIcon className="h-4 w-4 text-zinc-400" />} />
          </div>
        </div>
        
        <div className="flex gap-3">
          <div className="flex flex-col gap-2 w-1/2">
            <div className="flex gap-1 items-center text-white">
              <div className="text-sm">Commodity Code *</div>
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
            <Input className="border-zinc-700" rightIcon={<MagnifyingGlassIcon className="h-4 w-4 text-zinc-400" />} />
          </div>

          <div className="flex flex-col gap-2 w-1/2">
            <div className="flex gap-1 items-center text-white">
              <div className="text-sm">Commodity Description *</div>
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
        </div>

        <div className="flex gap-3">
          <div className="flex flex-col gap-2 w-1/2">
            <div className="flex gap-1 items-center text-white">
              <div className="text-sm">Payment Mode</div>
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

          <div className="flex flex-col gap-2 w-1/2">
            <div className="flex gap-1 items-center text-white">
              <div className="text-sm">Bill To</div>
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
        </div>

        <div className="flex gap-3">
          <div className="flex flex-col gap-2 w-1/2">
            <div className="flex gap-1 items-center text-white">
              <div className="text-sm">Bill To Name</div>
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

          <div className="flex flex-col gap-2 w-1/2">
            <div className="flex gap-1 items-center text-white">
              <div className="text-sm">Shipper</div>
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
            <div className="flex gap-2">
              <Input className="border-zinc-700 flex-grow" rightIcon={<MagnifyingGlassIcon className="h-4 w-4 text-zinc-400" />} />
              <Button variant="ghost" size="icon">
                <ListBulletIcon className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>

        <div className="flex gap-3">
          <div className="flex flex-col gap-2 w-1/2">
            <div className="flex gap-1 items-center text-white">
              <div className="text-sm">Consignee</div>
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
            <div className="flex gap-2">
              <Input className="border-zinc-700 flex-grow" rightIcon={<MagnifyingGlassIcon className="h-4 w-4 text-zinc-400" />} />
              <Button variant="ghost" size="icon">
                <ListBulletIcon className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <div className="flex flex-col gap-2 w-1/2">
            <div className="flex gap-1 items-center text-white">
              <div className="text-sm">Customer</div>
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
            <Input className="border-zinc-700" rightIcon={<MagnifyingGlassIcon className="h-4 w-4 text-zinc-400" />} />
          </div>
        </div>

        <div className="flex gap-3">
          <div className="flex flex-col gap-2 w-1/2">
            <div className="flex gap-1 items-center text-white">
              <div className="text-sm">Customer Name</div>
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

          <div className="flex flex-col gap-2 w-1/2">
            <div className="flex gap-1 items-center text-white">
              <div className="text-sm">Pieces</div>
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
        </div>

        <div className="flex gap-3">
          <div className="flex flex-col gap-2 w-1/2">
            <div className="flex gap-1 items-center text-white">
              <div className="text-sm">Gross Weight (Kg) *</div>
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
            <Input className="border-zinc-700" rightIcon={<ListBulletIcon className="h-4 w-4 text-zinc-400" />} />
          </div>

          <div className="flex flex-col gap-2 w-1/2">
            <div className="flex gap-1 items-center text-white">
              <div className="text-sm">Freight Forwarder</div>
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
            <Input className="border-zinc-700" rightIcon={<MagnifyingGlassIcon className="h-4 w-4 text-zinc-400" />} />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default ConsignmentDetails;
