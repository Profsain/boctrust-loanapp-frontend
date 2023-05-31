import { useState } from "react";
import { Container, Box, Typography, Tab, Tabs } from "@mui/material";
import TabPanel from "./TabPanel";

const Overview = () => {
  const a11yProps = (index) => {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  };
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container maxWidth="false">
      <Box sx={{ textAlign: "center", padding: "68px" }}>
        <Typography
          variant="h4"
          sx={{ marginBottom: "18px", fontWeight: 600, color: "#1a237e" }}
        >
          Company Overview
        </Typography>

        <Typography
          variant="p"
          sx={{
            fontSize: "24px",
            padding: "0 38px",
            marginBottom: "38px",
            lineHeight: "38px",
          }}
        >
          Company overview Our core objective is to provide avenue for saving,
          access to credit and financial advisory services to individuals and
          micro, small & medium enterprises with competitive advantages. We
          believe in Growing Together with our customer.
        </Typography>
      </Box>

      <div style={{backgroundColor: "blue"}}>
        <Box sx={{ width: "100%" }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
              textColor="inherit"
              indicatorColor="inherit"
              sx={{ backgroundColor: "#ecaa00", color: "#fff", width: "100%" }}
            >
              <Tab label="Our Vision & Mission" {...a11yProps(0)} />
              <Tab label="Who we are" {...a11yProps(1)} />
              <Tab label="Our Board" {...a11yProps(2)} />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            Vision and Mission
          </TabPanel>
          <TabPanel value={value} index={1}>
            Who we are
          </TabPanel>
          <TabPanel value={value} index={2}>
            Our Board
          </TabPanel>
        </Box>
      </div>
    </Container>
  );
};

export default Overview;
