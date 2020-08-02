import AbstractComponent from "./site-abstract-component";

const getTopRatedTemplate = () => {
  return `<section class="films-list--extra">
      <h2 class="films-list__title">Top rated</h2>
      <div class="films-list__container"></div>
    </section>`;
};

export default class TopRatedFilmsComponent extends AbstractComponent {
  getTemplate() {
    return getTopRatedTemplate();
  }
}
