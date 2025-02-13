
import { Navigation } from "@/components/ticket-booking/Navigation";

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div 
      className="min-h-screen bg-cover bg-center bg-no-repeat" 
      style={{ backgroundImage: "url('/lovable-uploads/72aab049-4225-4dd9-9693-52d52437c9f4.png')" }}
    >
      <div className="container mx-auto px-4 py-6">
        <Navigation />
        {children}
      </div>
    </div>
  );
};
