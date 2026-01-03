// Old Clerk middleware
const { clerkClient } = require('@clerk/clerk-sdk-node');

// New Firebase middleware
const admin = require('./firebase-admin');

async function verifyFirebaseToken(req, res, next) {
  const token = req.headers.authorization?.split('Bearer ')[1];
  
  if (!token) {
    return res.status(401).json({ error: 'No token provided' });
  }

  try {
    const decodedToken = await admin.auth().verifyIdToken(token);
    req.user = decodedToken; // Contains uid, email, etc.
    next();
  } catch (error) {
    return res.status(401).json({ error: 'Invalid token' });
  }
}