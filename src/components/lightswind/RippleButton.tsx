import React from "react";
import { motion } from "framer-motion";

interface RippleButtonProps {
  text?: string;
  bgColor?: string;        // warna tombol custom
  circleColor?: string;    // warna ripple
  width?: string;          // bisa "200px" atau "100%" atau undefined (responsif)
  height?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset"; // tombol submit form
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const RippleButton: React.FC<RippleButtonProps> = ({
  text = "Click Me",
  bgColor,
  circleColor,
  width,
  height = "32px",
  disabled = false,
  type = "button",
  onClick,
}) => {
  const themeBg = bgColor
    ? bgColor
    : "var(--ripple-btn-bg, #111827)"; // default dark gray, bisa override

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      whileHover={disabled ? {} : { scale: 1.02 }}
      whileTap={disabled ? {} : { scale: 0.97 }}
      className="ripple-btn text-white dark:text-white disabled:opacity-50"
      style={{
        backgroundColor: themeBg,
        width: width || "100%",
        maxWidth: "250px",
        height: height,
        cursor: disabled ? "not-allowed" : "pointer",
      }}
    >
      {/* Ripple circles */}
      <span className="circle1"></span>
      <span className="circle2"></span>
      <span className="circle3"></span>
      <span className="circle4"></span>
      <span className="circle5"></span>

      <span className="text">{text}</span>

      <style>{`
        .ripple-btn {
          font-family: Arial, Helvetica, sans-serif;
          font-weight: normal;
          border: none;
          border-radius: 0.4rem;
          position: relative;
          overflow: hidden;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          padding: 0 1em;
          box-sizing: border-box;
        }

        .ripple-btn span:not(:nth-child(6)) {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          height: 30px;
          width: 30px;
          background-color: ${circleColor || "#3B82F6"};
          border-radius: 50%;
          transition: 0.6s ease;
          pointer-events: none;
        }

        .ripple-btn span:nth-child(6) {
          position: relative;
          z-index: 1;
        }

        .ripple-btn span:nth-child(1) { transform: translate(-3.3em, -4em); }
        .ripple-btn span:nth-child(2) { transform: translate(-6em, 1.3em); }
        .ripple-btn span:nth-child(3) { transform: translate(-0.2em, 1.8em); }
        .ripple-btn span:nth-child(4) { transform: translate(3.5em, 1.4em); }
        .ripple-btn span:nth-child(5) { transform: translate(3.5em, -3.8em); }

        .ripple-btn:hover span:not(:nth-child(6)) {
          transform: translate(-50%, -50%) scale(4);
          transition: 1.5s ease;
        }

        @media (max-width: 480px) {
          .ripple-btn {
            width: 90%;
            max-width: none;
          }
        }
      `}</style>
    </motion.button>
  );
};

export default RippleButton;
