import { Clock, Pill, Check, X, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export interface Medication {
  id: string;
  name: string;
  dosage: string;
  time: string;
  status: "completed" | "pending" | "missed";
  instruction?: string;
}

interface MedicationCardProps {
  medication: Medication;
  onStatusChange?: (id: string, status: Medication["status"]) => void;
  showActions?: boolean;
}

export function MedicationCard({
  medication,
  onStatusChange,
  showActions = true,
}: MedicationCardProps) {
  const getStatusIcon = () => {
    switch (medication.status) {
      case "completed":
        return <Check className="h-5 w-5 text-pillmate-success" />;
      case "missed":
        return <X className="h-5 w-5 text-pillmate-error" />;
      default:
        return <Clock className="h-5 w-5 text-pillmate-warning" />;
    }
  };

  const getStatusColor = () => {
    switch (medication.status) {
      case "completed":
        return "border-l-pillmate-success bg-gradient-to-r from-green-50/80 to-white/90";
      case "missed":
        return "border-l-pillmate-error bg-gradient-to-r from-red-50/80 to-white/90";
      default:
        return "border-l-pillmate-warning bg-gradient-to-r from-orange-50/80 to-white/90";
    }
  };

  const getStatusText = () => {
    switch (medication.status) {
      case "completed":
        return "✅ Sudah diminum";
      case "missed":
        return "⏰ Terlewat";
      default:
        return "🔔 Belum diminum";
    }
  };

  const getStatusEmoji = () => {
    switch (medication.status) {
      case "completed":
        return "🎉";
      case "missed":
        return "😔";
      default:
        return "💊";
    }
  };

  return (
    <div
      className={cn(
        "pillmate-card-relaxed p-5 border-l-4 transition-all duration-300 hover:shadow-soft-lg transform hover:scale-[1.02] backdrop-blur-sm",
        getStatusColor(),
      )}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="p-3 bg-white/70 rounded-2xl shadow-sm backdrop-blur-sm">
            <Pill className="h-6 w-6 text-pillmate-primary" />
          </div>

          <div className="flex-1">
            <h3 className="font-bold text-gray-900 text-lg flex items-center gap-2">
              {medication.name}
              <span className="text-sm">{getStatusEmoji()}</span>
            </h3>
            <p className="text-sm text-gray-600 font-medium">
              {medication.dosage}
            </p>
            {medication.instruction && (
              <p className="text-xs text-gray-500 mt-1 bg-white/50 px-2 py-1 rounded-full inline-block">
                💡 {medication.instruction}
              </p>
            )}
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="text-right">
            <p className="font-bold text-gray-900 text-lg flex items-center gap-1">
              ⏰ {medication.time}
            </p>
            <div className="flex items-center space-x-2 mt-1">
              {getStatusIcon()}
              <span className="text-xs text-gray-600 font-medium">
                {getStatusText()}
              </span>
            </div>
          </div>

          {showActions && medication.status === "pending" && onStatusChange && (
            <div className="flex space-x-2">
              <button
                onClick={() => onStatusChange(medication.id, "missed")}
                className="p-3 text-pillmate-error hover:bg-red-100/70 rounded-2xl transition-all duration-300 transform hover:scale-110 backdrop-blur-sm"
                title="Tandai terlewat"
              >
                <X className="h-5 w-5" />
              </button>
              <button
                onClick={() => onStatusChange(medication.id, "completed")}
                className="p-3 text-pillmate-success hover:bg-green-100/70 rounded-2xl transition-all duration-300 transform hover:scale-110 backdrop-blur-sm"
                title="Tandai selesai"
              >
                <Check className="h-5 w-5" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
