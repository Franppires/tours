import Tour from './Tour';

export default function Tours( {tours} ) {
  return (
    <section>
      <div className="title">
        <h2>Tours</h2>
        <div className="underline"></div>
      </div>
      <div>
        {tours.map((tour) => {
          return <Tour key={tour.id} tour={tour} />
        })}
      </div>
    </section>
  )
}
