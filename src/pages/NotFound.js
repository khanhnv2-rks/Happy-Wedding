// src/pages/NotFound.js

import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
  return (
    <div className="not-found" style={{ textAlign: 'center', marginTop: '100px' }}>
      <h1>404</h1>
      <p>Trang bạn tìm kiếm không tồn tại 😢</p>
      <Link to="/">🔙 Quay về trang chủ</Link>
    </div>
  );
};

export default NotFound;
