import React from "react";
import { useInvoice } from "../../context/InvoiceProvider/InvoiceProvider";
import styles from "./PriceDetails.module.scss";
import { Col, Row } from "react-bootstrap";

const PriceDetails = () => {
  const { subtotal, vat, total, paymentInfo } = useInvoice();

  return (
    <Row className={styles.container}>
      <Col xs={12} sm={7} md={8} lg={8} className={styles.paymentInfo}>
        <p className={styles.paymentInfoContainer}>Payment Info</p>
        <p>A/C NAME: {paymentInfo.accountName}</p>
        <p>BANK: {paymentInfo.bank}</p>
        <p>SWIFT: {paymentInfo.swift}</p>
        <p>IBAN: {paymentInfo.iban}</p>
        <p>ACCOUNT: {paymentInfo.account}</p>
        <p>METHOD: {paymentInfo.method}</p>
      </Col>
      <Col xs={12} sm={5} md={4} lg={4} className={styles.priceDetails}>
        <div className={styles.priceRow}>
          <span>Subtotal:</span>
          <span>${subtotal}</span>
        </div>
        <div className={styles.priceRow}>
          <span>VAT:</span>
          <span className={styles.vatContainer}>${vat}</span>
        </div>
        <div className={styles.totalRow}>
          <span>Total:</span>
          <span>${total}</span>
        </div>
      </Col>
    </Row>
  );
};
export default PriceDetails
