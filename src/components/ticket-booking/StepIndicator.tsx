
interface StepIndicatorProps {
  currentStep: 1 | 2 | 3;
  title: string;
}

export const StepIndicator = ({ currentStep, title }: StepIndicatorProps) => {
  const progressWidth = `${(currentStep / 3) * 100}%`;

  return (
    <div className="space-y-4 animate-fadeIn">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-medium">{title}</h2>
        <span className="text-sm text-teal-400">Step {currentStep}/3</span>
      </div>
      <div className="w-full h-1 bg-[#1B3338] rounded-full overflow-hidden">
        <div 
          className="h-full bg-teal-400 rounded-full transition-all duration-300 ease-in-out" 
          style={{ width: progressWidth }}
        />
      </div>
    </div>
  );
};
