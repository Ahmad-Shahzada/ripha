import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Programs from "./pages/Programs";
import Admissions from "./pages/Admissions";
import Faculty from "./pages/Faculty";
import News from "./pages/News";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import ScrollToTop from "./components/ScrollToTop";
import PrincipalPage from "./pages/Principal";
import DirectorPage from "./pages/Director";


function App() {
  return (
    <Router>
      <Layout>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/faculty" element={<Faculty />} />
          <Route path="/news" element={<News />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="principal-detail" element={<PrincipalPage/>} />
          <Route path="director-detail" element={<DirectorPage/>} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
