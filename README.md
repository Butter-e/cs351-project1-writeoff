# WriteOff

WriteOff is a fictional stationery e-commerce website created for CS 351 Project 1. The website was developed as a single-page React application and allows users to browse stationery products, view individual product details, add products to a shopping cart, and interact with account creation and login forms.

## Features

- Responsive single-page React application
- 25 stationery products
- Product pagination
- Individual product detail views
- Product color and option selection
- Quantity and stock validation
- Shopping cart with quantity controls
- Automatic cart totals
- Account login form
- Create Account form with client-side validation
- Responsive Bootstrap navigation and layouts
- Product images and product information loaded from JSON
- Conditional rendering for product and interface elements

## Technologies Used

- React
- JavaScript
- HTML
- CSS
- Bootstrap
- JSON
- Google Cloud Storage
- Git and GitHub

## Running the Project Locally

Install the project dependencies:

    npm install

Start the development server:

    npm start

The application will then run locally in a web browser.

## Production Build

To create a production build:

    npm run build

The generated static files are placed in the `build` directory and can be deployed to a static hosting service.

## Deployment

The production version of WriteOff is deployed as a static website using Google Cloud Storage.

## Project Structure

- `src/components` - Reusable React components
- `src/views` - Main application views
- `src/data` - Product JSON data
- `public/images/products` - Product image assets
- `App.js` - Main application state and view management
- `App.css` - Application styling and responsive design

## Author

Created for CS 351 Project 1.