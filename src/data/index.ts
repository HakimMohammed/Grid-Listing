export type Product = {
  id: string;
  label: string;
  description: string;
  price: number;
  category: string;
  image: string;
};

export const products: Product[] = [
  {
    id: "1",
    label: "Wireless Headphones Pro",
    description: "High-quality wireless headphones with noise cancellation",
    price: 199.99,
    category: "Audio",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop",
  },
  {
    id: "2",
    label: "Smart Watch Ultra",
    description: "Advanced smartwatch with health monitoring features",
    price: 299.99,
    category: "Wearables",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=300&fit=crop",
  },
  {
    id: "3",
    label: "Laptop Stand Aluminum",
    description: "Ergonomic laptop stand made from premium aluminum",
    price: 79.99,
    category: "Accessories",
    image:
      "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=300&h=300&fit=crop",
  },

  // Fashion Forward Products
  {
    id: "4",
    label: "Designer Casual Shirt",
    description: "Premium cotton casual shirt for everyday wear",
    price: 89.99,
    category: "Shirts",
    image:
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=300&h=300&fit=crop",
  },
  {
    id: "5",
    label: "Stylish Denim Jeans",
    description: "Comfortable and stylish denim jeans with perfect fit",
    price: 129.99,
    category: "Jeans",
    image:
      "https://images.unsplash.com/photo-1542272604-787c3835535d?w=300&h=300&fit=crop",
  },
  {
    id: "6",
    label: "Leather Handbag",
    description: "Elegant leather handbag with multiple compartments",
    price: 199.99,
    category: "Accessories",
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=300&fit=crop",
  },

  // Green Thumb Gardens Products
  {
    id: "7",
    label: "Organic Fertilizer Set",
    description: "Complete organic fertilizer set for healthy plant growth",
    price: 49.99,
    category: "Fertilizers",
    image:
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=300&h=300&fit=crop",
  },
  {
    id: "8",
    label: "Garden Tool Kit",
    description: "Professional garden tool kit with essential tools",
    price: 159.99,
    category: "Tools",
    image:
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=300&h=300&fit=crop",
  },

  // BookWorm's Paradise Products
  {
    id: "9",
    label: "Programming Fundamentals",
    description: "Comprehensive guide to programming fundamentals",
    price: 59.99,
    category: "Technology",
    image:
      "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=300&h=300&fit=crop",
  },
  {
    id: "10",
    label: "Modern Fiction Collection",
    description: "Collection of bestselling modern fiction novels",
    price: 39.99,
    category: "Fiction",
    image:
      "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=300&fit=crop",
  },

  // SportZone Pro Products
  {
    id: "11",
    label: "Professional Tennis Racket",
    description: "High-performance tennis racket for competitive play",
    price: 249.99,
    category: "Tennis",
    image:
      "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=300&h=300&fit=crop",
  },
  {
    id: "12",
    label: "Running Shoes Pro",
    description: "Professional running shoes with advanced cushioning",
    price: 179.99,
    category: "Footwear",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=300&fit=crop",
  },
  {
    id: "13",
    label: "Artisan Coffee Blend",
    description: "Premium artisan coffee blend from around the world",
    price: 29.99,
    category: "Coffee",
    image:
      "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=300&h=300&fit=crop",
  },
  {
    id: "14",
    label: "Gourmet Chocolate Box",
    description: "Luxury chocolate collection with exotic flavors",
    price: 79.99,
    category: "Sweets",
    image:
      "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=300&h=300&fit=crop",
  },
];
