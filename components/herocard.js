export default function HeroCard({ hero }) {
    return (
      <article>
        <img src={hero.image.url} alt={hero.name} />
        <h1>{hero.name}</h1>
        <p>
          Intelligence: <span style={{ width: `${hero.powerstats.intelligence}%`, backgroundColor: '#F9B32F' }}></span>
        </p>
        <p>
          Strength: <span style={{ width: `${hero.powerstats.strength}%`, backgroundColor: '#FF7C6C' }}></span>
        </p>
      </article>
    );
  }
  