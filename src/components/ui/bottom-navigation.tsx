import { Link, useLocation } from "react-router-dom";
import { Home, Calendar, RotateCcw, User } from "lucide-react";
import { cn } from "@/lib/utils";

const navigationItems = [
  {
    name: "Beranda",
    href: "/",
    icon: Home,
    emoji: "🏠",
  },
  {
    name: "Jadwal",
    href: "/schedule",
    icon: Calendar,
    emoji: "📅",
  },
  {
    name: "Riwayat",
    href: "/history",
    icon: RotateCcw,
    emoji: "📊",
  },
  {
    name: "Profil",
    href: "/profile",
    icon: User,
    emoji: "👤",
  },
];

export function BottomNavigation() {
  const location = useLocation();

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-lg border-t border-pillmate-secondary/20 z-50 rounded-t-3xl shadow-soft-lg">
      <div className="flex items-center justify-around py-3">
        {navigationItems.map((item) => {
          const isActive = location.pathname === item.href;
          const Icon = item.icon;

          return (
            <Link
              key={item.name}
              to={item.href}
              className={cn(
                "flex flex-col items-center py-3 px-4 rounded-2xl transition-all duration-300 transform hover:scale-105",
                isActive
                  ? "text-pillmate-primary bg-pillmate-light/70 shadow-md"
                  : "text-gray-500 hover:text-pillmate-primary hover:bg-pillmate-light/30",
              )}
            >
              <div className="relative">
                <Icon
                  size={24}
                  className={cn(
                    "mb-1 transition-colors duration-300",
                    isActive && "text-pillmate-primary",
                  )}
                />
                {isActive && (
                  <div className="absolute -top-1 -right-1 text-xs">
                    {item.emoji}
                  </div>
                )}
              </div>
              <span
                className={cn(
                  "text-xs font-medium transition-colors duration-300",
                  isActive && "text-pillmate-primary",
                )}
              >
                {item.name}
              </span>
              {isActive && (
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-pillmate-primary rounded-full"></div>
              )}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
