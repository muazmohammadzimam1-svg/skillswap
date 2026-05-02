# SkillSwap

A full-stack platform for skill sharing and learning. Users can connect with others, share expertise, take courses, and exchange knowledge.

## Features

- **User Authentication**: Secure signup/login with JWT
- **Skill Marketplace**: Browse and post skills for exchange
- **Mentorship**: One-on-one mentoring sessions
- **Courses**: Create and enroll in courses with content and quizzes
- **Real-time Chat**: Messaging between users with Socket.IO
- **Wallet & Credits**: Credit-based system for purchases
- **Payment Integration**: SSLCommerz for secure transactions
- **Availability Management**: Schedule availability for sessions
- **Analytics**: Track user activity and engagement
- **Notifications**: Real-time and email notifications

## Tech Stack

### Frontend
- React 18 with Vite
- Tailwind CSS
- Axios for API calls
- Socket.IO client for real-time communication

### Backend
- Node.js with Express
- MongoDB Atlas database
- JWT authentication
- Socket.IO for real-time features
- Nodemailer for email services

### Deployment
- Frontend: Vercel
- Backend: Vercel
- Database: MongoDB Atlas

## Project Structure

```
SkillSwap-main/
├── backend/              # Express server & API routes
│   ├── models/          # MongoDB schemas
│   ├── routes/          # API endpoints
│   ├── middleware/      # Auth & validation
│   ├── utils/           # Helper functions
│   ├── server.js        # Main server file
│   └── package.json
├── client/              # React frontend
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/    # API client
│   │   └── App.jsx
│   ├── index.html
│   └── package.json
├── package.json         # Root workspace config
├── vercel.json         # Vercel deployment config
├── render.yaml         # Render deployment config
└── README.md
```

## Setup

### Prerequisites
- Node.js 18+
- MongoDB Atlas account
- Vercel/Render account for deployment

### Local Development

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Setup environment variables**:
   - Create `.env` in `backend/` with:
     ```
     MONGO_URI=<your_mongodb_uri>
     JWT_SECRET=<your_secret>
     NODE_ENV=development
     CLIENT_ORIGIN=http://localhost:5173
     ```

3. **Run both services**:
   ```bash
   npm run dev
   ```
   Frontend runs on http://localhost:5173
   Backend runs on http://localhost:5000

### Production Deployment

#### Frontend (Vercel)
```bash
cd client
npx vercel --prod --yes
```

#### Backend (Vercel)
```bash
cd backend
npx vercel --prod --yes
```

**Required Environment Variables** (set in Vercel):
- `MONGO_URI`: MongoDB Atlas connection
- `JWT_SECRET`: Secure random string
- `CLIENT_ORIGIN`: Frontend URL
- `EMAIL_USER`: Gmail for notifications
- `EMAIL_PASSWORD`: Gmail app password
- `SSLCOMMERZ_STORE_ID`: Payment gateway ID
- `SSLCOMMERZ_STORE_PASSWORD`: Payment gateway password

## Available Scripts

### Root Level
```bash
npm run dev              # Run both backend and frontend
npm run build           # Build frontend for production
npm start               # Start backend only
```

### Backend
```bash
npm run dev             # Development server with nodemon
npm start               # Production server
```

### Frontend
```bash
npm run dev             # Development server
npm run build           # Production build
npm run preview         # Preview production build
```

## API Documentation

Key endpoints:
- `POST /api/auth/signup` - Register user
- `POST /api/auth/login` - Login user
- `GET /api/users/profile` - Get user profile
- `GET /api/skills` - List all skills
- `POST /api/courses` - Create course
- `GET /api/chat/messages` - Get chat history
- `POST /api/wallet/buy-credits` - Purchase credits

See `backend/routes/` for complete API details.

## Live Links

- **Frontend**: https://skillswap-eta-seven.vercel.app
- **Backend API**: https://backend-2wzfmyh4k-muaz-mohammad-zimams-projects.vercel.app
- **GitHub**: https://github.com/muazmohammadzimam1-svg/skillswap

## Contributing

1. Create a feature branch
2. Commit changes
3. Push to GitHub
4. Create a pull request

## License

MIT License

---

**Questions?** Check the backend and client README files for more details.
