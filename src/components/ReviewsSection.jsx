import { useState, useEffect } from 'react';
import AnimatedSection from './AnimatedSection';
import ReviewCard from './ReviewCard';

const ReviewsSection = () => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('/reviews.json')
      .then(response => response.json())
      .then(data => {
        setReviews(data);
        setIsLoading(false);
      })
      .catch(error => {
        console.error("Error al cargar las reseñas:", error);
        setIsLoading(false);
      });
  }, []);

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
        staggerChildren: 0.2,
      },
    },
  };

  // No renderizar la sección si no hay reseñas y no está cargando.
  if (!isLoading && reviews.length === 0) {
    return null;
  }
  
  return (
    <AnimatedSection variants={sectionVariants}>
      <div id="reviews">
        <h2 className="text-4xl font-bold text-center mb-12 text-primary">
          Co-workers & Clients Reviews
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default ReviewsSection;

