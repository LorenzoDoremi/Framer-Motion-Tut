
import { AnimatePresence, motion, useCycle } from "framer-motion";
export default function Slider() {
    var transition = { duration: 1 };
    var transition2 = { duration: 1.5 };
    var width = window.innerWidth;
    return (
      <div id="sliders">
        {/* exiting ones */}
        <motion.div
          initial={{
            x: 0,
            width: "100vw",
          }}
          animate={{
            x: "100vw",
  
            transition: transition2,
            transitionEnd: {
              x: 0,
              width: 0,
            },
          }}
          exit={{
            x: 0,
            width: "100vw",
            transition: transition,
          }}
          class="slide"
        ></motion.div>
        <motion.div
          initial={{
            x: 0,
            width: "100vw",
          }}
          animate={{
            x: "100vw",
  
            transition: transition,
            transitionEnd: {
              x: 0,
              width: 0,
            },
          }}
          exit={{
            x: 0,
            width: "100vw",
            transition: transition2,
          }}
          class="slideAzure"
        ></motion.div>
      </div>
    );
  }