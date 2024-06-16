const url = 'https://sky-scanner3.p.rapidapi.com/flights/search-one-way?fromEntityId=PARI';
const options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': '6512c22008mshb5c8367612a7810p1d183djsn16ebc47133dd',
        'x-rapidapi-host': 'sky-scanner3.p.rapidapi.com'
    }
};

async function fetchData() {
    try {
        const response = await fetch(url, options);
        const result = await response.text();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}

fetchData();












