

import { AnimatePresence, motion, useCycle } from "framer-motion";

export default function Bars() {
    var number = 10;
    var duration = 0.5;
    var delay = 0.04;
    return (
      <motion.div id="bars">
        {[...Array(number)].map((x, i) => (
          <div className="bar">
            <motion.div
              initial={{
                background: "rgb(0," + (150 + 15 * i) + "," + (240 - 5 * i) + ")",
              }}
              className="barcolor"
            ></motion.div>
            <motion.div
              className="cover"
              initial={{
                height: 100,
              }}
              animate={{
                height: 0,
                transition: {
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatType: "reverse",
                  duration: duration,
                  delay: delay * i,
                },
              }}
            ></motion.div>
          </div>
        ))}
      </motion.div>
    );
  }