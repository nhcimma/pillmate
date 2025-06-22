import {
  ArrowLeft,
  CheckCircle,
  XCircle,
  AlertCircle,
  Settings,
  Users,
  Database,
  Smartphone,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Verification() {
  const [activeTab, setActiveTab] = useState("process");

  const processChecks = [
    {
      phase: "Analisis Kebutuhan",
      status: "completed",
      items: [
        { check: "Identifikasi stakeholder", status: "completed" },
        { check: "Analisis kebutuhan fungsional", status: "completed" },
        { check: "Analisis kebutuhan non-fungsional", status: "completed" },
        { check: "Dokumentasi requirement", status: "completed" },
      ],
    },
    {
      phase: "Desain Sistem",
      status: "completed",
      items: [
        { check: "Pembuatan ERD", status: "completed" },
        { check: "Pembuatan DFD", status: "completed" },
        { check: "Desain arsitektur sistem", status: "completed" },
        { check: "Desain UI/UX", status: "completed" },
      ],
    },
    {
      phase: "Implementasi",
      status: "in-progress",
      items: [
        { check: "Setup environment pengembangan", status: "completed" },
        { check: "Implementasi database", status: "completed" },
        { check: "Implementasi backend API", status: "in-progress" },
        { check: "Implementasi frontend", status: "in-progress" },
      ],
    },
    {
      phase: "Testing",
      status: "pending",
      items: [
        { check: "Unit testing", status: "pending" },
        { check: "Integration testing", status: "pending" },
        { check: "User acceptance testing", status: "pending" },
        { check: "Performance testing", status: "pending" },
      ],
    },
    {
      phase: "Deployment",
      status: "pending",
      items: [
        { check: "Setup production environment", status: "pending" },
        { check: "Database migration", status: "pending" },
        { check: "Application deployment", status: "pending" },
        { check: "Monitoring setup", status: "pending" },
      ],
    },
  ];

  const functionalTests = [
    {
      category: "Autentikasi",
      icon: Users,
      tests: [
        {
          function: "Login pengguna",
          status: "passed",
          description: "Pengguna dapat login dengan email dan password",
        },
        {
          function: "Registrasi pengguna",
          status: "passed",
          description: "Pengguna dapat membuat akun baru",
        },
        {
          function: "Lupa password",
          status: "in-progress",
          description: "Fitur reset password melalui email",
        },
        {
          function: "Logout",
          status: "passed",
          description: "Pengguna dapat keluar dari aplikasi",
        },
      ],
    },
    {
      category: "Manajemen Jadwal",
      icon: Settings,
      tests: [
        {
          function: "Tambah jadwal obat",
          status: "passed",
          description: "Pengguna dapat menambah jadwal obat baru",
        },
        {
          function: "Edit jadwal obat",
          status: "in-progress",
          description: "Pengguna dapat mengubah jadwal yang ada",
        },
        {
          function: "Hapus jadwal obat",
          status: "passed",
          description: "Pengguna dapat menghapus jadwal",
        },
        {
          function: "Atur waktu pengingat",
          status: "passed",
          description: "Sistem dapat mengatur waktu notifikasi",
        },
      ],
    },
    {
      category: "Sistem Notifikasi",
      icon: Smartphone,
      tests: [
        {
          function: "Push notification",
          status: "passed",
          description: "Sistem mengirim notifikasi tepat waktu",
        },
        {
          function: "Snooze notification",
          status: "passed",
          description: "Pengguna dapat menunda notifikasi",
        },
        {
          function: "Konfirmasi konsumsi",
          status: "passed",
          description: "Pengguna dapat konfirmasi minum obat",
        },
        {
          function: "Notifikasi terlewat",
          status: "in-progress",
          description: "Sistem mendeteksi obat yang terlewat",
        },
      ],
    },
    {
      category: "Tracking & Laporan",
      icon: Database,
      tests: [
        {
          function: "Catat konsumsi obat",
          status: "passed",
          description: "Sistem mencatat riwayat konsumsi",
        },
        {
          function: "Tampil riwayat",
          status: "passed",
          description: "Pengguna dapat melihat riwayat konsumsi",
        },
        {
          function: "Statistik kepatuhan",
          status: "passed",
          description: "Sistem menghitung tingkat kepatuhan",
        },
        {
          function: "Export laporan",
          status: "pending",
          description: "Pengguna dapat mengunduh laporan",
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
        return "Dalam Proses";
      case "pending":
        return "Menunggu";
      default:
        return "Belum Dimulai";
    }
  };

  const getStatusBg = (status: string) => {
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
                Verifikasi & Validasi
              </h1>
              <p className="text-purple-700">Pengujian Sistem PillMate</p>
            </div>
          </div>
          <CheckCircle className="h-8 w-8 text-purple-600" />
        </div>
      </header>

      <div className="p-6">
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
            Proses Pengembangan
          </button>
          <button
            onClick={() => setActiveTab("functions")}
            className={`px-6 py-3 rounded-xl text-sm font-medium transition-colors ${
              activeTab === "functions"
                ? "bg-purple-500 text-white shadow-md"
                : "bg-white text-purple-700 hover:bg-purple-50 border border-purple-200"
            }`}
          >
            Fungsi Aplikasi
          </button>
        </div>

        {activeTab === "process" ? (
          // Process Verification
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-lg border border-purple-100 p-6">
              <h3 className="text-lg font-semibold text-purple-900 mb-4">
                Verifikasi Proses Pengembangan Software
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Pemeriksaan tahapan dalam pengembangan aplikasi PillMate untuk
                memastikan setiap fase telah dilakukan dengan benar sesuai
                metodologi pengembangan software.
              </p>

              <div className="space-y-4">
                {processChecks.map((phase, index) => (
                  <div
                    key={index}
                    className="border border-purple-100 rounded-xl p-5"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-lg font-semibold text-purple-900">
                        {index + 1}. {phase.phase}
                      </h4>
                      <div className="flex items-center space-x-3">
                        {getStatusIcon(phase.status)}
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusBg(phase.status)}`}
                        >
                          {getStatusText(phase.status)}
                        </span>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {phase.items.map((item, itemIndex) => (
                        <div
                          key={itemIndex}
                          className="flex items-center justify-between p-3 bg-purple-50 rounded-lg"
                        >
                          <span className="text-gray-700 text-sm">
                            {item.check}
                          </span>
                          <div className="flex items-center space-x-2">
                            {getStatusIcon(item.status)}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Summary */}
            <div className="bg-white rounded-2xl shadow-lg border border-purple-100 p-6">
              <h3 className="text-lg font-semibold text-purple-900 mb-4">
                Ringkasan Progress
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-green-50 rounded-lg border border-green-200">
                  <div className="text-2xl font-bold text-green-600 mb-1">
                    2
                  </div>
                  <p className="text-sm text-green-800">Fase Selesai</p>
                </div>
                <div className="text-center p-4 bg-orange-50 rounded-lg border border-orange-200">
                  <div className="text-2xl font-bold text-orange-600 mb-1">
                    1
                  </div>
                  <p className="text-sm text-orange-800">Dalam Proses</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg border border-gray-200">
                  <div className="text-2xl font-bold text-gray-600 mb-1">2</div>
                  <p className="text-sm text-gray-700">Menunggu</p>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-lg border border-purple-200">
                  <div className="text-2xl font-bold text-purple-600 mb-1">
                    60%
                  </div>
                  <p className="text-sm text-purple-800">Progress Total</p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          // Function Validation
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-lg border border-purple-100 p-6">
              <h3 className="text-lg font-semibold text-purple-900 mb-4">
                Validasi Fungsi Aplikasi
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Pengujian setiap fungsi aplikasi PillMate untuk memastikan
                bekerja sesuai dengan kebutuhan pengguna dan spesifikasi yang
                telah ditetapkan.
              </p>

              <div className="space-y-6">
                {functionalTests.map((category, index) => {
                  const Icon = category.icon;
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
                        <div className="flex items-center space-x-3">
                          <div className="p-3 bg-purple-100 rounded-xl">
                            <Icon className="h-6 w-6 text-purple-600" />
                          </div>
                          <h4 className="text-lg font-semibold text-purple-900">
                            {category.category}
                          </h4>
                        </div>
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
                                    {test.function}
                                  </span>
                                  <span
                                    className={`px-2 py-1 rounded-full text-xs font-medium border ${getStatusBg(test.status)}`}
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
              <h3 className="text-lg font-semibold text-purple-900 mb-4">
                Ringkasan Pengujian
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-green-50 rounded-lg border border-green-200">
                  <div className="text-2xl font-bold text-green-600 mb-1">
                    12
                  </div>
                  <p className="text-sm text-green-800">Test Berhasil</p>
                </div>
                <div className="text-center p-4 bg-orange-50 rounded-lg border border-orange-200">
                  <div className="text-2xl font-bold text-orange-600 mb-1">
                    3
                  </div>
                  <p className="text-sm text-orange-800">Dalam Proses</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg border border-gray-200">
                  <div className="text-2xl font-bold text-gray-600 mb-1">1</div>
                  <p className="text-sm text-gray-700">Menunggu</p>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-lg border border-purple-200">
                  <div className="text-2xl font-bold text-purple-600 mb-1">
                    75%
                  </div>
                  <p className="text-sm text-purple-800">Success Rate</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Conclusion */}
        <div className="mt-8 bg-white rounded-2xl shadow-lg border border-purple-100 p-6">
          <h3 className="text-lg font-semibold text-purple-900 mb-4">
            Kesimpulan Verifikasi & Validasi
          </h3>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
              <h4 className="font-semibold text-purple-800 mb-2">
                Verifikasi Proses
              </h4>
              <p className="text-sm">
                Tahapan pengembangan software telah mengikuti metodologi yang
                benar dengan 60% progress completion. Fase analisis dan desain
                telah selesai dengan baik.
              </p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
              <h4 className="font-semibold text-purple-800 mb-2">
                Validasi Fungsi
              </h4>
              <p className="text-sm">
                Sebagian besar fungsi aplikasi (75%) telah bekerja dengan baik
                dan sesuai kebutuhan. Fungsi inti seperti autentikasi, manajemen
                jadwal, dan notifikasi sudah berfungsi optimal.
              </p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
              <h4 className="font-semibold text-purple-800 mb-2">
                Rekomendasi
              </h4>
              <p className="text-sm">
                Aplikasi PillMate siap untuk tahap testing lanjutan dan dapat
                dilanjutkan ke fase deployment dengan perbaikan minor pada
                fungsi yang masih dalam pengembangan.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
