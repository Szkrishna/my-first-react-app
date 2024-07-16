import React from 'react';

export const Footer = () => {
  let styleName = {
    background: 'black',
    color: "#fafafa"
  }
  return (
    <footer className="footer d-flex justify-content-between px-5 py-3" style={styleName}>
      <div className="footer-left">
        Version: 1.0.0
      </div>
      <div className="logo ms-5">
        <img src="/todo-logo.png" alt="Logo" style={{ height: '20px', width: 'auto' }} />
      </div>
      <div className="footer-right">
        Copyright &copy; My Todo List
      </div>
    </footer>
  );
}