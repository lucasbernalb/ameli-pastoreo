import { motion } from 'framer-motion';
import { FaWhatsapp, FaCheck } from 'react-icons/fa';
import { products } from '../data';

const Products = () => {
  return (
    <section id="productos" className="py-20 md:py-28 bg-cream-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-green font-medium text-sm uppercase tracking-wider">
            Variedad para todos
          </span>
          <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-brown mt-4 mb-6">
            Nuestros Productos
          </h2>
          <p className="text-brown-light text-lg max-w-xl mx-auto">
            Elige el tamaño perfecto para tu hogar
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-3xl shadow-lg overflow-hidden group border border-brown/5"
            >
              <div className={`h-48 bg-gradient-to-br ${product.gradient} flex items-center justify-center relative overflow-hidden`}>
                <motion.span
                  className="text-7xl group-hover:scale-110 transition-transform duration-300"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                >
                  🥚
                </motion.span>
                
                {product.badge && (
                  <div className="absolute top-4 right-4 bg-white/95 px-3 py-1.5 rounded-full shadow-lg">
                    <span className="text-green-dark font-bold text-xs flex items-center gap-1">
                      <FaCheck className="text-xs" /> {product.badge}
                    </span>
                  </div>
                )}

                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors" />
              </div>

              <div className="p-6">
                <h3 className="font-playfair text-xl font-bold text-brown mb-2">
                  {product.name}
                </h3>
                <p className="text-brown-light text-sm mb-4 leading-relaxed">
                  {product.description}
                </p>
                
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs text-brown-light bg-cream px-3 py-1 rounded-full">
                    {product.unit}
                  </span>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-brown/10">
                  <span className="font-playfair text-2xl font-bold text-orange">
                    {product.price}
                  </span>
                  <motion.a
                    href={`https://wa.me/51999999999?text=Hola!%20Quiero%20comprar%20${encodeURIComponent(product.name)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-shadow"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={`Comprar ${product.name}`}
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
          transition={{ duration: 0.5 }}
          className="text-center mt-16"
        >
          <motion.a
            href="https://wa.me/51999999999?text=Hola!%20Quiero%20hacer%20un%20pedido%20personalizado"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-green to-green-dark text-white px-10 py-5 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition-all"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <FaWhatsapp className="text-2xl" />
            <span>Hacer Pedido Personalizado</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Products;
