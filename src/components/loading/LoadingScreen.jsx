import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const loadingSteps = [
  "Initializing AI Engine...",
  "Loading Neural Modules...",
  "Preparing Monaco Editor...",
  "Connecting AI...",
  "Launching Dashboard..."
];

export default function LoadingScreen({ onFinish }) {
  const [progress, setProgress] = useState(0);
  const [step, setStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + 1;

        if (next === 20) setStep(1);
        if (next === 45) setStep(2);
        if (next === 70) setStep(3);
        if (next === 90) setStep(4);

        if (next >= 100) {
          clearInterval(interval);

          setTimeout(() => {
            onFinish();
          }, 600);

          return 100;
        }

        return next;
      });
    }, 40);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="loading-container">
      <motion.div
        className="ai-chip"
        initial={{ scale: 0 }}
        animate={{
          scale: 1,
          rotate: 360
        }}
        transition={{
          duration: 1.2
        }}
      >
        AI
      </motion.div>

      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {loadingSteps[step]}
      </motion.h2>

      <div className="progress-wrapper">

        <motion.div
          className="progress-bar"
          animate={{
            width: `${progress}%`
          }}
        />

      </div>

      <p>{progress}%</p>

    </div>
  );
}