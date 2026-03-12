import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link, useParams } from 'wouter';
import { 
  TreePine, ArrowLeft, Calendar, User, Clock, 
  Share2, Bookmark, Heart, MessageCircle,
  Facebook, Twitter, Instagram, Copy,
  ChevronRight, ArrowRight
} from 'lucide-react';
import { HeaderButtons } from '@/components/layout/HeaderButtons';

const BlogPost = () => {
  const { slug } = useParams();
  
  // Sample blog posts data
  const blogPosts = {
    'turismo-regenerativo-futuro': {
      title: 'Turismo Regenerativo: El Futuro del Viaje Consciente',
      excerpt: 'Descubre cómo el turismo regenerativo está transformando la industria hacia prácticas que no solo minimizan el impacto, sino que activamente benefician destinos y comunidades.',
      content: `
        <p>El turismo regenerativo representa una evolución natural del turismo sostenible, pero va mucho más allá de simplemente "no hacer daño". Este enfoque revolucionario busca crear un impacto positivo neto en los destinos, las comunidades y los ecosistemas que visitamos.</p>

        <h2>¿Qué es el Turismo Regenerativo?</h2>
        <p>A diferencia del turismo sostenible tradicional, que se enfoca en minimizar el impacto negativo, el turismo regenerativo tiene como objetivo dejar los lugares en mejor estado del que los encontramos. Esto incluye:</p>
        
        <ul>
          <li><strong>Restauración ecológica:</strong> Participar en proyectos que restauran ecosistemas dañados</li>
          <li><strong>Fortalecimiento comunitario:</strong> Crear oportunidades económicas genuinas para las comunidades locales</li>
          <li><strong>Preservación cultural:</strong> Apoyar y revitalizar tradiciones y conocimientos ancestrales</li>
          <li><strong>Innovación sostenible:</strong> Implementar tecnologías y prácticas que beneficien el entorno</li>
        </ul>

        <h2>Casos de Éxito en Colombia</h2>
        <p>Colombia se ha convertido en un laboratorio natural para el turismo regenerativo. Desde la Sierra Nevada de Santa Marta hasta el Amazonas, comunidades indígenas y empresas innovadoras están liderando iniciativas que restauran ecosistemas mientras ofrecen experiencias transformadoras.</p>

        <p>En la región de Boyacá, cooperativas campesinas han desarrollado rutas agroturísticas que no solo generan ingresos adicionales, sino que también promueven la agricultura orgánica y la conservación de semillas nativas.</p>

        <h2>Cómo Participar</h2>
        <p>Festival NATUR conecta a viajeros conscientes con estas iniciativas transformadoras. A través de nuestro marketplace de experiencias, puedes:</p>
        
        <ul>
          <li>Elegir alojamientos que implementan prácticas regenerativas</li>
          <li>Participar en proyectos de restauración ecológica</li>
          <li>Aprender técnicas tradicionales directamente de las comunidades</li>
          <li>Contribuir a la investigación en biodiversidad</li>
        </ul>

        <h2>El Futuro del Viaje</h2>
        <p>El turismo regenerativo no es solo una tendencia; es una necesidad urgente. Con el cambio climático y la pérdida de biodiversidad acelerándose, necesitamos formas de viajar que contribuyan activamente a la solución.</p>

        <p>En Festival NATUR 2025, reuniremos a los líderes mundiales en turismo regenerativo para compartir conocimientos, establecer alianzas y diseñar el futuro de la industria. ¡Únete a este movimiento transformador!</p>
      `,
      author: 'María Rodríguez',
      date: '15 de Noviembre, 2024',
      readTime: '8 min lectura',
      category: 'Sostenibilidad',
      tags: ['Turismo Regenerativo', 'Sostenibilidad', 'Conservación', 'Comunidades'],
      image: '🌱'
    },
    'experiencias-autenticas-colombia': {
      title: 'Experiencias Auténticas: Conectando con el Alma de Colombia',
      excerpt: 'Explora cómo las experiencias auténticas van más allá del turismo tradicional para crear conexiones profundas con la cultura, la naturaleza y las comunidades locales.',
      content: `
        <p>Colombia es un país de contrastes extraordinarios, donde cada región ofrece una ventana única a la diversidad cultural y natural más rica del planeta. Las experiencias auténticas nos invitan a ir más allá de la superficie y conectar genuinamente con el alma de este territorio mágico.</p>

        <h2>Más Allá del Turismo Convencional</h2>
        <p>Las experiencias auténticas trascienden los itinerarios típicos. Se trata de momentos que transforman tanto al viajero como a la comunidad anfitriona, creando vínculos duraderos y comprensión mutua.</p>

        <h2>Ejemplos de Experiencias Transformadoras</h2>
        
        <h3>Intercambio de Saberes Ancestrales</h3>
        <p>En la Sierra Nevada de Santa Marta, los pueblos Kogui, Wiwa, Arhuaco y Kankuamo comparten su cosmovisión y prácticas de conservación con visitantes respetuosos. Estos encuentros no son solo educativos; son ceremonias de intercambio donde ambas partes aprenden y crecen.</p>

        <h3>Expediciones Científicas Ciudadanas</h3>
        <p>Participa en investigaciones de biodiversidad en el Chocó biogeográfico, donde cada observación contribuye al conocimiento científico mientras vives la aventura de descubrir especies únicas en el mundo.</p>

        <h3>Talleres de Arte y Artesanía Tradicional</h3>
        <p>Aprende técnicas ancestrales de tejido en Guacamayas, Boyacá, o la elaboración de instrumentos musicales tradicionales en San Jacinto, Bolívar. Cada pieza creada lleva consigo siglos de tradición y la historia personal del artesano.</p>

        <h2>Principios de las Experiencias Auténticas</h2>
        
        <ul>
          <li><strong>Reciprocidad:</strong> El intercambio debe beneficiar a todas las partes involucradas</li>
          <li><strong>Respeto cultural:</strong> Honrar y valorar las tradiciones y creencias locales</li>
          <li><strong>Impacto positivo:</strong> Contribuir al bienestar de la comunidad y el ecosistema</li>
          <li><strong>Transparencia:</strong> Comunicación clara sobre expectativas y beneficios</li>
        </ul>

        <h2>Preparándose para una Experiencia Auténtica</h2>
        <p>Para maximizar el impacto positivo de tu experiencia:</p>
        
        <ul>
          <li>Investiga previamente sobre la cultura y tradiciones del lugar</li>
          <li>Aprende algunas palabras básicas en el idioma local</li>
          <li>Mantén una actitud abierta y receptiva</li>
          <li>Respeta los ritmos y protocolos comunitarios</li>
          <li>Considera cómo puedes contribuir más allá de tu visita</li>
        </ul>

        <h2>Festival NATUR: Catalizador de Conexiones Auténticas</h2>
        <p>En Festival NATUR creemos que el turismo puede ser una fuerza transformadora cuando se basa en la autenticidad y el respeto mutuo. Nuestro marketplace conecta viajeros conscientes con comunidades que han diseñado experiencias genuinas, asegurando que cada encuentro sea significativo y beneficioso para todos.</p>
      `,
      author: 'Carlos Mendoza',
      date: '12 de Noviembre, 2024', 
      readTime: '6 min lectura',
      category: 'Experiencias',
      tags: ['Experiencias', 'Cultura', 'Autenticidad', 'Colombia'],
      image: '🎭'
    },
    'tecnologia-turismo-sostenible': {
      title: 'Tecnología al Servicio del Turismo Sostenible',
      excerpt: 'Descubre cómo las innovaciones tecnológicas están revolucionando el turismo sostenible, desde aplicaciones de impacto hasta blockchain para transparencia.',
      content: `
        <p>La tecnología se ha convertido en una aliada fundamental para crear un turismo más sostenible, transparente y beneficioso para todos los actores involucrados. En Festival NATUR, exploramos cómo las innovaciones digitales están transformando la industria.</p>

        <h2>Innovaciones que Marcan la Diferencia</h2>
        
        <h3>Plataformas de Impacto Transparente</h3>
        <p>Las nuevas plataformas utilizan blockchain para garantizar la transparencia en la distribución de beneficios. Los viajeros pueden rastrear exactamente cómo su inversión en turismo beneficia a las comunidades locales y proyectos de conservación.</p>

        <h3>Inteligencia Artificial para Sostenibilidad</h3>
        <p>Algoritmos avanzados analizan patrones de viaje para optimizar rutas, reducir la huella de carbono y distribuir el turismo de manera más equitativa, evitando la saturación de destinos populares.</p>

        <h3>Realidad Aumentada Educativa</h3>
        <p>Las experiencias de RA permiten a los visitantes aprender sobre ecosistemas y culturas de manera inmersiva, sin impacto físico en el entorno. Imagina caminar por un bosque y ver información en tiempo real sobre especies endémicas.</p>

        <h2>Casos de Éxito Implementados</h2>
        
        <h3>Sistema de Créditos de Conservación</h3>
        <p>Algunas reservas naturales han implementado sistemas donde cada visita genera créditos de conservación verificables, que se invierten directamente en proyectos de restauración ecológica monitoreados por satélite.</p>

        <h3>Aplicaciones de Turismo Comunitario</h3>
        <p>Plataformas móviles conectan directamente a viajeros con familias anfitrionas, eliminando intermediarios y asegurando que los beneficios económicos lleguen directamente a las comunidades.</p>

        <h2>El Futuro Tecnológico del Turismo</h2>
        <p>Mirando hacia el futuro, vemos oportunidades emocionantes:</p>
        
        <ul>
          <li><strong>Gemelos digitales de ecosistemas:</strong> Modelos virtuales que permiten planificar el impacto del turismo antes de implementarlo</li>
          <li><strong>Pasaportes de sostenibilidad:</strong> Credenciales digitales que certifican las prácticas sostenibles de empresas y viajeros</li>
          <li><strong>Economía de tokens verdes:</strong> Sistemas de recompensas basados en blockchain para comportamientos sostenibles</li>
        </ul>

        <h2>Tecnología con Propósito</h2>
        <p>En Festival NATUR no vemos la tecnología como un fin en sí misma, sino como una herramienta poderosa para crear un turismo más justo, sostenible y transformador. Cada innovación debe servir a nuestro objetivo fundamental: proteger el planeta mientras conectamos personas y culturas.</p>
      `,
      author: 'Ana Gutiérrez',
      date: '10 de Noviembre, 2024',
      readTime: '7 min lectura', 
      category: 'Tecnología',
      tags: ['Tecnología', 'Innovación', 'Blockchain', 'IA'],
      image: '🚀'
    }
  };

  const currentPost = blogPosts[slug as keyof typeof blogPosts] || blogPosts['turismo-regenerativo-futuro'];
  
  const relatedPosts = Object.entries(blogPosts)
    .filter(([key]) => key !== slug)
    .slice(0, 2)
    .map(([key, post]) => ({ slug: key, ...post }));

  return (
    <div className="min-h-screen pb-16 md:pb-0 bg-gradient-to-br from-gray-900 via-black to-green-900">
      <HeaderButtons />
      {/* Inner header */}
      <div className="bg-black/50 backdrop-blur-sm border-b border-white/10 mt-14">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/historias" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center">
                <TreePine className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="font-bold text-white text-lg">Festival NATUR</h1>
                <p className="text-xs text-white/60">Blog</p>
              </div>
            </Link>
            <Button asChild variant="ghost" className="text-white/70 hover:text-white">
              <Link to="/noticias">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Volver al Blog
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Article Header */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            <div className="mb-6">
              <Badge className="bg-green-400/20 text-green-400 border-green-400/30 mb-4">
                {currentPost.category}
              </Badge>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              {currentPost.title}
            </h1>
            
            <p className="text-xl text-white/80 mb-8 leading-relaxed">
              {currentPost.excerpt}
            </p>

            <div className="flex flex-wrap items-center gap-6 text-white/60 text-sm mb-8">
              <div className="flex items-center space-x-2">
                <User className="w-4 h-4" />
                <span>{currentPost.author}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span>{currentPost.date}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>{currentPost.readTime}</span>
              </div>
            </div>

            {/* Social Actions */}
            <div className="flex items-center justify-between border-y border-white/10 py-4 mb-8">
              <div className="flex space-x-4">
                <Button size="sm" variant="ghost" className="text-white/60 hover:text-white">
                  <Heart className="w-4 h-4 mr-2" />
                  Me gusta
                </Button>
                <Button size="sm" variant="ghost" className="text-white/60 hover:text-white">
                  <Bookmark className="w-4 h-4 mr-2" />
                  Guardar
                </Button>
                <Button size="sm" variant="ghost" className="text-white/60 hover:text-white">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Comentar
                </Button>
              </div>
              <div className="flex space-x-2">
                <Button size="sm" variant="ghost" className="text-white/60 hover:text-white p-2">
                  <Twitter className="w-4 h-4" />
                </Button>
                <Button size="sm" variant="ghost" className="text-white/60 hover:text-white p-2">
                  <Facebook className="w-4 h-4" />
                </Button>
                <Button size="sm" variant="ghost" className="text-white/60 hover:text-white p-2">
                  <Share2 className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="pb-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-8 md:p-12">
                <div 
                  className="prose prose-lg prose-invert max-w-none"
                  dangerouslySetInnerHTML={{ __html: currentPost.content }}
                  style={{
                    color: 'rgba(255, 255, 255, 0.9)',
                  }}
                />
                
                {/* Tags */}
                <div className="mt-12 pt-8 border-t border-white/10">
                  <h4 className="text-white font-medium mb-4">Etiquetas</h4>
                  <div className="flex flex-wrap gap-2">
                    {currentPost.tags.map((tag, index) => (
                      <Badge 
                        key={index}
                        variant="outline" 
                        className="text-white/70 border-white/30 hover:bg-white/10"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-12 bg-white/5 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">Artículos Relacionados</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {relatedPosts.map((post, index) => (
                <motion.div
                  key={post.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300 h-full">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="w-12 h-12 text-2xl rounded-lg bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
                          {post.image}
                        </div>
                        <Badge variant="outline" className="text-white/70 border-white/30">
                          {post.category}
                        </Badge>
                      </div>
                      
                      <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">
                        {post.title}
                      </h3>
                      
                      <p className="text-white/70 text-sm mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="text-white/50 text-xs">
                          {post.readTime}
                        </div>
                        <Button asChild size="sm" variant="ghost" className="text-green-400 hover:text-green-300 p-0">
                          <Link to={`/blog/${post.slug}`}>
                            Leer más <ArrowRight className="w-3 h-3 ml-1" />
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Card className="bg-gradient-to-r from-green-600/20 to-blue-600/20 backdrop-blur-sm border-green-400/30 max-w-4xl mx-auto">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">
                Mantente Informado
              </h3>
              <p className="text-white/80 mb-6">
                Recibe los últimos artículos sobre turismo sostenible y noticias del Festival NATUR
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                <input
                  type="email"
                  placeholder="Tu email"
                  className="flex-1 px-4 py-2 bg-white/10 border border-white/30 rounded-lg text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-green-400"
                />
                <Button className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white px-6">
                  Suscribirse
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;