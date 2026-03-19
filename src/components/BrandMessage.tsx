import { motion } from 'framer-motion';

const messages = [
  {
    title: 'Hacemos la diferencia',
    subtitle: 'Calidad que se siente',
    gradient: 'from-egg-yellow to-orange',
  },
  {
    title: 'Producción natural',
    subtitle: 'Respeto por el campo',
    gradient: 'from-green to-green-dark',
  },
  {
    title: 'Del campo a tu mesa',
    subtitle: 'Frescura garantizada',
    gradient: 'from-orange to-egg-yellow',
  },
];

const BrandMessage = () => {
  return (
    <section id="nosotros" className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-green font-medium">Nuestra filosofía</span>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-brown mt-2">
            Criados con amor, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange to-egg-yellow">
              servidos con orgullo
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {messages.map((msg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.03, y: -5 }}
              className={`bg-gradient-to-br ${msg.gradient} p-1 rounded-3xl shadow-xl`}
            >
              <div className="bg-cream rounded-3xl p-8 h-full">
                <div className={`w-16 h-16 bg-gradient-to-br ${msg.gradient} rounded-2xl flex items-center justify-center mb-6`}>
                  <span className="text-3xl">🌿</span>
                </div>
                <h3 className="font-playfair text-2xl font-bold text-brown mb-2">
                  {msg.title}
                </h3>
                <p className="text-brown-light">{msg.subtitle}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-egg-yellow-light/50 to-orange-light/50 rounded-3xl p-8 md:p-12 text-center"
        >
          <p className="font-playfair text-2xl md:text-3xl text-brown italic">
            "Creemos que los mejores huevos vienen de gallinas felices que viven libres y comen natural."
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default BrandMessage;
