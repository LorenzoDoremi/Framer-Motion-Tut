
import { AnimatePresence, motion, useCycle } from "framer-motion";
export default function RgbText({ text }) {
    var transX = 5;
    var red = "#FF1C60";
    var blue = "#1CFFFF";
    var duration = 1;
    var height = "300px";
    var ease = "easeInOut";
  
    return (
      <motion.div
        initial={{
          height: height,
          translateX: -2,
        }}
        animate={{
          translateX: 3,
          transition: {
            ease: "linear",
            repeat: Infinity,
  
            repeatDelay: 1,
            duration: 0.1,
          },
        }}
        className="rgb"
      >
        <motion.p
          initial={{
            color: red,
            translateX: 0,
            fontSize: height,
          }}
          animate={{
            translateX: [transX, transX - 10, transX + 5, transX + 100],
  
            transition: {
              ease: ease,
              repeat: Infinity,
              duration: 1,
              times: [0, 0.5, 0.75, 1],
            },
          }}
        >
          {text}
        </motion.p>
        <motion.p
          initial={{
            color: blue,
            translateX: 0,
            fontSize: height,
          }}
          animate={{
            translateX: [-transX, -transX + 10, -transX - 5, -transX - 100],
  
            transition: {
              ease: ease,
              repeat: Infinity,
              duration: 1,
              times: [0, 0.3, 0.75, 1],
            },
          }}
        >
          {text}
        </motion.p>
        <motion.p
          initial={{
            fontSize: height,
          }}
        >
          {text}
        </motion.p>
      </motion.div>
    );
  }