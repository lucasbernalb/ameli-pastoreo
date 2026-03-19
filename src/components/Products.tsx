import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

const products = [
  {
    id: 1,
    name: 'Docena Premium',
    description: '12 huevos frescos de gallinas felices',
    price: 'S/ 12.00',
    gradient: 'from-egg-yellow to-orange',
    emoji: '🥚',
  },
  {
    id: 2,
    name: 'Maple Especial',
    description: '30 huevos para familias grandes',
    price: 'S/ 28.00',
    gradient: 'from-green to-green-dark',
    emoji: '🥚🥚',
  },
  {
    id: 3,
    name: 'Pack Tradicional',
    description: '6 huevos para probar la diferencia',
    price: 'S/ 7.00',
    gradient: 'from-orange to-egg-yellow',
    emoji: '🥚',
  },
  {
    id: 4,
    name: 'Caja Familiar',
    description: '60 huevos al mejor precio',
    price: 'S/ 50.00',
    gradient: 'from-egg-yellow-light to-egg-yellow',
    emoji: '🥚🥚🥚',
  },
];

const Products = () => {
  return (
    <section id="productos" className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-green font-medium">Variedad para todos</span>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-brown mt-2">
            Nuestros Productos
          </h2>
          <p className="text-brown-light mt-4 max-w-xl mx-auto">
            Elige el tamaño perfecto para tu hogar
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-3xl shadow-lg overflow-hidden group"
            >
              <div className={`h-48 bg-gradient-to-br ${product.gradient} flex items-center justify-center relative overflow-hidden`}>
                <motion.span
                  className="text-7xl"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  {product.emoji}
                </motion.span>
                <div className="absolute top-4 right-4 bg-white/90 px-3 py-1 rounded-full">
                  <span className="text-green-dark font-bold text-sm">Fresco</span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-playfair text-xl font-bold text-brown mb-2">
                  {product.name}
                </h3>
                <p className="text-brown-light text-sm mb-4">
                  {product.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="font-playfair text-2xl font-bold text-orange">
                    {product.price}
                  </span>
                  <motion.a
                    href="https://wa.me/51999999999?text=Hola!%20Quiero%20comprar%20"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-shadow"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FaWhatsapp className="text-xl" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://wa.me/51999999999?text=Hola!%20Quiero%20hacer%20un%20pedido%20personalizado"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-green to-green-dark text-white px-8 py-4 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaWhatsapp className="text-2xl" />
            Hacer Pedido Personalizado
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Products;
