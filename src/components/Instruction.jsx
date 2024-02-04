import { Typography } from "@material-tailwind/react";

const Instruction = () => {
  return (
    <div>
      <Typography className="text-indigo-500 text-5xl font-bold text-center">
        Plan your day!<br></br>
      </Typography>
      <Typography className="text-xl text-center" color="black">
        Find <span className="font-bold">Restaurant</span> or{" "}
        <span className="font-bold">Place</span> to go within 60 seconds
      </Typography>
      <Typography className="text-center" color="black">
        <span className="text-center text-lg">
          <span className = "font-bold text-indigo-500">Tell us</span> what you're looking for by<br></br>
        </span>
        <span>
          Fill in your Information, Budget, and Preference<br></br>
        </span>
      </Typography>
    </div>
  );
};

export default Instruction;
