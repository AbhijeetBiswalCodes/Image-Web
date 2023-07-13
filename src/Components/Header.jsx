import React from "react";
import { Paper, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";

const Header = ({ setSearchTerm, searchTerm }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="h-[100px] w-full sticky top-0 z-50 bg-slate-200">
      <div className="flex xl:ml-4">
        <img
          src="https://drive.google.com/uc?id=1I2zBgi5G4CeCA-D315bqyPRV_LUKXvS8"
          className="h-[90px]"
        />
        <Paper
          component="form"
          // onSubmit={handleSubmit} 
          sx={{
            borderRadius: 20, 
            height: 52,
            border: "2px solid #e3e3e3",
            pl: 2, 
            pt: "3px", 
            boxShadow: "none",
            mr: {xs:1},
            mt: "20px",
            ml:{md:"2px" , xl:"8px"},
          }}
        >
          <input
            className="xl:w-[550px] md:w-[450px] w-[164px]  outline-none border-none "
            placeholder="Search For Images...."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          <IconButton
            type="sumbit"
            sx={{ p: "10px", color: "black", mt: "2px" }}
          >
            <Search />
          </IconButton>
        </Paper>
      </div>
    </div>
  );
};

export default Header;
