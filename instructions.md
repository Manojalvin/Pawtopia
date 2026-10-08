Build a **simple, clean, modern, and stylish React e-commerce website for pet products**, inspired by the overall shopping experience and layout patterns of **Supertails**, but with completely original branding, colors, copy, UI details, and assets.

The goal is to create a polished **pet-products shopping website** that feels like a real e-commerce application rather than a basic college demo.

## 1. Tech Stack

Use:

* React
* Vite
* JavaScript or TypeScript
* React Router for navigation
* CSS / Tailwind CSS for styling
* Lucide React or another lightweight icon library
* Local mock product data â€” no backend required
* localStorage for cart/login state if useful

Keep the code beginner-friendly, organized, and easy to modify.

Do NOT over-engineer the application.

---

# 2. Website Structure

Create approximately **4 main pages**:

### Page 1 â€” Home / Landing Page

Create a visually attractive pet-commerce homepage.

Include:

**Navbar**

* Original pet-store logo/name
* Home
* Dogs
* Cats
* Food
* Toys
* Accessories
* Search icon/search bar
* Account/Login
* Cart icon with item count

Make the navbar sticky while scrolling.

**Hero section**

* Large attractive pet-related image/illustration
* Heading such as:
  "Everything Your Pet Needs, All in One Place"
* Short supporting text
* "Shop Now" CTA
* Secondary CTA such as "Explore Products"

**Category section**

Create visually appealing category cards:

* Dog Food
* Cat Food
* Treats
* Toys
* Grooming
* Beds & Accessories

Each category should be clickable and filter/navigate to relevant products.

**Featured Products**

Display product cards in a responsive grid.

Each card should contain:

* Product image
* Product name
* Short description
* Rating
* Price
* Original price if applicable
* Discount badge
* Wishlist/heart button
* "Add to Cart" button

Cards should have subtle hover animations.

---

# 3. Product Shopping Experience

This is very important.

The website should behave like a proper modern e-commerce website.

When the user clicks a product card:

### Option A â€” Product Details Page

Navigate to:

`/product/:id`

Create a proper product details page containing:

* Large product image
* Product name
* Rating
* Number of reviews
* Price
* Discount
* Product description
* Available sizes/variants if applicable
* Quantity selector
* Add to Cart button
* Buy Now button
* Wishlist button
* Product information
* Delivery information
* Customer reviews

The page should feel similar to the product pages users see on major e-commerce websites.

Add a "You may also like" section at the bottom.

---

# 4. Product Cards / Pop-up Interaction

When the user hovers over a product card:

* Slightly lift the card
* Show subtle shadow
* Show quick-action buttons
* Heart/wishlist icon should appear

When the user clicks the product image/card, navigate to the product details page.

When the user clicks "Add to Cart":

* Add the item to the cart
* Update the cart counter
* Show a small toast notification such as:
  "Added to your cart!"

Do NOT reload the page.

---

# 5. Shop / Product Listing

Create a product listing experience accessible from the navbar.

Example:

`/shop`

Display all products in a responsive grid.

Add:

### Filters

* Category
* Pet type
* Price range
* Brand
* Rating

### Sorting

* Recommended
* Price: Low to High
* Price: High to Low
* Rating
* Newest

On mobile, filters should collapse into a button/drawer.

---

# 6. Cart / Checkout

Create a checkout page accessible through the cart.

Route:

`/checkout`

The checkout should have:

### Cart Summary

Show:

* Product image
* Product name
* Price
* Quantity controls
* Remove button
* Item subtotal

### Order Summary

Show:

* Subtotal
* Discount
* Delivery fee
* Total

Then create a simple checkout form:

### Delivery Details

* Full Name
* Phone Number
* Email
* Address
* City
* State
* Pincode

### Payment Method

Provide visually styled options:

* UPI
* Credit/Debit Card
* Cash on Delivery

This is only a frontend demo, so payment does NOT need to actually process.

Add a large:

**"Place Order"**

button.

After clicking it, display a clean order-success screen/modal:

"Order placed successfully! ðŸ¾"

with an order number and button:

"Continue Shopping"

---

# 7. Login / Signup

Create:

`/login`

Make a clean modern authentication page.

Include:

### Login

* Email
* Password
* Remember me
* Forgot password?
* Login button

And:

"Don't have an account? Sign up"

### Signup

* Full Name
* Email
* Phone
* Password
* Confirm Password
* Create Account

Since this is a frontend project, authentication can be simulated using localStorage.

After login, change the navbar from:

"Login"

to:

"Hi, [Name]"

---

# 8. Design Style

The website should look **clean, friendly, premium, and playful**, suitable for a modern pet brand.

Take general inspiration from the shopping experience of **Supertails**, but do NOT copy its exact UI, branding, logo, text, images, or visual identity.

