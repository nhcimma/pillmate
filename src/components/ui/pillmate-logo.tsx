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
      {/* Logo Icon */}
      <div
        className={cn(
          "relative rounded-2xl pillmate-gradient flex items-center justify-center transform hover:scale-105 transition-all duration-300 shadow-lg",
          config.container,
        )}
      >
        {/* Pill Icon with unique design */}
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={cn("text-white", config.icon)}
        >
          {/* Main pill shape */}
          <path
            d="M8.5 15.5L15.5 8.5C17.433 6.567 17.433 3.433 15.5 1.5C13.567 -0.433 10.433 -0.433 8.5 1.5L1.5 8.5C-0.433 10.433 -0.433 13.567 1.5 15.5C3.433 17.433 6.567 17.433 8.5 15.5Z"
            fill="white"
            fillOpacity="0.9"
          />
          <path
            d="M15.5 8.5L22.5 15.5C24.433 17.433 24.433 20.567 22.5 22.5C20.567 24.433 17.433 24.433 15.5 22.5L8.5 15.5C6.567 13.567 6.567 10.433 8.5 8.5C10.433 6.567 13.567 6.567 15.5 8.5Z"
            fill="white"
            fillOpacity="0.7"
          />
          {/* Center line */}
          <path
            d="M8.5 8.5L15.5 15.5"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          {/* Small decorative dots */}
          <circle cx="10" cy="10" r="1" fill="white" fillOpacity="0.8" />
          <circle cx="14" cy="14" r="1" fill="white" fillOpacity="0.8" />
        </svg>

        {/* Floating sparkle effect */}
        <div className="absolute -top-1 -right-1">
          <div className="w-2 h-2 bg-white rounded-full opacity-60 animate-pulse-gentle"></div>
        </div>
      </div>

      {/* Logo Text */}
      {showText && (
        <div className="flex flex-col">
          <h1
            className={cn("font-bold text-gray-900 leading-none", config.text)}
          >
            <span className="text-pillmate-primary">Pill</span>
            <span className="text-pillmate-accent">Mate</span>
          </h1>
          {size === "lg" || size === "xl" ? (
            <p className="text-xs text-pillmate-primary/70 font-medium mt-1">
              Pengingat Obat Digital
            </p>
          ) : null}
        </div>
      )}
    </div>
  );
}
