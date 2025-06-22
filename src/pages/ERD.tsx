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
                Struktur Database PillMate
              </h1>
              <p className="text-purple-700">Rancangan Tabel dan Hubungannya</p>
            </div>
          </div>
          <Database className="h-8 w-8 text-purple-600" />
        </div>
      </header>

      <div className="p-6 max-w-4xl mx-auto">
        {/* Simple ERD Diagram */}
        <div className="bg-white rounded-2xl shadow-lg border border-purple-100 p-8 mb-6">
          <h2 className="text-xl font-bold text-purple-900 mb-6 text-center">
            Tabel-Tabel Database
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Tabel Pengguna */}
            <div className="bg-purple-50 border-2 border-purple-300 rounded-xl p-4">
              <div className="bg-purple-500 text-white px-4 py-2 rounded-lg text-center font-bold mb-3">
                TABEL PENGGUNA
              </div>
              <div className="space-y-2 text-sm">
                <div className="font-bold text-purple-800">
                  📋 Data yang disimpan:
                </div>
                <div className="ml-4">• ID Pengguna (unik)</div>
                <div className="ml-4">• Nama Lengkap</div>
                <div className="ml-4">• Email</div>
                <div className="ml-4">• Password</div>
                <div className="ml-4">• Nomor HP</div>
                <div className="ml-4">• Tanggal Lahir</div>
              </div>
            </div>

            {/* Tabel Obat */}
            <div className="bg-purple-50 border-2 border-purple-300 rounded-xl p-4">
              <div className="bg-purple-500 text-white px-4 py-2 rounded-lg text-center font-bold mb-3">
                TABEL OBAT
              </div>
              <div className="space-y-2 text-sm">
                <div className="font-bold text-purple-800">
                  📋 Data yang disimpan:
                </div>
                <div className="ml-4">• ID Obat (unik)</div>
                <div className="ml-4">• Nama Obat</div>
                <div className="ml-4">• Keterangan</div>
                <div className="ml-4">• Kategori</div>
                <div className="ml-4">• Produsen</div>
              </div>
            </div>

            {/* Tabel Jadwal */}
            <div className="bg-purple-50 border-2 border-purple-300 rounded-xl p-4">
              <div className="bg-purple-500 text-white px-4 py-2 rounded-lg text-center font-bold mb-3">
                TABEL JADWAL
              </div>
              <div className="space-y-2 text-sm">
                <div className="font-bold text-purple-800">
                  📋 Data yang disimpan:
                </div>
                <div className="ml-4">• ID Jadwal (unik)</div>
                <div className="ml-4">• ID Pengguna</div>
                <div className="ml-4">• ID Obat</div>
                <div className="ml-4">• Dosis (berapa tablet)</div>
                <div className="ml-4">• Waktu Minum</div>
                <div className="ml-4">• Catatan</div>
              </div>
            </div>

            {/* Tabel Riwayat */}
            <div className="bg-purple-50 border-2 border-purple-300 rounded-xl p-4">
              <div className="bg-purple-500 text-white px-4 py-2 rounded-lg text-center font-bold mb-3">
                TABEL RIWAYAT
              </div>
              <div className="space-y-2 text-sm">
                <div className="font-bold text-purple-800">
                  📋 Data yang disimpan:
                </div>
                <div className="ml-4">• ID Riwayat (unik)</div>
                <div className="ml-4">• ID Jadwal</div>
                <div className="ml-4">• Tanggal Minum</div>
                <div className="ml-4">• Status (sudah/belum)</div>
                <div className="ml-4">• Catatan</div>
              </div>
            </div>
          </div>
        </div>

        {/* Hubungan Antar Tabel */}
        <div className="bg-white rounded-2xl shadow-lg border border-purple-100 p-6 mb-6">
          <h3 className="text-lg font-bold text-purple-900 mb-4">
            Hubungan Antar Tabel
          </h3>
          <div className="space-y-4">
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <h4 className="font-bold text-blue-800 mb-2">
                Pengguna ➡️ Jadwal
              </h4>
              <p className="text-sm text-blue-700">
                Satu pengguna bisa punya banyak jadwal obat
              </p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <h4 className="font-bold text-green-800 mb-2">Obat ➡️ Jadwal</h4>
              <p className="text-sm text-green-700">
                Satu obat bisa dipakai di banyak jadwal
              </p>
            </div>
            <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
              <h4 className="font-bold text-orange-800 mb-2">
                Jadwal ➡️ Riwayat
              </h4>
              <p className="text-sm text-orange-700">
                Satu jadwal bisa punya banyak catatan riwayat
              </p>
            </div>
          </div>
        </div>

        {/* Penjelasan Sederhana */}
        <div className="bg-white rounded-2xl shadow-lg border border-purple-100 p-6">
          <h3 className="text-lg font-bold text-purple-900 mb-4">
            Penjelasan Sederhana
          </h3>
          <div className="space-y-3 text-gray-700">
            <p className="leading-relaxed">
              <strong>Seperti Lemari Obat Digital:</strong> Database ini seperti
              lemari obat yang rapi. Ada kotak untuk data pengguna, kotak untuk
              daftar obat, kotak untuk jadwal minum, dan kotak untuk catatan
              riwayat.
            </p>
            <p className="leading-relaxed">
              <strong>Cara Kerjanya:</strong> Ketika pengguna membuat jadwal
              obat, sistem akan mengambil data dari tabel pengguna dan tabel
              obat, lalu menyimpannya di tabel jadwal. Setiap kali pengguna
              minum obat, akan tercatat di tabel riwayat.
            </p>
            <p className="leading-relaxed">
              <strong>Keuntungannya:</strong> Data tersimpan rapi, tidak
              berantakan, dan mudah dicari kapan saja.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
