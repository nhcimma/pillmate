import { useState } from "react";
import {
  Plus,
  Search,
  Filter,
  Calendar as CalendarIcon,
  Clock,
  Users,
  Star,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScheduleItem, Schedule } from "@/components/schedule-item";

export default function Schedule() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [schedules, setSchedules] = useState<Schedule[]>([
    {
      id: "1",
      medicationName: "Vitamin C",
      dosage: "2 tablet",
      times: ["08:00", "20:00"],
      frequency: "Setiap hari",
      startDate: "2024-01-01",
      endDate: "2024-03-01",
      reminderEnabled: true,
      instruction: "Setelah makan",
    },
    {
      id: "2",
      medicationName: "Paracetamol",
      dosage: "1 tablet",
      times: ["14:00"],
      frequency: "Jika diperlukan",
      startDate: "2024-01-15",
      reminderEnabled: true,
      instruction: "Diminum saat demam atau sakit kepala",
    },
    {
      id: "3",
      medicationName: "Vitamin D",
      dosage: "1 kapsul",
      times: ["20:00"],
      frequency: "Setiap hari",
      startDate: "2024-01-01",
      reminderEnabled: false,
      instruction: "Sebelum tidur",
    },
  ]);

  const categories = [
    { id: "all", name: "Semua", emoji: "🏠", count: schedules.length },
    {
      id: "daily",
      name: "Harian",
      emoji: "📅",
      count: schedules.filter((s) => s.frequency === "Setiap hari").length,
    },
    { id: "weekly", name: "Mingguan", emoji: "📊", count: 0 },
    {
      id: "asneeded",
      name: "Bila Perlu",
      emoji: "🔔",
      count: schedules.filter((s) => s.frequency === "Jika diperlukan").length,
    },
  ];

  const filteredSchedules = schedules.filter((schedule) => {
    const matchesSearch = schedule.medicationName
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" ||
      (selectedCategory === "daily" && schedule.frequency === "Setiap hari") ||
      (selectedCategory === "asneeded" &&
        schedule.frequency === "Jika diperlukan");
    return matchesSearch && matchesCategory;
  });

  const handleEdit = (id: string) => {
    console.log("Edit schedule:", id);
  };

  const handleDelete = (id: string) => {
    setSchedules((prev) => prev.filter((schedule) => schedule.id !== id));
  };

  const handleToggleReminder = (id: string) => {
    setSchedules((prev) =>
      prev.map((schedule) =>
        schedule.id === id
          ? { ...schedule, reminderEnabled: !schedule.reminderEnabled }
          : schedule,
      ),
    );
  };

  const quickActions = [
    {
      name: "Obat Rutin",
      icon: Clock,
      color: "bg-relaxed-blue/50",
      action: () => console.log("Add routine"),
    },
    {
      name: "Vitamin",
      icon: Star,
      color: "bg-relaxed-green/50",
      action: () => console.log("Add vitamin"),
    },
    {
      name: "Darurat",
      icon: Zap,
      color: "bg-relaxed-orange/50",
      action: () => console.log("Add emergency"),
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pillmate-light via-relaxed-green/20 to-relaxed-blue/20">
      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-28 h-28 bg-pillmate-secondary/20 rounded-full blur-2xl animate-float"></div>
        <div
          className="absolute bottom-40 right-5 w-32 h-32 bg-relaxed-pink/30 rounded-full blur-xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      {/* Header */}
      <header className="relative pillmate-gradient-soft text-gray-800 p-6 rounded-b-3xl shadow-soft-lg backdrop-blur-sm">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
              📅 Jadwal Obat
            </h1>
            <p className="text-pillmate-primary/80 font-medium">
              Kelola jadwal konsumsi obat dengan mudah ✨
            </p>
          </div>
          <CalendarIcon className="h-8 w-8 text-pillmate-primary/80 animate-pulse-gentle" />
        </div>
      </header>

      <div className="p-6 relative z-10">
        {/* Quick Actions */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
            ⚡ Tambah Cepat
          </h3>
          <div className="grid grid-cols-3 gap-3">
            {quickActions.map((action, index) => (
              <button
                key={action.name}
                onClick={action.action}
                className={`${action.color} p-4 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 border border-white/20 backdrop-blur-sm slide-up`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <action.icon className="h-6 w-6 mx-auto mb-2 text-gray-700" />
                <p className="text-sm font-medium text-gray-800">
                  {action.name}
                </p>
              </button>
            ))}
          </div>
        </div>

        {/* Categories */}
        <div className="mb-6">
          <div className="flex space-x-2 overflow-x-auto pb-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-4 py-3 rounded-2xl transition-all duration-300 min-w-fit ${
                  selectedCategory === category.id
                    ? "bg-pillmate-primary text-white shadow-lg"
                    : "bg-white/70 text-gray-700 hover:bg-pillmate-light border border-pillmate-secondary/30"
                }`}
              >
                <span className="text-lg">{category.emoji}</span>
                <span className="font-medium">{category.name}</span>
                <span
                  className={`text-xs px-2 py-1 rounded-full ${
                    selectedCategory === category.id
                      ? "bg-white/20 text-white"
                      : "bg-pillmate-light text-pillmate-primary"
                  }`}
                >
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Search and Filter */}
        <div className="flex space-x-3 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-pillmate-primary h-5 w-5" />
            <Input
              type="text"
              placeholder="Cari obat favorit..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-12 pillmate-input"
            />
          </div>
          <Button
            variant="outline"
            className="border-pillmate-primary text-pillmate-primary hover:bg-pillmate-light rounded-2xl px-6"
          >
            <Filter className="h-5 w-5" />
          </Button>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="pillmate-card-relaxed p-4 text-center bg-gradient-to-br from-relaxed-blue/30 to-relaxed-blue/10">
            <div className="text-2xl font-bold text-blue-600 mb-1">
              {schedules.length}
            </div>
            <p className="text-sm text-blue-800 font-medium">📋 Total Jadwal</p>
          </div>
          <div className="pillmate-card-relaxed p-4 text-center bg-gradient-to-br from-relaxed-green/30 to-relaxed-green/10">
            <div className="text-2xl font-bold text-green-600 mb-1">
              {schedules.filter((s) => s.reminderEnabled).length}
            </div>
            <p className="text-sm text-green-800 font-medium">🔔 Aktif</p>
          </div>
          <div className="pillmate-card-relaxed p-4 text-center bg-gradient-to-br from-relaxed-orange/30 to-relaxed-orange/10">
            <div className="text-2xl font-bold text-orange-600 mb-1">
              {schedules.filter((s) => !s.reminderEnabled).length}
            </div>
            <p className="text-sm text-orange-800 font-medium">⏸️ Nonaktif</p>
          </div>
        </div>

        {/* Schedule List */}
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
            📝 Daftar Jadwal ({filteredSchedules.length})
          </h3>
        </div>

        <div className="space-y-4 mb-8">
          {filteredSchedules.length > 0 ? (
            filteredSchedules.map((schedule, index) => (
              <div
                key={schedule.id}
                className="slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ScheduleItem
                  schedule={schedule}
                  onEdit={handleEdit}
                  onDelete={handleDelete}
                  onToggleReminder={handleToggleReminder}
                />
              </div>
            ))
          ) : (
            <div className="pillmate-card-relaxed p-8 text-center bg-gradient-to-br from-relaxed-pink/20 to-relaxed-blue/20">
              <CalendarIcon className="h-16 w-16 text-pillmate-primary/50 mx-auto mb-4 animate-float" />
              <h3 className="text-lg font-semibold text-gray-700 mb-2">
                {searchTerm
                  ? "🔍 Jadwal tidak ditemukan"
                  : "📝 Belum ada jadwal"}
              </h3>
              <p className="text-gray-600 mb-4">
                {searchTerm
                  ? `Tidak ada jadwal yang cocok dengan "${searchTerm}"`
                  : "Yuk, tambahkan jadwal obat pertama Anda! 🎯"}
              </p>
              {!searchTerm && (
                <Button className="pillmate-button">
                  <Plus className="h-5 w-5 mr-2" />✨ Mulai Sekarang
                </Button>
              )}
            </div>
          )}
        </div>

        {/* Add Schedule Button */}
        {filteredSchedules.length > 0 && (
          <Button className="w-full pillmate-button flex items-center justify-center space-x-3 py-4 text-lg">
            <Plus className="h-6 w-6" />
            <span>✨ Tambah Jadwal Baru</span>
          </Button>
        )}

        {/* Tips Section */}
        <div className="mt-8 pillmate-card-relaxed p-6 bg-gradient-to-r from-relaxed-green/20 to-relaxed-blue/20">
          <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
            💡 Tips Sehat
          </h4>
          <p className="text-gray-700 text-sm leading-relaxed">
            <strong>🌟 Ingat:</strong> Konsistensi adalah kunci! Minum obat pada
            waktu yang sama setiap hari membantu tubuh beradaptasi dan
            meningkatkan efektivitas pengobatan. Jangan lupa untuk selalu
            konsultasi dengan dokter ya! 👩‍⚕️
          </p>
        </div>
      </div>
    </div>
  );
}
