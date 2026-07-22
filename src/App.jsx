import useFetch from "./hooks/useFetch";
import "./App.css";
function App() {
  const { data, loading, error } = useFetch(
    "https://mocki.io/v1/41cdad0f-582f-47a9-993c-60bc9da7c7f6"
  );
  if (loading) {
    return <h2>Loading...</h2>;
  }
  if (error) {
    return <h2>{error}</h2>;
  }
  return (
    <div className="container">
      <div className="photo">PHOTO</div>
      <div className="cards">
        {data.map((user) => (
          <div className="card">
            <img src={user.img_src}/>
            <p>Photo {user.id}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;