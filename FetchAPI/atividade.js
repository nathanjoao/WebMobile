document.getElementById("cidadeForm").addEventListener('submit', async (event) => {
    event.preventDefault();
    const cidade = document.getElementById('cidade').value;
    const URL = `http://api.weatherapi.com/v1/current.json?key=980a7167e19c48f8b69193034242511&q=${cidade}&aqi=no`;
    try {
        const response = await fetch(URL);
        if (!response.ok) {
            throw new Error('Erro ao buscar cidade!');
        }
        const data = await response.json();
        document.getElementById('name').textContent = `Cidade: ${data.location.name}`;
        document.getElementById('country').textContent = `País: ${data.location.country}`;
        document.getElementById('region').textContent = `Região: ${data.location.region}`;
        document.getElementById('temp_c').textContent = `Temperatura: ${data.current.temp_c} °C`;
        document.getElementById('condition').textContent = `Condição: ${data.current.condition.text}`;
        document.getElementById('humidity').textContent = `Humidade: ${data.current.humidity}%`;
        document.getElementById('date').textContent = `Data e horário: ${data.location.localtime}`;
        document.getElementById('resultado').classList.remove('hidden');
    } catch (error) {
        alert(`Ocorreu um erro: ${error.message}`);
    }
});
