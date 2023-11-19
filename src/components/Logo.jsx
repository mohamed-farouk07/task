// import { Col } from "react-bootstrap";

// const Logo = () => {
//   return (
//       <div className="col-12 h-50">
//           <Col><img className="col-12 col-sm-11 col-md-9 col-lg-6 m-0 white-bg" style={{width: "20%"}} src="media/logo.png" alt="Logo" /></Col>
//       </div>
//   );
// };

// export default Logo;

import * as React from 'react';
import Grid from '@mui/material/Grid';



export default function Logo() {
  return (
      <Grid spacing={0}>
        <Grid xs={6}>
            <img  style={{width: "7%"}} src="logo.png" alt="Logo" />
        </Grid>
        <Grid xs={6}>
        </Grid>
      </Grid>
  );
}

