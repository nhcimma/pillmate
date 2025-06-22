import { ArrowLeft, Database, Download } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function ERD() {
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
                ERD Database PillMate
              </h1>
              <p className="text-purple-700">
                Entity Relationship Diagram - Bahasa Indonesia
              </p>
            </div>
          </div>
          <Database className="h-8 w-8 text-purple-600" />
        </div>
      </header>

      <div className="p-6">
        <div className="max-w-7xl mx-auto">
          {/* ERD Visual Diagram */}
          <div className="bg-white rounded-2xl shadow-lg border border-purple-100 p-8 mb-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Column 1 */}
              <div className="space-y-6">
                {/* Pengguna Table */}
                <div className="border-2 border-blue-500 rounded-lg overflow-hidden shadow-md">
                  <div className="bg-blue-500 text-white p-3 text-center font-bold">
                    Pengguna
                  </div>
                  <div className="bg-white p-4 space-y-2">
                    <div className="flex justify-between border-b pb-1">
                      <span className="text-sm">🔑 id_pengguna</span>
                      <span className="text-xs text-gray-500">int</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">nama</span>
                      <span className="text-xs text-gray-500">varchar</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">email</span>
                      <span className="text-xs text-gray-500">varchar</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">kata_sandi</span>
                      <span className="text-xs text-gray-500">varchar</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">no_hp</span>
                      <span className="text-xs text-gray-500">varchar</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">tgl_lahir</span>
                      <span className="text-xs text-gray-500">date</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">tgl_daftar</span>
                      <span className="text-xs text-gray-500">timestamp</span>
                    </div>
                  </div>
                </div>

                {/* Jadwal Table */}
                <div className="border-2 border-green-500 rounded-lg overflow-hidden shadow-md">
                  <div className="bg-green-500 text-white p-3 text-center font-bold">
                    Jadwal
                  </div>
                  <div className="bg-white p-4 space-y-2">
                    <div className="flex justify-between border-b pb-1">
                      <span className="text-sm">🔑 id_jadwal</span>
                      <span className="text-xs text-gray-500">int</span>
                    </div>
                    <div className="flex justify-between border-b pb-1">
                      <span className="text-sm">🔗 id_pengguna</span>
                      <span className="text-xs text-gray-500">int</span>
                    </div>
                    <div className="flex justify-between border-b pb-1">
                      <span className="text-sm">🔗 id_obat</span>
                      <span className="text-xs text-gray-500">int</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">dosis</span>
                      <span className="text-xs text-gray-500">varchar</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">frekuensi</span>
                      <span className="text-xs text-gray-500">varchar</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">waktu_minum</span>
                      <span className="text-xs text-gray-500">time</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">tgl_mulai</span>
                      <span className="text-xs text-gray-500">date</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">tgl_selesai</span>
                      <span className="text-xs text-gray-500">date</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">pengingat_aktif</span>
                      <span className="text-xs text-gray-500">boolean</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">catatan</span>
                      <span className="text-xs text-gray-500">text</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Column 2 */}
              <div className="space-y-6">
                {/* Obat Table */}
                <div className="border-2 border-purple-500 rounded-lg overflow-hidden shadow-md">
                  <div className="bg-purple-500 text-white p-3 text-center font-bold">
                    Obat
                  </div>
                  <div className="bg-white p-4 space-y-2">
                    <div className="flex justify-between border-b pb-1">
                      <span className="text-sm">🔑 id_obat</span>
                      <span className="text-xs text-gray-500">int</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">nama_obat</span>
                      <span className="text-xs text-gray-500">varchar</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">deskripsi</span>
                      <span className="text-xs text-gray-500">text</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">kategori</span>
                      <span className="text-xs text-gray-500">varchar</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">produsen</span>
                      <span className="text-xs text-gray-500">varchar</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">tgl_dibuat</span>
                      <span className="text-xs text-gray-500">timestamp</span>
                    </div>
                  </div>
                </div>

                {/* Pengingat Table */}
                <div className="border-2 border-orange-500 rounded-lg overflow-hidden shadow-md">
                  <div className="bg-orange-500 text-white p-3 text-center font-bold">
                    Pengingat
                  </div>
                  <div className="bg-white p-4 space-y-2">
                    <div className="flex justify-between border-b pb-1">
                      <span className="text-sm">🔑 id_pengingat</span>
                      <span className="text-xs text-gray-500">int</span>
                    </div>
                    <div className="flex justify-between border-b pb-1">
                      <span className="text-sm">🔗 id_jadwal</span>
                      <span className="text-xs text-gray-500">int</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">jenis_pengingat</span>
                      <span className="text-xs text-gray-500">varchar</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">waktu_kirim</span>
                      <span className="text-xs text-gray-500">datetime</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">status_kirim</span>
                      <span className="text-xs text-gray-500">varchar</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">pesan</span>
                      <span className="text-xs text-gray-500">text</span>
                    </div>
                  </div>
                </div>

                {/* Login Table */}
                <div className="border-2 border-indigo-500 rounded-lg overflow-hidden shadow-md">
                  <div className="bg-indigo-500 text-white p-3 text-center font-bold">
                    Login
                  </div>
                  <div className="bg-white p-4 space-y-2">
                    <div className="flex justify-between border-b pb-1">
                      <span className="text-sm">🔑 id_login</span>
                      <span className="text-xs text-gray-500">int</span>
                    </div>
                    <div className="flex justify-between border-b pb-1">
                      <span className="text-sm">🔗 id_pengguna</span>
                      <span className="text-xs text-gray-500">int</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">waktu_login</span>
                      <span className="text-xs text-gray-500">datetime</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">ip_address</span>
                      <span className="text-xs text-gray-500">varchar</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">perangkat</span>
                      <span className="text-xs text-gray-500">varchar</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">status</span>
                      <span className="text-xs text-gray-500">varchar</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Column 3 */}
              <div className="space-y-6">
                {/* Riwayat Konsumsi Table */}
                <div className="border-2 border-red-500 rounded-lg overflow-hidden shadow-md">
                  <div className="bg-red-500 text-white p-3 text-center font-bold">
                    RiwayatKonsumsi
                  </div>
                  <div className="bg-white p-4 space-y-2">
                    <div className="flex justify-between border-b pb-1">
                      <span className="text-sm">🔑 id_riwayat</span>
                      <span className="text-xs text-gray-500">int</span>
                    </div>
                    <div className="flex justify-between border-b pb-1">
                      <span className="text-sm">🔗 id_jadwal</span>
                      <span className="text-xs text-gray-500">int</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">tgl_konsumsi</span>
                      <span className="text-xs text-gray-500">date</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">waktu_konsumsi</span>
                      <span className="text-xs text-gray-500">time</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">status</span>
                      <span className="text-xs text-gray-500">varchar</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">catatan</span>
                      <span className="text-xs text-gray-500">text</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">tgl_dicatat</span>
                      <span className="text-xs text-gray-500">timestamp</span>
                    </div>
                  </div>
                </div>

                {/* Laporan Table */}
                <div className="border-2 border-teal-500 rounded-lg overflow-hidden shadow-md">
                  <div className="bg-teal-500 text-white p-3 text-center font-bold">
                    Laporan
                  </div>
                  <div className="bg-white p-4 space-y-2">
                    <div className="flex justify-between border-b pb-1">
                      <span className="text-sm">🔑 id_laporan</span>
                      <span className="text-xs text-gray-500">int</span>
                    </div>
                    <div className="flex justify-between border-b pb-1">
                      <span className="text-sm">🔗 id_pengguna</span>
                      <span className="text-xs text-gray-500">int</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">jenis_laporan</span>
                      <span className="text-xs text-gray-500">varchar</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">periode_awal</span>
                      <span className="text-xs text-gray-500">date</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">periode_akhir</span>
                      <span className="text-xs text-gray-500">date</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">tingkat_kepatuhan</span>
                      <span className="text-xs text-gray-500">decimal</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">tgl_dibuat</span>
                      <span className="text-xs text-gray-500">timestamp</span>
                    </div>
                  </div>
                </div>

                {/* Admin Table */}
                <div className="border-2 border-gray-600 rounded-lg overflow-hidden shadow-md">
                  <div className="bg-gray-600 text-white p-3 text-center font-bold">
                    Admin
                  </div>
                  <div className="bg-white p-4 space-y-2">
                    <div className="flex justify-between border-b pb-1">
                      <span className="text-sm">🔑 id_admin</span>
                      <span className="text-xs text-gray-500">int</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">nama_admin</span>
                      <span className="text-xs text-gray-500">varchar</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">email</span>
                      <span className="text-xs text-gray-500">varchar</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">kata_sandi</span>
                      <span className="text-xs text-gray-500">varchar</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">level_akses</span>
                      <span className="text-xs text-gray-500">varchar</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">tgl_dibuat</span>
                      <span className="text-xs text-gray-500">timestamp</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Relationship Lines Indicators */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-bold text-blue-800 mb-2">
                  Hubungan Utama:
                </h4>
                <div className="space-y-1 text-sm text-blue-700">
                  <div>• Pengguna ↔️ Jadwal (1:N)</div>
                  <div>• Obat ↔️ Jadwal (1:N)</div>
                  <div>• Jadwal ↔️ RiwayatKonsumsi (1:N)</div>
                  <div>• Jadwal ↔️ Pengingat (1:N)</div>
                </div>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-bold text-green-800 mb-2">
                  Hubungan Sekunder:
                </h4>
                <div className="space-y-1 text-sm text-green-700">
                  <div>• Pengguna ↔️ Login (1:N)</div>
                  <div>• Pengguna ↔️ Laporan (1:N)</div>
                  <div>• Admin → Sistem (Manage)</div>
                </div>
              </div>
            </div>
          </div>

          {/* Legend */}
          <div className="bg-white rounded-2xl shadow-lg border border-purple-100 p-6 mb-6">
            <h3 className="font-semibold text-purple-900 mb-4">
              Keterangan Simbol
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="flex items-center space-x-2">
                <span className="text-lg">🔑</span>
                <span>Primary Key (Kunci Utama)</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-lg">🔗</span>
                <span>Foreign Key (Kunci Asing)</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-purple-700 font-medium">1:N</span>
                <span>Relasi Satu ke Banyak</span>
              </div>
            </div>
          </div>

          {/* Download Button */}
          <div className="text-center">
            <Button
              variant="outline"
              className="border-purple-300 text-purple-700 hover:bg-purple-50"
            >
              <Download className="h-4 w-4 mr-2" />
              Unduh ERD
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
