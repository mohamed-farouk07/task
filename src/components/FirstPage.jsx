import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { Col, Row } from "react-bootstrap";

export default function FirstPage() {
  return (
        <>
         <Row  className="w-75 my-3 mx-auto">
         <TextField
            type="text"
            placeholder="Enter Your Name"
            label="Name*"
            variant="outlined"
          />
         </Row>
         <Row className="w-75 my-3 mx-auto">
          <TextField
            type="email"
            placeholder="Enter Your Email"
            label="Email*"
            variant="outlined"
          />
          </Row>
         
          <Autocomplete
            id="country-select-demo"
            sx={{ display: "block" }}
            options={countries}
            autoHighlight
            getOptionLabel={(option) => option.label}
            renderOption={(props, option) => (
              <Box
                component="li"
                sx={{ "& > img": { flexShrink: 0 } }}
                {...props}
              >
                <img
                  loading="lazy"
                  width="20"
                  srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                  src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                  alt=""
                />
                {option.label} ({option.code}) +{option.phone}
              </Box>
            )}
            renderInput={(params) => (
                 <Row className="w-75 my-3 mx-auto">
              <TextField
                {...params}
                label="Choose a country"
                inputProps={{
                  ...params.inputProps,
                  autoComplete: "new-password", // disable autocomplete and autofill
                }}
              />
            </Row>
            )}
          />
          <Row className="w-75 my-3 mx-auto">
          <TextField
            type="password"
            placeholder="Enter Your Password"
            label="Password*"
            variant="outlined"
          />
          </Row>
        </>
  );
}

const countries = [
  { code: "EG", label: "Egypt", phone: "20" },
  {
    code: "US",
    label: "United States",
    phone: "1",
    suggested: true,
  },
];
