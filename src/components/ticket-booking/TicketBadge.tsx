
interface TicketBadgeProps {
  type: "REGULAR ACCESS" | "VIP ACCESS" | "VVIP ACCESS";
}

export const TicketBadge = ({ type }: TicketBadgeProps) => {
  const getDisplayImage = () => {
    switch (type) {
      case "REGULAR ACCESS":
        return <img src="/regular.png" alt="Regular Access" />;
      case "VIP ACCESS":
        return <img src="/vip.png" alt="VIP Access" />;
      case "VVIP ACCESS":
        return <img src="/vvip.png" alt="VVIP Access" />;
      default:
        return <img src="/regular.png" alt="Regular Access" />;
    }
  };
  

  return (
    <span className={`px-3 py-1 rounded-full border text-sm font-medium`}>
      {getDisplayImage()}
    </span>
  );
};
