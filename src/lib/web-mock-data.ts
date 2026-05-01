export type Product = {
  id: string;
  name: string;
  price: number;
  location: string;
  distance: string;
  category: string;
  unit: string;
  stock: number;
  image: string;
  description: string;
  seller: {
    name: string;
    avatar: string;
    rating: number;
  };
};

export const categories = [
  { id: "1", name: "Crayfish" },
  { id: "2", name: "Prawns" },
  { id: "3", name: "Bonga Fish" },
  { id: "4", name: "Dried Fish" },
  { id: "5", name: "Dried Snail" },
  { id: "6", name: "Crab" },
];

export const promotions = [
  {
    id: "1",
    title: "Flash Deals",
    subtitle: "Up to 30% OFF",
    image:
      "https://i.pinimg.com/736x/0a/5a/87/0a5a871faa6c9230eedbebaed7a32835.jpg",
  },
  {
    id: "2",
    title: "Verified Plugs",
    subtitle: "Top Rated Only",
    image:
      "https://i.pinimg.com/1200x/e6/70/34/e670340ed56a39be36ffe0865303facb.jpg",
  },
  {
    id: "3",
    title: "Fresh Arrivals",
    subtitle: "Morning Catch",
    image: "https://images.unsplash.com/photo-1559737558-2f5a35f4523b?w=800",
  },
];

export const products: Product[] = [
  {
    id: "1",
    name: "Oron Crayfish (Paint Bucket)",
    price: 18500,
    location: "Angola Hall, OAU",
    distance: "0.2km",
    category: "Crayfish",
    unit: "bucket",
    stock: 12,
    image: "https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?w=800",
    description:
      "Clean, sand-free Oron crayfish. Highly flavorful and perfect for soups and stews.",
    seller: { name: "Mama T Seafood", avatar: "https://i.pravatar.cc/150?u=mama", rating: 4.9 },
  },
  {
    id: "2",
    name: "Smoked Bonga Fish (Bundle)",
    price: 4500,
    location: "Town-Gboro, Ife",
    distance: "3.5km",
    category: "Bonga Fish",
    unit: "bundle",
    stock: 25,
    image: "https://images.unsplash.com/photo-1598514982205-f36b96d1e8d4?w=800",
    description: "Well-dried and smoked Bonga fish with strong aroma and rich taste.",
    seller: { name: "The Fish Plug", avatar: "https://i.pravatar.cc/150?u=plug", rating: 4.7 },
  },
  {
    id: "3",
    name: "Jumbo Tiger Prawns (1kg)",
    price: 12500,
    location: "Moremi Hall, OAU",
    distance: "0.5km",
    category: "Prawns",
    unit: "kg",
    stock: 8,
    image: "https://images.unsplash.com/photo-1559737558-2f5a35f4523b?w=800",
    description: "Extra large tiger prawns, flash-frozen and fresh.",
    seller: { name: "Moremi Plugs", avatar: "https://i.pravatar.cc/150?u=moremi", rating: 4.8 },
  },
  {
    id: "4",
    name: "Dried Catfish (Medium)",
    price: 7500,
    location: "Oduduwa Estate",
    distance: "1.8km",
    category: "Dried Fish",
    unit: "set",
    stock: 15,
    image: "https://i.pinimg.com/736x/40/20/bd/4020bdfdc874672ed71e972ee366a48b.jpg",
    description: "Oven-dried catfish, clean and low-moisture.",
    seller: { name: "Aiye Seafoods", avatar: "https://i.pravatar.cc/150?u=aiye", rating: 4.5 },
  },
  {
    id: "5",
    name: "Large Dried Snails (Set of 5)",
    price: 15000,
    location: "Awo Hall, OAU",
    distance: "0.4km",
    category: "Dried Snail",
    unit: "set",
    stock: 10,
    image: "https://i.pinimg.com/736x/8b/f9/37/8bf937c5c3b0f88b9f6ca828e019dd32.jpg",
    description: "Properly dried giant snails for soups and stews.",
    seller: { name: "Awo Hub", avatar: "https://i.pravatar.cc/150?u=awo", rating: 4.9 },
  },
  {
    id: "6",
    name: "Live Blue Mud Crabs (1kg)",
    price: 9000,
    location: "Mayfair, Ife",
    distance: "2.5km",
    category: "Crab",
    unit: "kg",
    stock: 5,
    image:
      "https://i.pinimg.com/1200x/f0/67/7e/f0677e32b066a9880793d662f59aea70.jpg",
    description: "Fresh mud crabs, best for seafood boils.",
    seller: { name: "Crab King", avatar: "https://i.pravatar.cc/150?u=crabking", rating: 4.6 },
  },
];

export const conversations = [
  {
    id: "1",
    name: "Mama T Seafood",
    avatar: "https://i.pravatar.cc/150?u=mama",
    lastMessage: "I have the Oron crayfish in stock now.",
    time: "2 mins ago",
    unread: 1,
  },
  {
    id: "2",
    name: "The Fish Plug",
    avatar: "https://i.pravatar.cc/150?u=plug",
    lastMessage: "The Bonga fish is very dry, don't worry.",
    time: "1 hour ago",
    unread: 0,
  },
];

export const orders = [
  { id: "ORD-5524", product: products[0], status: "Ongoing", date: "April 28, 2026" },
  { id: "ORD-4212", product: products[1], status: "Completed", date: "April 25, 2026" },
];
