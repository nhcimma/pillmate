import { ArrowLeft, Database, Download, ZoomIn, ZoomOut } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function ERD() {
  const [zoomLevel, setZoomLevel] = useState(100);

  const handleZoom = (direction: "in" | "out") => {
    setZoomLevel((prev) => {
      if (direction === "in") return Math.min(prev + 10, 150);
      return Math.max(prev - 10, 50);
    });
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="pillmate-gradient text-white p-6 rounded-b-3xl shadow-pillmate-lg">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <Link
              to="/"
              className="p-2 hover:bg-white/20 rounded-full transition-colors"
            >
              <ArrowLeft className="h-6 w-6" />
            </Link>
            <div>
              <h1 className="text-2xl font-bold">ERD PillMate</h1>
              <p className="text-white/90">Entity Relationship Diagram</p>
            </div>
          </div>
          <Database className="h-8 w-8 text-white/80" />
        </div>
      </header>

      <div className="p-6">
        {/* Controls */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleZoom("out")}
              className="border-pillmate-primary text-pillmate-primary hover:bg-pillmate-light"
            >
              <ZoomOut className="h-4 w-4" />
            </Button>
            <span className="text-sm text-gray-600 min-w-16 text-center">
              {zoomLevel}%
            </span>
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleZoom("in")}
              className="border-pillmate-primary text-pillmate-primary hover:bg-pillmate-light"
            >
              <ZoomIn className="h-4 w-4" />
            </Button>
          </div>
          <Button
            variant="outline"
            className="border-pillmate-primary text-pillmate-primary hover:bg-pillmate-light"
          >
            <Download className="h-4 w-4 mr-2" />
            Unduh ERD
          </Button>
        </div>

        {/* ERD Diagram */}
        <div className="pillmate-card p-6 overflow-auto">
          <div
            className="erd-container mx-auto"
            style={{
              transform: `scale(${zoomLevel / 100})`,
              transformOrigin: "top center",
              width: "800px",
              minHeight: "600px",
            }}
          >
            {/* Users Entity */}
            <div className="absolute top-10 left-10 bg-white border-2 border-pillmate-primary rounded-lg p-4 w-48 shadow-lg">
              <div className="bg-pillmate-primary text-white px-3 py-2 rounded text-center font-bold mb-3">
                USERS
              </div>
              <div className="space-y-1 text-sm">
                <div className="flex items-center">
                  <span className="w-3 h-3 bg-yellow-400 rounded-full mr-2"></span>
                  <span className="font-semibold">user_id (PK)</span>
                </div>
                <div>• name</div>
                <div>• email</div>
                <div>• password</div>
                <div>• phone</div>
                <div>• birth_date</div>
                <div>• created_at</div>
                <div>• updated_at</div>
              </div>
            </div>

            {/* Medications Entity */}
            <div className="absolute top-10 right-10 bg-white border-2 border-pillmate-primary rounded-lg p-4 w-48 shadow-lg">
              <div className="bg-pillmate-primary text-white px-3 py-2 rounded text-center font-bold mb-3">
                MEDICATIONS
              </div>
              <div className="space-y-1 text-sm">
                <div className="flex items-center">
                  <span className="w-3 h-3 bg-yellow-400 rounded-full mr-2"></span>
                  <span className="font-semibold">medication_id (PK)</span>
                </div>
                <div>• name</div>
                <div>• description</div>
                <div>• manufacturer</div>
                <div>• category</div>
                <div>• created_at</div>
              </div>
            </div>

            {/* Schedules Entity */}
            <div className="absolute top-80 left-1/2 transform -translate-x-1/2 bg-white border-2 border-pillmate-primary rounded-lg p-4 w-52 shadow-lg">
              <div className="bg-pillmate-primary text-white px-3 py-2 rounded text-center font-bold mb-3">
                SCHEDULES
              </div>
              <div className="space-y-1 text-sm">
                <div className="flex items-center">
                  <span className="w-3 h-3 bg-yellow-400 rounded-full mr-2"></span>
                  <span className="font-semibold">schedule_id (PK)</span>
                </div>
                <div className="flex items-center">
                  <span className="w-3 h-3 bg-blue-400 rounded-full mr-2"></span>
                  <span className="font-semibold">user_id (FK)</span>
                </div>
                <div className="flex items-center">
                  <span className="w-3 h-3 bg-blue-400 rounded-full mr-2"></span>
                  <span className="font-semibold">medication_id (FK)</span>
                </div>
                <div>• dosage</div>
                <div>• frequency</div>
                <div>• start_date</div>
                <div>• end_date</div>
                <div>• reminder_enabled</div>
                <div>• instruction</div>
                <div>• created_at</div>
              </div>
            </div>

            {/* Schedule Times Entity */}
            <div className="absolute bottom-32 left-20 bg-white border-2 border-pillmate-primary rounded-lg p-4 w-48 shadow-lg">
              <div className="bg-pillmate-primary text-white px-3 py-2 rounded text-center font-bold mb-3">
                SCHEDULE_TIMES
              </div>
              <div className="space-y-1 text-sm">
                <div className="flex items-center">
                  <span className="w-3 h-3 bg-yellow-400 rounded-full mr-2"></span>
                  <span className="font-semibold">time_id (PK)</span>
                </div>
                <div className="flex items-center">
                  <span className="w-3 h-3 bg-blue-400 rounded-full mr-2"></span>
                  <span className="font-semibold">schedule_id (FK)</span>
                </div>
                <div>• time</div>
                <div>• active</div>
              </div>
            </div>

            {/* Consumption History Entity */}
            <div className="absolute bottom-32 right-20 bg-white border-2 border-pillmate-primary rounded-lg p-4 w-52 shadow-lg">
              <div className="bg-pillmate-primary text-white px-3 py-2 rounded text-center font-bold mb-3">
                CONSUMPTION_HISTORY
              </div>
              <div className="space-y-1 text-sm">
                <div className="flex items-center">
                  <span className="w-3 h-3 bg-yellow-400 rounded-full mr-2"></span>
                  <span className="font-semibold">history_id (PK)</span>
                </div>
                <div className="flex items-center">
                  <span className="w-3 h-3 bg-blue-400 rounded-full mr-2"></span>
                  <span className="font-semibold">schedule_id (FK)</span>
                </div>
                <div>• consumption_date</div>
                <div>• consumption_time</div>
                <div>• status</div>
                <div>• notes</div>
                <div>• created_at</div>
              </div>
            </div>

            {/* Relationship Lines */}
            <svg
              className="absolute inset-0 pointer-events-none"
              width="800"
              height="600"
            >
              {/* Users to Schedules */}
              <path
                d="M 160 140 L 300 300"
                stroke="#8B5CF6"
                strokeWidth="2"
                fill="none"
                markerEnd="url(#arrowhead)"
              />

              {/* Medications to Schedules */}
              <path
                d="M 550 140 L 450 300"
                stroke="#8B5CF6"
                strokeWidth="2"
                fill="none"
                markerEnd="url(#arrowhead)"
              />

              {/* Schedules to Schedule Times */}
              <path
                d="M 350 400 L 200 450"
                stroke="#8B5CF6"
                strokeWidth="2"
                fill="none"
                markerEnd="url(#arrowhead)"
              />

              {/* Schedules to Consumption History */}
              <path
                d="M 450 400 L 550 450"
                stroke="#8B5CF6"
                strokeWidth="2"
                fill="none"
                markerEnd="url(#arrowhead)"
              />

              <defs>
                <marker
                  id="arrowhead"
                  markerWidth="10"
                  markerHeight="7"
                  refX="10"
                  refY="3.5"
                  orient="auto"
                >
                  <polygon points="0 0, 10 3.5, 0 7" fill="#8B5CF6" />
                </marker>
              </defs>
            </svg>

            {/* Relationship Labels */}
            <div className="absolute top-48 left-48 bg-white px-2 py-1 rounded text-xs border text-pillmate-primary font-medium">
              1:N
            </div>
            <div className="absolute top-48 right-32 bg-white px-2 py-1 rounded text-xs border text-pillmate-primary font-medium">
              N:1
            </div>
            <div className="absolute bottom-72 left-56 bg-white px-2 py-1 rounded text-xs border text-pillmate-primary font-medium">
              1:N
            </div>
            <div className="absolute bottom-72 right-44 bg-white px-2 py-1 rounded text-xs border text-pillmate-primary font-medium">
              1:N
            </div>
          </div>
        </div>

        {/* Legend */}
        <div className="mt-6 pillmate-card p-4">
          <h3 className="font-semibold text-gray-900 mb-3">Keterangan:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div className="flex items-center space-x-2">
              <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
              <span>Primary Key (PK)</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-3 h-3 bg-blue-400 rounded-full"></span>
              <span>Foreign Key (FK)</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-0.5 bg-pillmate-primary"></div>
              <span>Relasi antar entitas</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-pillmate-primary font-medium">1:N</span>
              <span>One-to-Many relationship</span>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="mt-6 pillmate-card p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Penjelasan ERD PillMate
          </h3>
          <div className="space-y-3 text-gray-700">
            <p>
              <strong>Entity Relationship Diagram (ERD)</strong> ini
              menggambarkan struktur database untuk aplikasi PillMate yang
              terdiri dari 5 entitas utama:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                <strong>USERS:</strong> Menyimpan data pengguna aplikasi
              </li>
              <li>
                <strong>MEDICATIONS:</strong> Database obat-obatan yang tersedia
              </li>
              <li>
                <strong>SCHEDULES:</strong> Jadwal konsumsi obat untuk setiap
                pengguna
              </li>
              <li>
                <strong>SCHEDULE_TIMES:</strong> Waktu-waktu spesifik dalam
                jadwal
              </li>
              <li>
                <strong>CONSUMPTION_HISTORY:</strong> Riwayat konsumsi obat
                pengguna
              </li>
            </ul>
            <p>
              Relasi antar entitas dirancang untuk mendukung fungsionalitas
              lengkap aplikasi pengingat obat dengan tracking yang akurat.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
