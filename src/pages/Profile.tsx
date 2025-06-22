import { useState } from "react";
import {
  Edit,
  Bell,
  Shield,
  HelpCircle,
  User,
  Mail,
  Phone,
  Calendar,
  Plus,
  Settings,
  Heart,
  Smile,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";

export default function Profile() {
  const [notifications, setNotifications] = useState({
    medication: true,
    reminders: true,
    reports: false,
  });

  const handleNotificationChange = (key: keyof typeof notifications) => {
    setNotifications((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const profileData = {
    name: "Hikmah",
    email: "hikmahhmanis.com",
    phone: "082192297597",
    birthDate: "10 Juli 2005",
    joinDate: "19 Juli 2025",
    avatar: "👩‍⚕️",
  };

  const quickStats = [
    {
      label: "Hari Aktif",
      value: "23",
      color: "from-relaxed-orange/30 to-relaxed-orange/10",
    },
    {
      label: "Streak Terbaik",
      value: "12",
      color: "from-relaxed-blue/30 to-relaxed-blue/10",
    },
    {
      label: "Obat Favorit",
      value: "3",
      color: "from-relaxed-green/30 to-relaxed-green/10",
    },
  ];

  const menuItems = [
    {
      icon: Shield,
      title: "Keamanan & Privasi",
      desc: "Kelola keamanan akun Anda",
      color: "text-blue-600",
      bgColor: "bg-relaxed-blue/20",
    },
    {
      icon: HelpCircle,
      title: "Bantuan & Dukungan",
      desc: "FAQ dan hubungi tim support",
      color: "text-green-600",
      bgColor: "bg-relaxed-green/20",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pillmate-light via-relaxed-pink/20 to-relaxed-blue/20">
      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-32 h-32 bg-relaxed-green/20 rounded-full blur-2xl animate-float"></div>
        <div
          className="absolute bottom-40 left-5 w-28 h-28 bg-relaxed-orange/30 rounded-full blur-xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      {/* Header */}
      <header className="relative pillmate-gradient-soft text-gray-800 p-6 rounded-b-3xl shadow-soft-lg backdrop-blur-sm">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Profil Saya</h1>
            <p className="text-pillmate-primary/80 font-medium">
              Kelola informasi pribadi dengan mudah
            </p>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="text-pillmate-primary hover:bg-white/30 rounded-2xl p-3 transition-all duration-300"
          >
            <Edit className="h-6 w-6" />
          </Button>
        </div>
      </header>

      <div className="p-6 relative z-10">
        {/* Profile Info */}
        <div className="pillmate-card-relaxed p-6 mb-6 bg-gradient-to-br from-white/80 to-relaxed-pink/10 slide-up">
          <div className="flex items-center space-x-4 mb-6">
            <div className="relative">
              <div className="w-20 h-20 bg-gradient-to-br from-pillmate-secondary to-pillmate-primary rounded-3xl flex items-center justify-center text-4xl shadow-lg">
                {profileData.avatar}
              </div>
              <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-400 rounded-full border-2 border-white flex items-center justify-center">
                <Smile className="h-3 w-3 text-white" />
              </div>
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-gray-900">
                {profileData.name}
              </h2>
              <p className="text-gray-600 flex items-center gap-1">
                <Heart className="h-4 w-4 text-red-400" />
                {profileData.email}
              </p>
              <p className="text-sm text-gray-500 flex items-center gap-1 mt-1">
                <Calendar className="h-4 w-4" />
                Bergabung sejak {profileData.joinDate}
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center space-x-3 p-3 bg-white/50 rounded-2xl">
              <Mail className="h-5 w-5 text-pillmate-primary" />
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <p className="font-medium text-gray-900">{profileData.email}</p>
              </div>
            </div>

            <div className="flex items-center space-x-3 p-3 bg-white/50 rounded-2xl">
              <Phone className="h-5 w-5 text-pillmate-primary" />
              <div>
                <p className="text-sm text-gray-500">Nomor Telepon</p>
                <p className="font-medium text-gray-900">{profileData.phone}</p>
              </div>
            </div>

            <div className="flex items-center space-x-3 p-3 bg-white/50 rounded-2xl">
              <Calendar className="h-5 w-5 text-pillmate-primary" />
              <div>
                <p className="text-sm text-gray-500">Tanggal Lahir</p>
                <p className="font-medium text-gray-900">
                  {profileData.birthDate}
                </p>
              </div>
            </div>
          </div>

          <Button className="w-full mt-6 pillmate-button py-4 text-lg">
            <Plus className="h-5 w-5 mr-2" />
            Edit Profil
          </Button>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          {quickStats.map((stat, index) => (
            <div
              key={index}
              className={`pillmate-card-relaxed p-4 text-center bg-gradient-to-br ${stat.color} slide-up`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-2xl font-bold text-gray-800 mb-1">
                {stat.value}
              </div>
              <p className="text-xs text-gray-600 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Notification Settings */}
        <div
          className="pillmate-card-relaxed p-6 mb-6 bg-gradient-to-br from-relaxed-blue/10 to-white/80 slide-up"
          style={{ animationDelay: "0.3s" }}
        >
          <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Bell className="h-6 w-6 text-pillmate-primary" />
            Pengaturan Notifikasi
          </h3>

          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-white/60 rounded-2xl">
              <div>
                <p className="font-semibold text-gray-900">Pengingat Obat</p>
                <p className="text-sm text-gray-600">
                  Notifikasi saat waktunya minum obat
                </p>
              </div>
              <Switch
                checked={notifications.medication}
                onCheckedChange={() => handleNotificationChange("medication")}
              />
            </div>

            <div className="flex items-center justify-between p-4 bg-white/60 rounded-2xl">
              <div>
                <p className="font-semibold text-gray-900">Pengingat Jadwal</p>
                <p className="text-sm text-gray-600">
                  Pengingat untuk mengatur jadwal baru
                </p>
              </div>
              <Switch
                checked={notifications.reminders}
                onCheckedChange={() => handleNotificationChange("reminders")}
              />
            </div>

            <div className="flex items-center justify-between p-4 bg-white/60 rounded-2xl">
              <div>
                <p className="font-semibold text-gray-900">Laporan Mingguan</p>
                <p className="text-sm text-gray-600">
                  Ringkasan progres konsumsi obat
                </p>
              </div>
              <Switch
                checked={notifications.reports}
                onCheckedChange={() => handleNotificationChange("reports")}
              />
            </div>
          </div>
        </div>

        {/* Achievement Badge */}
        <div
          className="pillmate-card-relaxed p-6 mb-6 text-center bg-gradient-to-r from-relaxed-green/20 to-relaxed-blue/20 slide-up"
          style={{ animationDelay: "0.4s" }}
        >
          <div className="text-4xl mb-3">🏆</div>
          <h4 className="text-lg font-bold text-gray-900 mb-2">
            Health Champion!
          </h4>
          <p className="text-sm text-gray-600 mb-4">
            Anda memiliki tingkat kepatuhan 89% - Luar biasa!
          </p>
          <div className="grid grid-cols-2 gap-4 text-center">
            <div>
              <div className="text-xl font-bold text-pillmate-success">23</div>
              <p className="text-xs text-gray-600">Hari Berturut-turut</p>
            </div>
            <div>
              <div className="text-xl font-bold text-pillmate-primary">89%</div>
              <p className="text-xs text-gray-600">Tingkat Kepatuhan</p>
            </div>
          </div>
        </div>

        {/* Menu Options */}
        <div className="space-y-3 mb-8">
          {menuItems.map((item, index) => (
            <Button
              key={index}
              variant="ghost"
              className={`w-full justify-start text-left p-6 h-auto hover:bg-white/60 rounded-2xl transition-all duration-300 slide-up border border-white/30`}
              style={{ animationDelay: `${0.5 + index * 0.1}s` }}
            >
              <div className={`p-3 ${item.bgColor} rounded-2xl mr-4`}>
                <item.icon className={`h-6 w-6 ${item.color}`} />
              </div>
              <div className="flex-1">
                <p className="font-semibold text-gray-900">{item.title}</p>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            </Button>
          ))}
        </div>

        {/* Logout Button - without door icon */}
        <Button
          variant="outline"
          className="w-full border-red-200 text-red-600 hover:bg-red-50 hover:border-red-300 rounded-2xl py-4 transition-all duration-300 slide-up"
          style={{ animationDelay: "0.8s" }}
        >
          Keluar dari PillMate
        </Button>

        {/* App Info */}
        <div
          className="mt-8 text-center slide-up"
          style={{ animationDelay: "0.9s" }}
        >
          <div className="pillmate-card-relaxed p-6 bg-gradient-to-r from-relaxed-pink/10 to-relaxed-blue/10">
            <p className="text-sm text-gray-500 mb-2 font-medium">
              PillMate v1.0.0
            </p>
            <p className="text-xs text-gray-400">
              © 2024 PillMate. Dibuat dengan ❤️ untuk kesehatan Anda
            </p>
            <p className="text-xs text-pillmate-primary mt-2 font-medium">
              Terima kasih telah mempercayai kami!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
