import { useState } from "react";
import {
  Plus,
  Bell,
  Settings,
  User,
  Calendar,
  BarChart3,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { MedicationCard, Medication } from "@/components/medication-card";
import { Link } from "react-router-dom";

interface HomeProps {
  onShowNotification: () => void;
}

export default function Home({ onShowNotification }: HomeProps) {
  // Get current date
  const today = new Date();
  const currentDate = today.toLocaleDateString("id-ID", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });

  const [medications, setMedications] = useState<Medication[]>([
    {
      id: "1",
      name: "Vitamin C",
      dosage: "2 tablet",
      time: "08:00",
      status: "completed",
      instruction: "setelah makan",
    },
    {
      id: "2",
      name: "Paracetamol",
      dosage: "1 tablet",
      time: "14:00",
      status: "pending",
      instruction: "jika diperlukan",
    },
    {
      id: "3",
      name: "Vitamin D",
      dosage: "1 kapsul",
      time: "20:00",
      status: "pending",
      instruction: "sebelum tidur",
    },
  ]);

  const handleStatusChange = (id: string, status: Medication["status"]) => {
    setMedications((prev) =>
      prev.map((med) => (med.id === id ? { ...med, status } : med)),
    );
  };

  const completedCount = medications.filter(
    (med) => med.status === "completed",
  ).length;
  const totalCount = medications.length;
  const completionRate = Math.round((completedCount / totalCount) * 100);

  const currentHour = new Date().getHours();
  const getGreeting = () => {
    if (currentHour < 12) return "Selamat Pagi";
    if (currentHour < 17) return "Selamat Siang";
    if (currentHour < 21) return "Selamat Sore";
    return "Selamat Malam";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pillmate-light via-relaxed-pink/30 to-relaxed-blue/30">
      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 right-10 w-32 h-32 bg-pillmate-secondary/20 rounded-full blur-2xl animate-float"></div>
        <div
          className="absolute top-1/3 left-5 w-24 h-24 bg-relaxed-green/30 rounded-full blur-xl animate-float"
          style={{ animationDelay: "3s" }}
        ></div>
      </div>

      {/* Header */}
      <header className="relative pillmate-gradient-soft text-gray-800 p-6 rounded-b-3xl shadow-soft-lg backdrop-blur-sm">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-white/30 rounded-2xl flex items-center justify-center backdrop-blur-sm">
              <User className="h-6 w-6 text-pillmate-primary" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">Hikmah</h1>
              <p className="text-xs text-pillmate-primary/70 font-medium">
                {currentDate}
              </p>
            </div>
          </div>
          <div className="flex space-x-2">
            <button
              onClick={onShowNotification}
              className="p-3 bg-white/20 rounded-2xl hover:bg-white/30 transition-all duration-300 backdrop-blur-sm transform hover:scale-105"
            >
              <Bell className="h-6 w-6 text-pillmate-primary" />
            </button>
            <Link
              to="/profile"
              className="p-3 bg-white/20 rounded-2xl hover:bg-white/30 transition-all duration-300 backdrop-blur-sm transform hover:scale-105"
            >
              <Settings className="h-6 w-6 text-pillmate-primary" />
            </Link>
          </div>
        </div>

        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-gray-900">
            {getGreeting()}, Hikmah!
          </h2>
          <p className="text-pillmate-primary/80 font-medium">
            Mari jaga kesehatan dengan rutin minum obat
          </p>
        </div>
      </header>

      {/* Content */}
      <div className="p-6 relative z-10">
        {/* Stats Card */}
        <div className="pillmate-card-relaxed p-6 mb-6 slide-up">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-pillmate-primary" />
                Progress Hari Ini
              </h3>
              <p className="text-sm text-gray-600">
                {completedCount} dari {totalCount} obat sudah diminum
              </p>
            </div>
            <div className="text-right">
              <div className="text-4xl font-bold text-pillmate-primary mb-2">
                {completionRate}%
              </div>
              <div className="w-24 h-3 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full pillmate-gradient transition-all duration-1000 rounded-full"
                  style={{ width: `${completionRate}%` }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          <Link
            to="/erd"
            className="relaxed-section bg-relaxed-blue/50 hover:bg-relaxed-blue/70 text-center transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
          >
            <BarChart3 className="h-8 w-8 text-blue-600 mx-auto mb-3" />
            <p className="text-sm font-semibold text-blue-800">ERD</p>
            <p className="text-xs text-blue-600 mt-1">Database Design</p>
          </Link>
          <Link
            to="/dfd"
            className="relaxed-section bg-relaxed-green/50 hover:bg-relaxed-green/70 text-center transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
          >
            <Calendar className="h-8 w-8 text-green-600 mx-auto mb-3" />
            <p className="text-sm font-semibold text-green-800">DFD</p>
            <p className="text-xs text-green-600 mt-1">Flow Diagram</p>
          </Link>
          <Link
            to="/verification"
            className="relaxed-section bg-relaxed-orange/50 hover:bg-relaxed-orange/70 text-center transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
          >
            <Settings className="h-8 w-8 text-orange-600 mx-auto mb-3" />
            <p className="text-sm font-semibold text-orange-800">Validasi</p>
            <p className="text-xs text-orange-600 mt-1">System Check</p>
          </Link>
        </div>

        {/* Today's Schedule */}
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-gray-900">Jadwal Hari Ini</h3>
          <Link to="/schedule">
            <Button
              variant="ghost"
              className="text-pillmate-primary hover:bg-pillmate-light/70 rounded-2xl font-medium"
            >
              Lihat Semua
            </Button>
          </Link>
        </div>

        <div className="space-y-4 mb-8">
          {medications.map((medication, index) => (
            <div
              key={medication.id}
              className="slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <MedicationCard
                medication={medication}
                onStatusChange={handleStatusChange}
              />
            </div>
          ))}
        </div>

        {/* Add Medication Button */}
        <Link to="/schedule">
          <Button className="w-full pillmate-button flex items-center justify-center space-x-3 py-4 text-lg">
            <Plus className="h-6 w-6" />
            <span>Tambah Obat Baru</span>
          </Button>
        </Link>

        {/* Motivational Quote */}
        <div className="mt-8 pillmate-card-relaxed p-6 text-center bg-gradient-to-r from-relaxed-pink/20 to-relaxed-blue/20">
          <p className="text-pillmate-primary font-medium text-lg mb-2">
            "Kesehatan adalah kekayaan sejati"
          </p>
          <p className="text-sm text-gray-600">
            Tetap semangat menjaga kesehatan
          </p>
        </div>
      </div>
    </div>
  );
}
