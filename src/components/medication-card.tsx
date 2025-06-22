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
        return "border-pillmate-success bg-green-50";
      case "missed":
        return "border-pillmate-error bg-red-50";
      default:
        return "border-pillmate-warning bg-orange-50";
    }
  };

  const getStatusText = () => {
    switch (medication.status) {
      case "completed":
        return "Sudah diminum";
      case "missed":
        return "Terlewat";
      default:
        return "Belum diminum";
    }
  };

  return (
    <div
      className={cn(
        "pillmate-card p-4 border-l-4 transition-all duration-200",
        getStatusColor(),
      )}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-white rounded-full shadow-sm">
            <Pill className="h-5 w-5 text-pillmate-primary" />
          </div>

          <div className="flex-1">
            <h3 className="font-semibold text-gray-900">{medication.name}</h3>
            <p className="text-sm text-gray-600">{medication.dosage}</p>
            {medication.instruction && (
              <p className="text-xs text-gray-500 mt-1">
                {medication.instruction}
              </p>
            )}
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <div className="text-right">
            <p className="font-medium text-gray-900">{medication.time}</p>
            <div className="flex items-center space-x-1 mt-1">
              {getStatusIcon()}
              <span className="text-xs text-gray-600">{getStatusText()}</span>
            </div>
          </div>

          {showActions && medication.status === "pending" && onStatusChange && (
            <div className="flex space-x-2">
              <button
                onClick={() => onStatusChange(medication.id, "missed")}
                className="p-2 text-pillmate-error hover:bg-red-100 rounded-full transition-colors"
                title="Tandai terlewat"
              >
                <X className="h-4 w-4" />
              </button>
              <button
                onClick={() => onStatusChange(medication.id, "completed")}
                className="p-2 text-pillmate-success hover:bg-green-100 rounded-full transition-colors"
                title="Tandai selesai"
              >
                <Check className="h-4 w-4" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
