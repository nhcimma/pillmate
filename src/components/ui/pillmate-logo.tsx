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
      {/* Modern Health Shield Logo */}
      <div
        className={cn(
          "relative rounded-3xl bg-gradient-to-br from-purple-400 via-purple-500 to-purple-600 flex items-center justify-center transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl",
          config.container,
        )}
      >
        {/* Health Shield with Heart + Cross Design */}
        <svg
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={cn("text-white", config.icon)}
        >
          {/* Shield Background */}
          <path
            d="M16 4L8 8V16C8 21.5 12 26.2 16 28C20 26.2 24 21.5 24 16V8L16 4Z"
            fill="white"
            fillOpacity="0.95"
          />

          {/* Medical Cross */}
          <path
            d="M14 10H18V14H22V18H18V22H14V18H10V14H14V10Z"
            fill="currentColor"
            fillOpacity="0.8"
          />

          {/* Heart Shape at center */}
          <path
            d="M16 20C16 20 12 17 12 14C12 12.5 13.5 11 15 11C15.5 11 16 11.2 16 11.5C16 11.2 16.5 11 17 11C18.5 11 20 12.5 20 14C20 17 16 20 16 20Z"
            fill="currentColor"
            fillOpacity="0.6"
            transform="translate(0, -1) scale(0.7)"
          />

          {/* Pulse Line */}
          <path
            d="M6 16L8 16L10 12L12 20L14 8L16 24L18 12L20 20L22 16L26 16"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeOpacity="0.7"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            transform="translate(0, 2) scale(0.6)"
          />

          {/* Subtle highlight */}
          <path
            d="M8 8L16 4L24 8V10L16 6L8 10V8Z"
            fill="white"
            fillOpacity="0.3"
          />
        </svg>

        {/* Glowing effect */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/20 to-transparent opacity-50"></div>

        {/* Health indicator dot */}
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full shadow-sm animate-pulse"></div>
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
