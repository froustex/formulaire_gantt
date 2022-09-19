/* eslint-disable */
import { Route, Routes } from "react-router-dom";
import Form from "@pages/Form";
import Projets from "@pages/Projets";
import { ToastContainer } from "react-toastify";
import ProjetDetails from "@components/ProjetDetails";
import DeleteProjet from "@components/DeleteProjet";
import UpdateProjet from "@components/UpdateProjet";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/projets" element={<Projets />} />
        <Route path="/projets/:id" element={<ProjetDetails />} />
        <Route path="/projets/delete/:id" element={<DeleteProjet />} />
        <Route path="/projets/update/:id" element={<UpdateProjet />} />
      </Routes>

      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover
      />
    </div>
  );
}

export default App;
