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
        <p>
          This is Mr Pigeon&apos;s chatbot built with Next.js and the AI SDK by Vercel. It uses
          the{' '}
          <code className="rounded-md bg-muted px-1 py-0.5">streamText</code>{' '}
          function in the server and the{' '}
          <code className="rounded-md bg-muted px-1 py-0.5">useChat</code> hook
          on the client to create a seamless chat experience.
        </p>
        <p>
          You can learn more about the project by visiting{' '}
          <Link
            className="font-medium underline underline-offset-4"
            href="https://github.com/jhu7235/mr-pigeon-chatbot"
            target="_blank"
          >
            my github repo
          </Link>
          .
        </p>
      </div>
    </motion.div>
  );
};
