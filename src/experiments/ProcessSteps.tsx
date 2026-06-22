import { motion } from 'framer-motion';

interface Step {
  image: string;
  alt: string;
  number: string;
  title: string;
  body: string;
}

interface ProcessStepsProps {
  steps: Step[];
  label?: string;
  headline: string;
}

export const ProcessSteps = ({ steps, label, headline }: ProcessStepsProps) => {
  return (
    <section className="py-20 md:py-32 bg-[#FFFEF7]">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          {label && (
            <span className="text-sm tracking-[0.2em] text-[#7B9E6B] uppercase font-semibold mb-3 block">
              {label}
            </span>
          )}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#5C4033] leading-tight">
            {headline}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="flex flex-col"
            >
              <div className="rounded-2xl overflow-hidden mb-6 shadow-lg">
                <img
                  src={step.image}
                  alt={step.alt}
                  className="w-full h-72 md:h-80 object-cover"
                  loading="lazy"
                />
              </div>
              <span className="text-[#7B9E6B] font-bold text-sm tracking-widest mb-2">
                {step.number}
              </span>
              <h3 className="text-2xl font-bold text-[#5C4033] mb-2">{step.title}</h3>
              <p className="text-[#8B6F5C] leading-relaxed">{step.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;
