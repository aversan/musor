// import 'bootstrap-sass/assets/javascripts/bootstrap/collapse';
import ismobile from 'ismobilejs';
import './modules/index';

const { body } = document;


$(() => {
  if (ismobile.phone) {
    body.classList.add('is-mobile');
  } else if (ismobile.tablet) {
    body.classList.add('is-tablet');
  }

  $('.js-header:first').each(function() {
    const $header = $(this);
    const $toggle = $header.find('.js-toggle');
    const $navigation = $header.find('.js-navigation');

    $toggle.on('click', () => {
      if ($navigation.hasClass('d-none')) {
        $toggle.removeClass('active');
        $navigation.removeClass('d-none')
      } else {
        $toggle.addClass('active');
        $navigation.addClass('d-none');
      }
    });
  });
});
