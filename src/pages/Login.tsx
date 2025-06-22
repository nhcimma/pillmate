import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PillMateLogo } from "@/components/ui/pillmate-logo";

interface LoginProps {
  onLogin: () => void;
}

export default function Login({ onLogin }: LoginProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple demo login - in real app, validate credentials
    if (formData.email && formData.password) {
      onLogin();
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-20 h-20 bg-purple-200/30 rounded-full blur-xl animate-float"></div>
        <div
          className="absolute top-40 right-20 w-32 h-32 bg-blue-200/40 rounded-full blur-2xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-20 left-1/3 w-24 h-24 bg-pink-200/30 rounded-full blur-xl animate-float"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      <div className="w-full max-w-md relative z-10">
        <div className="text-center mb-8 slide-up">
          <PillMateLogo size="xl" className="justify-center mb-4" />
          <p className="text-purple-600/80 text-lg font-medium">
            Sahabat Kesehatan Digital Anda
          </p>
        </div>

        <div
          className="pillmate-card-relaxed p-8 slide-up"
          style={{ animationDelay: "0.2s" }}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-3"
              >
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className="pillmate-input"
                placeholder="Masukkan email Anda"
                required
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-3"
              >
                Kata Sandi
              </label>
              <div className="relative">
                <Input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={handleChange}
                  className="pillmate-input pr-12"
                  placeholder="Masukkan kata sandi"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-purple-500 hover:text-purple-600 transition-colors"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            <Button
              type="submit"
              className="w-full bg-purple-500 hover:bg-purple-600 text-white font-medium py-3 px-6 rounded-2xl transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105 text-lg"
            >
              Masuk
            </Button>
          </form>

          <div className="mt-8 text-center space-y-4">
            <a
              href="#"
              className="text-purple-500 hover:text-purple-600 text-sm font-medium transition-colors"
            >
              Lupa Kata Sandi?
            </a>

            <div className="text-sm text-gray-600">
              Belum bergabung dengan kami?{" "}
              <a
                href="#"
                className="text-purple-500 hover:text-purple-600 font-medium transition-colors"
              >
                Daftar Sekarang
              </a>
            </div>
          </div>
        </div>

        <div
          className="mt-8 text-center slide-up"
          style={{ animationDelay: "0.4s" }}
        >
          <p className="text-xs text-gray-500">
            Dengan masuk, Anda menyetujui{" "}
            <a href="#" className="text-purple-500 hover:underline">
              Syarat & Ketentuan
            </a>{" "}
            dan{" "}
            <a href="#" className="text-purple-500 hover:underline">
              Kebijakan Privasi
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
