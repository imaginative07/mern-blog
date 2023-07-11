import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <ToastContainer />
      <Header />
      <main>
          <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
