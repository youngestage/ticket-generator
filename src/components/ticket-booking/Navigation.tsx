import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 px-4 py-4 bg-gradient-to-b from-black/50 to-transparent">
        <nav className="mx-auto max-w-7xl bg-[#1B3338]/80 backdrop-blur-sm rounded-xl px-6 py-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-0 border border-teal-400/30">
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
      </div>
      <div className="h-16" />
    </>
  );
};
