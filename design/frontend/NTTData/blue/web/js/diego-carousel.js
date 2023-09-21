define(['jquery', 'slick'], function($) {
  'use strict';

  return function(config, element) {
      $(element).slick({
          dots: true,
          infinite: true,
          speed: 300,
          slidesToShow: 3,
          slidesToScroll: 1
      });
  };
});
