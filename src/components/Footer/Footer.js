import React from 'react';
import { useInvoice } from '../../context/InvoiceProvider/InvoiceProvider';
import { terms } from '../../constants/terms';


const Footer = () => {
    const { paymentInfo } = useInvoice();

    return (
        <div >
            <div >
                <h4>Payment Info</h4>
                <p>A/C NAME: {paymentInfo.accountName}</p>
                <p>BANK: {paymentInfo.bank}</p>
                <p>SWIFT: {paymentInfo.swift}</p>
                <p>IBAN: {paymentInfo.iban}</p>
                <p>ACCOUNT: {paymentInfo.account}</p>
                <p>METHOD: {paymentInfo.method}</p>
            </div>
            <div>
                <h4>Terms & Conditions</h4>
                <p>1. ${terms}</p>
                <p>2. ${terms}</p>

            </div>
            <div>
            SIGNATURE
            </div>
            <div>
              <div>Address</div>
              <div>Phone</div>
              <div>Email</div>
            </div>
        </div>
    );
};

export default Footer;
