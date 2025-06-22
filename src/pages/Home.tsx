import { useState } from "react";
import { Plus, Bell, Settings, User, Calendar, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MedicationCard, Medication } from "@/components/medication-card";
import { Link } from "react-router-dom";

interface HomeProps {
  onShowNotification: () => void;
}

export default function Home({ onShowNotification }: HomeProps) {
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
    <div className="min-h-screen">
      {/* Header */}
      <header className="pillmate-gradient text-white p-6 rounded-b-3xl shadow-pillmate-lg">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
              <User className="h-6 w-6 text-white" />
            </div>
            <div>
              <p className="text-sm opacity-90">Pengguna</p>
              <h1 className="text-xl font-semibold">Hikmah</h1>
            </div>
          </div>
          <div className="flex space-x-2">
            <button
              onClick={onShowNotification}
              className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
            >
              <Bell className="h-6 w-6 text-white" />
            </button>
            <Link
              to="/profile"
              className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
            >
              <Settings className="h-6 w-6 text-white" />
            </Link>
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-2">{getGreeting()}, Hikmah 👋</h2>
        <p className="text-white/90">
          Mari jaga kesehatan dengan rutin minum obat
        </p>
      </header>

      {/* Stats Card */}
      <div className="p-6">
        <div className="pillmate-card p-4 mb-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                Progress Hari Ini
              </h3>
              <p className="text-sm text-gray-600">
                {completedCount} dari {totalCount} obat sudah diminum
              </p>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-pillmate-primary">
                {completionRate}%
              </div>
              <div className="w-20 h-2 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full pillmate-gradient transition-all duration-500"
                  style={{ width: `${completionRate}%` }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <Link
            to="/erd"
            className="pillmate-card p-4 text-center hover:shadow-pillmate-lg transition-all"
          >
            <BarChart3 className="h-8 w-8 text-pillmate-primary mx-auto mb-2" />
            <p className="text-sm font-medium text-gray-700">ERD</p>
          </Link>
          <Link
            to="/dfd"
            className="pillmate-card p-4 text-center hover:shadow-pillmate-lg transition-all"
          >
            <Calendar className="h-8 w-8 text-pillmate-primary mx-auto mb-2" />
            <p className="text-sm font-medium text-gray-700">DFD</p>
          </Link>
          <Link
            to="/verification"
            className="pillmate-card p-4 text-center hover:shadow-pillmate-lg transition-all"
          >
            <Settings className="h-8 w-8 text-pillmate-primary mx-auto mb-2" />
            <p className="text-sm font-medium text-gray-700">Validasi</p>
          </Link>
        </div>

        {/* Today's Schedule */}
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-semibold text-gray-900">
            Jadwal Hari Ini
          </h3>
          <Link to="/schedule">
            <Button
              variant="ghost"
              className="text-pillmate-primary hover:bg-pillmate-light"
            >
              Lihat Semua
            </Button>
          </Link>
        </div>

        <div className="space-y-3 mb-6">
          {medications.map((medication) => (
            <MedicationCard
              key={medication.id}
              medication={medication}
              onStatusChange={handleStatusChange}
            />
          ))}
        </div>

        {/* Add Medication Button */}
        <Link to="/schedule">
          <Button className="w-full pillmate-button flex items-center justify-center space-x-2">
            <Plus className="h-5 w-5" />
            <span>Tambah Obat</span>
          </Button>
        </Link>
      </div>
    </div>
  );
}
