import InvoiceHeader from "./components/InvoiceHeader/InvoiceHeader";
import { InvoiceProvider } from "./context/InvoiceProvider/InvoiceProvider";

const App=()=> {
  return (
    <InvoiceProvider>
    <div className="App">
           <InvoiceHeader />
    </div>
    </InvoiceProvider>
  );
}

export default App;
