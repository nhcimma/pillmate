import { useState } from "react";
import {
  Search,
  Filter,
  Calendar,
  BarChart3,
  Download,
  Plus,
  TrendingUp,
  Award,
  Heart,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MedicationCard, Medication } from "@/components/medication-card";

export default function History() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPeriod, setSelectedPeriod] = useState("week");

  // Mock historical data
  const [historyData] = useState<Medication[]>([
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
      status: "completed",
      instruction: "jika diperlukan",
    },
    {
      id: "3",
      name: "Vitamin D",
      dosage: "1 kapsul",
      time: "20:00",
      status: "missed",
      instruction: "sebelum tidur",
    },
    {
      id: "4",
      name: "Vitamin C",
      dosage: "2 tablet",
      time: "08:00",
      status: "completed",
      instruction: "setelah makan",
    },
    {
      id: "5",
      name: "Omega 3",
      dosage: "1 kapsul",
      time: "12:00",
      status: "completed",
      instruction: "dengan makanan",
    },
  ]);

  const filteredHistory = historyData.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const completedCount = historyData.filter(
    (item) => item.status === "completed",
  ).length;
  const missedCount = historyData.filter(
    (item) => item.status === "missed",
  ).length;
  const adherenceRate = Math.round((completedCount / historyData.length) * 100);

  const periods = [
    { value: "week", label: "7 Hari", emoji: "📅" },
    { value: "month", label: "30 Hari", emoji: "📊" },
    { value: "quarter", label: "3 Bulan", emoji: "📈" },
  ];

  const achievements = [
    { title: "Konsisten 5 Hari!", emoji: "🔥", desc: "Semangat terus!" },
    { title: "Weekend Warrior", emoji: "🏆", desc: "Tidak lewatkan weekend" },
    { title: "Morning Star", emoji: "🌟", desc: "Rajin minum obat pagi" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pillmate-light via-relaxed-green/20 to-relaxed-pink/20">
      {/* Floating background elements */}
      <div className="absolute inset0 overflow-hidden">
        <div className="absolute top-32 right-10 w-24 h-24 bg-relaxed-blue/30 rounded-full blur-xl animate-float"></div>
        <div
          className="absolute bottom-32 left-10 w-32 h-32 bg-relaxed-orange/20 rounded-full blur-2xl animate-float"
          style={{ animationDelay: "3s" }}
        ></div>
      </div>

      {/* Header */}
      <header className="relative pillmate-gradient-soft text-gray-800 p-6 rounded-b-3xl shadow-soft-lg backdrop-blur-sm">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
              📊 Riwayat Konsumsi
            </h1>
            <p className="text-pillmate-primary/80 font-medium">
              Pantau progres kesehatan Anda dengan santai 🌱
            </p>
          </div>
          <div className="relative">
            <BarChart3 className="h-8 w-8 text-pillmate-primary/80 animate-pulse-gentle" />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-ping"></div>
          </div>
        </div>
      </header>

      <div className="p-6 relative z-10">
        {/* Achievements Section */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
            🏆 Pencapaian Terbaru
          </h3>
          <div className="grid grid-cols-3 gap-3">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className={`pillmate-card-relaxed p-4 text-center transition-all duration-300 transform hover:scale-105 slide-up ${
                  index === 0
                    ? "bg-gradient-to-br from-relaxed-green/30 to-relaxed-green/10"
                    : index === 1
                      ? "bg-gradient-to-br from-relaxed-blue/30 to-relaxed-blue/10"
                      : "bg-gradient-to-br from-relaxed-orange/30 to-relaxed-orange/10"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-2xl mb-1">{achievement.emoji}</div>
                <p className="text-xs font-semibold text-gray-800">
                  {achievement.title}
                </p>
                <p className="text-xs text-gray-600 mt-1">{achievement.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Period Selection */}
        <div className="flex space-x-2 mb-6">
          {periods.map((period) => (
            <Button
              key={period.value}
              variant={selectedPeriod === period.value ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedPeriod(period.value)}
              className={`rounded-2xl transition-all duration-300 ${
                selectedPeriod === period.value
                  ? "pillmate-button"
                  : "border-pillmate-primary text-pillmate-primary hover:bg-pillmate-light"
              }`}
            >
              <span className="mr-2">{period.emoji}</span>
              {period.label}
            </Button>
          ))}
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="pillmate-card-relaxed p-6 bg-gradient-to-br from-relaxed-blue/20 to-relaxed-blue/5">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-sm text-gray-600 mb-1 flex items-center gap-1">
                  <TrendingUp className="h-4 w-4" />
                  Tingkat Kepatuhan
                </p>
                <p className="text-3xl font-bold text-pillmate-primary">
                  {adherenceRate}%
                </p>
              </div>
              <div className="w-12 h-12 bg-pillmate-light rounded-2xl flex items-center justify-center">
                <Heart className="h-6 w-6 text-pillmate-primary animate-pulse-gentle" />
              </div>
            </div>
            <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full pillmate-gradient transition-all duration-1000 rounded-full"
                style={{ width: `${adherenceRate}%` }}
              />
            </div>
            <p className="text-xs text-gray-600 mt-2 flex items-center gap-1">
              <span>🎯</span>
              Target: 90% - Hampir tercapai!
            </p>
          </div>

          <div className="pillmate-card-relaxed p-6 bg-gradient-to-br from-relaxed-green/20 to-relaxed-green/5">
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600 flex items-center gap-1">
                  <span>✅</span>
                  Selesai
                </span>
                <span className="font-bold text-pillmate-success text-lg">
                  {completedCount}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600 flex items-center gap-1">
                  <span>⏰</span>
                  Terlewat
                </span>
                <span className="font-bold text-pillmate-error text-lg">
                  {missedCount}
                </span>
              </div>
              <div className="flex justify-between items-center pt-2 border-t border-gray-200">
                <span className="text-sm font-semibold text-gray-700 flex items-center gap-1">
                  <Award className="h-4 w-4" />
                  Total
                </span>
                <span className="font-bold text-gray-900 text-lg">
                  {historyData.length}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Search and Actions */}
        <div className="flex space-x-3 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-pillmate-primary h-5 w-5" />
            <Input
              type="text"
              placeholder="Cari riwayat obat..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-12 pillmate-input"
            />
          </div>
          <Button
            variant="outline"
            className="border-pillmate-primary text-pillmate-primary hover:bg-pillmate-light rounded-2xl px-4"
          >
            <Filter className="h-5 w-5" />
          </Button>
          <Button
            variant="outline"
            className="border-pillmate-primary text-pillmate-primary hover:bg-pillmate-light rounded-2xl px-4"
          >
            <Download className="h-5 w-5" />
          </Button>
        </div>

        {/* History List */}
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
            📝 Riwayat Terakhir
          </h3>
          <span className="text-sm text-gray-500 bg-pillmate-light px-3 py-1 rounded-full">
            {filteredHistory.length} item
          </span>
        </div>

        <div className="space-y-4 mb-8">
          {filteredHistory.length > 0 ? (
            filteredHistory.map((item, index) => (
              <div
                key={item.id}
                className="slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <MedicationCard medication={item} showActions={false} />
              </div>
            ))
          ) : (
            <div className="pillmate-card-relaxed p-8 text-center bg-gradient-to-br from-relaxed-pink/20 to-relaxed-blue/20">
              <Calendar className="h-16 w-16 text-pillmate-primary/50 mx-auto mb-4 animate-float" />
              <h3 className="text-lg font-semibold text-gray-700 mb-2">
                {searchTerm
                  ? "🔍 Riwayat tidak ditemukan"
                  : "📝 Belum ada riwayat"}
              </h3>
              <p className="text-gray-600 mb-4">
                {searchTerm
                  ? `Tidak ada riwayat yang cocok dengan "${searchTerm}"`
                  : "Mulai konsumsi obat untuk melihat riwayat yang keren! 🌟"}
              </p>
            </div>
          )}
        </div>

        {/* Add Manual Entry Button */}
        <Button className="w-full pillmate-button flex items-center justify-center space-x-3 mb-8 py-4 text-lg">
          <Plus className="h-6 w-6" />
          <span>✨ Tambah Catatan Manual</span>
        </Button>

        {/* Weekly Summary */}
        <div className="pillmate-card-relaxed p-6 bg-gradient-to-r from-relaxed-blue/10 to-relaxed-green/10">
          <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
            📅 Ringkasan Minggu Ini
          </h4>
          <div className="grid grid-cols-7 gap-3">
            {["Min", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"].map(
              (day, index) => (
                <div key={day} className="text-center">
                  <p className="text-xs text-gray-500 mb-2 font-medium">
                    {day}
                  </p>
                  <div
                    className={`w-10 h-10 rounded-2xl mx-auto flex items-center justify-center text-sm font-bold transition-all duration-300 hover:scale-110 ${
                      index < 5
                        ? "bg-pillmate-success text-white shadow-md"
                        : index === 5
                          ? "bg-pillmate-warning text-white shadow-md"
                          : "bg-gray-200 text-gray-600"
                    }`}
                  >
                    {index < 5 ? "✓" : index === 5 ? "!" : "?"}
                  </div>
                </div>
              ),
            )}
          </div>
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-700 flex items-center justify-center gap-2">
              <span>🎉</span>
              <strong>Luar biasa!</strong> Anda telah konsisten selama 5 hari
              berturut-turut!
              <span>💪</span>
            </p>
            <p className="text-xs text-gray-600 mt-2">
              Terus pertahankan semangat ini ya! Kesehatan adalah investasi
              terbaik 🌟
            </p>
          </div>
        </div>

        {/* Motivational Quote */}
        <div className="mt-6 pillmate-card-relaxed p-6 text-center bg-gradient-to-r from-relaxed-pink/20 to-relaxed-orange/20">
          <p className="text-pillmate-primary font-semibold text-lg mb-2 flex items-center justify-center gap-2">
            <span>💫</span>
            "Konsistensi kecil setiap hari menciptakan hasil yang luar biasa!"
            <span>💫</span>
          </p>
          <p className="text-sm text-gray-600">
            Setiap tablet yang Anda minum adalah investasi untuk kesehatan masa
            depan 🌱
          </p>
        </div>
      </div>
    </div>
  );
}
