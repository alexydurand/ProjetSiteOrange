import logoPowerApps from "../../assets/powerAppsLogo.png";
import logoPowerAutomate from "../../assets/powerAutomateLogo.png";
import logoSharePoint from "../../assets/sharePointLogo.png";

function Carousel() {
  return (
    <div id="carouselExamplePause" class="carousel slide" data-bs-ride="carousel" data-bs-pause="false">
  <div class="carousel-action-bar">
    <button type="button" class="btn btn-icon carousel-control-play-pause pause" data-bs-target="#carouselExamplePause" data-bs-play-text="Play Carousel" data-bs-pause-text="Pause Carousel" title="Pause Carousel">
      <span class="visually-hidden">Pause Carousel</span>
    </button>
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#carouselExamplePause" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExamplePause" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExamplePause" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={logoPowerApps} class="d-block w-100" alt="..."></img>
    </div>
    <div class="carousel-item">
      <img src={logoPowerAutomate} class="d-block w-100" alt="..."></img>
    </div>
    <div class="carousel-item">
      <img src={logoSharePoint} class="d-block w-100" alt="..."></img>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExamplePause" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExamplePause" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
  );
}

export default Carousel;
