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
  return (
    <div className="pillmate-card p-4 hover:shadow-pillmate-lg transition-all duration-200">
      <div className="flex items-start justify-between">
        <div className="flex items-start space-x-3 flex-1">
          <div className="p-2 bg-pillmate-light rounded-full">
            <Pill className="h-5 w-5 text-pillmate-primary" />
          </div>

          <div className="flex-1">
            <h3 className="font-semibold text-gray-900">
              {schedule.medicationName}
            </h3>
            <p className="text-sm text-gray-600 mb-2">{schedule.dosage}</p>

            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-pillmate-primary" />
                <span className="text-sm text-gray-700">
                  {schedule.times.join(", ")}
                </span>
              </div>

              <div className="flex items-center space-x-2">
                <span className="text-xs bg-pillmate-light text-pillmate-primary px-2 py-1 rounded-full">
                  {schedule.frequency}
                </span>
                <span className="text-xs text-gray-500">
                  {schedule.startDate} - {schedule.endDate || "Berkelanjutan"}
                </span>
              </div>

              {schedule.instruction && (
                <p className="text-xs text-gray-600 bg-gray-50 p-2 rounded-lg">
                  {schedule.instruction}
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-1 ml-3">
          {onToggleReminder && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onToggleReminder(schedule.id)}
              className={cn(
                "p-2 rounded-full transition-colors",
                schedule.reminderEnabled
                  ? "text-pillmate-primary bg-pillmate-light hover:bg-pillmate-secondary/20"
                  : "text-gray-400 hover:text-pillmate-primary hover:bg-pillmate-light",
              )}
              title={
                schedule.reminderEnabled
                  ? "Nonaktifkan pengingat"
                  : "Aktifkan pengingat"
              }
            >
              <Bell className="h-4 w-4" />
            </Button>
          )}

          {onEdit && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onEdit(schedule.id)}
              className="p-2 text-gray-500 hover:text-pillmate-primary hover:bg-pillmate-light rounded-full transition-colors"
              title="Edit jadwal"
            >
              <Edit className="h-4 w-4" />
            </Button>
          )}

          {onDelete && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onDelete(schedule.id)}
              className="p-2 text-gray-500 hover:text-red-500 hover:bg-red-50 rounded-full transition-colors"
              title="Hapus jadwal"
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
