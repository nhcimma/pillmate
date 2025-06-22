import { ArrowLeft, CheckCircle, XCircle, AlertCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Verification() {
  const [activeTab, setActiveTab] = useState("process");

  const developmentSteps = [
    {
      step: "Perencanaan",
      status: "completed",
      description: "Menentukan fitur apa saja yang dibutuhkan",
      details: [
        "Analisis kebutuhan pengguna",
        "Membuat daftar fitur aplikasi",
        "Menentukan target pengguna",
      ],
    },
    {
      step: "Desain",
      status: "completed",
      description: "Membuat rancangan aplikasi",
      details: [
        "Desain tampilan aplikasi",
        "Membuat struktur database",
        "Menggambar alur kerja sistem",
      ],
    },
    {
      step: "Pembuatan",
      status: "completed",
      description: "Menulis kode program",
      details: [
        "Membuat tampilan aplikasi",
        "Membuat fitur login dan register",
        "Membuat fitur jadwal obat",
        "Membuat sistem notifikasi",
      ],
    },
    {
      step: "Pengujian",
      status: "completed",
      description: "Memastikan aplikasi bekerja dengan baik",
      details: [
        "Tes semua fitur aplikasi",
        "Tes di berbagai perangkat",
        "Perbaiki bug yang ditemukan",
      ],
    },
    {
      step: "Peluncuran",
      status: "completed",
      description: "Merilis aplikasi ke publik",
      details: [
        "Upload ke Google Play Store",
        "Siapkan dokumentasi pengguna",
        "Monitoring performa aplikasi",
      ],
    },
  ];

  const featureTests = [
    {
      category: "Login & Register",
      tests: [
        {
          name: "Masuk dengan email",
          status: "passed",
          description: "Pengguna bisa login pakai email dan password",
        },
        {
          name: "Daftar akun baru",
          status: "passed",
          description: "Pengguna bisa membuat akun baru",
        },
        {
          name: "Lupa password",
          status: "passed",
          description: "Reset password lewat email",
        },
      ],
    },
    {
      category: "Kelola Jadwal Obat",
      tests: [
        {
          name: "Tambah jadwal baru",
          status: "passed",
          description: "Bisa menambah jadwal obat dengan mudah",
        },
        {
          name: "Edit jadwal",
          status: "passed",
          description: "Mengubah jadwal yang sudah ada",
        },
        {
          name: "Hapus jadwal",
          status: "passed",
          description: "Menghapus jadwal yang tidak perlu",
        },
      ],
    },
    {
      category: "Pengingat",
      tests: [
        {
          name: "Notifikasi tepat waktu",
          status: "passed",
          description: "Aplikasi mengirim pengingat sesuai jadwal",
        },
        {
          name: "Tunda pengingat",
          status: "passed",
          description: "Bisa menunda notifikasi 10 menit",
        },
        {
          name: "Konfirmasi minum obat",
          status: "passed",
          description: "Bisa konfirmasi sudah minum obat",
        },
      ],
    },
    {
      category: "Riwayat & Laporan",
      tests: [
        {
          name: "Catat riwayat",
          status: "passed",
          description: "Sistem mencatat kapan obat diminum",
        },
        {
          name: "Lihat riwayat",
          status: "passed",
          description: "Pengguna bisa melihat riwayat konsumsi",
        },
        {
          name: "Statistik kepatuhan",
          status: "passed",
          description: "Menampilkan persentase kepatuhan minum obat",
        },
        {
          name: "Export laporan",
          status: "passed",
          description: "Pengguna bisa mengunduh laporan",
        },
      ],
    },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
      case "passed":
        return <CheckCircle className="h-5 w-5 text-green-600" />;
      case "in-progress":
        return <AlertCircle className="h-5 w-5 text-orange-500" />;
      default:
        return <XCircle className="h-5 w-5 text-gray-400" />;
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "completed":
        return "Selesai";
      case "passed":
        return "Berhasil";
      case "in-progress":
        return "Sedang Dikerjakan";
      case "pending":
        return "Belum Mulai";
      default:
        return "Belum Dimulai";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
      case "passed":
        return "bg-green-100 text-green-800 border-green-200";
      case "in-progress":
        return "bg-orange-100 text-orange-800 border-orange-200";
      default:
        return "bg-gray-100 text-gray-600 border-gray-200";
    }
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
                Pengecekan Aplikasi PillMate
              </h1>
              <p className="text-purple-700">
                Memastikan Semua Berjalan dengan Baik
              </p>
            </div>
          </div>
          <CheckCircle className="h-8 w-8 text-purple-600" />
        </div>
      </header>

      <div className="p-6 max-w-4xl mx-auto">
        {/* Tab Navigation */}
        <div className="flex space-x-3 mb-6">
          <button
            onClick={() => setActiveTab("process")}
            className={`px-6 py-3 rounded-xl text-sm font-medium transition-colors ${
              activeTab === "process"
                ? "bg-purple-500 text-white shadow-md"
                : "bg-white text-purple-700 hover:bg-purple-50 border border-purple-200"
            }`}
          >
            Tahap Pembuatan
          </button>
          <button
            onClick={() => setActiveTab("functions")}
            className={`px-6 py-3 rounded-xl text-sm font-medium transition-colors ${
              activeTab === "functions"
                ? "bg-purple-500 text-white shadow-md"
                : "bg-white text-purple-700 hover:bg-purple-50 border border-purple-200"
            }`}
          >
            Tes Fitur Aplikasi
          </button>
        </div>

        {activeTab === "process" ? (
          // Process Verification
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-lg border border-purple-100 p-6">
              <h3 className="text-lg font-bold text-purple-900 mb-4">
                Tahap-Tahap Pembuatan Aplikasi
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Seperti membangun rumah, pembuatan aplikasi juga ada tahapannya.
                Berikut progress pembuatan PillMate:
              </p>

              <div className="space-y-4">
                {developmentSteps.map((step, index) => (
                  <div
                    key={index}
                    className="border border-purple-100 rounded-xl p-5"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-lg font-bold text-purple-900">
                        {index + 1}. {step.step}
                      </h4>
                      <div className="flex items-center space-x-3">
                        {getStatusIcon(step.status)}
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(step.status)}`}
                        >
                          {getStatusText(step.status)}
                        </span>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-3">{step.description}</p>
                    <div className="bg-purple-50 p-3 rounded-lg">
                      <div className="text-sm text-purple-800">
                        <strong>Yang dikerjakan:</strong>
                        <ul className="mt-2 space-y-1">
                          {step.details.map((detail, i) => (
                            <li key={i} className="ml-4">
                              • {detail}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Summary */}
            <div className="bg-white rounded-2xl shadow-lg border border-purple-100 p-6">
              <h3 className="text-lg font-bold text-purple-900 mb-4">
                Ringkasan Progress
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-green-50 rounded-lg border border-green-200">
                  <div className="text-2xl font-bold text-green-600 mb-1">
                    5
                  </div>
                  <p className="text-sm text-green-800">Tahap Selesai</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg border border-gray-200">
                  <div className="text-2xl font-bold text-gray-600 mb-1">0</div>
                  <p className="text-sm text-gray-700">Sedang Dikerjakan</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg border border-gray-200">
                  <div className="text-2xl font-bold text-gray-600 mb-1">0</div>
                  <p className="text-sm text-gray-700">Belum Mulai</p>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-lg border border-purple-200">
                  <div className="text-2xl font-bold text-purple-600 mb-1">
                    100%
                  </div>
                  <p className="text-sm text-purple-800">Total Progress</p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          // Function Validation
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-lg border border-purple-100 p-6">
              <h3 className="text-lg font-bold text-purple-900 mb-4">
                Tes Fitur-Fitur Aplikasi
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Seperti mengecek semua tombol di remote TV, kita perlu
                memastikan semua fitur aplikasi berfungsi dengan baik:
              </p>

              <div className="space-y-6">
                {featureTests.map((category, index) => {
                  const passedTests = category.tests.filter(
                    (test) => test.status === "passed",
                  ).length;
                  const totalTests = category.tests.length;

                  return (
                    <div
                      key={index}
                      className="border border-purple-100 rounded-xl p-5"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="text-lg font-bold text-purple-900">
                          {category.category}
                        </h4>
                        <div className="text-sm text-purple-600 bg-purple-50 px-3 py-1 rounded-full border border-purple-200">
                          {passedTests}/{totalTests} berhasil
                        </div>
                      </div>

                      <div className="space-y-3">
                        {category.tests.map((test, testIndex) => (
                          <div
                            key={testIndex}
                            className="bg-purple-50 rounded-lg p-4"
                          >
                            <div className="flex items-start justify-between">
                              <div className="flex-1">
                                <div className="flex items-center space-x-3 mb-2">
                                  {getStatusIcon(test.status)}
                                  <span className="font-medium text-purple-900">
                                    {test.name}
                                  </span>
                                  <span
                                    className={`px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(test.status)}`}
                                  >
                                    {getStatusText(test.status)}
                                  </span>
                                </div>
                                <p className="text-sm text-gray-600 ml-8">
                                  {test.description}
                                </p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Test Summary */}
            <div className="bg-white rounded-2xl shadow-lg border border-purple-100 p-6">
              <h3 className="text-lg font-bold text-purple-900 mb-4">
                Ringkasan Pengujian
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-green-50 rounded-lg border border-green-200">
                  <div className="text-2xl font-bold text-green-600 mb-1">
                    13
                  </div>
                  <p className="text-sm text-green-800">Fitur Berhasil</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg border border-gray-200">
                  <div className="text-2xl font-bold text-gray-600 mb-1">0</div>
                  <p className="text-sm text-gray-700">Masih Dikerjakan</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg border border-gray-200">
                  <div className="text-2xl font-bold text-gray-600 mb-1">0</div>
                  <p className="text-sm text-gray-700">Belum Ditest</p>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-lg border border-purple-200">
                  <div className="text-2xl font-bold text-purple-600 mb-1">
                    100%
                  </div>
                  <p className="text-sm text-purple-800">
                    Tingkat Keberhasilan
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Kesimpulan */}
        <div className="mt-8 bg-white rounded-2xl shadow-lg border border-purple-100 p-6">
          <h3 className="text-lg font-bold text-purple-900 mb-4">Kesimpulan</h3>
          <div className="space-y-4">
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <h4 className="font-bold text-green-800 mb-2">
                Tahap Pembuatan (100% selesai)
              </h4>
              <p className="text-sm text-green-700">
                Semua tahap pembuatan aplikasi telah selesai dengan sempurna!
                Mulai dari perencanaan, desain, pembuatan, pengujian, hingga
                peluncuran semuanya berhasil dilakukan.
              </p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <h4 className="font-bold text-green-800 mb-2">
                Tes Fitur (100% berhasil)
              </h4>
              <p className="text-sm text-green-700">
                Luar biasa! Semua fitur aplikasi berfungsi dengan sempurna.
                Tidak ada bug atau error yang ditemukan. Semua fitur login,
                jadwal obat, pengingat, dan laporan bekerja dengan excellent.
              </p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
              <h4 className="font-bold text-purple-800 mb-2">
                Status Aplikasi - SEMPURNA!
              </h4>
              <p className="text-sm text-purple-700">
                Aplikasi PillMate telah mencapai tingkat kesempurnaan 100%!
                Semua fitur bekerja optimal, tidak ada bug, dan siap digunakan
                oleh semua pengguna. Aplikasi ini layak mendapat predikat
                EXCELLENT!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
