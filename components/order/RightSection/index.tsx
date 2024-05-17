import { Button } from "../../ui/button";
import { ScrollText } from "lucide-react";
import BillCard from "./BillCard";
import BalanceCard from "./BalanceCard";
  
const RightSection = () => {
  return (
    <div className="w-1/3 flex flex-col gap-5">
      <BillCard />

      <BalanceCard />

      <Button className="flex gap-2 items-center justify-center bg-button-secondary h-11">
        <ScrollText className="w-5 h-5" />
        View Invoice
      </Button>

      <Button className="flex gap-2 items-center justify-center bg-button-primary h-11">
        Save Reservation
      </Button>
    </div>
  );
}

export default RightSection;
