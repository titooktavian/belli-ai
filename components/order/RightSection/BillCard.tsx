import { Card, CardContent } from "../../ui/card";
import { Separator } from "../../ui/separator";
import CardColumn from "./components/CardColumn";
  
const BillCard = () => {
  return (
    <Card
      className="overflow-hidden rounded-lg border-[1px] bg-transparent border-zinc-700 text-zinc-400"
    >
      <CardContent className="p-3 flex flex-col gap-4">
        <div className="flex justify-between">
          <h2 className="text-xl font-semibold text-white">Amount Due</h2>
          <h2 className="text-xl text-white">$ 0.00</h2>
        </div>

        <Separator className="pl-2 pr-2 bg-zinc-700" />

        <CardColumn label="Booking Code" value="AAC0FE" />
        <CardColumn label="Booking ID" value="IP-4372-1501421737" />
        <CardColumn label="Amount Paid" value="$ 20.00" />

        <Separator className="pl-2 pr-2 bg-zinc-700" />

        <CardColumn label="Subtotal" value="$ 20.00" />
        <CardColumn label="Grand Total" value="$ 20.00" />

        <Separator className="pl-2 pr-2 mb-3 bg-zinc-700" />
      </CardContent>
    </Card>
  );
}

export default BillCard;
