import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom"

const Notfound = () => {
  const navigate = useNavigate();
  const handleHome = () => {
    navigate("/login");
  };

  return (
    <div className="flex flex-col items-center justify-center w-auto h-screen gap-5">
      <h1 className="text-6xl">404 NotFound</h1>
      <Button size="large" variant="contained" color="success" onClick={handleHome}>HOME</Button>
    </div>
  )
}

export default Notfound
