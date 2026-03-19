import { motion } from 'framer-motion';

const differentiators = [
  {
    title: 'Gallinas Libres',
    description: 'Nuestras gallinas vagan libremente por amplios campos, respirando aire fresco y disfrutando del sol.',
    emoji: '🐔',
    gradient: 'from-egg-yellow-light to-egg-yellow',
  },
  {
    title: 'Alimentación Natural',
    description: 'Comen insectos, pasto y granos naturales. Sin hormonas ni antibióticos añadidos.',
    emoji: '🌿',
    gradient: 'from-green to-green-dark',
  },
  {
    title: 'Calidad Superior',
    description: 'Yemas más coloridas, cáscaras más fuertes y un sabor que notarás en cada bocado.',
    emoji: '⭐',
    gradient: 'from-orange to-egg-yellow',
  },
];

const Differentiation = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-cream via-egg-yellow-light/20 to-cream">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-green font-medium">¿Por qué elegirnos?</span>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-brown mt-2">
            Lo que nos hace diferentes
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {differentiators.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index === 1 ? 0 : (index === 0 ? -50 : 50), y: 30 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              whileHover={{ scale: 1.03 }}
              className="bg-white rounded-3xl p-8 shadow-xl text-center"
            >
              <motion.div
                className={`w-24 h-24 bg-gradient-to-br ${item.gradient} rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg`}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.8 }}
              >
                <span className="text-5xl">{item.emoji}</span>
              </motion.div>

              <h3 className="font-playfair text-2xl font-bold text-brown mb-4">
                {item.title}
              </h3>

              <p className="text-brown-light leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-white rounded-3xl p-8 md:p-12 shadow-xl"
        >
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <span className="text-4xl font-playfair font-bold text-orange">100%</span>
              <p className="text-brown-light mt-2">Natural</p>
            </div>
            <div>
              <span className="text-4xl font-playfair font-bold text-orange">0</span>
              <p className="text-brown-light mt-2">Químicos</p>
            </div>
            <div>
              <span className="text-4xl font-playfair font-bold text-orange">🐔</span>
              <p className="text-brown-light mt-2">Gallinas Felices</p>
            </div>
            <div>
              <span className="text-4xl font-playfair font-bold text-orange">❤️</span>
              <p className="text-brown-light mt-2">Hecho con Amor</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Differentiation;
