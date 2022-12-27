export default function Card({ message }) {
  return (
    <>
      <div class="card text-bg-light mb-3 ms-3" style={{ maxWidth: "18rem" }}>
        <div class="card-header">{message.name} Said At {message.createdAt} : </div>
        <div class="card-body">
          <h5 class="card-title">{message.title}</h5>
          <p class="card-text">{message.message}</p>
        </div>
      </div>
    </>
  );
}
