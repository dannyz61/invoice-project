import Footer from "./components/Footer/Footer";
import InvoiceHeader from "./components/InvoiceHeader/InvoiceHeader";
import PriceDetails from "./components/PriceDetails/PriceDetails";
import ServiceDescription from "./components/ServiceDescription/ServiceDescription ";
import { InvoiceProvider } from "./context/InvoiceProvider/InvoiceProvider";
import "@fontsource/rubik";
import "@fontsource/rubik/500.css";
import "@fontsource/rubik/700.css";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
const App = () => {
  return (
    <InvoiceProvider>
      <div className="App">
        <InvoiceHeader />
        <ServiceDescription />
        <PriceDetails />
        <Footer />
      </div>
    </InvoiceProvider>
  );
};

export default App;
