import { Route, Routes } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import ViewPlacements from "./pages/ViewPlacements";
import ViewSelections from "./pages/ViewSelections";
import Consultants from "./pages/Consultants";
// import Consultant from "./pages/Consultant";
import { useState } from "react";
import HamburgerList from "./components/HamburgerList";
import EmployerForm from "./pages/EmployerForm";

function App() {
  const [isOpen, setIsOpen] = useState();

  const handleClick = () => {
    setIsOpen(false);
  };

  return (
    <div className="w-full h-full bg-gray-100 relative">
      <AppLayout setIsOpen={setIsOpen}>
        {isOpen && <HamburgerList handleClick={handleClick} />}
        <Routes>
          <Route path="/employer-form" element={<EmployerForm />} />
          <Route path="/placements" element={<ViewPlacements />} />
          <Route path="/selections" element={<ViewSelections />} />
          <Route path="/consultants" element={<Consultants />} />
          {/* <Route path="/consultants/{:id}" element={<Consultant />} /> */}
        </Routes>
      </AppLayout>
    </div>
  );
}

export default App;
