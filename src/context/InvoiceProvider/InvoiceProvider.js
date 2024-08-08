import React, { createContext, useContext, useState } from "react";

const InvoiceContext = createContext();

export const useInvoice = () => {
  return useContext(InvoiceContext);
};

export const InvoiceProvider = ({ children }) => {
  // eslint-disable-next-line no-unused-vars
  const [invoiceData, setInvoiceData] = useState({
    invoiceNumber: "#SM75692",
    customer: {
      name: "Jennifer Richards",
      address: "365 Bloor Street East, Toronto, Ontario,",
      country: " M4W 3L4, Canada",
      phone: "118525211",
      email: "Jennifer@gmail.com",
    },
    company: {
      name: "Car Rental",
      address: "237 Roanoke Road, North York,",
      country: " Ontario, Canada",
      phone: "4654927726",
      email: "demo@email.com",
    },
    services: [
      {
        description:
          "Suzuki Swift From 03.08.2024 | 05:00 To 04.08.2024 | 05:00",
        price: 560,
      },
      { description: "Chauffeur Service", price: 50 },
    ],
    subtotal: 1140,
    vat: "20%",
    total: 1160,
    paymentInfo: {
      accountName: "__________",
      bank: "__________",
      swift: "__________",
      iban: "__________",
      account: "__________",
      method: "Bank",
    },
  });

  return (
    <InvoiceContext.Provider value={invoiceData}>
      {children}
    </InvoiceContext.Provider>
  );
};
