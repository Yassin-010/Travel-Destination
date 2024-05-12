import data from './../../data/db.json';
import './Tours.css';
import Tour from './tour/Tour';
function Tours() {
    
  return (
    <>
      {data.map(city => (
        <Tour id={city.id} name={city.name} image={city.image} />
      ))}
    </>
  );
}

export default Tours;