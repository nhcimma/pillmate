import { useState } from "react";
import { X, Clock, Pill } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface NotificationPopupProps {
  isOpen: boolean;
  onClose: () => void;
  medicationName: string;
  dosage: string;
  instruction: string;
  onComplete: () => void;
  onSnooze: () => void;
}

export function NotificationPopup({
  isOpen,
  onClose,
  medicationName,
  dosage,
  instruction,
  onComplete,
  onSnooze,
}: NotificationPopupProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-3xl p-6 max-w-sm w-full animate-fade-in shadow-pillmate-lg">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <div className="p-2 bg-pillmate-light rounded-full">
              <Pill className="h-6 w-6 text-pillmate-primary" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">
              Waktunya Minum Obat!
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="h-5 w-5 text-gray-500" />
          </button>
        </div>

        <div className="space-y-3 mb-6">
          <div className="flex items-center space-x-3">
            <Clock className="h-5 w-5 text-pillmate-primary" />
            <div>
              <p className="font-medium text-gray-900">{medicationName}</p>
              <p className="text-sm text-gray-600">{dosage}</p>
            </div>
          </div>

          <div className="bg-pillmate-light p-3 rounded-xl">
            <p className="text-sm text-gray-700">{instruction}</p>
          </div>
        </div>

        <div className="flex space-x-3">
          <Button
            onClick={onSnooze}
            variant="outline"
            className="flex-1 rounded-full border-pillmate-primary text-pillmate-primary hover:bg-pillmate-light"
          >
            Tunda 10 Menit
          </Button>
          <Button onClick={onComplete} className="flex-1 pillmate-button">
            Selesai
          </Button>
        </div>
      </div>
    </div>
  );
}
