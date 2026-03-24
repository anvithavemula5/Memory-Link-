const { useState } = React;

function App() {
    const [view, setView] = useState('login');

    // --- LOGIN SCREEN ---
    if (view === 'login') {
        return (
            <div className="login-screen">
                <div className="login-logo">☀️</div>
                <h1 style={{fontFamily: 'Lora', fontSize: '32px'}}>CareConnect</h1>
                <p style={{marginBottom: '40px', color: '#666'}}>Warmth, clarity, and trust.</p>
                <div className="who-cards">
                    <div className="who-card" onClick={() => setView('patient')}>
                        <span style={{fontSize: '30px'}}>👤</span>
                        <h3>Patient</h3>
                    </div>
                    <div className="who-card" onClick={() => setView('family')}>
                        <span style={{fontSize: '30px'}}>🏠</span>
                        <h3>Family</h3>
                    </div>
                </div>
            </div>
        );
    }

    // --- PATIENT DASHBOARD ---
    if (view === 'patient') {
        return (
            <div className="app-container">
                <div className="header">
                    <button className="back-btn" onClick={() => setView('login')}>← Log Out</button>
                    <h1 style={{fontFamily: 'Lora'}}>Hello, Good Morning!</h1>
                    <p>It's Tuesday, March 24th</p>
                </div>
                
                <div className="section-card">
                    <h3>📅 Your Daily Routine</h3>
                    <div className="routine-item">✅ 8:00 AM - Take morning meds</div>
                    <div className="routine-item">🥣 8:30 AM - Breakfast with tea</div>
                    <div className="routine-item">🚶 10:00 AM - Short walk</div>
                </div>

                <div className="feature-grid">
                    <div className="feature-item" onClick={() => alert('Starting Brain Games...')}>
                        <span style={{fontSize: '24px'}}>🧩</span>
                        <div>Play Games</div>
                    </div>
                    <div className="feature-item" onClick={() => alert('Opening Memory Bank...')}>
                        <span style={{fontSize: '24px'}}>📸</span>
                        <div>Memories</div>
                    </div>
                </div>
            </div>
        );
    }

    // --- FAMILY PORTAL ---
    if (view === 'family') {
        return (
            <div className="app-container">
                <div className="header">
                    <button className="back-btn" onClick={() => setView('login')}>← Exit Portal</button>
                    <h1 style={{fontFamily: 'Lora'}}>Family Portal</h1>
                    <p>Tracking wellness & joy</p>
                </div>
                
                <div className="section-card">
                    <h3>📊 Recent Activity</h3>
                    <p style={{fontSize: '14px', color: '#666'}}>All medications were taken on time today.</p>
                </div>

                <div className="feature-grid">
                    <div className="feature-item" onClick={() => alert('Voice Memo Mode Active')}>
                        <span style={{fontSize: '24px'}}>🎙️</span>
                        <div>Add Voice Memo</div>
                    </div>
                    <div className="feature-item" onClick={() => alert('Selecting Photos...')}>
                        <span style={{fontSize: '24px'}}>🖼️</span>
                        <div>Upload Photos</div>
                    </div>
                </div>
            </div>
        );
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
