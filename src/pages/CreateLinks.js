import React, { useContext, useState } from "react";
import { useHttp } from "../hooks/http.hook";
import { AuthContext } from "../context/AuthContext";
import TextField from "@mui/material/TextField";

const CreateLinks = () => {
  const auth = useContext(AuthContext);
  const { request } = useHttp();
  const [link, setLink] = useState("");

  const pressHandler = async (event) => {
    if (event.key === "Enter") {
      try {
        const data = await request(
          "/api/link/generate",
          "POST",
          { from: link },
          {
            Authorization: `Bearer ${auth.token}`,
          }
        );
        console.log(data);
      } catch (e) {}
    }
  };

  return (
    <div>
      <TextField
        margin="normal"
        required
        fullWidth
        name="password"
        label="Paste link"
        type="text"
        value={link}
        onChange={(e) => setLink(e.target.value)}
        onKeyDown={pressHandler}
      />
    </div>
  );
};

export default CreateLinks;
