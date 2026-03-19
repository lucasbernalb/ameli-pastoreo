import { motion } from 'framer-motion';
import { brandValues, differentiators, brandQuote } from '../data';

const About = () => {
  return (
    <section id="nosotros" className="py-20 md:py-28 bg-cream relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-egg-yellow-light/10 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            className="text-green font-medium text-sm uppercase tracking-wider"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Nuestra filosofía
          </motion.span>
          <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-brown mt-4 mb-6">
            Criados con amor,
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange to-egg-yellow">
              servidos con orgullo
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {brandValues.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className={`bg-gradient-to-br ${value.gradient} p-1 rounded-3xl shadow-xl`}
            >
              <div className="bg-cream rounded-3xl p-8 h-full">
                <motion.div
                  className={`w-16 h-16 bg-gradient-to-br ${value.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8 }}
                >
                  <span className="text-3xl">{value.icon}</span>
                </motion.div>
                <h3 className="font-playfair text-xl lg:text-2xl font-bold text-brown mb-2">
                  {value.title}
                </h3>
                <p className="text-brown-light">{value.subtitle}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-egg-yellow-light/40 to-orange-light/40 rounded-3xl p-8 md:p-12 text-center mb-20"
        >
          <div className="text-5xl mb-6">💚</div>
          <p className="font-playfair text-2xl md:text-3xl text-brown italic leading-relaxed">
            {brandQuote}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-green font-medium text-sm uppercase tracking-wider">
            ¿Por qué elegirnos?
          </span>
          <h3 className="font-playfair text-3xl md:text-4xl font-bold text-brown mt-4">
            Lo que nos hace diferentes
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {differentiators.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: index === 0 ? -50 : index === 2 ? 50 : 0, y: 30 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              whileHover={{ scale: 1.03 }}
              className="bg-white rounded-3xl p-8 shadow-lg text-center border border-brown/5"
            >
              <motion.div
                className={`w-20 h-20 bg-gradient-to-br ${item.gradient} rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg`}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.8 }}
              >
                <span className="text-4xl">{item.emoji}</span>
              </motion.div>

              <h4 className="font-playfair text-xl font-bold text-brown mb-3">
                {item.title}
              </h4>

              <p className="text-brown-light leading-relaxed text-sm">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
