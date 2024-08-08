import React from 'react';
import { useInvoice } from '../../context/InvoiceProvider/InvoiceProvider';

const InvoiceHeader = () => {
    const { invoiceNumber, customer, company } = useInvoice();

    return (
        <div >
            <div >
                <h2>Invoice Number: {invoiceNumber}</h2>
                <p>Invoice To:</p>
                <p>{customer.name}</p>
                <p>{customer.address}</p>
                <p>{customer.phone}</p>
                <p>{customer.email}</p>
            </div>
            <div>
                <h3>{company.name}</h3>
                <p>{company.address}</p>
                <p>{company.phone}</p>
                <p>{company.email}</p>
            </div>
        </div>
    );
};

export default InvoiceHeader;
