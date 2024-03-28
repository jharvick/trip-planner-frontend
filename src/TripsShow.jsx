export function TripsShow(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdateTrip(props.trip.id, params, () => event.target.reset());
  };

  const handleClick = () => {
    props.onDestroyTrip(props.trip);
  };

  return (
    <div>
      <h1>Trip information</h1>
      <p>Name: {props.trip.name}</p>
      <p>Url: {props.trip.url}</p>
      <p>Width: {props.trip.width}</p>
      <p>Height: {props.trip.height}</p>
      <form onSubmit={handleSubmit}>
        <div>
          Name: <input defaultValue={props.trip.name} name="name" type="text" />
        </div>
        <div>
          Url: <input defaultValue={props.trip.url} name="url" type="text" />
        </div>
        <div>
          Width: <input defaultValue={props.trip.width} name="width" type="text" />
        </div>
        <div>
          Height: <input defaultValue={props.trip.height} name="height" type="text" />
        </div>
        <button type="submit">Update trip</button>
      </form>
      <button onClick={handleClick}>Destroy trip</button>
    </div>
  );
}
