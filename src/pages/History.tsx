import { useState } from "react";
import {
  Search,
  Filter,
  Calendar,
  BarChart3,
  Download,
  Plus,
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
    { value: "week", label: "7 Hari" },
    { value: "month", label: "30 Hari" },
    { value: "quarter", label: "3 Bulan" },
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="pillmate-gradient text-white p-6 rounded-b-3xl shadow-pillmate-lg">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-2xl font-bold">Riwayat Konsumsi</h1>
            <p className="text-white/90">Pantau progres konsumsi obat Anda</p>
          </div>
          <BarChart3 className="h-8 w-8 text-white/80" />
        </div>
      </header>

      <div className="p-6">
        {/* Period Selection */}
        <div className="flex space-x-2 mb-6">
          {periods.map((period) => (
            <Button
              key={period.value}
              variant={selectedPeriod === period.value ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedPeriod(period.value)}
              className={
                selectedPeriod === period.value
                  ? "pillmate-button"
                  : "border-pillmate-primary text-pillmate-primary hover:bg-pillmate-light"
              }
            >
              {period.label}
            </Button>
          ))}
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="pillmate-card p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Tingkat Kepatuhan</p>
                <p className="text-2xl font-bold text-pillmate-primary">
                  {adherenceRate}%
                </p>
              </div>
              <div className="w-12 h-12 bg-pillmate-light rounded-full flex items-center justify-center">
                <BarChart3 className="h-6 w-6 text-pillmate-primary" />
              </div>
            </div>
            <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden mt-3">
              <div
                className="h-full pillmate-gradient transition-all duration-500"
                style={{ width: `${adherenceRate}%` }}
              />
            </div>
          </div>

          <div className="pillmate-card p-4">
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Selesai</span>
                <span className="font-semibold text-pillmate-success">
                  {completedCount}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Terlewat</span>
                <span className="font-semibold text-pillmate-error">
                  {missedCount}
                </span>
              </div>
              <div className="flex justify-between items-center pt-2 border-t">
                <span className="text-sm font-medium text-gray-700">Total</span>
                <span className="font-bold text-gray-900">
                  {historyData.length}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Search and Actions */}
        <div className="flex space-x-3 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input
              type="text"
              placeholder="Cari riwayat..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pillmate-input"
            />
          </div>
          <Button
            variant="outline"
            className="border-pillmate-primary text-pillmate-primary hover:bg-pillmate-light"
          >
            <Filter className="h-5 w-5" />
          </Button>
          <Button
            variant="outline"
            className="border-pillmate-primary text-pillmate-primary hover:bg-pillmate-light"
          >
            <Download className="h-5 w-5" />
          </Button>
        </div>

        {/* History List */}
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-semibold text-gray-900">
            Riwayat Terakhir
          </h3>
          <span className="text-sm text-gray-500">
            {filteredHistory.length} item
          </span>
        </div>

        <div className="space-y-3 mb-6">
          {filteredHistory.length > 0 ? (
            filteredHistory.map((item) => (
              <MedicationCard
                key={item.id}
                medication={item}
                showActions={false}
              />
            ))
          ) : (
            <div className="pillmate-card p-8 text-center">
              <Calendar className="h-12 w-12 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-600 mb-2">
                {searchTerm ? "Riwayat tidak ditemukan" : "Belum ada riwayat"}
              </h3>
              <p className="text-gray-500 mb-4">
                {searchTerm
                  ? `Tidak ada riwayat yang cocok dengan "${searchTerm}"`
                  : "Mulai konsumsi obat untuk melihat riwayat"}
              </p>
            </div>
          )}
        </div>

        {/* Add Manual Entry Button */}
        <Button className="w-full pillmate-button flex items-center justify-center space-x-2">
          <Plus className="h-5 w-5" />
          <span>Tambah Catatan Manual</span>
        </Button>

        {/* Weekly Summary */}
        <div className="mt-8 pillmate-card p-6">
          <h4 className="text-lg font-semibold text-gray-900 mb-4">
            Ringkasan Minggu Ini
          </h4>
          <div className="grid grid-cols-7 gap-2">
            {["Min", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"].map(
              (day, index) => (
                <div key={day} className="text-center">
                  <p className="text-xs text-gray-500 mb-2">{day}</p>
                  <div
                    className={`w-8 h-8 rounded-full mx-auto flex items-center justify-center text-xs font-medium ${
                      index < 5
                        ? "bg-pillmate-success text-white"
                        : index === 5
                          ? "bg-pillmate-warning text-white"
                          : "bg-gray-200 text-gray-600"
                    }`}
                  >
                    {index < 5 ? "✓" : index === 5 ? "!" : "?"}
                  </div>
                </div>
              ),
            )}
          </div>
          <p className="text-sm text-gray-600 mt-4 text-center">
            Anda telah konsisten selama 5 hari berturut-turut! 🎉
          </p>
        </div>
      </div>
    </div>
  );
}
