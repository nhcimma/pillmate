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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-purple-100 to-purple-50 border-b border-purple-200/30 p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link
              to="/"
              className="p-2 hover:bg-purple-200/30 rounded-xl transition-colors"
            >
              <ArrowLeft className="h-6 w-6 text-purple-700" />
            </Link>
            <div>
              <h1 className="text-2xl font-bold text-purple-900">
                ERD PillMate
              </h1>
              <p className="text-purple-700">Entity Relationship Diagram</p>
            </div>
          </div>
          <Database className="h-8 w-8 text-purple-600" />
        </div>
      </header>

      <div className="p-6">
        {/* Controls */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleZoom("out")}
              className="border-purple-300 text-purple-700 hover:bg-purple-50"
            >
              <ZoomOut className="h-4 w-4" />
            </Button>
            <span className="text-sm text-purple-600 min-w-16 text-center font-medium">
              {zoomLevel}%
            </span>
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleZoom("in")}
              className="border-purple-300 text-purple-700 hover:bg-purple-50"
            >
              <ZoomIn className="h-4 w-4" />
            </Button>
          </div>
          <Button
            variant="outline"
            className="border-purple-300 text-purple-700 hover:bg-purple-50"
          >
            <Download className="h-4 w-4 mr-2" />
            Unduh ERD
          </Button>
        </div>

        {/* ERD Diagram */}
        <div className="bg-white rounded-2xl shadow-lg border border-purple-100 p-6 overflow-auto">
          <div
            className="erd-container mx-auto relative"
            style={{
              transform: `scale(${zoomLevel / 100})`,
              transformOrigin: "top center",
              width: "900px",
              minHeight: "650px",
            }}
          >
            {/* Users Entity */}
            <div className="absolute top-10 left-10 bg-white border-2 border-purple-400 rounded-xl p-4 w-52 shadow-md">
              <div className="bg-purple-500 text-white px-3 py-2 rounded-lg text-center font-bold mb-3">
                USERS
              </div>
              <div className="space-y-1 text-sm">
                <div className="flex items-center">
                  <span className="w-3 h-3 bg-yellow-400 rounded-full mr-2"></span>
                  <span className="font-semibold">user_id (PK)</span>
                </div>
                <div className="ml-5">name</div>
                <div className="ml-5">email</div>
                <div className="ml-5">password</div>
                <div className="ml-5">phone</div>
                <div className="ml-5">birth_date</div>
                <div className="ml-5">created_at</div>
                <div className="ml-5">updated_at</div>
              </div>
            </div>

            {/* Medications Entity */}
            <div className="absolute top-10 right-10 bg-white border-2 border-purple-400 rounded-xl p-4 w-52 shadow-md">
              <div className="bg-purple-500 text-white px-3 py-2 rounded-lg text-center font-bold mb-3">
                MEDICATIONS
              </div>
              <div className="space-y-1 text-sm">
                <div className="flex items-center">
                  <span className="w-3 h-3 bg-yellow-400 rounded-full mr-2"></span>
                  <span className="font-semibold">medication_id (PK)</span>
                </div>
                <div className="ml-5">name</div>
                <div className="ml-5">description</div>
                <div className="ml-5">manufacturer</div>
                <div className="ml-5">category</div>
                <div className="ml-5">created_at</div>
              </div>
            </div>

            {/* Schedules Entity */}
            <div className="absolute top-80 left-1/2 transform -translate-x-1/2 bg-white border-2 border-purple-400 rounded-xl p-4 w-56 shadow-md">
              <div className="bg-purple-500 text-white px-3 py-2 rounded-lg text-center font-bold mb-3">
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
                <div className="ml-5">dosage</div>
                <div className="ml-5">frequency</div>
                <div className="ml-5">start_date</div>
                <div className="ml-5">end_date</div>
                <div className="ml-5">reminder_enabled</div>
                <div className="ml-5">instruction</div>
                <div className="ml-5">created_at</div>
              </div>
            </div>

            {/* Schedule Times Entity */}
            <div className="absolute bottom-32 left-20 bg-white border-2 border-purple-400 rounded-xl p-4 w-52 shadow-md">
              <div className="bg-purple-500 text-white px-3 py-2 rounded-lg text-center font-bold mb-3">
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
                <div className="ml-5">time</div>
                <div className="ml-5">active</div>
              </div>
            </div>

            {/* Consumption History Entity */}
            <div className="absolute bottom-32 right-20 bg-white border-2 border-purple-400 rounded-xl p-4 w-56 shadow-md">
              <div className="bg-purple-500 text-white px-3 py-2 rounded-lg text-center font-bold mb-3">
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
                <div className="ml-5">consumption_date</div>
                <div className="ml-5">consumption_time</div>
                <div className="ml-5">status</div>
                <div className="ml-5">notes</div>
                <div className="ml-5">created_at</div>
              </div>
            </div>

            {/* Relationship Lines */}
            <svg
              className="absolute inset-0 pointer-events-none"
              width="900"
              height="650"
            >
              {/* Users to Schedules */}
              <path
                d="M 180 150 L 350 320"
                stroke="#9333ea"
                strokeWidth="2"
                fill="none"
                markerEnd="url(#arrowhead)"
              />

              {/* Medications to Schedules */}
              <path
                d="M 650 150 L 500 320"
                stroke="#9333ea"
                strokeWidth="2"
                fill="none"
                markerEnd="url(#arrowhead)"
              />

              {/* Schedules to Schedule Times */}
              <path
                d="M 380 420 L 250 480"
                stroke="#9333ea"
                strokeWidth="2"
                fill="none"
                markerEnd="url(#arrowhead)"
              />

              {/* Schedules to Consumption History */}
              <path
                d="M 500 420 L 620 480"
                stroke="#9333ea"
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
                  <polygon points="0 0, 10 3.5, 0 7" fill="#9333ea" />
                </marker>
              </defs>
            </svg>

            {/* Relationship Labels */}
            <div className="absolute top-60 left-60 bg-white px-2 py-1 rounded border text-xs text-purple-700 font-medium">
              1:N
            </div>
            <div className="absolute top-60 right-44 bg-white px-2 py-1 rounded border text-xs text-purple-700 font-medium">
              N:1
            </div>
            <div className="absolute bottom-80 left-72 bg-white px-2 py-1 rounded border text-xs text-purple-700 font-medium">
              1:N
            </div>
            <div className="absolute bottom-80 right-60 bg-white px-2 py-1 rounded border text-xs text-purple-700 font-medium">
              1:N
            </div>
          </div>
        </div>

        {/* Legend */}
        <div className="mt-6 bg-white rounded-2xl shadow-lg border border-purple-100 p-6">
          <h3 className="font-semibold text-purple-900 mb-4">Keterangan</h3>
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
              <div className="w-4 h-0.5 bg-purple-500"></div>
              <span>Relasi antar entitas</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-purple-700 font-medium">1:N</span>
              <span>One-to-Many relationship</span>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="mt-6 bg-white rounded-2xl shadow-lg border border-purple-100 p-6">
          <h3 className="text-lg font-semibold text-purple-900 mb-4">
            Penjelasan ERD PillMate
          </h3>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              Entity Relationship Diagram ini menggambarkan struktur database
              untuk aplikasi PillMate yang terdiri dari 5 entitas utama:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div className="bg-purple-50 p-4 rounded-lg">
                <h4 className="font-semibold text-purple-800 mb-2">USERS</h4>
                <p className="text-sm">Menyimpan data pengguna aplikasi</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <h4 className="font-semibold text-purple-800 mb-2">
                  MEDICATIONS
                </h4>
                <p className="text-sm">Database obat-obatan yang tersedia</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <h4 className="font-semibold text-purple-800 mb-2">
                  SCHEDULES
                </h4>
                <p className="text-sm">
                  Jadwal konsumsi obat untuk setiap pengguna
                </p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <h4 className="font-semibold text-purple-800 mb-2">
                  SCHEDULE_TIMES
                </h4>
                <p className="text-sm">Waktu-waktu spesifik dalam jadwal</p>
              </div>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <h4 className="font-semibold text-purple-800 mb-2">
                CONSUMPTION_HISTORY
              </h4>
              <p className="text-sm">
                Riwayat konsumsi obat pengguna untuk tracking dan analisis
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
