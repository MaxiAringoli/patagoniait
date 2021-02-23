import { Box, Container, CssBaseline } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import Hotel from "./Hotel";

const useStyles = makeStyles({
  body: {
    paddingTop: 15,
  },
  headerText: {
    fontSize: 30,
    fontWeight: "bold",
  },
  headerTextContainer: {
    backgroundColor: "white",
    position: "fixed",
    left: 0,
    right: 0,
    top: 0,
    zIndex: 1,
  },
});

const Hoteles = ({ hoteles }) => {
  const classes = useStyles();
  return (
    <div>
      <center>
        <Box boxShadow={3} className={classes.headerTextContainer}>
          <span className={classes.headerText}>Lista de hoteles</span>
        </Box>
      </center>
      <React.Fragment>
        <CssBaseline />
        <Container fixed className={classes.body}>
          {hoteles.map((hotel) => {
            return <Hotel key={hotel.id} item={hotel} />;
          })}
        </Container>
      </React.Fragment>
    </div>
  );
};

export default Hoteles;
