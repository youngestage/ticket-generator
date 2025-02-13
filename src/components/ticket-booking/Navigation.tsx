
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <nav className="bg-[#1B3338] rounded-xl px-6 py-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-0 mb-6">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="bg-[#0A2A2F] p-2 rounded">
            <img src="/logo.png" alt="Logo" className="h-6" />
          </div>
        </div>
        <Button className="bg-white text-black hover:bg-[#1EAEDB] hover:text-white md:hidden">
          MY TICKETS <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
      <div className="hidden md:flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
        <Link to="/" className="hover:text-teal-400 transition-colors">Events</Link>
        <Link to="/" className="hover:text-teal-400 transition-colors">My Tickets</Link>
        <Link to="/about" className="hover:text-teal-400 transition-colors">About Project</Link>
      </div>
      <Button className="bg-white text-black hover:bg-[#1EAEDB] hover:text-white transition-colors hidden md:flex">
        MY TICKETS <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </nav>
  );
};
