import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown, ChevronUp } from 'lucide-react';
import { PRODUCTS, BRANDS, CATEGORIES } from '../data/products';
import ProductGrid from '../components/ProductGrid';

const SORT_OPTIONS = [
  { value: 'recommended', label: 'Recommended' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Top Rated' },
  { value: 'newest', label: 'Newest First' },
];

const PET_TYPES = ['Dog', 'Cat', 'All'];

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [sort, setSort] = useState('recommended');
  const [filterCategory, setFilterCategory] = useState(searchParams.get('category') || '');
  const [filterPet, setFilterPet] = useState(searchParams.get('pet') || '');
  const [filterBrand, setFilterBrand] = useState('');
  const [filterRating, setFilterRating] = useState('');
  const [priceMax, setPriceMax] = useState(5000);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [expandedSections, setExpandedSections] = useState({
    category: true, petType: true, price: true, brand: true, rating: true
  });

  const searchQuery = searchParams.get('search') || '';

  // Sync URL params to state
  useEffect(() => {
    const cat = searchParams.get('category') || '';
    const pet = searchParams.get('pet') || '';
    setFilterCategory(cat);
    setFilterPet(pet);
  }, [searchParams]);

  const toggleSection = (key) => {
    setExpandedSections(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const clearFilters = () => {
    setFilterCategory('');
    setFilterPet('');
    setFilterBrand('');
    setFilterRating('');
    setPriceMax(5000);
    setSort('recommended');
    setSearchParams({});
  };

  const filteredSorted = useMemo(() => {
    let result = [...PRODUCTS];

    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      result = result.filter(p =>
        p.name.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.brand.toLowerCase().includes(q) ||
        p.petType.toLowerCase().includes(q) ||
        p.description?.toLowerCase().includes(q)
      );
    }

    if (filterCategory) {
      result = result.filter(p =>
        p.category.toLowerCase() === filterCategory.toLowerCase()
      );
    }

    if (filterPet && filterPet !== 'All') {
      result = result.filter(p =>
        p.petType === filterPet || p.petType === 'All'
      );
    }

    if (filterBrand) {
      result = result.filter(p => p.brand === filterBrand);
    }

    if (filterRating) {
      result = result.filter(p => p.rating >= parseFloat(filterRating));
    }

    result = result.filter(p => p.price <= priceMax);

    switch (sort) {
      case 'price-asc': result.sort((a, b) => a.price - b.price); break;
      case 'price-desc': result.sort((a, b) => b.price - a.price); break;
      case 'rating': result.sort((a, b) => b.rating - a.rating); break;
      case 'newest': result.sort((a, b) => b.reviews - a.reviews); break;
      default: break;
    }

    return result;
  }, [searchQuery, filterCategory, filterPet, filterBrand, filterRating, priceMax, sort]);

  const allCategories = [...new Set(PRODUCTS.map(p => p.category))];

  const FilterPanel = () => (
    <div className="filter-sidebar" style={mobileFiltersOpen ? {
      display: 'block', position: 'fixed', inset: 0, zIndex: 1000,
      borderRadius: 0, overflowY: 'auto'
    } : {}}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
        <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem' }}>Filters</h3>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <button
            onClick={clearFilters}
            style={{ fontSize: '0.82rem', color: 'var(--accent)', fontWeight: 700, cursor: 'pointer' }}
            id="clear-filters-btn"
          >
            Clear all
          </button>
          {mobileFiltersOpen && (
            <button onClick={() => setMobileFiltersOpen(false)} aria-label="Close filters">
              <X size={18} />
            </button>
          )}
        </div>
      </div>

      {/* Category */}
      <div className="filter-block">
        <div className="filter-title" onClick={() => toggleSection('category')} style={{ cursor: 'pointer' }}>
          Category {expandedSections.category ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
        </div>
        {expandedSections.category && allCategories.map(cat => (
          <label key={cat} className="filter-option">
            <input
              type="radio"
              name="category"
              checked={filterCategory === cat}
              onChange={() => setFilterCategory(filterCategory === cat ? '' : cat)}
            />
            {cat}
          </label>
        ))}
      </div>

      {/* Pet Type */}
      <div className="filter-block">
        <div className="filter-title" onClick={() => toggleSection('petType')} style={{ cursor: 'pointer' }}>
          Pet Type {expandedSections.petType ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
        </div>
        {expandedSections.petType && PET_TYPES.map(pt => (
          <label key={pt} className="filter-option">
            <input
              type="radio"
              name="petType"
              checked={filterPet === pt || (pt === 'All' && filterPet === '')}
              onChange={() => setFilterPet(pt === 'All' ? '' : pt)}
            />
            {pt === 'All' ? 'All Pets' : `${pt}s`}
          </label>
        ))}
      </div>

      {/* Price */}
      <div className="filter-block">
        <div className="filter-title" onClick={() => toggleSection('price')} style={{ cursor: 'pointer' }}>
          Max Price {expandedSections.price ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
        </div>
        {expandedSections.price && (
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
              <span>₹0</span>
              <span style={{ fontWeight: 700, color: 'var(--primary)' }}>₹{priceMax.toLocaleString()}</span>
            </div>
            <input
              type="range"
              min={200}
              max={5000}
              step={100}
              value={priceMax}
              onChange={e => setPriceMax(Number(e.target.value))}
              style={{ width: '100%', accentColor: 'var(--primary)' }}
              aria-label="Maximum price filter"
              id="price-range-filter"
            />
          </div>
        )}
      </div>

      {/* Brand */}
      <div className="filter-block">
        <div className="filter-title" onClick={() => toggleSection('brand')} style={{ cursor: 'pointer' }}>
          Brand {expandedSections.brand ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
        </div>
        {expandedSections.brand && BRANDS.map(brand => (
          <label key={brand} className="filter-option">
            <input
              type="checkbox"
              checked={filterBrand === brand}
              onChange={() => setFilterBrand(filterBrand === brand ? '' : brand)}
            />
            {brand}
          </label>
        ))}
      </div>

      {/* Rating */}
      <div className="filter-block">
        <div className="filter-title" onClick={() => toggleSection('rating')} style={{ cursor: 'pointer' }}>
          Min Rating {expandedSections.rating ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
        </div>
        {expandedSections.rating && ['4.5', '4.0', '3.5'].map(r => (
          <label key={r} className="filter-option">
            <input
              type="radio"
              name="rating"
              checked={filterRating === r}
              onChange={() => setFilterRating(filterRating === r ? '' : r)}
            />
            {'⭐'.repeat(Math.round(parseFloat(r)))} {r}+
          </label>
        ))}
      </div>
    </div>
  );

  return (
    <main className="section" style={{ paddingTop: '2rem' }}>
      <div className="container">
        {/* Page Header */}
        <div style={{ marginBottom: '2rem' }}>
          <h1 style={{ fontSize: '2rem', marginBottom: '0.4rem' }}>
            {searchQuery ? `Search results for "${searchQuery}"` :
              filterCategory ? filterCategory :
              filterPet ? `${filterPet} Products` :
              'All Products'}
          </h1>
          <p style={{ color: 'var(--text-secondary)' }}>
            {filteredSorted.length} product{filteredSorted.length !== 1 ? 's' : ''} found
          </p>
        </div>

        <div className="shop-layout">
          {/* Sidebar */}
          <FilterPanel />

          {/* Product Area */}
          <div>
            {/* Toolbar */}
            <div className="shop-toolbar">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
                {/* Mobile filter toggle */}
                <button
                  className="btn btn-secondary btn-sm"
                  onClick={() => setMobileFiltersOpen(true)}
                  id="mobile-filter-btn"
                  style={{ display: 'none' }}
                >
                  <SlidersHorizontal size={15} /> Filters
                </button>
                {/* Active filter chips */}
                {filterCategory && (
                  <span style={{
                    display: 'flex', alignItems: 'center', gap: '0.35rem',
                    background: 'var(--primary-light)', color: 'var(--primary)',
                    padding: '0.3rem 0.75rem', borderRadius: 'var(--radius-full)',
                    fontSize: '0.82rem', fontWeight: 700
                  }}>
                    {filterCategory}
                    <X size={12} style={{ cursor: 'pointer' }} onClick={() => setFilterCategory('')} />
                  </span>
                )}
                {filterPet && (
                  <span style={{
                    display: 'flex', alignItems: 'center', gap: '0.35rem',
                    background: '#FFF1E8', color: 'var(--accent)',
                    padding: '0.3rem 0.75rem', borderRadius: 'var(--radius-full)',
                    fontSize: '0.82rem', fontWeight: 700
                  }}>
                    {filterPet}s
                    <X size={12} style={{ cursor: 'pointer' }} onClick={() => setFilterPet('')} />
                  </span>
                )}
                {searchQuery && (
                  <span style={{
                    display: 'flex', alignItems: 'center', gap: '0.35rem',
                    background: 'var(--secondary-light)', color: '#92700A',
                    padding: '0.3rem 0.75rem', borderRadius: 'var(--radius-full)',
                    fontSize: '0.82rem', fontWeight: 700
                  }}>
                    "{searchQuery}"
                    <X size={12} style={{ cursor: 'pointer' }} onClick={() => setSearchParams({})} />
                  </span>
                )}
              </div>

              <select
                className="sort-select"
                value={sort}
                onChange={e => setSort(e.target.value)}
                aria-label="Sort products"
                id="sort-select"
              >
                {SORT_OPTIONS.map(opt => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
            </div>

            <ProductGrid products={filteredSorted} />
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #mobile-filter-btn { display: flex !important; }
          .shop-layout { grid-template-columns: 1fr !important; }
          .filter-sidebar:not(.mobile-open) { display: none; }
        }
      `}</style>
    </main>
  );
}
