import React from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Errore from "../../Components/Errore/Errore";

function ErrorePage() {
  return (
    <div className="wrapper">
      <Header />
      <Errore />
      <Footer />
    </div>
  );
}

export default ErrorePage;
