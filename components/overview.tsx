import { motion } from 'framer-motion';
import Link from 'next/link';

export const Overview = () => {
  return (
    <motion.div
      key="overview"
      className="max-w-3xl mx-auto md:mt-20"
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ delay: 0.5 }}
    >
    <div className="rounded-xl p-6 flex flex-col gap-8 leading-relaxed text-center max-w-xl">
      <h2 className="text-2xl font-bold">
        Welcome to Mr. Pigeon’s Chatbot!
      </h2>

      <p>
        Built on <strong>Next.js  </strong>, <strong>React</strong>, <strong>Vercel AI</strong>. It wraps multiple foundational models including <strong>Deepseek</strong>, <strong>Claude</strong>, and <strong>OpenAI</strong>
      </p>
      <span>For more details about the underlying technologies, check out the {" "}
        <Link href="https://github.com/jhu7235/mr-pigeon-chatbot" 
        className="font-medium underline underline-offset-4">
          GitHub repo
        </Link>
      </span>
    </div>
    </motion.div>
  );
};
