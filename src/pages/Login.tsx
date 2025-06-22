import { useState } from "react";
import { Eye, EyeOff, Pill } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

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
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-pillmate-primary rounded-2xl mb-4">
            <Pill className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">PillMate</h1>
          <p className="text-gray-600">Pengingat Konsumsi Obat Digital</p>
        </div>

        <div className="pillmate-card p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2"
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
                className="block text-sm font-medium text-gray-700 mb-2"
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
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-pillmate-primary"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            <Button type="submit" className="w-full pillmate-button">
              Masuk
            </Button>
          </form>

          <div className="mt-6 text-center space-y-3">
            <a
              href="#"
              className="text-pillmate-primary hover:text-pillmate-accent text-sm font-medium"
            >
              Lupa Kata Sandi?
            </a>

            <div className="text-sm text-gray-600">
              Belum punya akun?{" "}
              <a
                href="#"
                className="text-pillmate-primary hover:text-pillmate-accent font-medium"
              >
                Daftar Sekarang
              </a>
            </div>
          </div>
        </div>

        <div className="mt-6 text-center">
          <p className="text-xs text-gray-500">
            Dengan masuk, Anda menyetujui{" "}
            <a href="#" className="text-pillmate-primary hover:underline">
              Syarat & Ketentuan
            </a>{" "}
            dan{" "}
            <a href="#" className="text-pillmate-primary hover:underline">
              Kebijakan Privasi
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
