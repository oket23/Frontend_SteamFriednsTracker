# Steam Friends Tracker — Frontend Client 🖥️

![React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=flat-square&logo=typescript)
![Vite](https://img.shields.io/badge/Vite-Bundler-646CFF?style=flat-square&logo=vite)
![Tailwind](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=flat-square&logo=tailwind-css)

The modern, responsive web interface for the **Steam Friends Tracker** platform. Built with **React** and **TypeScript**, it provides a real-time dashboard to monitor friends' activity, search for games, and view detailed Steam profiles.

---

## ✨ Key Features

* **Real-Time Dashboard:** Live updates of friends' statuses (Online, Offline, In-Game) using **SignalR** WebSocket connection.
* **Steam Integration:** Secure login via **Steam OpenID** (handled via API).
* **Smart Caching:** deeply integrated **TanStack Query** (React Query) for caching API responses, minimizing network requests, and handling loading/error states.
* **Global State Management:** Uses **Zustand** for lightweight client-side state (filters, search queries, UI preferences).
* **Game Catalog:** Search interface with filtering by region and language, leveraging localized Steam store data.
* **Internationalization (i18n):** Full support for multiple languages (English & Ukrainian).
* **Responsive Design:** Mobile-first UI built with **Tailwind CSS**.

## 🛠 Tech Stack

| Category | Technology | Purpose |
| :--- | :--- | :--- |
| **Core** | React 18, TypeScript | Component-based UI Architecture. |
| **Build Tool** | Vite | Lightning-fast HMR and bundling. |
| **State (Server)** | TanStack Query v5 | Async state management, caching, and synchronization. |
| **State (Client)** | Zustand | Global store for filters and auth state. |
| **Real-time** | @microsoft/signalr | WebSocket client for receiving live updates. |
| **Styling** | Tailwind CSS | Utility-first CSS framework. |
| **HTTP Client** | Axios | API requests with interceptors for JWT injection. |
| **Localization** | i18next | Translation management. |
| **Icons** | Lucide React | Modern, lightweight icon set. |

## 🚀 Getting Started

### Prerequisites
* [Node.js](https://nodejs.org/) (v18 or higher)
* [npm](https://www.npmjs.com/) or yarn

### 1. Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/oket23/Frontend_SteamFriednsTracker
cd frontend-steam-friends-tracker
npm install
```

### 2. Environment Configuration

Create a `.env` file in the root directory. You can use the provided example file as a template:

```bash
cp .env.example .env
```

**Required Variables:**

```ini
# URL of your Gateway API (Backend)
VITE_SERVER_URL=https://localhost:5001
```

### 3. Running Locally

Start the development server with Hot Module Replacement (HMR):

```bash
npm run dev
```

The application will be available at `http://localhost:5173`.

## 📂 Project Structure

The project follows a feature-based folder structure for scalability and maintainability:

```text
src/
├── assets/             # Static assets (images, global styles)
├── common/             # Shared UI components (Portals, Modals)
├── components/         # Global layout components (Header, Sidebar)
├── config/             # App configuration (API endpoints, Router, i18n)
├── helpers/            # Utility functions (Date formatting, CSS merging)
├── hooks/              # Global custom hooks (useDebounce, useModal)
├── locals/             # Translation JSON files (en, uk)
├── providers/          # React Context Providers (QueryClient, Auth)
├── screens/            # Page views (Feature modules)
│   ├── auth/           # Login & Callback logic
│   ├── friends/        # Friends list & Real-time logic
│   ├── games/          # Game search & catalog
│   ├── game-details/   # Single game view
│   └── profile/        # User profile view
├── services/           # API service layer (Axios calls)
├── store/              # Zustand stores (useAuthStore, useGamesStore)
├── types/              # TypeScript interfaces & types
└── ui/                 # Reusable UI kit (Buttons, Inputs, Pagination)
```

## 🧩 Key Architecture Concepts

### Data Fetching Strategy
We strictly separate **Server State** from **Client State**:
* **Server State:** Handled by **TanStack Query** (`useFriendsQuery`, `useGamesQuery`). It manages caching, background refetching, and stale-while-revalidate logic.
* **Client State:** Handled by **Zustand** (`useGamesStore`, `useAuthStore`). It holds synchronous UI state like search inputs, active filters, and session tokens.

### Real-Time Updates
The application establishes a **SignalR** connection directly within the `useFriendsQuery` hook.
1. When the backend detects a status change (e.g., a friend starts playing *Dota 2*), it pushes a new snapshot.
2. The frontend receives this event and instantly updates the React Query cache via `queryClient.setQueryData`.
3. The UI re-renders automatically without triggering a new HTTP request.

## 📦 Building for Production

To create an optimized production build:

```bash
npm run build
```

The output will be generated in the `dist/` directory, ready to be served by Nginx, Apache, or Docker.

## 🔗 Related Projects

- Backend API: https://github.com/oket23/Backend_SteamFriendsTracker

## 📜 License

This project is licensed under the MIT License.




