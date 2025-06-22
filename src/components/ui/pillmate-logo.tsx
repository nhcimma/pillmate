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
      {/* Cool Modern Pill Logo */}
      <div
        className={cn(
          "relative rounded-3xl bg-gradient-to-br from-purple-400 via-purple-500 to-purple-600 flex items-center justify-center transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl",
          config.container,
        )}
      >
        {/* Modern Pill Design */}
        <svg
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={cn("text-white", config.icon)}
        >
          {/* Main pill capsule */}
          <path
            d="M8 12C8 9.79086 9.79086 8 12 8H20C22.2091 8 24 9.79086 24 12V20C24 22.2091 22.2091 24 20 24H12C9.79086 24 8 22.2091 8 20V12Z"
            fill="white"
            fillOpacity="0.9"
          />

          {/* Pill divider line */}
          <line
            x1="16"
            y1="8"
            x2="16"
            y2="24"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeOpacity="0.7"
          />

          {/* Left side pattern */}
          <circle
            cx="12"
            cy="14"
            r="1.5"
            fill="currentColor"
            fillOpacity="0.6"
          />
          <circle cx="12" cy="18" r="1" fill="currentColor" fillOpacity="0.4" />

          {/* Right side pattern */}
          <circle
            cx="20"
            cy="14"
            r="1.5"
            fill="currentColor"
            fillOpacity="0.6"
          />
          <circle cx="20" cy="18" r="1" fill="currentColor" fillOpacity="0.4" />

          {/* Medical cross on left side */}
          <path
            d="M11 12H13M12 11V13"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeOpacity="0.7"
          />

          {/* Subtle highlight */}
          <path
            d="M10 10C10.5 9.5 11.5 9 13 9H19C20.5 9 21.5 9.5 22 10"
            stroke="white"
            strokeWidth="0.5"
            strokeOpacity="0.5"
            strokeLinecap="round"
          />
        </svg>

        {/* Glowing effect */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/20 to-transparent opacity-50"></div>

        {/* Small indicator dot */}
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-br from-yellow-300 to-orange-400 rounded-full shadow-sm animate-pulse"></div>
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
