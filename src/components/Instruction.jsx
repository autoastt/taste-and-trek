import { Typography } from "@material-tailwind/react";

const Instruction = () => {
  return (
    <div>
      <Typography className="text-indigo-500 dark:text-darky3 text-5xl font-bold text-center pb-4 pt-8">
        Plan your day!<br></br>
      </Typography>
      <Typography className="text-xl text-center dark:text-white" color="black">
        Find <span className="font-bold">restaurants</span> or{" "}
        <span className="font-bold">places</span> to go within less than a minute!
      </Typography>
      <Typography className="text-center" color="black">
        <span className="text-center text-lg dark:text-white">
          <span className = "font-bold text-indigo-500 dark:text-darky3">Tell us</span> what you're looking for by<br></br>
        </span>
        <span className="dark:text-white">
          filling in your information, budget, and preference<br></br>
        </span>
      </Typography>
    </div>
  );
};

export default Instruction;
