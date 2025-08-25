import React, { useEffect } from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import AOS from "aos";
import "aos/dist/aos.css";

// Fungsi TabPanel adalah komponen React yang digunakan untuk menampilkan konten tab.
function TabPanel(props) {
  // useEffect digunakan untuk inisialisasi AOS ketika komponen pertama kali dimuat.
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 0 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

// Fungsi a11yProps digunakan untuk memberikan atribut aksesibilitas ke tab.

// Komponen utama yang akan digunakan untuk menampilkan tab.
export default function FullWidthTabs() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  // handleChange digunakan untuk mengubah nilai tab yang aktif.

  // handleChangeIndex digunakan untuk mengubah indeks tab yang aktif.
  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <div
      className="md:px-[10%]  md:mt-5 mt-8"
      id="Tabs"
      data-aos="fade-up"
      data-aos-duration="800"
    >
      <Box sx={{ width: "100%" }}>
        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={value}
          onChangeIndex={handleChangeIndex}
        ></SwipeableViews>
      </Box>
    </div>
  );
}
