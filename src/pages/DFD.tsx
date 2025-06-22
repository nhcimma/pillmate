import { ArrowLeft, GitBranch, Download } from "lucide-react";
import { Link } from "react-router-dom";

export default function DFD() {
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
                Alur Kerja PillMate
              </h1>
              <p className="text-purple-700">
                Bagaimana Sistem Bekerja Step by Step
              </p>
            </div>
          </div>
          <GitBranch className="h-8 w-8 text-purple-600" />
        </div>
      </header>

      <div className="p-6 max-w-5xl mx-auto">
        {/* Alur Utama */}
        <div className="bg-white rounded-2xl shadow-lg border border-purple-100 p-8 mb-6">
          <h2 className="text-xl font-bold text-purple-900 mb-6 text-center">
            Alur Kerja Sistem PillMate
          </h2>

          <div className="space-y-6">
            {/* Step 1 */}
            <div className="flex items-center space-x-4">
              <div className="bg-purple-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">
                1
              </div>
              <div className="flex-1 bg-purple-50 p-4 rounded-lg border border-purple-200">
                <h3 className="font-bold text-purple-800 mb-2">
                  Pengguna Masuk ke Aplikasi
                </h3>
                <p className="text-sm text-purple-700">
                  Pengguna memasukkan email dan password untuk login
                </p>
              </div>
            </div>

            {/* Arrow */}
            <div className="flex justify-center">
              <div className="text-purple-400 text-2xl">⬇️</div>
            </div>

            {/* Step 2 */}
            <div className="flex items-center space-x-4">
              <div className="bg-purple-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">
                2
              </div>
              <div className="flex-1 bg-blue-50 p-4 rounded-lg border border-blue-200">
                <h3 className="font-bold text-blue-800 mb-2">
                  Membuat Jadwal Obat
                </h3>
                <p className="text-sm text-blue-700">
                  Pengguna memilih obat, mengatur waktu, dan dosis yang akan
                  diminum
                </p>
              </div>
            </div>

            {/* Arrow */}
            <div className="flex justify-center">
              <div className="text-purple-400 text-2xl">⬇️</div>
            </div>

            {/* Step 3 */}
            <div className="flex items-center space-x-4">
              <div className="bg-purple-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">
                3
              </div>
              <div className="flex-1 bg-green-50 p-4 rounded-lg border border-green-200">
                <h3 className="font-bold text-green-800 mb-2">
                  Sistem Mengirim Pengingat
                </h3>
                <p className="text-sm text-green-700">
                  Saat waktu minum obat tiba, aplikasi mengirim notifikasi ke
                  pengguna
                </p>
              </div>
            </div>

            {/* Arrow */}
            <div className="flex justify-center">
              <div className="text-purple-400 text-2xl">⬇️</div>
            </div>

            {/* Step 4 */}
            <div className="flex items-center space-x-4">
              <div className="bg-purple-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">
                4
              </div>
              <div className="flex-1 bg-orange-50 p-4 rounded-lg border border-orange-200">
                <h3 className="font-bold text-orange-800 mb-2">
                  Mencatat Konsumsi
                </h3>
                <p className="text-sm text-orange-700">
                  Pengguna konfirmasi sudah minum obat, sistem mencatat ke
                  riwayat
                </p>
              </div>
            </div>

            {/* Arrow */}
            <div className="flex justify-center">
              <div className="text-purple-400 text-2xl">⬇️</div>
            </div>

            {/* Step 5 */}
            <div className="flex items-center space-x-4">
              <div className="bg-purple-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">
                5
              </div>
              <div className="flex-1 bg-pink-50 p-4 rounded-lg border border-pink-200">
                <h3 className="font-bold text-pink-800 mb-2">
                  Melihat Laporan
                </h3>
                <p className="text-sm text-pink-700">
                  Pengguna bisa melihat riwayat dan statistik kepatuhan minum
                  obat
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Yang Terlibat */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-white rounded-2xl shadow-lg border border-purple-100 p-6">
            <h3 className="text-lg font-bold text-purple-900 mb-4">
              Siapa yang Terlibat?
            </h3>
            <div className="space-y-3">
              <div className="bg-blue-50 p-3 rounded-lg">
                <h4 className="font-bold text-blue-800">👤 Pengguna</h4>
                <p className="text-sm text-blue-700">
                  Orang yang memakai aplikasi untuk mengatur jadwal obat
                </p>
              </div>
              <div className="bg-green-50 p-3 rounded-lg">
                <h4 className="font-bold text-green-800">⚙️ Sistem PillMate</h4>
                <p className="text-sm text-green-700">
                  Aplikasi yang memproses semua data dan mengirim pengingat
                </p>
              </div>
              <div className="bg-orange-50 p-3 rounded-lg">
                <h4 className="font-bold text-orange-800">💾 Database</h4>
                <p className="text-sm text-orange-700">
                  Tempat menyimpan semua data pengguna dan jadwal obat
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg border border-purple-100 p-6">
            <h3 className="text-lg font-bold text-purple-900 mb-4">
              Data yang Mengalir
            </h3>
            <div className="space-y-3">
              <div className="bg-purple-50 p-3 rounded-lg">
                <h4 className="font-bold text-purple-800">📝 Data Login</h4>
                <p className="text-sm text-purple-700">
                  Email dan password untuk masuk aplikasi
                </p>
              </div>
              <div className="bg-purple-50 p-3 rounded-lg">
                <h4 className="font-bold text-purple-800">💊 Data Jadwal</h4>
                <p className="text-sm text-purple-700">
                  Informasi obat, waktu, dan dosis
                </p>
              </div>
              <div className="bg-purple-50 p-3 rounded-lg">
                <h4 className="font-bold text-purple-800">🔔 Notifikasi</h4>
                <p className="text-sm text-purple-700">
                  Pengingat yang dikirim ke pengguna
                </p>
              </div>
              <div className="bg-purple-50 p-3 rounded-lg">
                <h4 className="font-bold text-purple-800">📊 Laporan</h4>
                <p className="text-sm text-purple-700">
                  Riwayat dan statistik konsumsi obat
                </p>
              </div>
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
              <strong>Seperti Asisten Pribadi:</strong> PillMate bekerja seperti
              asisten pribadi yang membantu Anda mengingat waktu minum obat.
              Anda cukup memberitahu jadwalnya sekali, lalu asisten akan
              mengingatkan setiap hari.
            </p>
            <p className="leading-relaxed">
              <strong>Prosesnya Mudah:</strong> Masuk aplikasi → Buat jadwal →
              Terima pengingat → Konfirmasi sudah minum → Lihat riwayat. Semua
              berjalan otomatis.
            </p>
            <p className="leading-relaxed">
              <strong>Tidak Ribet:</strong> Sekali setup jadwal, sistem akan
              bekerja sendiri mengingatkan Anda setiap hari sesuai waktu yang
              sudah ditentukan.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
