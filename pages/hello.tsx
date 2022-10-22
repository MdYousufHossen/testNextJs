import { Typography } from "@mui/material";
import { useRouter } from "next/router";

const Hello = () => {
  const router = useRouter();
  return (
    <div>
      <Typography variant="h1">Hello </Typography>
     
      <button onClick={() => router.push("/")}>Go to Home</button>
    </div>
  );
};

export default Hello;
