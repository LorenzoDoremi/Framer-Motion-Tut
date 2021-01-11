function Gallery() {
  const hover = {
    scaleX: 1.1,
    scaleY: 1.1,
    filter: "brightness(1)",
    transition: {
      duration: 0.3,
      ease: "linear",
    },
  };

  const zoom = {
    initial: { scale: 1, x: -80, filter: "brightness(0.78)" },
    animate: { x: 0, scale: 1.2, transition: { duration: 1.8 } },
  };

  return (
    <>
    <div id="gallery">
      <div>
        <motion.img
          variants={zoom}
          initial="initial"
          animate="animate"
          whileHover={hover}
          src="assets/pic4.jpg"
        ></motion.img>
        <Detail title="Araki Toshida" role="photographer" />
      </div>
      <div>
        <motion.img
          variants={zoom}
          initial="initial"
          animate="animate"
          whileHover={hover}
          src="assets/pic5.jpg"
        ></motion.img>
        <Detail title="Iranian girl" role="photo editor" />
      </div>
      <div>
        <motion.img
          variants={zoom}
          initial="initial"
          animate="animate"
          whileHover={hover}
          src="assets/pic6.jpg"
        ></motion.img>
        <Detail title="Woman" role="Make up artist" />
      </div>
      <div>
        <motion.img
          variants={zoom}
          initial="initial"
          animate="animate"
          whileHover={hover}
          src="assets/pic7.jpg"
        ></motion.img>
        <Detail title="Evanna Joi" role="photographer" />
      </div>
    </div>


    
     <span id="overflower">
     <motion.h1
       initial={{
         opacity: 0,
         y: "100%",
       }}
       animate={{
         opacity: 1,
         y: 0,
         transition: { duration: 0.45, delay: 1.4, ease: "easeInOut"},
       }}
     >
        photographer
     </motion.h1>
   </span>
   <Curtain number={4} />
   </>
  );
}

function Detail({ title, role }) {
  return (
    <div className="details">
      <h3>{title}</h3>
      <p>{role}</p>
      <span> > </span>
    </div>
  );
}
