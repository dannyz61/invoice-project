import React from "react";
import { useInvoice } from "../../context/InvoiceProvider/InvoiceProvider";
import styles from "./InvoiceHeader.module.scss";
import classNames from "classnames";
import { ReactComponent as CarIcon } from "../../assets/svg/Car.svg";
const InvoiceHeader = () => {
  const { invoiceNumber, customer, company } = useInvoice();

  return (
    <>
      <div className={styles.invoiceNumberContainer}>
        <span className={classNames(styles.invoiceNumber, styles.numberTitle)}>
          Invoice Number:
        </span>{" "}
        <span className={styles.invoiceNumber}>{invoiceNumber}</span>
      </div>
      <div className={styles.invoiceHeader}>
        <div className={styles.invoiceInfo}>
          <p className={styles.invoiceToContainer}>Invoice To:</p>
          <p>{customer.name}</p>
          <p>{customer.address}</p>
          <p>{company.country}</p>
          <p>{customer.phone}</p>
          <p>{customer.email}</p>
        </div>
        <div className={styles.companyInfo}>
          <CarIcon />
          <p className={styles.companyNameContainer}>{company.name}</p>
          <p>{company.address}</p>
          <p>{company.country}</p>
          <p>{company.phone}</p>
          <p>{company.email}</p>
        </div>
      </div>
    </>
  );
};

export default InvoiceHeader;
