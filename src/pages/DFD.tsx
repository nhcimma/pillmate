import { ArrowLeft, GitBranch, Download, ZoomIn, ZoomOut } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function DFD() {
  const [zoomLevel, setZoomLevel] = useState(100);
  const [selectedLevel, setSelectedLevel] = useState(0);

  const handleZoom = (direction: "in" | "out") => {
    setZoomLevel((prev) => {
      if (direction === "in") return Math.min(prev + 10, 150);
      return Math.max(prev - 10, 50);
    });
  };

  const dfdLevels = [
    { level: 0, title: "Context Diagram", description: "Gambaran umum sistem" },
    { level: 1, title: "Level 1 DFD", description: "Proses utama sistem" },
  ];

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
                DFD PillMate
              </h1>
              <p className="text-purple-700">Data Flow Diagram</p>
            </div>
          </div>
          <GitBranch className="h-8 w-8 text-purple-600" />
        </div>
      </header>

      <div className="p-6">
        {/* Level Selector */}
        <div className="flex space-x-3 mb-6">
          {dfdLevels.map((dfd) => (
            <Button
              key={dfd.level}
              variant={selectedLevel === dfd.level ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedLevel(dfd.level)}
              className={
                selectedLevel === dfd.level
                  ? "bg-purple-500 hover:bg-purple-600 text-white"
                  : "border-purple-300 text-purple-700 hover:bg-purple-50"
              }
            >
              {dfd.title}
            </Button>
          ))}
        </div>

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
            Unduh DFD
          </Button>
        </div>

        {/* DFD Diagram */}
        <div className="bg-white rounded-2xl shadow-lg border border-purple-100 p-6 overflow-auto">
          <div
            className="dfd-container mx-auto relative"
            style={{
              transform: `scale(${zoomLevel / 100})`,
              transformOrigin: "top center",
              width: "1000px",
              minHeight: "700px",
            }}
          >
            {selectedLevel === 0 ? (
              // Context Diagram (Level 0)
              <>
                {/* Central System */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-56 h-40 rounded-full border-4 border-purple-500 bg-purple-50 flex items-center justify-center shadow-lg">
                  <div className="text-center">
                    <div className="font-bold text-purple-700 text-xl mb-1">
                      SISTEM
                    </div>
                    <div className="font-bold text-purple-700 text-xl">
                      PILLMATE
                    </div>
                  </div>
                </div>

                {/* External Entities */}
                <div className="absolute top-20 left-20 w-36 h-28 bg-purple-100 border-2 border-purple-400 rounded-xl flex items-center justify-center shadow-md">
                  <div className="text-center font-semibold text-purple-800">
                    PENGGUNA
                  </div>
                </div>

                <div className="absolute top-20 right-20 w-36 h-28 bg-purple-100 border-2 border-purple-400 rounded-xl flex items-center justify-center shadow-md">
                  <div className="text-center font-semibold text-purple-800">
                    ADMIN
                  </div>
                </div>

                <div className="absolute bottom-20 left-20 w-36 h-28 bg-purple-100 border-2 border-purple-400 rounded-xl flex items-center justify-center shadow-md">
                  <div className="text-center font-semibold text-purple-800 text-sm">
                    SISTEM
                    <br />
                    NOTIFIKASI
                  </div>
                </div>

                <div className="absolute bottom-20 right-20 w-36 h-28 bg-purple-100 border-2 border-purple-400 rounded-xl flex items-center justify-center shadow-md">
                  <div className="text-center font-semibold text-purple-800">
                    DATABASE
                  </div>
                </div>

                {/* Data Flows */}
                <svg
                  className="absolute inset-0 pointer-events-none"
                  width="1000"
                  height="700"
                >
                  {/* User to System */}
                  <path
                    d="M 150 100 Q 300 200 400 330"
                    stroke="#9333ea"
                    strokeWidth="2"
                    fill="none"
                    markerEnd="url(#arrow)"
                  />
                  <path
                    d="M 420 310 Q 280 180 120 120"
                    stroke="#9333ea"
                    strokeWidth="2"
                    fill="none"
                    markerEnd="url(#arrow)"
                  />

                  {/* Admin to System */}
                  <path
                    d="M 850 100 Q 700 200 600 330"
                    stroke="#9333ea"
                    strokeWidth="2"
                    fill="none"
                    markerEnd="url(#arrow)"
                  />
                  <path
                    d="M 580 310 Q 720 180 880 120"
                    stroke="#9333ea"
                    strokeWidth="2"
                    fill="none"
                    markerEnd="url(#arrow)"
                  />

                  {/* System to Notification */}
                  <path
                    d="M 400 420 Q 300 520 150 580"
                    stroke="#9333ea"
                    strokeWidth="2"
                    fill="none"
                    markerEnd="url(#arrow)"
                  />

                  {/* System to Database */}
                  <path
                    d="M 600 420 Q 700 520 850 580"
                    stroke="#9333ea"
                    strokeWidth="2"
                    fill="none"
                    markerEnd="url(#arrow)"
                  />
                  <path
                    d="M 850 600 Q 700 540 580 440"
                    stroke="#9333ea"
                    strokeWidth="2"
                    fill="none"
                    markerEnd="url(#arrow)"
                  />

                  <defs>
                    <marker
                      id="arrow"
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

                {/* Data Flow Labels */}
                <div className="absolute top-50 left-80 bg-white px-3 py-1 rounded border text-xs text-purple-700 font-medium shadow-sm">
                  Data Login & Jadwal
                </div>
                <div className="absolute top-80 left-60 bg-white px-3 py-1 rounded border text-xs text-purple-700 font-medium shadow-sm">
                  Konfirmasi & Pengingat
                </div>
                <div className="absolute top-50 right-80 bg-white px-3 py-1 rounded border text-xs text-purple-700 font-medium shadow-sm">
                  Data Admin & Config
                </div>
                <div className="absolute top-80 right-60 bg-white px-3 py-1 rounded border text-xs text-purple-700 font-medium shadow-sm">
                  Laporan & Status
                </div>
                <div className="absolute bottom-80 left-80 bg-white px-3 py-1 rounded border text-xs text-purple-700 font-medium shadow-sm">
                  Notifikasi Push
                </div>
                <div className="absolute bottom-80 right-80 bg-white px-3 py-1 rounded border text-xs text-purple-700 font-medium shadow-sm">
                  Query Data
                </div>
                <div className="absolute bottom-60 right-60 bg-white px-3 py-1 rounded border text-xs text-purple-700 font-medium shadow-sm">
                  Result Data
                </div>
              </>
            ) : (
              // Level 1 DFD
              <>
                {/* External Entities */}
                <div className="absolute top-10 left-10 w-32 h-24 bg-purple-100 border-2 border-purple-400 rounded-xl flex items-center justify-center shadow-md">
                  <div className="text-center font-semibold text-purple-800 text-sm">
                    PENGGUNA
                  </div>
                </div>
                <div className="absolute top-10 right-10 w-32 h-24 bg-purple-100 border-2 border-purple-400 rounded-xl flex items-center justify-center shadow-md">
                  <div className="text-center font-semibold text-purple-800 text-sm">
                    ADMIN
                  </div>
                </div>

                {/* Processes */}
                <div className="absolute top-120 left-20 w-36 h-36 rounded-full border-2 border-purple-500 bg-white flex items-center justify-center shadow-lg">
                  <div className="text-center">
                    <div className="text-sm font-bold text-purple-700">1.0</div>
                    <div className="text-xs font-semibold text-purple-700">
                      AUTENTIKASI
                    </div>
                  </div>
                </div>

                <div className="absolute top-120 left-96 w-36 h-36 rounded-full border-2 border-purple-500 bg-white flex items-center justify-center shadow-lg">
                  <div className="text-center">
                    <div className="text-sm font-bold text-purple-700">2.0</div>
                    <div className="text-xs font-semibold text-purple-700">
                      KELOLA
                      <br />
                      JADWAL
                    </div>
                  </div>
                </div>

                <div className="absolute top-120 right-20 w-36 h-36 rounded-full border-2 border-purple-500 bg-white flex items-center justify-center shadow-lg">
                  <div className="text-center">
                    <div className="text-sm font-bold text-purple-700">3.0</div>
                    <div className="text-xs font-semibold text-purple-700">
                      PENGINGAT
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-120 left-60 w-36 h-36 rounded-full border-2 border-purple-500 bg-white flex items-center justify-center shadow-lg">
                  <div className="text-center">
                    <div className="text-sm font-bold text-purple-700">4.0</div>
                    <div className="text-xs font-semibold text-purple-700">
                      TRACKING
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-120 right-60 w-36 h-36 rounded-full border-2 border-purple-500 bg-white flex items-center justify-center shadow-lg">
                  <div className="text-center">
                    <div className="text-sm font-bold text-purple-700">5.0</div>
                    <div className="text-xs font-semibold text-purple-700">
                      LAPORAN
                    </div>
                  </div>
                </div>

                {/* Data Stores */}
                <div className="absolute bottom-20 left-20 w-44 h-20 border-t-2 border-b-2 border-purple-500 bg-white flex items-center justify-center shadow-md">
                  <div className="text-center">
                    <div className="text-sm font-bold text-purple-700">D1</div>
                    <div className="text-xs font-semibold text-purple-700">
                      DATA PENGGUNA
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-20 left-96 w-44 h-20 border-t-2 border-b-2 border-purple-500 bg-white flex items-center justify-center shadow-md">
                  <div className="text-center">
                    <div className="text-sm font-bold text-purple-700">D2</div>
                    <div className="text-xs font-semibold text-purple-700">
                      DATA JADWAL
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-20 right-20 w-44 h-20 border-t-2 border-b-2 border-purple-500 bg-white flex items-center justify-center shadow-md">
                  <div className="text-center">
                    <div className="text-sm font-bold text-purple-700">D3</div>
                    <div className="text-xs font-semibold text-purple-700">
                      DATA RIWAYAT
                    </div>
                  </div>
                </div>

                {/* Data Flow connections simplified */}
                <svg
                  className="absolute inset-0 pointer-events-none"
                  width="1000"
                  height="700"
                >
                  {/* Basic connections */}
                  <path
                    d="M 70 50 L 100 150"
                    stroke="#9333ea"
                    strokeWidth="2"
                    fill="none"
                    markerEnd="url(#arrow)"
                  />

                  <defs>
                    <marker
                      id="arrow"
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
              </>
            )}
          </div>
        </div>

        {/* Legend */}
        <div className="mt-6 bg-white rounded-2xl shadow-lg border border-purple-100 p-6">
          <h3 className="font-semibold text-purple-900 mb-4">Keterangan</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-6 border-2 border-purple-400 bg-purple-100 rounded"></div>
              <span>External Entity</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 border-2 border-purple-500 bg-white rounded-full"></div>
              <span>Process</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-4 border-t-2 border-b-2 border-purple-500 bg-white"></div>
              <span>Data Store</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-8 h-0.5 bg-purple-500"></div>
              <span>Data Flow</span>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="mt-6 bg-white rounded-2xl shadow-lg border border-purple-100 p-6">
          <h3 className="text-lg font-semibold text-purple-900 mb-4">
            Penjelasan DFD PillMate
          </h3>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            {selectedLevel === 0 ? (
              <div className="space-y-3">
                <h4 className="font-semibold text-purple-700">
                  Context Diagram
                </h4>
                <p>
                  Menunjukkan sistem PillMate sebagai satu kesatuan yang
                  berinteraksi dengan entitas eksternal:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-purple-800 mb-2">
                      Pengguna
                    </h5>
                    <p className="text-sm">
                      Memberikan data login dan jadwal obat, menerima pengingat
                    </p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-purple-800 mb-2">
                      Admin
                    </h5>
                    <p className="text-sm">
                      Mengelola konfigurasi sistem dan menerima laporan
                    </p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-purple-800 mb-2">
                      Sistem Notifikasi
                    </h5>
                    <p className="text-sm">
                      Mengirim notifikasi push ke perangkat pengguna
                    </p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-purple-800 mb-2">
                      Database
                    </h5>
                    <p className="text-sm">
                      Menyimpan dan menyediakan data aplikasi
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-3">
                <h4 className="font-semibold text-purple-700">Level 1 DFD</h4>
                <p>Memecah sistem menjadi 5 proses utama:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-purple-800 mb-2">
                      1.0 Autentikasi
                    </h5>
                    <p className="text-sm">
                      Mengelola login dan registrasi pengguna
                    </p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-purple-800 mb-2">
                      2.0 Kelola Jadwal
                    </h5>
                    <p className="text-sm">
                      Membuat, mengubah, dan menghapus jadwal obat
                    </p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-purple-800 mb-2">
                      3.0 Pengingat
                    </h5>
                    <p className="text-sm">Mengirim notifikasi tepat waktu</p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-purple-800 mb-2">
                      4.0 Tracking
                    </h5>
                    <p className="text-sm">Mencatat konsumsi obat dan status</p>
                  </div>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h5 className="font-semibold text-purple-800 mb-2">
                    5.0 Laporan
                  </h5>
                  <p className="text-sm">
                    Menghasilkan laporan dan analisis kepatuhan
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
