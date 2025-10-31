const jwt = require('jsonwebtoken');
require('dotenv').config();

// 🔐 Lấy secret key từ .env
const SECRET_KEY = process.env.JWT_SECRET || 'DAIKA_SECRET';

// 🧱 Middleware: Xác thực token
exports.authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader?.split(' ')[1]; // Bearer TOKEN

  if (!token) {
    return res.status(401).json({ message: 'Không có token, vui lòng đăng nhập!' });
  }

  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    req.user = decoded; // Lưu user đã decode
    next();
  } catch (err) {
    console.error('JWT Error:', err.message);
    return res.status(403).json({ message: 'Token không hợp lệ hoặc đã hết hạn!' });
  }
};

// 🧱 Middleware: Kiểm tra quyền truy cập (role)
exports.authorizeRoles = (...allowedRoles) => {
  return (req, res, next) => {
    if (!req.user) {
      return res.status(401).json({ message: 'Chưa xác thực!' });
    }

    if (!allowedRoles.includes(req.user.role)) {
      return res.status(403).json({ message: 'Không có quyền truy cập!' });
    }

    next();
  };
};
