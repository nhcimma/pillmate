import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import Login from "@/pages/Login";
import Home from "@/pages/Home";
import Schedule from "@/pages/Schedule";
import History from "@/pages/History";
import Profile from "@/pages/Profile";
import ERD from "@/pages/ERD";
import DFD from "@/pages/DFD";
import Verification from "@/pages/Verification";
import { BottomNavigation } from "@/components/ui/bottom-navigation";
import { NotificationPopup } from "@/components/ui/notification-popup";
import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  // Mock notification data
  const mockNotification = {
    medicationName: "Vitamin C",
    dosage: "2 sendok",
    instruction: "setelah makan",
  };

  // Simulate notification popup (for demo purposes)
  const handleShowNotification = () => {
    setShowNotification(true);
  };

  const handleCompleteNotification = () => {
    setShowNotification(false);
    // Add logic to mark medication as taken
  };

  const handleSnoozeNotification = () => {
    setShowNotification(false);
    // Add logic to snooze for 10 minutes
    setTimeout(() => setShowNotification(true), 600000); // 10 minutes
  };

  if (!isLoggedIn) {
    return (
      <BrowserRouter>
        <div className="min-h-screen bg-gradient-to-br from-pillmate-light to-white">
          <Login onLogin={() => setIsLoggedIn(true)} />
        </div>
      </BrowserRouter>
    );
  }

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gradient-to-br from-pillmate-light to-white pb-20">
        <Routes>
          <Route
            path="/"
            element={<Home onShowNotification={handleShowNotification} />}
          />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/history" element={<History />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/erd" element={<ERD />} />
          <Route path="/dfd" element={<DFD />} />
          <Route path="/verification" element={<Verification />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>

        <BottomNavigation />

        <NotificationPopup
          isOpen={showNotification}
          onClose={() => setShowNotification(false)}
          medicationName={mockNotification.medicationName}
          dosage={mockNotification.dosage}
          instruction={mockNotification.instruction}
          onComplete={handleCompleteNotification}
          onSnooze={handleSnoozeNotification}
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
