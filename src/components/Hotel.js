import {
  Backdrop,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Fade,
  Grid,
  IconButton,
  Modal,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import React, { useState } from "react";
import AppModalContent from "../shared/AppModalContent";

const useStyles = makeStyles((theme) => ({
  media: {
    height: 140,
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  root: {
    flexGrow: 1,
    paddingTop: 35,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  paperModal: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function Hotel({ item }) {
  const classes = useStyles();
  const [hotel] = useState(item);

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={3}>
          <Card>
            <CardMedia
              className={classes.media}
              image={hotel.images[0].url}
              title={hotel.images[0].name}
            />
          </Card>
        </Grid>
        <Grid item xs={12} sm={7}>
          <CardHeader title={hotel.name} subheader={hotel.address} />
        </Grid>
        <Grid item xs={12} sm={2}>
          <center>
            <CardContent>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
              <Button variant="contained" color="primary" onClick={handleOpen}>
                Ver hotel
              </Button>
            </CardContent>
          </center>
        </Grid>
      </Grid>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 1500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paperModal}>
            <AppModalContent item={hotel} />
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

export default Hotel;
