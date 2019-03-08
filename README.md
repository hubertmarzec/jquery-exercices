# exercise 4 - portfolio

## run

$ serve src

## resources

## input data
const portfolio = [{
  title : ...,
  description: ...,
  technology: {
    js: true,
    html: true,
    react: true
  },
  mainPhoto: ...,

}
}]

## task
- [ ] na podstawie przekazanego json'a generujemy slidera
  - sam slide
  - strzałki lewo, prawo
- [ ] slide mają być na całą wysokość i szerokość ekranu

## cel
- generowanie kodu html
- manipulacja kodem html
- bindowanie event hadlerów 


 <section class="slide">
      <div class="left">
        <h2>asdfsdf</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia excepturi qui a molestias, odit ipsa, at impedit commodi, omnis deserunt magnam eveniet? Quia eum deserunt repudiandae itaque, saepe qui veniam?
        </p>
      </div>
      <div class="right">
        <div>
          <img class="slide__image" src="http://lorempixel.com/800/600/people/9/">
        </div>
      </div>
    </section>
    <div class="slider__arrow"></div>
    <div class="slider__arrow slider__arrow--right"></div>
