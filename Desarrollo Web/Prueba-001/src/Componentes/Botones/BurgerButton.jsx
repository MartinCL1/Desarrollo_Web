import React from "react";
import { motion } from "framer-motion";

const BurgerButton = ({ size = 40, accion, visible }) => (
  <motion.span onClick={accion} className="burger-buttom"
    initial={{left:'100%'}}
    animate={visible ? {left: '80%'}: {left: '100%'}}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={visible ? 'white': 'white'}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 9.5H3M21 4.5H3M21 14.5H3M21 19.5H3" />
    </svg>
  </motion.span>
);
export default BurgerButton;
