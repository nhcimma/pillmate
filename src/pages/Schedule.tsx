import { useState } from "react";
import { Plus, Search, Filter, Calendar as CalendarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScheduleItem, Schedule } from "@/components/schedule-item";

export default function Schedule() {
  const [searchTerm, setSearchTerm] = useState("");
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

  const filteredSchedules = schedules.filter((schedule) =>
    schedule.medicationName.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const handleEdit = (id: string) => {
    // TODO: Implement edit functionality
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

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="pillmate-gradient text-white p-6 rounded-b-3xl shadow-pillmate-lg">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-2xl font-bold">Jadwal Obat</h1>
            <p className="text-white/90">Kelola jadwal konsumsi obat Anda</p>
          </div>
          <CalendarIcon className="h-8 w-8 text-white/80" />
        </div>
      </header>

      <div className="p-6">
        {/* Search and Filter */}
        <div className="flex space-x-3 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input
              type="text"
              placeholder="Cari obat..."
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
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="pillmate-card p-4 text-center">
            <div className="text-2xl font-bold text-pillmate-primary">
              {schedules.length}
            </div>
            <p className="text-sm text-gray-600">Total Jadwal</p>
          </div>
          <div className="pillmate-card p-4 text-center">
            <div className="text-2xl font-bold text-pillmate-success">
              {schedules.filter((s) => s.reminderEnabled).length}
            </div>
            <p className="text-sm text-gray-600">Aktif</p>
          </div>
          <div className="pillmate-card p-4 text-center">
            <div className="text-2xl font-bold text-gray-400">
              {schedules.filter((s) => !s.reminderEnabled).length}
            </div>
            <p className="text-sm text-gray-600">Nonaktif</p>
          </div>
        </div>

        {/* Schedule List */}
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-semibold text-gray-900">
            Daftar Jadwal ({filteredSchedules.length})
          </h3>
        </div>

        <div className="space-y-4 mb-6">
          {filteredSchedules.length > 0 ? (
            filteredSchedules.map((schedule) => (
              <ScheduleItem
                key={schedule.id}
                schedule={schedule}
                onEdit={handleEdit}
                onDelete={handleDelete}
                onToggleReminder={handleToggleReminder}
              />
            ))
          ) : (
            <div className="pillmate-card p-8 text-center">
              <CalendarIcon className="h-12 w-12 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-600 mb-2">
                {searchTerm ? "Jadwal tidak ditemukan" : "Belum ada jadwal"}
              </h3>
              <p className="text-gray-500 mb-4">
                {searchTerm
                  ? `Tidak ada jadwal yang cocok dengan "${searchTerm}"`
                  : "Tambahkan jadwal obat pertama Anda"}
              </p>
              {!searchTerm && (
                <Button className="pillmate-button">
                  <Plus className="h-5 w-5 mr-2" />
                  Tambah Jadwal
                </Button>
              )}
            </div>
          )}
        </div>

        {/* Add Schedule Button */}
        {filteredSchedules.length > 0 && (
          <Button className="w-full pillmate-button flex items-center justify-center space-x-2">
            <Plus className="h-5 w-5" />
            <span>Tambah Jadwal Baru</span>
          </Button>
        )}
      </div>
    </div>
  );
}
