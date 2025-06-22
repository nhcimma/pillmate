import { cn } from "@/lib/utils";

interface PillMateLogoProps {
  size?: "sm" | "md" | "lg" | "xl";
  showText?: boolean;
  className?: string;
}

export function PillMateLogo({
  size = "md",
  showText = true,
  className,
}: PillMateLogoProps) {
  const sizeConfig = {
    sm: { container: "w-8 h-8", icon: "w-4 h-4", text: "text-lg" },
    md: { container: "w-12 h-12", icon: "w-6 h-6", text: "text-2xl" },
    lg: { container: "w-16 h-16", icon: "w-8 h-8", text: "text-3xl" },
    xl: { container: "w-20 h-20", icon: "w-10 h-10", text: "text-4xl" },
  };

  const config = sizeConfig[size];

  return (
    <div className={cn("flex items-center space-x-3", className)}>
      {/* Logo Icon - Simple and Clean */}
      <div
        className={cn(
          "relative rounded-3xl bg-gradient-to-br from-purple-200 to-purple-300 flex items-center justify-center transform hover:scale-105 transition-all duration-300 shadow-md",
          config.container,
        )}
      >
        {/* Simple Pill Icon */}
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={cn("text-purple-700", config.icon)}
        >
          {/* Main pill shape - simplified */}
          <rect
            x="6"
            y="8"
            width="12"
            height="8"
            rx="4"
            fill="currentColor"
            fillOpacity="0.8"
          />
          {/* Center divider */}
          <line x1="12" y1="8" x2="12" y2="16" stroke="white" strokeWidth="1" />
          {/* Small dot indicators */}
          <circle cx="9" cy="12" r="1" fill="white" fillOpacity="0.9" />
          <circle cx="15" cy="12" r="1" fill="white" fillOpacity="0.9" />
        </svg>
      </div>

      {/* Logo Text */}
      {showText && (
        <div className="flex flex-col">
          <h1
            className={cn("font-bold text-gray-900 leading-none", config.text)}
          >
            <span className="text-purple-600">Pill</span>
            <span className="text-purple-500">Mate</span>
          </h1>
          {size === "lg" || size === "xl" ? (
            <p className="text-xs text-purple-500/70 font-medium mt-1">
              Pengingat Obat Digital
            </p>
          ) : null}
        </div>
      )}
    </div>
  );
}
