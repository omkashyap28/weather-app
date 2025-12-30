const Card = ({ title, value }) => (
  <div>
    <h3 className="text-center">
      {title}
    </h3>
    <h4 className="text-center">
      {value ?? null}
    </h4>
  </div>
)

export default Card;