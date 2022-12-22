import {
  Avatar,
  AvatarGroup,
  Box,
  Divider,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";

const Rightbar = () => {
  return (
    <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed" width={400}>
        <Typography
          variant="h6"
          fontWeight={300}
          sx={{ backgroundColor: "primary.main", color: "white" }}
          padding={1}
          borderRadius={2}
        >
          Online Friends
        </Typography>
        <AvatarGroup max={5} sx={{ margin: 2 }}>
          <Avatar
            alt="Remy Sharp"
            src="https://material-ui.com//static/images/avatar/1.jpg"
          />
          <Avatar
            alt="Travis Howard"
            src="https://material-ui.com//static/images/avatar/2.jpg"
          />
          <Avatar
            alt="Cindy Baker"
            src="https://material-ui.com//static/images/avatar/3.jpg"
          />
          <Avatar
            alt="Bala Singh"
            src="https://material-ui.com//static/images/avatar/4.jpg"
          />
          <Avatar
            alt="Tony Stark"
            src="https://material-ui.com//static/images/avatar/5.jpg"
          />
          <Avatar
            alt="Remy Sharp"
            src="https://material-ui.com//static/images/avatar/1.jpg"
          />
          <Avatar
            alt="Travis Howard"
            src="https://material-ui.com//static/images/avatar/2.jpg"
          />
          <Avatar
            alt="Cindy Baker"
            src="https://material-ui.com//static/images/avatar/3.jpg"
          />
          <Avatar
            alt="Bala Singh"
            src="https://material-ui.com//static/images/avatar/4.jpg"
          />
          <Avatar
            alt="Tony Stark"
            src="https://material-ui.com//static/images/avatar/5.jpg"
          />
          <Avatar
            alt="Remy Sharp"
            src="https://material-ui.com//static/images/avatar/1.jpg"
          />
          <Avatar
            alt="Travis Howard"
            src="https://material-ui.com//static/images/avatar/2.jpg"
          />
          <Avatar
            alt="Cindy Baker"
            src="https://material-ui.com//static/images/avatar/3.jpg"
          />
          <Avatar
            alt="Bala Singh"
            src="https://material-ui.com//static/images/avatar/4.jpg"
          />
          <Avatar
            alt="Tony Stark"
            src="https://material-ui.com//static/images/avatar/5.jpg"
          />
        </AvatarGroup>
        <Typography
          variant="h6"
          fontWeight={300}
          mt={2}
          mb={2}
          sx={{ backgroundColor: "primary.main", color: "white" }}
          padding={1}
          borderRadius={2}
        >
          Latest Posts
        </Typography>
        <ImageList cols={3} rowHeight={100}>
          <ImageListItem>
            <img
              src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://media.istockphoto.com/id/1096452496/photo/beach-love.jpg?s=612x612&w=is&k=20&c=rHUgeKSvI3IG-XntOksdnzV1zVQIgioB6uroTZuYjYY="
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://images.unsplash.com/photo-1551782450-a2132b4ba21d"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://media.istockphoto.com/id/1323044217/photo/asian-family-jumping-together-at-beach-with-kids-happy-vacation-travel-beach-concept.jpg?s=612x612&w=is&k=20&c=0SeSK7N-shaEcvQbLf1bn94GODNXtXE6Wl1c-K-PcU4="
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://images.unsplash.com/photo-1522770179533-24471fcdba45"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://media.istockphoto.com/id/1196028272/photo/warrior-pose-on-the-beach.jpg?s=612x612&w=is&k=20&c=kFFDudysXKcYZ-8uvCV3qr2BBTgeOxCj_ZY0Ie3ZeMk="
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://images.unsplash.com/photo-1533827432537-70133748f5c8"
              alt=""
            />
          </ImageListItem>

          <ImageListItem>
            <img
              src="https://media.istockphoto.com/id/1096452496/photo/beach-love.jpg?s=612x612&w=is&k=20&c=rHUgeKSvI3IG-XntOksdnzV1zVQIgioB6uroTZuYjYY="
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://media.istockphoto.com/id/1328852210/photo/joyful-interracial-couple-running-on-the-beach-mixed-race-young-lovers-having-fun-on-vacation.jpg?s=612x612&w=is&k=20&c=zZaWCcSLqiNGos1SNqkLRji2YiByEaZ34J0Lt5z3nt0="
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://media.istockphoto.com/id/480258872/photo/couple-running-on-the-beach.jpg?s=1024x1024&w=is&k=20&c=eoay8CjmoPYO4XB3vhgz8vGRbUMC-vl_gnXIhg7PlcU="
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              // src="https://images.freeimages.com/images/large-previews/e56/run-away-1555225.jpg"
              src="https://media.istockphoto.com/id/1096452496/photo/beach-love.jpg?s=612x612&w=is&k=20&c=rHUgeKSvI3IG-XntOksdnzV1zVQIgioB6uroTZuYjYY="
              alt=""
            />
          </ImageListItem>
        </ImageList>
        <Typography
          variant="h6"
          fontWeight={300}
          mt={2}
          mb={2}
          sx={{ backgroundColor: "primary.main", color: "white" }}
          padding={1}
          borderRadius={2}
        >
          Latest Chats
        </Typography>
        <List
          sx={{
            width: "100%",
            maxWidth: 360,
            bgcolor: "background.paper",
          }}
        >
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Summer BBQ"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    to Scott, Alex, Jennifer
                  </Typography>
                  {" — Wish I could come, but I'm out of town this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Oui Oui"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Sandra Adams
                  </Typography>
                  {" — Do you have Paris recommendations? Have you ever…"}
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Rightbar;
