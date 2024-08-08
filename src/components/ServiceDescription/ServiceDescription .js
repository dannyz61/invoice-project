import React from 'react';
import { useInvoice } from '../../context/InvoiceProvider/InvoiceProvider';

const ServiceDescription = () => {
    const { services } = useInvoice();

    return (
        <div >
            {services.map((service, index) => (
                <div  key={index}>
                    <p>{`${index + 1}. ${service.description}`}</p>
                    <p>${service.price}</p>
                </div>
            ))}
        </div>
    );
};

export default ServiceDescription;
