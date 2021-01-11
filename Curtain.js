import { motion } from "framer-motion";

export default function Curtain({ number }) {

  const transition= {
    duration: 1,
    ease: [1,.01,.49,1.05],
    delay: 0.4
  }
  const alternate = {
    even: {
      y: "100vh",
      transition: transition,
    
    },
    odd: {
    top: 0,
      y: "-100vh",
      transition: transition,
    
    },
  };


  return (
    <motion.div
      initial={{
        width: "100vw",
        position: "absolute",
        overflow: "hidden",
        top: 0,
        left: 0,
      }}
      id="curtains"
    >
      {[...Array(number)].map((x, i) => (
        <motion.div
          initial={{
            background: "white" ,
            borderRight: "1px rgb(247,247,247) solid",
           
            height: "100vh",
            width: 100 / number + "vw",
            float: "left",
            display: "inline-block",
          }}
          animate = { i%2 == 0 ? "odd": "even" }
         
          className="curtain"
          variants={alternate}
        ></motion.div>
      ))}
    </motion.div> // ciao
  );
}
