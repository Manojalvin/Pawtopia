import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function CategoryCard({ category }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/shop?category=${encodeURIComponent(category.name)}`);
  };

  return (
    <div
      className="category-card"
      onClick={handleClick}
      role="button"
      tabIndex={0}
      onKeyDown={e => e.key === 'Enter' && handleClick()}
      aria-label={`Browse ${category.name}`}
      id={`category-${category.id}`}
    >
      <div className="category-img-box">
        <img
          src={category.image}
          alt={category.name}
          loading="lazy"
          onError={e => { e.target.src = 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=200&q=70'; }}
        />
      </div>
      <div className="category-name">{category.name}</div>
      <div className="category-desc">{category.description}</div>
    </div>
  );
}
