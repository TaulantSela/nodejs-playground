# 🟢🛒 Node.js Playground

A small Express shop I built in February 2022 while learning Node.js. It's a practice repo:
server-rendered EJS pages in an MVC layout, with products saved to a JSON file instead of a
database.

## What works

- **Shop pages:** `/` and `/products` list every product in `data/products.json` as cards.
- **Add a product:** `/admin/add-product` is a form (title, image URL, price, description).
  Submitting it appends the product to `data/products.json`.
- **Admin list:** `/admin/products` shows the same products with Edit and Delete buttons.
- A **404 page** for unknown routes, and a slide-out mobile menu (`public/js/main.js`).

## How it's organised

| Path | What's in it |
|------|--------------|
| `app.js` | Express setup: EJS view engine, body parsing, static files from `public/`, routes, 404 |
| `routes/` | `admin.js` (mounted at `/admin`) and `shop.js` |
| `controllers/` | Handlers that load products and render the views |
| `models/product.js` | A `Product` class that reads and writes `data/products.json` |
| `views/` | EJS templates, with shared partials in `views/includes/` |
| `public/` | Stylesheets and the mobile-menu script |

Earlier commits try Pug and Handlebars too. Both are still in `package.json`, but only EJS is
used now.

## Run it

```bash
npm install
npm start   # nodemon app.js, then open http://localhost:3000
```

## Unfinished bits

- Cart, Orders and the admin Edit page are placeholders. The Edit, Delete and Add to Cart buttons
  point to routes that don't exist yet, so they land on the 404 page.
- The checkout route is registered as `/chceckout` (typo), and its handler references an
  undefined `products`, so it returns a 500.
- `postAddProduct` passes price and description to the `Product` constructor in the wrong order,
  so the two fields are swapped when saved.
- `views/shop/product-detail.ejs` exists but no route renders it.
