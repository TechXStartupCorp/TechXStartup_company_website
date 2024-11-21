import React from "react";
import { Row, Col } from "react-bootstrap";

const Stats = () => {
  const stats = [
    {
      title: "Success rate",
      percentage: "78%",
      average: "+2%",
    },
    {
      title: "Conversion rate",
      percentage: "35%",
      average: "+1%",
    },
    {
      title: "Retention rate",
      percentage: "85%",
      average: "+3%",
    },
  ];
  return (
    <Row>
      {stats.map((stat, index) => (
        <Col key={index} lg={4} className="mb-4">
          <div>hi</div>
        </Col>
      ))}
    </Row>
  );
};

export default Stats;
