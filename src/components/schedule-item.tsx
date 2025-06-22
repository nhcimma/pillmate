import { Clock, Pill, Edit, Trash2, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export interface Schedule {
  id: string;
  medicationName: string;
  dosage: string;
  times: string[];
  frequency: string;
  startDate: string;
  endDate?: string;
  reminderEnabled: boolean;
  instruction?: string;
}

interface ScheduleItemProps {
  schedule: Schedule;
  onEdit?: (id: string) => void;
  onDelete?: (id: string) => void;
  onToggleReminder?: (id: string) => void;
}

export function ScheduleItem({
  schedule,
  onEdit,
  onDelete,
  onToggleReminder,
}: ScheduleItemProps) {
  const getFrequencyEmoji = () => {
    if (schedule.frequency === "Setiap hari") return "📅";
    if (schedule.frequency === "Jika diperlukan") return "🔔";
    return "⏰";
  };

  return (
    <div className="pillmate-card-relaxed p-5 hover:shadow-soft-lg transition-all duration-300 transform hover:scale-[1.01] backdrop-blur-sm bg-gradient-to-r from-white/80 to-pillmate-light/30">
      <div className="flex items-start justify-between">
        <div className="flex items-start space-x-4 flex-1">
          <div className="p-3 bg-pillmate-light/70 rounded-2xl backdrop-blur-sm">
            <Pill className="h-6 w-6 text-pillmate-primary" />
          </div>

          <div className="flex-1">
            <h3 className="font-bold text-gray-900 text-lg flex items-center gap-2">
              {schedule.medicationName}
              <span className="text-sm">💊</span>
            </h3>
            <p className="text-sm text-gray-600 mb-3 font-medium">
              {schedule.dosage}
            </p>

            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-pillmate-primary" />
                <span className="text-sm text-gray-700 font-medium">
                  ⏰ {schedule.times.join(", ")}
                </span>
              </div>

              <div className="flex items-center space-x-3">
                <span
                  className={`text-xs px-3 py-1 rounded-full font-medium ${
                    schedule.frequency === "Setiap hari"
                      ? "bg-relaxed-green/50 text-green-800"
                      : "bg-relaxed-orange/50 text-orange-800"
                  }`}
                >
                  {getFrequencyEmoji()} {schedule.frequency}
                </span>
                <span className="text-xs text-gray-500 bg-white/60 px-2 py-1 rounded-full">
                  📅 {schedule.startDate} -{" "}
                  {schedule.endDate || "Berkelanjutan"}
                </span>
              </div>

              {schedule.instruction && (
                <p className="text-xs text-gray-600 bg-pillmate-light/50 p-3 rounded-2xl backdrop-blur-sm">
                  💡 <strong>Catatan:</strong> {schedule.instruction}
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-2 ml-4">
          {onToggleReminder && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onToggleReminder(schedule.id)}
              className={cn(
                "p-3 rounded-2xl transition-all duration-300 transform hover:scale-110",
                schedule.reminderEnabled
                  ? "text-pillmate-primary bg-pillmate-light/70 hover:bg-pillmate-secondary/30"
                  : "text-gray-400 hover:text-pillmate-primary hover:bg-pillmate-light/50",
              )}
              title={
                schedule.reminderEnabled
                  ? "🔕 Nonaktifkan pengingat"
                  : "🔔 Aktifkan pengingat"
              }
            >
              <Bell className="h-5 w-5" />
            </Button>
          )}

          {onEdit && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onEdit(schedule.id)}
              className="p-3 text-gray-500 hover:text-pillmate-primary hover:bg-pillmate-light/50 rounded-2xl transition-all duration-300 transform hover:scale-110"
              title="✏️ Edit jadwal"
            >
              <Edit className="h-5 w-5" />
            </Button>
          )}

          {onDelete && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onDelete(schedule.id)}
              className="p-3 text-gray-500 hover:text-red-500 hover:bg-red-50/70 rounded-2xl transition-all duration-300 transform hover:scale-110"
              title="🗑️ Hapus jadwal"
            >
              <Trash2 className="h-5 w-5" />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
