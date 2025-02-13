
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { StepIndicator } from "./StepIndicator";
import { TicketBadge } from "./TicketBadge";
import { MapPin, Calendar, User } from "lucide-react";
import JsBarcode from "jsbarcode";
import { useToast } from "@/components/ui/use-toast";

interface ConfirmationStepProps {
  onReset: () => void;
  ticketType: "REGULAR ACCESS" | "VIP ACCESS" | "VVIP ACCESS";
  userData: {
    name: string;
    email: string;
    avatarUrl: string;
    quantity?: number; // Add quantity to userData
  };
}

export const ConfirmationStep = ({ onReset, ticketType, userData }: ConfirmationStepProps) => {
  const barcodeRef = useRef<SVGSVGElement>(null);
  const ticketRef = useRef<HTMLDivElement>(null);
  const ticketId = Math.random().toString(36).substring(2, 15);
  const { toast } = useToast();

  useEffect(() => {
    if (barcodeRef.current) {
      JsBarcode(barcodeRef.current, `TECHEMBER-${ticketId}`, {
        format: "CODE128",
        width: 2,
        height: 60,
        displayValue: true,
        font: "monospace",
        fontSize: 12,
        textAlign: "center",
        textPosition: "bottom",
        textMargin: 2,
        background: "transparent",
        lineColor: "#000000",
        margin: 10
      });
    }
  }, [ticketId]);

  const handleDownload = async () => {
    try {
      const html2canvas = (await import('html2canvas')).default;
      
      if (ticketRef.current) {
        const canvas = await html2canvas(ticketRef.current, {
          backgroundColor: null,
          scale: 2,
        });

        canvas.toBlob((blob) => {
          if (blob) {
            const url = window.URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = `techember-ticket-${ticketId}.png`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            window.URL.revokeObjectURL(url);

            toast({
              title: "Success",
              description: "Your ticket has been downloaded!",
            });
          }
        }, 'image/png');
      }
    } catch (error) {
      console.error('Error downloading ticket:', error);
      toast({
        title: "Error",
        description: "Failed to download ticket. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      <StepIndicator currentStep={3} title="Ready" />

      <div className="text-center space-y-2">
        <h3 className="text-xl font-bold">Your Ticket is Booked!</h3>
        <p className="text-gray-400">You can download or check your email for a copy</p>
      </div>

      <div className="ticket-container">
        <div ref={ticketRef} className="ticket glass-card p-6 bg-gradient-to-br from-teal-400/20 via-teal-400/10 to-transparent relative overflow-hidden">
          <div className="space-y-6">
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-bold text-xl mb-1">Techember Fest '25</h4>
                <div className="flex items-center gap-2 text-gray-400">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">[Event Location], Lagos</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400 mt-1">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">March 15, 2025 | 7:00 PM</span>
                </div>
              </div>
              <TicketBadge type={ticketType} />
            </div>

            <div className="flex gap-4 p-4 bg-black/20 rounded-lg">
              <div className="w-20 h-20 bg-teal-400/20 rounded-lg overflow-hidden">
                {userData.avatarUrl ? (
                  <img 
                    src={userData.avatarUrl} 
                    alt="Profile" 
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <User className="w-8 h-8 text-teal-400" />
                  </div>
                )}
              </div>
              <div className="flex-1 space-y-2">
                <div className="form-group">
                  <label className="text-xs text-gray-400">Full Name</label>
                  <div className="text-sm font-medium">{userData.name}</div>
                </div>
                <div className="form-group">
                  <label className="text-xs text-gray-400">Email</label>
                  <div className="text-sm">{userData.email}</div>
                </div>
              </div>
            </div>

            <div className="space-y-3 p-4 bg-black/20 rounded-lg">
              <div className="flex justify-between">
                <span className="text-sm text-gray-400">Ticket Type</span>
                <span className="text-sm font-medium">{ticketType}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-400">Number of Tickets</span>
                <span className="text-sm font-medium">{userData.quantity || 1}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-400">Ticket ID</span>
                <span className="text-sm font-medium font-mono">TECH-{ticketId}</span>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-6 -right-6 top-0">
                <div className="border-t border-dashed border-gray-500/30 relative">
                  <div className="absolute -top-[0.3rem] left-0 right-0 flex justify-between px-4">
                    {[...Array(12)].map((_, i) => (
                      <div key={i} className="w-2 h-2 rounded-full bg-background" />
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-6 flex justify-center">
                <div className="bg-gradient-to-br from-teal-400/20 via-teal-400/10 to-transparent p-3 rounded-lg w-full backdrop-blur-sm">
                  <svg ref={barcodeRef} className="w-full"></svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between pt-4">
        <Button 
          variant="outline" 
          onClick={onReset} 
          className="border-teal-400/20 hover:bg-teal-400/20"
        >
          Book Another Ticket
        </Button>
        <Button 
          onClick={handleDownload} 
          className="bg-teal-400 text-black hover:bg-teal-400/90"
        >
          Download Ticket
        </Button>
      </div>
    </div>
  );
};
