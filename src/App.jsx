import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NewConsultation from "./pages/NewConsultation";
import ScanReport from "./components/Consultation/ScanReport";
import PhotoPage from "./components/Consultation/PhotoPage";
import UploadPage from "./components/Consultation/UploadPage";
import AIAnalysis from "./components/Consultation/AIAnalysis";
import Subscribe from "./components/Consultation/Booking/Subscribe";
import NotFound from "./components/NotFound";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* <Route path="/consultation" element={<Consultation />} /> */}
        <Route path="/" element={<NewConsultation />} />
        <Route path="/upgrade-consultation" element={<NewConsultation />} />
        <Route path="/ai-analysis/:id" element={<AIAnalysis />} />
        <Route path="/subscribe" element={<Subscribe />} />
        <Route path="/consultation" element={<ScanReport />} />
        <Route path="/consultation/upload" element={<UploadPage />} />
        <Route path="/consultation/photo" element={<PhotoPage />} />
        <Route path="/policy" element={<Policy />} />
        {/* 
        
        <Route path="/services" element={<Services />} />

        {/* Catch-all route for 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
