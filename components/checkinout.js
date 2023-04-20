import { useState } from "react";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";





function CheckInOutForm() {
  const [checkinDate, setCheckinDate] = useState("");
  const [checkoutDate, setCheckoutDate] = useState("");

  const handleCheckinChange = (event) => {
    setCheckinDate(event.target.value);
  };

  const handleCheckoutChange = (event) => {
    setCheckoutDate(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // qui puoi inserire la logica per gestire l'invio del form
  };

  return (
    <form onSubmit={handleSubmit}>
        <br/><br/>
      <label>
        <Typography variant="h6">
            Check-in
        </Typography> <br/>
        <input
            
          type="date"
          value={checkinDate}
          onChange={handleCheckinChange}
        />
      </label><br/><br/>
      <label>
      <Typography variant="h6">
            Check-out
        </Typography><br/>
        <input
          width={100}
          type="date"
          value={checkoutDate}
          onChange={handleCheckoutChange}
        />
      </label> 
    </form>
  );
}

export default CheckInOutForm;
