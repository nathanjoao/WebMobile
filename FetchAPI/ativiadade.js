document.getElementById("cidadeForm").addEventListener('submit', async (event) => {
    event.preventDefault();
    const cidade = document.getElementById('cidade').value;
    const URL = `http://api.weatherapi.com/v1/current.json?key=980a7167e19c48f8b69193034242511&q=${ci dade}&aqi=no`;
    try {
        const response = await fetch(URL);
        if (!response.ok) {
            throw new Error('Erro ao buscar cidade!');
        }
        const data = await response.json();
        if (data.erro) {
            alert('Cidade não encontrada!');
            return;
        }
        document.getElementById('name').textContent = `Cidade: ${data.logradouro}`;
        document.getElementById('country').textContent = `País: ${data.localidade}`;
        document.getElementById('region').textContent = `Estado: ${data.bairro}`;
        document.getElementById('temp_c').textContent = `Temperatura: ${data.temp_c}`

    } catch (error) {
        alert(`Ocorreu um erro: ${error.message}`);
    }
});