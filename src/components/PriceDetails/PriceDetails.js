import React from 'react';
import { useInvoice } from '../../context/InvoiceProvider/InvoiceProvider';

const PriceDetails = () => {
    const { subtotal, vat, total } = useInvoice();

    return (
        <div>
            <div >
                <span>Subtotal:</span>
                <span>${subtotal}</span>
            </div>
            <div >
                <span>VAT (20%):</span>
                <span>${vat}</span>
            </div>
            <div >
                <span>Total:</span>
                <span>${total}</span>
            </div>
        </div>
    );
};

export default PriceDetails;
