# 🧾 React Invoice Application

Welcome to the **React Invoice Application** project! This is a simple yet functional React app that helps simulate an invoice layout. It's built with modular components, uses Context API for state management, and has a clean and responsive design.

## 🚀 Features

- **🧩 Modular Components:** Reusable and customizable components like `InvoiceHeader`, `ServiceDescription`, `PriceDetails`, and `Footer` to keep your code DRY and organized.
- **🔗 Context API:** Simplified state management across components with React's Context API. No more props drilling!
- **💅 Stylish Design:** Leveraging Bootstrap for responsive layouts, `@fontsource/rubik` for a modern font, and `classnames` for dynamic class management. We've also added support for SASS to make styling more powerful.
- **🔧 Dummy Data:** Pre-loaded with sample data that you can easily swap out for real data from an API or database.

## 🛠️ Project Setup

Setting up the project is a breeze. Just follow these steps:

1. **Clone the Repository:**

    ```bash
    git clone https://github.com/your-username/react-invoice-app.git
    cd react-invoice-app
    ```

2. **Install Dependencies:**

    We’ve got everything you need, from React to SASS:

    ```bash
    npm install
    ```

    This will install all the required dependencies, including:
    - `@fontsource/rubik`: For the sleek Rubik font.
    - `bootstrap`: For responsive, mobile-first design.
    - `classnames`: To dynamically manage classes.
    - `sass`: For more powerful and flexible styling (installed as a dev dependency).

3. **Run the Application:**

    You’re just one command away from seeing the app in action:

    ```bash
    npm start
    ```

    The app will be up and running at `http://localhost:3000` in your browser.

## 🧩 Components Breakdown

### **InvoiceHeader**

Displays the invoice number, customer details, and company information. You can easily customize it to fit your needs.

### **ServiceDescription**

Lists all the services provided, including descriptions and prices. It’s built to handle multiple service items dynamically.

### **PriceDetails**

Shows the breakdown of costs: subtotal, VAT, and total amount. Perfect for any financial summary.

### **Footer**

Contains payment information and the terms & conditions. Customize it to reflect your own company policies.

## 🌐 Using Context API

We’ve implemented React’s Context API to handle the state seamlessly across components. Here’s how you can tap into it:

```javascript
const InvoiceContext = createContext();
export const useInvoice = () => useContext(InvoiceContext);
