import React, { useState, useEffect } from 'react';

function App() {
  const [classifica, setClassifica] = useState([
    { classe: '1A', punti: 80 },
    { classe: '1B', punti: 65 },
    { classe: '1C', punti: 92 },
    { classe: '1D', punti: 78 },
    { classe: '1E', punti: 88 },
    { classe: '1F', punti: 75 },
    { classe: '2A', punti: 60 },
    { classe: '2B', punti: 72 },
    { classe: '2C', punti: 85 },
    { classe: '2D', punti: 95 },
    { classe: '2E', punti: 68 },
    { classe: '2F', punti: 90 },
    { classe: '3A', punti: 82 },
    { classe: '3B', punti: 76 },
    { classe: '3C', punti: 89 },
    { classe: '3D', punti: 70 },
    { classe: '3E', punti: 94 },
    { classe: '3F', punti: 84 },
  ]);

  const [mostraClassifica, setMostraClassifica] = useState(true);

  useEffect(() => {
    // Ordina la classifica in ordine decrescente
    const classificaOrdinata = classifica.slice().sort((a, b) => b.punti - a.punti);
    setClassifica(classificaOrdinata);
  }, [classifica]);

  const backgroundImageStyle = {
    backgroundImage: 'url("https://static.vecteezy.com/ti/vettori-gratis/p3/695413-modello-senza-cuciture-di-pizza-isolato-su-sfondo-nero-vettoriale.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    color: '',
    padding: '20px',
  };

  const classificaStyle = {
    marginLeft: '1200px',
    marginRight: 'auto',
    marginTop: '20px',
    backgroundColor: '#ffffff',
    padding: '20px',
    borderRadius: '15px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    columns: '2',
  };

  const tableStyle = {
    width: '100%',
    borderCollapse: 'collapse',
    marginTop: '15px',
  };

  const thTdStyle = {
    padding: '12px',
    textAlign: 'center',
    borderBottom: '1px solid #ddd',
  };

  const headerStyle = {
    background: '#f2f2f2',
  };

  return (
    <div style={backgroundImageStyle}>
      <div>
        {mostraClassifica && (
          <div style={classificaStyle}>
            <center><h1>Classifica</h1></center>
            <table style={tableStyle}>
              <thead style={headerStyle}>
                <tr>
                  <th style={thTdStyle}>Posizione</th>
                  <th style={thTdStyle}>Classe</th>
                  <th style={thTdStyle}>Punti</th>
                </tr>
              </thead>
              <tbody>
                {classifica.map((row, index) => (
                  <React.Fragment key={row.classe}>
                    <tr style={index < 3 ? { background: '#ffcccb' } : {}}>
                      <td style={thTdStyle}>{index + 1}</td>
                      <td style={thTdStyle}>{row.classe}</td>
                      <td style={thTdStyle}>{row.punti}</td>
                    </tr>
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
