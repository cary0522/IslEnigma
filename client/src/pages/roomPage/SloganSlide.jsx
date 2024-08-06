const SloganSlide = ({ data, index }) => {
  const { image, title, desc } = data
  return (
    <div class={`roomSlogan__slide`}>
      <img src={image} alt="Room Slogan 1" />
      <div class="roomSlogan__content">
        <h2>{title}:</h2>
        <h3>{desc}</h3>
      </div>
    </div>
  )
}

export default SloganSlide
