app.post('/api/consulta-precos-prazos', async (req, res) => {
  const API_URL = 'https://www.sgpweb.com.br/novo/api/consulta-precos-prazos?chave_integracao=ffa965130d58fa60da40fd1fed0da47e';

  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(req.body),
    });
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Erro ao consultar preços e prazos:', error);
    res.status(500).json({ error: 'Erro ao consultar preços e prazos' });
  }
});

