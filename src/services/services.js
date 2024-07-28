import { fetchCountriesFields, fetchCountriesByRegion } from '../services/fetch';

const regions = await fetchCountriesFields('region');

export const getUniqueRegions = () => {
    
  // Mengambil semua nilai dari field 'region' dan menggabungkannya
  const allRegions = regions.flatMap(item => item.region).sort();

  // Menggunakan Set untuk menghilangkan duplikat
  const uniqueRegions = Array.from(new Set(allRegions));

  return uniqueRegions;
}

export const getCountriesByRegion = async (region) => {
    return await fetchCountriesByRegion(region);
}

export default { getUniqueRegions, getCountriesByRegion }