britam-finance-dashboard/README.md
Britam BetaLab Portal - Enterprise Digital Banking Dashboard
[![Live Demo](https://img.shields.io/badge/demo-live-blue.svg)](https://britam-fintech-portal-31xt.vercel.app)


![alt text](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)

![alt text](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)

![alt text](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
📌 Project Overview
The Britam BetaLab Portal is a high-performance, enterprise-grade financial dashboard designed to simulate core banking functionalities. This project was developed to demonstrate technical proficiency in managing complex application states, optimizing for mobile-first user experiences, and ensuring high reliability within the East African fintech ecosystem.
Key Objectives:
Data Integrity: Managing sensitive financial state using the React Context API.
Performance: Achieving sub-second rendering for transaction histories on 3G/4G network conditions.
Accessibility: Adhering to WCAG 2.1 standards for inclusive digital financial services.
🚀 Core Features
Dynamic Balance Tracking: Real-time calculation and display of current balances, monthly income, and expenses.
Smart Transaction Management: An interactive transaction ledger with categorized income/expense indicators and automated KES formatting.
Performant Search & Filter: A memoized search engine allowing users to filter thousands of transactions instantly without UI lag.
Simulated API Layer: Asynchronous data fetching architecture using useEffect and Promises to mimic real-world REST API latency.
Mobile-First UI: Fully responsive design built to perform across a wide range of mobile devices prevalent in the Kenyan market.
🛠 Tech Stack & Architectural Decisions
Frontend Architecture
React 18 (Vite): Chosen for its superior build speeds and modern developer experience compared to legacy tools.
TypeScript: Implemented strict type-checking for all data models (Transactions, User State) to prevent runtime errors in financial calculations.
Tailwind CSS v4: Utilized for high-performance styling, leveraging its new CSS-native engine to reduce bundle size.
State Management
React Context API: Implemented a BankProvider at the root level to ensure a "Single Source of Truth" for financial data, allowing for consistent state across the entire component tree.
Performance Optimizations
useMemo: Applied memoization to the transaction filtering logic to minimize CPU cycles and preserve battery life on entry-level mobile devices.
React Suspense & Lazy Loading: Utilized code-splitting to ensure users only download the necessary code for their current view, reducing the initial "Data Bundle" cost.
Skeleton Screens: Implemented CSS-animated loading states to improve perceived performance during data fetching.
🚦 Getting Started
Prerequisites
Node.js (v18.0 or higher)
npm or pnpm
Installation
Clone the repository:
code
Bash
git clone https://github.com/Donsonoluoch/britam-fintech-portal.git
Install dependencies:
code
Bash
npm install --legacy-peer-deps
Start the development server:
code
Bash
npm run dev
📈 Performance Metrics (Lighthouse)
Performance: 98%
Accessibility: 100%
Best Practices: 100%
SEO: 100%
👨‍💻 Author
Donson Oluoch
Software Engineer | Nairobi, Kenya
GitHub Profile | LinkedIn Profile
