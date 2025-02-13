
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { MainLayout } from "@/layouts/MainLayout";
import { TicketSelection } from "@/components/ticket-booking/TicketSelection";
import { AttendeeDetails } from "@/components/ticket-booking/AttendeeDetails";
import { ConfirmationStep } from "@/components/ticket-booking/ConfirmationStep";

const STEPS = ["Ticket Selection", "Attendee Details", "Ready"] as const;
type Step = typeof STEPS[number];

const Index = () => {
  const [currentStep, setCurrentStep] = useState<Step>("Ticket Selection");
  const [formData, setFormData] = useState({
    ticketType: "REGULAR ACCESS" as "REGULAR ACCESS" | "VIP ACCESS" | "VVIP ACCESS",
    quantity: 1,
    name: "",
    email: "",
    avatarUrl: "",
  });
  const { toast } = useToast();

  const handleNext = () => {
    const currentIndex = STEPS.indexOf(currentStep);
    if (currentIndex < STEPS.length - 1) {
      setCurrentStep(STEPS[currentIndex + 1]);
    }
  };

  const handleBack = () => {
    const currentIndex = STEPS.indexOf(currentStep);
    if (currentIndex > 0) {
      setCurrentStep(STEPS[currentIndex - 1]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }
    handleNext();
  };

  const handleReset = () => {
    setCurrentStep("Ticket Selection");
    setFormData({
      ticketType: "REGULAR ACCESS",
      quantity: 1,
      name: "",
      email: "",
      avatarUrl: "",
    });
  };

  return (
    <MainLayout>
      <div className="container max-w-lg mx-auto p-6">
        <div className="glass-card p-6 space-y-8">
          {currentStep === "Ticket Selection" && (
            <TicketSelection
              formData={formData}
              setFormData={setFormData}
              onNext={handleNext}
            />
          )}

          {currentStep === "Attendee Details" && (
            <AttendeeDetails
              formData={formData}
              setFormData={setFormData}
              onBack={handleBack}
              onSubmit={handleSubmit}
            />
          )}

          {currentStep === "Ready" && (
            <ConfirmationStep
              onReset={handleReset}
              ticketType={formData.ticketType}
              userData={{
                name: formData.name,
                email: formData.email,
                avatarUrl: formData.avatarUrl
              }}
            />
          )}
        </div>
      </div>
    </MainLayout>
  );
};

export default Index;
