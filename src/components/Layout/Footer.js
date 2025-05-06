import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
//import Logo from "../../mythris/mythris-logo.png";
import MailIcon from "@mui/icons-material/Mail";
import CallIcon from "@mui/icons-material/Call";
import { Box, Typography } from "@mui/material";
import "../footer.css"
const Footer = () => {

  return (
    <>
      <div>


        <Box
          sx={{ textAlign: "center", bgcolor: "White", color: "black", p: 3 }}
        >
          <Box
            sx={{
              my: 3,
              "& svg": {
                fontSize: "40px",
                cursor: "pointer",
                mr: 1,
              },
              "& svg:hover": {
                color: "goldenrod",
                transform: "translateX(2px)",
                transition: "all 250ms",
              },
            }}

          >
            <div className="menu-footer">
              <ul>
                <li><a href=" " >Home</a></li>
                <li>|</li>
                <li><a href="/about ">About</a></li>
                <li>|</li>
                <li><a href="/menu ">Menu</a></li>
                <li>|</li>
                <li><a href="/gallery ">Gallery</a></li>
                <li>|</li>
                <li><a href="contact ">Contact</a></li>
              </ul>
            </div>
            {/* icons */}
            <span><InstagramIcon /><a href="https://www.instagram.com/mythrisindiancuisine?igsh=ZTJ6dDBqeHhvbGVz" className="social-icon-footer">mythrisindiancuisine</a></span>
            <MailIcon /> mythrisusa@gmail.com
            <CallIcon /> (469) 885-7999

          </Box>
          <Typography
            variant="h5"
            sx={{
              "@media (max-width:600px)": {
                fontSize: "1rem",
              },
            }}
          >
            All Rights Reserved &copy; Mythri's Indian Cuisine
          </Typography>
        </Box>

      </div>

    </>
  );
};

export default Footer;
