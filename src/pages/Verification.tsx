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
        return <CheckCircle className="h-5 w-5 text-pillmate-success" />;
      case "in-progress":
        return <AlertCircle className="h-5 w-5 text-pillmate-warning" />;
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
        return "bg-green-100 text-green-800";
      case "in-progress":
        return "bg-orange-100 text-orange-800";
      default:
        return "bg-gray-100 text-gray-600";
    }
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
              <h1 className="text-2xl font-bold">Verifikasi & Validasi</h1>
              <p className="text-white/90">Pengujian Sistem PillMate</p>
            </div>
          </div>
          <CheckCircle className="h-8 w-8 text-white/80" />
        </div>
      </header>

      <div className="p-6">
        {/* Tab Navigation */}
        <div className="flex space-x-2 mb-6">
          <button
            onClick={() => setActiveTab("process")}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeTab === "process"
                ? "bg-pillmate-primary text-white"
                : "bg-gray-100 text-gray-600 hover:bg-pillmate-light"
            }`}
          >
            Proses Pengembangan
          </button>
          <button
            onClick={() => setActiveTab("functions")}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeTab === "functions"
                ? "bg-pillmate-primary text-white"
                : "bg-gray-100 text-gray-600 hover:bg-pillmate-light"
            }`}
          >
            Fungsi Aplikasi
          </button>
        </div>

        {activeTab === "process" ? (
          // Process Verification
          <div className="space-y-6">
            <div className="pillmate-card p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Verifikasi Proses Pengembangan Software
              </h3>
              <p className="text-gray-600 mb-6">
                Pemeriksaan tahapan-tahapan dalam pengembangan aplikasi PillMate
                untuk memastikan setiap fase telah dilakukan dengan benar.
              </p>

              <div className="space-y-6">
                {processChecks.map((phase, index) => (
                  <div
                    key={index}
                    className="border border-gray-200 rounded-xl p-4"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-lg font-semibold text-gray-900">
                        {index + 1}. {phase.phase}
                      </h4>
                      <div className="flex items-center space-x-2">
                        {getStatusIcon(phase.status)}
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusBg(phase.status)}`}
                        >
                          {getStatusText(phase.status)}
                        </span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      {phase.items.map((item, itemIndex) => (
                        <div
                          key={itemIndex}
                          className="flex items-center justify-between py-2"
                        >
                          <span className="text-gray-700">{item.check}</span>
                          <div className="flex items-center space-x-2">
                            {getStatusIcon(item.status)}
                            <span className="text-sm text-gray-500">
                              {getStatusText(item.status)}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Summary */}
            <div className="pillmate-card p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Ringkasan Progress
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-pillmate-success mb-1">
                    2
                  </div>
                  <p className="text-sm text-gray-600">Fase Selesai</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-pillmate-warning mb-1">
                    1
                  </div>
                  <p className="text-sm text-gray-600">Dalam Proses</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-400 mb-1">2</div>
                  <p className="text-sm text-gray-600">Menunggu</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-pillmate-primary mb-1">
                    60%
                  </div>
                  <p className="text-sm text-gray-600">Progress Total</p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          // Function Validation
          <div className="space-y-6">
            <div className="pillmate-card p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Validasi Fungsi Aplikasi
              </h3>
              <p className="text-gray-600 mb-6">
                Pengujian setiap fungsi aplikasi PillMate untuk memastikan
                bekerja sesuai dengan kebutuhan pengguna.
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
                      className="border border-gray-200 rounded-xl p-4"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <div className="p-2 bg-pillmate-light rounded-lg">
                            <Icon className="h-6 w-6 text-pillmate-primary" />
                          </div>
                          <h4 className="text-lg font-semibold text-gray-900">
                            {category.category}
                          </h4>
                        </div>
                        <div className="text-sm text-gray-600">
                          {passedTests}/{totalTests} berhasil
                        </div>
                      </div>

                      <div className="space-y-3">
                        {category.tests.map((test, testIndex) => (
                          <div
                            key={testIndex}
                            className="border-l-4 border-gray-200 pl-4 py-2"
                          >
                            <div className="flex items-start justify-between">
                              <div className="flex-1">
                                <div className="flex items-center space-x-2 mb-1">
                                  {getStatusIcon(test.status)}
                                  <span className="font-medium text-gray-900">
                                    {test.function}
                                  </span>
                                  <span
                                    className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusBg(test.status)}`}
                                  >
                                    {getStatusText(test.status)}
                                  </span>
                                </div>
                                <p className="text-sm text-gray-600">
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
            <div className="pillmate-card p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Ringkasan Pengujian
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-pillmate-success mb-1">
                    12
                  </div>
                  <p className="text-sm text-gray-600">Test Berhasil</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-pillmate-warning mb-1">
                    3
                  </div>
                  <p className="text-sm text-gray-600">Dalam Proses</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-400 mb-1">1</div>
                  <p className="text-sm text-gray-600">Menunggu</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-pillmate-primary mb-1">
                    75%
                  </div>
                  <p className="text-sm text-gray-600">Success Rate</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Conclusion */}
        <div className="mt-8 pillmate-card p-6 bg-gradient-to-r from-pillmate-light to-white">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Kesimpulan Verifikasi & Validasi
          </h3>
          <div className="space-y-3 text-gray-700">
            <p>
              <strong>Verifikasi Proses:</strong> Tahapan pengembangan software
              telah mengikuti metodologi yang benar dengan 60% progress
              completion. Fase analisis dan desain telah selesai dengan baik.
            </p>
            <p>
              <strong>Validasi Fungsi:</strong> Sebagian besar fungsi aplikasi
              (75%) telah bekerja dengan baik dan sesuai kebutuhan. Fungsi inti
              seperti autentikasi, manajemen jadwal, dan notifikasi sudah
              berfungsi optimal.
            </p>
            <p>
              <strong>Rekomendasi:</strong> Aplikasi PillMate siap untuk tahap
              testing lanjutan dan dapat dilanjutkan ke fase deployment dengan
              perbaikan minor pada fungsi yang masih dalam pengembangan.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
