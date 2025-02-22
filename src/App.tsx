import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import JoinProfessional from './pages/JoinProfessional';
import Login from './pages/Auth/Login';
import SignUp from './pages/Auth/SignUp';
import VerifyEmail from './pages/Auth/VerifyEmail';
import VerifyPhone from './pages/Auth/VerifyPhone';
import ForgotPassword from './pages/Auth/ForgotPassword';
import UserDashboard from './pages/UserDashboard';
import ProfessionalDashboard from './pages/ProfessionalDashboard';
import ProfessionalProfile from './pages/ProfessionalProfile';
import CounselingBooking from './pages/CounselingBooking';
import RelationshipCounseling from './pages/RelationshipCounseling';
import ListeningSession from './pages/ListeningSession';
import Settings from './pages/Settings';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/join-professional" element={<JoinProfessional />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/verify-email" element={<VerifyEmail />} />
            <Route path="/verify-phone" element={<VerifyPhone />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            
            {/* Protected Routes */}
            <Route
              path="/user-dashboard"
              element={
                <ProtectedRoute userType="client">
                  <UserDashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/professional-dashboard"
              element={
                <ProtectedRoute userType="professional">
                  <ProfessionalDashboard />
                </ProtectedRoute>
              }
            />
            <Route path="/professional/:id" element={<ProfessionalProfile />} />
            <Route
              path="/counseling-booking"
              element={
                <ProtectedRoute userType="client">
                  <CounselingBooking />
                </ProtectedRoute>
              }
            />
            <Route
              path="/relationship-counseling"
              element={
                <ProtectedRoute userType="client">
                  <RelationshipCounseling />
                </ProtectedRoute>
              }
            />
            <Route
              path="/listening-session"
              element={
                <ProtectedRoute userType="client">
                  <ListeningSession />
                </ProtectedRoute>
              }
            />
            <Route
              path="/settings"
              element={
                <ProtectedRoute>
                  <Settings />
                </ProtectedRoute>
              }
            />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;