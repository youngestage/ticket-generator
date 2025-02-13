
import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { StepIndicator } from "./StepIndicator";

interface TicketSelectionProps {
  formData: {
    ticketType: string;
    quantity: number;
  };
  setFormData: (data: any) => void;
  onNext: () => void;
}

export const TicketSelection = ({ formData, setFormData, onNext }: TicketSelectionProps) => {
  return (
    <div className="space-y-8 animate-fadeIn">
      <StepIndicator currentStep={1} title="Ticket Selection" />

      <div className="text-center space-y-2 bg-[#0A2A2F]/50 rounded-lg p-6">
        <h1 className="text-2xl font-bold">Techember Fest '25</h1>
        <p className="text-gray-400">Join us for an unforgettable experience at [Event Name]. Secure your spot now.</p>
        <div className="flex items-center justify-center gap-2 text-sm text-teal-400 mt-2">
          <MapPin className="h-4 w-4" />
          <span>[Event Location]</span>
          <span>||</span>
          <span>March 15, 2025 | 7:00 PM</span>
        </div>
      </div>

      <div className="space-y-6">
        <label className="text-lg font-medium">Select Ticket Type:</label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { type: "REGULAR ACCESS", price: "Free", limit: "20 left" },
            { type: "VIP ACCESS", price: "$50", limit: "20 left" },
            { type: "VVIP ACCESS", price: "$150", limit: "20 left" }
          ].map((ticket) => (
            <button
              key={ticket.type}
              onClick={() => setFormData({ ...formData, ticketType: ticket.type })}
              className={`flex justify-between items-center p-4 rounded-lg transition-colors ${
                formData.ticketType === ticket.type
                  ? "bg-teal-400/20 border-2 border-teal-400"
                  : "bg-[#0A2A2F] hover:bg-[#0A2A2F]/70"
              }`}
            >
              <div className="text-left">
                <span className="block font-medium">{ticket.type}</span>
                <span className="text-sm text-teal-400">{ticket.limit}</span>
              </div>
              <span className="text-lg font-bold">{ticket.price}</span>
            </button>
          ))}
        </div>

        <div className="space-y-2">
          <label className="block text-lg font-medium">Number of Tickets</label>
          <Select
            value={String(formData.quantity)}
            onValueChange={(value) => setFormData({ ...formData, quantity: Number(value) })}
          >
            <SelectTrigger className="bg-[#0A2A2F] border-none h-12">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {[1, 2, 3, 4, 5].map((num) => (
                <SelectItem key={num} value={String(num)}>
                  {num}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="flex justify-between gap-4 pt-4">
        <Button variant="outline" className="w-full border-teal-400 text-teal-400 hover:bg-teal-400/20">
          Cancel
        </Button>
        <Button onClick={onNext} className="w-full bg-teal-400 text-black hover:bg-teal-400/90">
          Next
        </Button>
      </div>
    </div>
  );
};
