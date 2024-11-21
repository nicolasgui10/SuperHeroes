import { useEffect, useState } from 'react';
import HeroCard from '../components/HeroCard';

const API_BASE_URL = 'https://superheroapi.com/api.php/4995282617154105';

export default function Home() {
  const [heroes, setHeroes] = useState([]);

  useEffect(() => {
    const fetchHeroes = async () => {
      const ids = [200, 465]; // IDs dos heróis a serem exibidos
      const fetchedHeroes = await Promise.all(
        ids.map(id => fetch(`${API_BASE_URL}/${id}`).then(res => res.json()))
      );
      setHeroes(fetchedHeroes);
    };

    fetchHeroes();
  }, []);

  return (
    <div id="heroes">
      {heroes.map(hero => (
        <HeroCard key={hero.id} hero={hero} />
      ))}
    </div>
  );
}
