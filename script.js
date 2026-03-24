const { useState } = React;

function App() {
    const [view, setView] = useState('login');

    return (
        <div className="app">
            {view === 'login' && (
                <div className="login-screen">
                    <div className="login-brand">
                        <div className="login-logo">☀️</div>
                        <h1 className="login-title">CareConnect</h1>
                        <p className="login-tagline">Warmth, clarity, and trust.</p>
                    </div>

                    <div className="who-cards">
                        <div className="who-card" onClick={() => setView('patient')}>
                            <span className="who-icon">👤</span>
                            <div className="who-name">Patient</div>
                            <div className="who-desc">Access your care</div>
                        </div>

                        <div className="who-card" onClick={() => setView('family')}>
                            <span className="who-icon">🏠</span>
                            <div className="who-name">Family</div>
                            <div className="who-desc">View updates</div>
                        </div>
                    </div>
                </div>
            )}

            {view === 'patient' && (
                <div style={{padding: '40px', textAlign: 'center'}}>
                    <h1>Welcome, Patient</h1>
                    <button onClick={() => setView('login')}>← Back to Login</button>
                </div>
            )}

            {view === 'family' && (
                <div style={{padding: '40px', textAlign: 'center'}}>
                    <h1>Family Portal</h1>
                    <button onClick={() => setView('login')}>← Back to Login</button>
                </div>
            )}
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
