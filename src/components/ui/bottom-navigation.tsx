import { Link, useLocation } from "react-router-dom";
import { Home, Calendar, RotateCcw, User } from "lucide-react";
import { cn } from "@/lib/utils";

const navigationItems = [
  {
    name: "Beranda",
    href: "/",
    icon: Home,
  },
  {
    name: "Jadwal",
    href: "/schedule",
    icon: Calendar,
  },
  {
    name: "Riwayat",
    href: "/history",
    icon: RotateCcw,
  },
  {
    name: "Profil",
    href: "/profile",
    icon: User,
  },
];

export function BottomNavigation() {
  const location = useLocation();

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50">
      <div className="flex items-center justify-around py-2">
        {navigationItems.map((item) => {
          const isActive = location.pathname === item.href;
          const Icon = item.icon;

          return (
            <Link
              key={item.name}
              to={item.href}
              className={cn(
                "flex flex-col items-center py-2 px-3 rounded-lg transition-all duration-200",
                isActive
                  ? "text-pillmate-primary bg-pillmate-light"
                  : "text-gray-500 hover:text-pillmate-primary",
              )}
            >
              <Icon
                size={24}
                className={cn("mb-1", isActive && "text-pillmate-primary")}
              />
              <span
                className={cn(
                  "text-xs font-medium",
                  isActive && "text-pillmate-primary",
                )}
              >
                {item.name}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
