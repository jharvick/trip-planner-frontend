export function TripsIndex(props) {
  return (
    <div>
      <h1>All trips</h1>
      {props.trips.map((trip) => (
        <div key={trip.id}>
          <h2>{trip.name}</h2>
          <img src={trip.url} />
          <p>Width: {trip.width}</p>
          <p>Height: {trip.height}</p>
          <button onClick={() => props.onShowTrip(trip)}>More info</button>
        </div>
      ))}
    </div>
  );
}
