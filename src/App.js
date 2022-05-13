const movies = [
  {
    name: "avengers",
    available: 5
  },
  {
    name: "Terminator",
    available: 5
  },
  {
    name: "marvel",
    available: 5
  }
];

export default function App() {
  return (
    <div>
      <h2>peliculas </h2>
      {movies.map((movies) => (
        <h3> {movies.name} </h3>
      ))}
    </div>
  );
}
