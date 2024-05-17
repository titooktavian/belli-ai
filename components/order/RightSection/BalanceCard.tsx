import { Card, CardContent } from "../../ui/card";
import { Separator } from "../../ui/separator";
import CardColumn from "./components/CardColumn";
  
const BalanceCard = () => {
  return (
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

        <CardColumn label="Individual Balance" value="$ 0.00" />
      </CardContent>
    </Card>
  );
}

export default BalanceCard;
