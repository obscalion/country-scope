const API_BASE_URL = 'https://restcountries.com/v3.1';

export const fetchCountries = async () => {
    try {
        // Mengambil data dari API
        const response = await fetch(API_BASE_URL + '/all?fields=name,capital,flags,continents,population,cca3');

        // Mengecek apakah response berhasil
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // Mengubah response menjadi JSON
        const data = await response.json();

        // Mengembalikan data
        return data;
    } catch (error) {
        // Menangani error jika ada
        console.error('Error fetching countries data:', error);
        throw error;  // Melempar ulang error untuk ditangani lebih lanjut jika diperlukan
    }
}

export const fetchSearchedCountries = async (keyword) => {
    try {
        // Mengambil data dari API
        const response = await fetch(API_BASE_URL + '/name/' + keyword + '?fields=name,capital,flags,continents,population,cca3');

        // Mengecek apakah response berhasil
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // Mengubah response menjadi JSON
        const data = await response.json();

        // Mengembalikan data
        return data;
    } catch (error) {
        // Menangani error jika ada
        console.error('Error fetching countries data:', error);
        throw error;  // Melempar ulang error untuk ditangani lebih lanjut jika diperlukan
    }
}

export const fetchCountriesFields = async (fields) => {
    try {
        // Mengambil data dari API
        const response = await fetch(API_BASE_URL + '/all?fields=' + fields);

        // Mengecek apakah response berhasil
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // Mengubah response menjadi JSON
        const data = await response.json();

        // Mengembalikan data
        return data;
    } catch (error) {
        // Menangani error jika ada
        console.error('Error fetching countries data:', error);
        throw error;  // Melempar ulang error untuk ditangani lebih lanjut jika diperlukan
    }
}



export const fetchCountriesByRegion = async (region) => {
    try {
        // Mengambil data dari API
        const response = await fetch(API_BASE_URL + '/region/' + region + '?fields=name,capital,flags,continents,population,cca3');

        // Mengecek apakah response berhasil
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // Mengubah response menjadi JSON
        const data = await response.json();

        // Mengembalikan data
        return data;
    } catch (error) {
        // Menangani error jika ada
        console.error('Error fetching countries data:', error);
        throw error;  // Melempar ulang error untuk ditangani lebih lanjut jika diperlukan
    }
}