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
              <h1 className="text-2xl font-bold">DFD PillMate</h1>
              <p className="text-white/90">Data Flow Diagram</p>
            </div>
          </div>
          <GitBranch className="h-8 w-8 text-white/80" />
        </div>
      </header>

      <div className="p-6">
        {/* Level Selector */}
        <div className="flex space-x-2 mb-6">
          {dfdLevels.map((dfd) => (
            <Button
              key={dfd.level}
              variant={selectedLevel === dfd.level ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedLevel(dfd.level)}
              className={
                selectedLevel === dfd.level
                  ? "pillmate-button"
                  : "border-pillmate-primary text-pillmate-primary hover:bg-pillmate-light"
              }
            >
              {dfd.title}
            </Button>
          ))}
        </div>

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
            Unduh DFD
          </Button>
        </div>

        {/* DFD Diagram */}
        <div className="pillmate-card p-6 overflow-auto">
          <div
            className="dfd-container mx-auto relative"
            style={{
              transform: `scale(${zoomLevel / 100})`,
              transformOrigin: "top center",
              width: "900px",
              minHeight: "700px",
            }}
          >
            {selectedLevel === 0 ? (
              // Context Diagram (Level 0)
              <>
                {/* Central System */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-32 rounded-full border-4 border-pillmate-primary bg-white flex items-center justify-center shadow-lg">
                  <div className="text-center">
                    <div className="font-bold text-pillmate-primary text-lg">
                      SISTEM
                    </div>
                    <div className="font-bold text-pillmate-primary text-lg">
                      PILLMATE
                    </div>
                  </div>
                </div>

                {/* External Entities */}
                {/* User */}
                <div className="absolute top-20 left-20 w-32 h-24 bg-pillmate-light border-2 border-pillmate-primary rounded-lg flex items-center justify-center shadow-md">
                  <div className="text-center font-semibold text-pillmate-primary">
                    PENGGUNA
                  </div>
                </div>

                {/* Admin */}
                <div className="absolute top-20 right-20 w-32 h-24 bg-pillmate-light border-2 border-pillmate-primary rounded-lg flex items-center justify-center shadow-md">
                  <div className="text-center font-semibold text-pillmate-primary">
                    ADMIN
                  </div>
                </div>

                {/* Notification System */}
                <div className="absolute bottom-20 left-20 w-32 h-24 bg-pillmate-light border-2 border-pillmate-primary rounded-lg flex items-center justify-center shadow-md">
                  <div className="text-center font-semibold text-pillmate-primary text-sm">
                    SISTEM NOTIFIKASI
                  </div>
                </div>

                {/* Database */}
                <div className="absolute bottom-20 right-20 w-32 h-24 bg-pillmate-light border-2 border-pillmate-primary rounded-lg flex items-center justify-center shadow-md">
                  <div className="text-center font-semibold text-pillmate-primary">
                    DATABASE
                  </div>
                </div>

                {/* Data Flows */}
                <svg
                  className="absolute inset-0 pointer-events-none"
                  width="900"
                  height="700"
                >
                  {/* User to System */}
                  <path
                    d="M 150 80 Q 300 200 350 300"
                    stroke="#8B5CF6"
                    strokeWidth="2"
                    fill="none"
                    markerEnd="url(#arrow)"
                  />
                  <path
                    d="M 370 280 Q 250 160 120 100"
                    stroke="#8B5CF6"
                    strokeWidth="2"
                    fill="none"
                    markerEnd="url(#arrow)"
                  />

                  {/* Admin to System */}
                  <path
                    d="M 750 80 Q 600 200 550 300"
                    stroke="#8B5CF6"
                    strokeWidth="2"
                    fill="none"
                    markerEnd="url(#arrow)"
                  />
                  <path
                    d="M 530 280 Q 650 160 780 100"
                    stroke="#8B5CF6"
                    strokeWidth="2"
                    fill="none"
                    markerEnd="url(#arrow)"
                  />

                  {/* System to Notification */}
                  <path
                    d="M 350 400 Q 250 500 150 550"
                    stroke="#8B5CF6"
                    strokeWidth="2"
                    fill="none"
                    markerEnd="url(#arrow)"
                  />

                  {/* System to Database */}
                  <path
                    d="M 550 400 Q 650 500 750 550"
                    stroke="#8B5CF6"
                    strokeWidth="2"
                    fill="none"
                    markerEnd="url(#arrow)"
                  />
                  <path
                    d="M 750 570 Q 650 520 530 420"
                    stroke="#8B5CF6"
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
                      <polygon points="0 0, 10 3.5, 0 7" fill="#8B5CF6" />
                    </marker>
                  </defs>
                </svg>

                {/* Data Flow Labels */}
                <div className="absolute top-40 left-60 bg-white px-2 py-1 rounded text-xs border text-pillmate-primary font-medium">
                  Data Login, Jadwal Obat
                </div>
                <div className="absolute top-60 left-40 bg-white px-2 py-1 rounded text-xs border text-pillmate-primary font-medium">
                  Konfirmasi, Pengingat
                </div>
                <div className="absolute top-40 right-60 bg-white px-2 py-1 rounded text-xs border text-pillmate-primary font-medium">
                  Data Admin, Config
                </div>
                <div className="absolute top-60 right-40 bg-white px-2 py-1 rounded text-xs border text-pillmate-primary font-medium">
                  Laporan, Status
                </div>
                <div className="absolute bottom-60 left-60 bg-white px-2 py-1 rounded text-xs border text-pillmate-primary font-medium">
                  Notifikasi Push
                </div>
                <div className="absolute bottom-60 right-60 bg-white px-2 py-1 rounded text-xs border text-pillmate-primary font-medium">
                  Query Data
                </div>
                <div className="absolute bottom-40 right-40 bg-white px-2 py-1 rounded text-xs border text-pillmate-primary font-medium">
                  Result Data
                </div>
              </>
            ) : (
              // Level 1 DFD
              <>
                {/* External Entities */}
                <div className="absolute top-10 left-10 w-28 h-20 bg-pillmate-light border-2 border-pillmate-primary rounded-lg flex items-center justify-center shadow-md">
                  <div className="text-center font-semibold text-pillmate-primary text-sm">
                    PENGGUNA
                  </div>
                </div>
                <div className="absolute top-10 right-10 w-28 h-20 bg-pillmate-light border-2 border-pillmate-primary rounded-lg flex items-center justify-center shadow-md">
                  <div className="text-center font-semibold text-pillmate-primary text-sm">
                    ADMIN
                  </div>
                </div>

                {/* Processes */}
                <div className="absolute top-80 left-20 w-32 h-32 rounded-full border-2 border-pillmate-primary bg-white flex items-center justify-center shadow-lg">
                  <div className="text-center">
                    <div className="text-xs font-bold text-pillmate-primary">
                      1.0
                    </div>
                    <div className="text-xs font-semibold text-pillmate-primary">
                      AUTENTIKASI
                    </div>
                  </div>
                </div>

                <div className="absolute top-80 left-80 w-32 h-32 rounded-full border-2 border-pillmate-primary bg-white flex items-center justify-center shadow-lg">
                  <div className="text-center">
                    <div className="text-xs font-bold text-pillmate-primary">
                      2.0
                    </div>
                    <div className="text-xs font-semibold text-pillmate-primary">
                      KELOLA JADWAL
                    </div>
                  </div>
                </div>

                <div className="absolute top-80 right-20 w-32 h-32 rounded-full border-2 border-pillmate-primary bg-white flex items-center justify-center shadow-lg">
                  <div className="text-center">
                    <div className="text-xs font-bold text-pillmate-primary">
                      3.0
                    </div>
                    <div className="text-xs font-semibold text-pillmate-primary">
                      PENGINGAT
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-80 left-50 w-32 h-32 rounded-full border-2 border-pillmate-primary bg-white flex items-center justify-center shadow-lg">
                  <div className="text-center">
                    <div className="text-xs font-bold text-pillmate-primary">
                      4.0
                    </div>
                    <div className="text-xs font-semibold text-pillmate-primary">
                      TRACKING
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-80 right-50 w-32 h-32 rounded-full border-2 border-pillmate-primary bg-white flex items-center justify-center shadow-lg">
                  <div className="text-center">
                    <div className="text-xs font-bold text-pillmate-primary">
                      5.0
                    </div>
                    <div className="text-xs font-semibold text-pillmate-primary">
                      LAPORAN
                    </div>
                  </div>
                </div>

                {/* Data Stores */}
                <div className="absolute bottom-20 left-20 w-40 h-16 border-t-2 border-b-2 border-pillmate-primary bg-white flex items-center justify-center shadow-md">
                  <div className="text-center">
                    <div className="text-xs font-bold text-pillmate-primary">
                      D1
                    </div>
                    <div className="text-xs font-semibold text-pillmate-primary">
                      DATA PENGGUNA
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-20 left-80 w-40 h-16 border-t-2 border-b-2 border-pillmate-primary bg-white flex items-center justify-center shadow-md">
                  <div className="text-center">
                    <div className="text-xs font-bold text-pillmate-primary">
                      D2
                    </div>
                    <div className="text-xs font-semibold text-pillmate-primary">
                      DATA JADWAL
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-20 right-20 w-40 h-16 border-t-2 border-b-2 border-pillmate-primary bg-white flex items-center justify-center shadow-md">
                  <div className="text-center">
                    <div className="text-xs font-bold text-pillmate-primary">
                      D3
                    </div>
                    <div className="text-xs font-semibold text-pillmate-primary">
                      DATA RIWAYAT
                    </div>
                  </div>
                </div>

                {/* Data Flows - simplified for clarity */}
                <svg
                  className="absolute inset-0 pointer-events-none"
                  width="900"
                  height="700"
                >
                  {/* User flows */}
                  <path
                    d="M 60 50 L 80 120"
                    stroke="#8B5CF6"
                    strokeWidth="2"
                    fill="none"
                    markerEnd="url(#arrow)"
                  />
                  <path
                    d="M 100 120 L 140 140"
                    stroke="#8B5CF6"
                    strokeWidth="2"
                    fill="none"
                    markerEnd="url(#arrow)"
                  />

                  {/* Process connections */}
                  <path
                    d="M 180 140 L 200 140"
                    stroke="#8B5CF6"
                    strokeWidth="2"
                    fill="none"
                    markerEnd="url(#arrow)"
                  />
                  <path
                    d="M 240 140 L 280 140"
                    stroke="#8B5CF6"
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
                      <polygon points="0 0, 10 3.5, 0 7" fill="#8B5CF6" />
                    </marker>
                  </defs>
                </svg>
              </>
            )}
          </div>
        </div>

        {/* Legend */}
        <div className="mt-6 pillmate-card p-4">
          <h3 className="font-semibold text-gray-900 mb-3">Keterangan:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-4 border-2 border-pillmate-primary bg-pillmate-light rounded"></div>
              <span>External Entity</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 border-2 border-pillmate-primary bg-white rounded-full"></div>
              <span>Process</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-3 border-t-2 border-b-2 border-pillmate-primary bg-white"></div>
              <span>Data Store</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-6 h-0.5 bg-pillmate-primary"></div>
              <span>Data Flow</span>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="mt-6 pillmate-card p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Penjelasan DFD PillMate
          </h3>
          <div className="space-y-4 text-gray-700">
            {selectedLevel === 0 ? (
              <div>
                <h4 className="font-semibold text-pillmate-primary mb-2">
                  Context Diagram (Level 0)
                </h4>
                <p>
                  Menunjukkan sistem PillMate sebagai satu kesatuan yang
                  berinteraksi dengan entitas eksternal:
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
                  <li>
                    <strong>Pengguna:</strong> Memberikan data login dan jadwal
                    obat, menerima pengingat
                  </li>
                  <li>
                    <strong>Admin:</strong> Mengelola konfigurasi sistem dan
                    menerima laporan
                  </li>
                  <li>
                    <strong>Sistem Notifikasi:</strong> Mengirim notifikasi push
                    ke perangkat pengguna
                  </li>
                  <li>
                    <strong>Database:</strong> Menyimpan dan menyediakan data
                    aplikasi
                  </li>
                </ul>
              </div>
            ) : (
              <div>
                <h4 className="font-semibold text-pillmate-primary mb-2">
                  Level 1 DFD
                </h4>
                <p>Memecah sistem menjadi 5 proses utama:</p>
                <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
                  <li>
                    <strong>1.0 Autentikasi:</strong> Mengelola login dan
                    registrasi pengguna
                  </li>
                  <li>
                    <strong>2.0 Kelola Jadwal:</strong> Membuat, mengubah, dan
                    menghapus jadwal obat
                  </li>
                  <li>
                    <strong>3.0 Pengingat:</strong> Mengirim notifikasi tepat
                    waktu
                  </li>
                  <li>
                    <strong>4.0 Tracking:</strong> Mencatat konsumsi obat dan
                    status
                  </li>
                  <li>
                    <strong>5.0 Laporan:</strong> Menghasilkan laporan dan
                    analisis
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
