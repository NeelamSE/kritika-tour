export default function Card({
  content,
  idx,
  onClick,
  onMouseEnter,
  onMouseLeave,
  imgsrc,
}) {
  let style = {};

  if (idx === 0)
    style = {
      opacity: 0.4,
      transform: "translateX(-20%) scale(0.8)",
      zIndex: 0,
    };
  if (idx === 1) style = { zIndex: 1 };
  if (idx === 2)
    style = {
      opacity: 0.4,
      transform: "translateX(20%) scale(0.8)",
      zIndex: 0,
    };

  return (
    <div
      className="card flip-card"
      style={{
        ...style,
      }}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >

      <div class="flip-card-inner">
        <div
          class="flip-card-front"
          style={{
            backgroundImage: `url(${imgsrc})`,
            backgroundPosition: "fixed",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        ></div>
        <div class="flip-card-back"></div>
      </div>
    
    </div>
  );
}
