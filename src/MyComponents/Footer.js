import React from 'react';

export const Footer = () => {
  return (
    <footer className="footer d-flex justify-content-between px-5 py-3 bg-light" >
      <div className="footer-left">
        Version: 1.0.0
      </div>
      <div className="logo">
        <img src="/todo-logo.png" alt="Logo" style={{ height: '20px', width: 'auto' }} />
      </div>
      <div className="footer-right">
        My Todo List
      </div>
    </footer>
  );
}