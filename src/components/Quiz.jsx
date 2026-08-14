
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RotateCcw, Trophy } from "lucide-react";
import { quizQuestions } from "../data/quiz";

function Quiz() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState(null);
  const [finished, setFinished] = useState(false);

  const question = quizQuestions[current];

  const handleAnswer = (index) => {
    if (selected !== null) return;

    setSelected(index);

    if (index === question.answer) {
      setScore((prev) => prev + 1);
    }

    setTimeout(() => {
      if (current === quizQuestions.length - 1) {
        setFinished(true);
      } else {
        setCurrent((prev) => prev + 1);
        setSelected(null);
      }
    }, 700);
  };

  const restart = () => {
    setCurrent(0);
    setScore(0);
    setSelected(null);
    setFinished(false);
  };

  if (finished) {
    const percentage = Math.round(
      (score / quizQuestions.length) * 100
    );

    return (
      <section
        id="quiz"
        className="flex min-h-[80vh] items-center justify-center bg-[#080808] px-6 py-32"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full max-w-xl rounded-3xl border border-white/10 bg-white/[0.04] p-10 text-center"
        >
          <Trophy className="mx-auto mb-6" size={48} />

          <p className="text-xs uppercase tracking-[0.4em] text-orange-400">
            Quiz complete
          </p>

          <h2 className="mt-5 text-5xl font-black">
            {score}/10
          </h2>

          <p className="mt-4 text-white/50">
            You scored {percentage}% in the freedom struggle quiz.
          </p>

          <button
            onClick={restart}
            className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm transition hover:bg-white/10"
          >
            <RotateCcw size={16} />
            Try again
          </button>
        </motion.div>
      </section>
    );
  }

  return (
    <section
      id="quiz"
      className="bg-[#080808] px-6 py-32"
    >
      <div className="mx-auto max-w-3xl">

        <div className="mb-12 text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-green-400">
            Test your knowledge
          </p>

          <h2 className="mt-4 text-4xl font-bold md:text-6xl">
            How Well Do You Know
            <span className="text-white/40"> Our History?</span>
          </h2>
        </div>

        <div className="mb-8">
          <div className="mb-3 flex justify-between text-xs text-white/40">
            <span>
              Question {current + 1} / {quizQuestions.length}
            </span>

            <span>
              Score: {score}
            </span>
          </div>

          <div className="h-1 overflow-hidden rounded-full bg-white/10">
            <motion.div
              animate={{
                width: `${((current + 1) / quizQuestions.length) * 100}%`,
              }}
              className="h-full bg-gradient-to-r from-orange-400 via-white to-green-400"
            />
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 md:p-10"
          >
            <h3 className="text-2xl font-semibold leading-relaxed md:text-3xl">
              {question.question}
            </h3>

            <div className="mt-8 grid gap-3">
              {question.options.map((option, index) => {
                const isCorrect = index === question.answer;
                const isSelected = index === selected;

                let extra = "";

                if (selected !== null && isCorrect) {
                  extra = "border-green-400/50 bg-green-400/10";
                } else if (selected !== null && isSelected) {
                  extra = "border-red-400/50 bg-red-400/10";
                }

                return (
                  <button
                    key={option}
                    onClick={() => handleAnswer(index)}
                    className={`rounded-2xl border border-white/10 p-4 text-left text-white/70 transition hover:bg-white/5 ${extra}`}
                  >
                    <span className="mr-3 text-white/30">
                      {String.fromCharCode(65 + index)}.
                    </span>

                    {option}
                  </button>
                );
              })}
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}

export default Quiz;

