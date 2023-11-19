import * as React from "react";
import TextField from "@mui/material/TextField";
import { Col, Row } from "react-bootstrap";

export default function SecondPage() {
  return (
    <>
      <Row className="w-75 my-3 mx-auto">
        <Col>
          <TextField
            onInput={(e) => {
              e.target.value = Math.max(0, parseInt(e.target.value))
                .toString()
                .slice(0, 1);
            }}
            type="number"
            variant="outlined"
          />
        </Col>
        <Col>
          <TextField
            onInput={(e) => {
              e.target.value = Math.max(0, parseInt(e.target.value))
                .toString()
                .slice(0, 1);
            }}
            type="number"
            variant="outlined"
          />
        </Col>
        <Col>
          <TextField
            onInput={(e) => {
              e.target.value = Math.max(0, parseInt(e.target.value))
                .toString()
                .slice(0, 1);
            }}
            type="number"
            variant="outlined"
          />
        </Col>
        <Col>
          <TextField
            onInput={(e) => {
              e.target.value = Math.max(0, parseInt(e.target.value))
                .toString()
                .slice(0, 1);
            }}
            type="number"
            variant="outlined"
          />
        </Col>
      </Row>
    </>
  );
}
