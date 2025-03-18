import React from 'react';
import { AuthProvider } from './context/AuthContext';
import { useAuth } from './context/AuthContext';
import LoginForm from './components/auth/LoginForm';
import RegisterForm from './components/auth/RegisterForm';
import VotingInterface from './components/voting/VotingInterface';
import './App.css';

const AppContent = () => {
  const { user, logout } = useAuth();

  return (
    <div className="app-container">
      <h1>My Voting App</h1>

      {!user ? (
        <div className="auth-container">
          <LoginForm />
          <RegisterForm />
        </div>
      ) : (
        <div>
          <div className="user-info">
            <p>Welcome, {user.username} ({user.role})</p>
            <button onClick={logout}>Logout</button>
          </div>
          <VotingInterface />
        </div>
      )}

      <div className="footer">
        <h4>Our Team</h4>
        <div className="team-members">
          <div className="team-member">
            <span className="member-name">John Doe</span>
            <span className="member-role">Frontend Developer</span>
          </div>
          <div className="team-member">
            <span className="member-name">Jane Smith</span>
            <span className="member-role">Backend Developer</span>
          </div>
          <div className="team-member">
            <span className="member-name">Mike Johnson</span>
            <span className="member-role">UI/UX Designer</span>
          </div>
          <div className="team-member">
            <span className="member-name">Sarah Wilson</span>
            <span className="member-role">Project Manager</span>
          </div>
        </div>
      </div>
    </div>
  );
};

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;
