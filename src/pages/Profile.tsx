import { useState } from "react";
import {
  Edit,
  Bell,
  Shield,
  HelpCircle,
  LogOut,
  User,
  Mail,
  Phone,
  Calendar,
  Plus,
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
    email: "hikmah@example.com",
    phone: "+62 812 3456 7890",
    birthDate: "15 Januari 1990",
    joinDate: "1 Januari 2024",
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="pillmate-gradient text-white p-6 rounded-b-3xl shadow-pillmate-lg">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-2xl font-bold">Profil</h1>
            <p className="text-white/90">Kelola informasi pribadi Anda</p>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:bg-white/20"
          >
            <Edit className="h-6 w-6" />
          </Button>
        </div>
      </header>

      <div className="p-6">
        {/* Profile Info */}
        <div className="pillmate-card p-6 mb-6">
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-20 h-20 bg-pillmate-light rounded-full flex items-center justify-center text-4xl">
              👤
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-bold text-gray-900">
                {profileData.name}
              </h2>
              <p className="text-gray-600">{profileData.email}</p>
              <p className="text-sm text-gray-500">
                Bergabung sejak {profileData.joinDate}
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Mail className="h-5 w-5 text-pillmate-primary" />
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <p className="font-medium text-gray-900">{profileData.email}</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <Phone className="h-5 w-5 text-pillmate-primary" />
              <div>
                <p className="text-sm text-gray-500">Nomor Telepon</p>
                <p className="font-medium text-gray-900">{profileData.phone}</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <Calendar className="h-5 w-5 text-pillmate-primary" />
              <div>
                <p className="text-sm text-gray-500">Tanggal Lahir</p>
                <p className="font-medium text-gray-900">
                  {profileData.birthDate}
                </p>
              </div>
            </div>
          </div>

          <Button className="w-full mt-6 pillmate-button">
            <Plus className="h-5 w-5 mr-2" />
            Edit Profil
          </Button>
        </div>

        {/* Notification Settings */}
        <div className="pillmate-card p-6 mb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
            <Bell className="h-6 w-6 text-pillmate-primary mr-2" />
            Pengaturan Notifikasi
          </h3>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-gray-900">Pengingat Obat</p>
                <p className="text-sm text-gray-600">
                  Notifikasi saat waktunya minum obat
                </p>
              </div>
              <Switch
                checked={notifications.medication}
                onCheckedChange={() => handleNotificationChange("medication")}
              />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-gray-900">Pengingat Jadwal</p>
                <p className="text-sm text-gray-600">
                  Pengingat untuk mengatur jadwal baru
                </p>
              </div>
              <Switch
                checked={notifications.reminders}
                onCheckedChange={() => handleNotificationChange("reminders")}
              />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-gray-900">Laporan Mingguan</p>
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

        {/* Quick Stats */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="pillmate-card p-4 text-center">
            <div className="text-2xl font-bold text-pillmate-primary mb-1">
              89%
            </div>
            <p className="text-sm text-gray-600">Tingkat Kepatuhan</p>
          </div>
          <div className="pillmate-card p-4 text-center">
            <div className="text-2xl font-bold text-pillmate-success mb-1">
              23
            </div>
            <p className="text-sm text-gray-600">Hari Berturut-turut</p>
          </div>
        </div>

        {/* Menu Options */}
        <div className="space-y-3 mb-6">
          <Button
            variant="ghost"
            className="w-full justify-start text-left p-4 h-auto hover:bg-pillmate-light"
          >
            <Shield className="h-6 w-6 text-pillmate-primary mr-4" />
            <div>
              <p className="font-medium text-gray-900">Keamanan & Privasi</p>
              <p className="text-sm text-gray-600">Kelola keamanan akun Anda</p>
            </div>
          </Button>

          <Button
            variant="ghost"
            className="w-full justify-start text-left p-4 h-auto hover:bg-pillmate-light"
          >
            <HelpCircle className="h-6 w-6 text-pillmate-primary mr-4" />
            <div>
              <p className="font-medium text-gray-900">Bantuan & Dukungan</p>
              <p className="text-sm text-gray-600">
                FAQ dan hubungi tim support
              </p>
            </div>
          </Button>
        </div>

        {/* Logout Button */}
        <Button
          variant="outline"
          className="w-full border-red-200 text-red-600 hover:bg-red-50 hover:border-red-300"
        >
          <LogOut className="h-5 w-5 mr-2" />
          Keluar
        </Button>

        {/* App Info */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500 mb-2">PillMate v1.0.0</p>
          <p className="text-xs text-gray-400">
            © 2024 PillMate. Semua hak cipta dilindungi.
          </p>
        </div>
      </div>
    </div>
  );
}
