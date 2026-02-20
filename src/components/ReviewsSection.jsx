import { useState, useEffect } from 'react';
import { motion } from 'framer-motion'; // Importa motion para las animaciones

// Componente para mostrar una reseña individual
const ReviewCard = ({ review }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover={{
        y: -5, // Eleva la tarjeta ligeramente
        boxShadow: "0 15px 30px rgba(0, 0, 0, 0.3)", // Sombra más pronunciada
      }}
      transition={{ type: "spring", stiffness: 300, damping: 10 }}
      className="bg-background border border-gray-800 dark:border-gray-200 rounded-lg p-6 shadow-lg flex flex-col items-center text-center"
    >
      <img
        src={review.user.avatar_url}
        alt={review.user.login}
        className="w-16 h-16 rounded-full mb-4 border-2 border-primary"
      />
      <p className="text-text text-lg italic mb-4">"{review.body}"</p>
      <a
        href={review.html_url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary hover:underline font-semibold"
      >
        — {review.user.login}
      </a>
    </motion.div>
  );
};

// Componente principal para la sección de reseñas
const ReviewsSection = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch('/reviews.json');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setReviews(data);
      } catch (e) {
        console.error("Error fetching reviews:", e);
        setError("No se pudieron cargar las reseñas. Inténtalo de nuevo más tarde.");
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  if (loading) {
    return (
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <p className="text-text text-xl">Cargando reseñas...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <p className="text-red-500 text-xl">{error}</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 px-4 bg-background">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {reviews.map((review) => <ReviewCard key={review.id} review={review} />)}
      </div>
    </section>
  );
};

export default ReviewsSection;