Use an original visual identity.

Suggested aesthetic:

* Warm off-white background
* Soft green
* Cream
* Light orange
* Subtle pink accents
* Dark charcoal text
* Rounded cards
* Large rounded buttons
* Soft shadows
* Lots of whitespace
* Friendly typography

Avoid making it overly colorful.

The overall feeling should be:

**Modern + Friendly + Premium + Pet-focused**

---

# 9. Animations

Use subtle animations only.

Examples:

* Product card hover
* Button hover
* Image zoom on product hover
* Smooth page transitions
* Cart notification
* Modal animations
* Navbar interactions

Do NOT use excessive animations that make the website feel childish or slow.

---

# 10. Responsive Design

The website MUST work properly on:

* Desktop
* Laptop
* Tablet
* Mobile

Desktop should use a spacious e-commerce layout.

Mobile should have:

* Compact navbar
* Hamburger menu
* 2-column product grid
* Collapsible filters
* Mobile-friendly checkout
* Sticky cart/CTA where appropriate

Make sure nothing overflows horizontally.

---

# 11. Product Data

Create around **15â€“20 realistic mock products**.

Example categories:

### Dogs

* Premium Puppy Food
* Adult Dog Food
* Dog Treats
* Chew Toy
* Dog Bed
* Dog Collar
* Grooming Kit

### Cats

* Premium Cat Food
* Cat Treats
* Cat Toy
* Cat Scratcher
* Cat Bed
* Cat Litter

Each product should have:

```js
{
  id,
  name,
  category,
  petType,
  price,
  originalPrice,
  rating,
  reviews,
  image,
  description,
  sizes,
  brand
}
```

Use reliable image URLs or suitable placeholder images.

---

# 12. Important User Flow

The final application should support this complete flow:

Home

â†“

Browse categories

â†“

Shop products

â†“

Filter/sort products

â†“

Click product

â†“

Product Details

â†“

Select quantity

â†“

Add to Cart

â†“

Cart / Checkout

â†“

Enter delivery details

â†“

Select payment method

â†“

Place Order

â†“

Order Success

Also support:

Home â†’ Login â†’ Signup â†’ Account

---

# 13. Navbar Behavior

The navbar should remain consistent across pages.

Include:

**Logo | Shop | Dogs | Cats | Categories | Search | Account | Cart**

Search should actually work.

When the user searches for:

"dog food"

the product grid should filter to relevant products.

Cart icon should show the number of products currently in the cart.

---

# 14. Code Organization

Use a clean structure similar to:

src/
â”œâ”€â”€ components/
â”‚   â”œâ”€â”€ Navbar
â”‚   â”œâ”€â”€ Footer
â”‚   â”œâ”€â”€ ProductCard
â”‚   â”œâ”€â”€ ProductGrid
â”‚   â”œâ”€â”€ CategoryCard
â”‚   â”œâ”€â”€ CartItem
â”‚   â””â”€â”€ Toast
â”‚
â”œâ”€â”€ pages/
â”‚   â”œâ”€â”€ Home
â”‚   â”œâ”€â”€ Shop
â”‚   â”œâ”€â”€ ProductDetails
â”‚   â”œâ”€â”€ Login
â”‚   â”œâ”€â”€ Signup
â”‚   â”œâ”€â”€ Checkout
â”‚   â””â”€â”€ OrderSuccess
â”‚
â”œâ”€â”€ data/
â”‚   â””â”€â”€ products
â”‚
â”œâ”€â”€ context/
â”‚   â””â”€â”€ CartContext
â”‚
â”œâ”€â”€ App
â”œâ”€â”€ main
â””â”€â”€ styles

Use reusable components instead of duplicating UI.

---

# 15. Important Quality Requirements

The application should:

* Actually navigate between pages
* Actually add/remove products from cart
* Actually update quantities
* Actually calculate totals
* Actually filter products
* Actually sort products
* Actually search products
* Actually handle login/signup UI
* Persist cart data using localStorage
* Have working buttons
* Have no dead navigation links
* Have no console errors
* Have responsive layouts

Do not create buttons that only look functional.

---

# 16. Final Polish

Before finishing:

1. Run the application.
2. Test every route.
3. Test adding multiple products.
4. Test removing products.
5. Test quantity changes.
6. Test checkout calculations.
7. Test search.
8. Test filters.
9. Test login/signup.
10. Test mobile responsiveness.
11. Fix any console errors.
12. Make sure images load.
13. Make sure there are no broken links.
14. Make sure the UI feels consistent across every page.

The final result should feel like a **small but polished real-world pet e-commerce website**, not a generic React tutorial project.

Prioritize **clean UI, smooth UX, functional interactions, and simplicity** over adding unnecessary features.
