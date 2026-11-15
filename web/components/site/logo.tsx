import { Popcorn } from "lucide-react";

const Logo = ({ onlyLogo = false }: { onlyLogo?: boolean }) => {
  return (
    <div className="flex items-center gap-1">
      <Popcorn className="text-primary" />

      {!onlyLogo && <h5 className="font-bold">Cinematic</h5>}
    </div>
  );
};

export default Logo;
