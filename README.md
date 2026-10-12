# Nagesha R — Portfolio Backend API

High-performance Node.js / Express / TypeScript backend service providing API endpoints, rate limiting, and email dispatch for **Nagesha R's** developer portfolio.

---

## ⚡ Tech Stack

- **Runtime**: Node.js (ES Modules, TypeScript)
- **Framework**: Express.js
- **Security & Middleware**: Helmet, CORS, Express-Rate-Limit, Morgan
- **Email Delivery**: Nodemailer with Gmail SMTP / SSL delivery and automated retry queue
- **Deployment Target**: Render / Railway / Docker / AWS

---

## 📡 API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/health` | Service uptime and status |
| `GET` | `/api/v1/profile` | Nagesha's profile, bio, stats, and links |
| `GET` | `/api/v1/projects` | AI engineering projects and live deployments |
| `GET` | `/api/v1/projects/:slug` | Project case study details |
| `GET` | `/api/v1/skills` | Categorized capabilities and competencies |
| `GET` | `/api/v1/experience` | Timeline and education records |
| `POST` | `/api/v1/contact` | Contact message submission with rate limiting |
| `GET` | `/api/v1/analytics/stats` | Visitor statistics and metrics |

---

## 🛠️ Local Development

```bash
# 1. Install dependencies
npm install

# 2. Start dev server with hot reload
npm run dev

# 3. Build for production
npm run build

# 4. Start production server
npm start
```
