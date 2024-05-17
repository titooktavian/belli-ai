import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { ListBulletIcon } from "@heroicons/react/24/outline";
import { InfoCircledIcon } from "@radix-ui/react-icons";
import { Card, CardContent } from "../../ui/card";
import { Input } from "../../ui/input";
  
const ProcessRates = () => {
  return (
    <Card
      className="overflow-hidden rounded-lg border-[1px] bg-transparent border-zinc-700 text-zinc-400"
    >
      <CardContent className="p-3 flex flex-col gap-4 py-4">
        <div className="flex gap-3">
          <div className="flex flex-col gap-2 w-1/2">
            <div className="flex gap-1 items-center text-white">
              <div className="text-sm">Vol (KG)</div>
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
            <Input className="border-zinc-700" />
          </div>

          <div className="flex flex-col gap-2 w-1/2">
            <div className="flex gap-1 items-center text-white">
              <div className="text-sm">Currency</div>
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
            <Input className="border-zinc-700" />
          </div>
        </div>

        <div className="flex gap-3">
          <div className="flex flex-col gap-2 w-1/2">
            <div className="flex gap-1 items-center text-white">
              <div className="text-sm">Rate</div>
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
            <Input className="border-zinc-700" />
          </div>

          <div className="flex flex-col gap-2 w-1/2">
            <div className="flex gap-1 items-center text-white">
              <div className="text-sm">S Rate</div>
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
            <Input className="border-zinc-700" />
          </div>
        </div>

        <div className="flex gap-3">
          <div className="flex flex-col gap-2 w-1/2">
            <div className="flex gap-1 items-center text-white">
              <div className="text-sm">S Freight</div>
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
            <Input className="border-zinc-700" />
          </div>

          <div className="flex flex-col gap-2 w-1/2">
            <div className="flex gap-1 items-center text-white">
              <div className="text-sm">Spot ID</div>
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
            <Input className="border-zinc-700" />
          </div>
        </div>

        <div className="flex gap-3">
          <div className="flex flex-col gap-2 w-1/2">
            <div className="flex gap-1 items-center text-white">
              <div className="text-sm">GS Wt.KG</div>
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
            <Input className="border-zinc-700" />
          </div>

          <div className="flex flex-col gap-2 w-1/2">
            <div className="flex gap-1 items-center text-white">
              <div className="text-sm">CH Wt.KG</div>
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
            <Input className="border-zinc-700" />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex gap-1 items-center text-white">
            <div className="text-sm">Amt Due</div>
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
      </CardContent>
    </Card>
  );
}

export default ProcessRates;
