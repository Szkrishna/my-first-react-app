import React from 'react';
import './Home.css';
import todoImage from './todo-bg.jpg';

export const Home = () => {
  return (
    <div className="home-container">
    {/* <img src={todoImage} alt="Todo App" className="home-image" /> */}
      <header className="home-header">
        <h1>Welcome to the Todo App</h1>
        <p>Manage your tasks efficiently and stay organized.</p>
      </header>
      <section className="home-content">
        <h2>Features</h2>
        <ul>
          <li>Add new tasks easily.</li>
          <li>View and edit your tasks.</li>
          <li>Delete tasks you no longer need.</li>
        </ul>
      </section>
    </div>
  );
};

// export default Home;
