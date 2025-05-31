const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const env = require('env');

// Load environment variables
env.config();

// Import routes
const authRoutes = require('./routes/auth');
const taskRoutes = require('./routes/tasks');
const { startScheduler } = require('./services/schedulerService');

// Initialize Express app
const app = express();

// Middleware
app.use(cors({
  origin: process.env.NODE_ENV === 'production' 
    ? [process.env.FRONTEND_URL] // Production frontend URL
    : ['http://localhost:3000'], // Development frontend URL
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
  maxAge: 86400 // 24 hours
}));
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/todo-app', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => { 
  console.log('MongoDB connected');
  // Start the task scheduler after successful database connection
  startScheduler();
})
.catch(err => console.error('MongoDB connection error:', err));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/tasks', taskRoutes);


// Default route
app.get('/', (req, res) => {
  res.send('Todo API is running');
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 