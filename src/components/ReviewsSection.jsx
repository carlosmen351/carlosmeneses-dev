import { useState, useEffect } from 'react';
import { motion } from 'framer-motion'; // Importa motion para las animaciones
import ReviewCard from '../components/ReviewCard'; // Importa el componente unificado

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