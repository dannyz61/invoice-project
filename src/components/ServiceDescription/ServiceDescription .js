import React from "react";
import { useInvoice } from "../../context/InvoiceProvider/InvoiceProvider";
import styles from "./ServiceDescription.module.scss";
import { Col, Row } from "react-bootstrap";
import classNames from "classnames";

const ServiceDescription = () => {
  const { services } = useInvoice();

  return (
    <div className={styles.serviceDescription}>
      <Row className={styles.descriptionContainer}>
        <Col xs={2} sm={4} md={1} lg={1} className={styles.descriptionTitle}>
          SN
        </Col>
        <Col xs={6} sm={4} md={10} lg={10} className={styles.descriptionTitle}>
          Description
        </Col>
        <Col xs={4} sm={4} md={1} lg={1} className={classNames(styles.descriptionTitle, styles.titlePosition)}>
          Price
        </Col>
      </Row>
      {services.map((service, index) => (
        <Row className={styles.serviceItem} key={index}>
          <Col xs={2} sm={4} md={1} lg={1}>{index + 1}</Col>
          <Col xs={6} sm={4} md={10} lg={10}>{service.description}</Col>
          <Col xs={4} sm={4} md={1} lg={1} className={styles.titlePosition}>
            {service.price}
          </Col>
          <hr />
        </Row>
      ))}
    </div>
  );
};

export default ServiceDescription;
