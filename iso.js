$(document).ready( function() {
  // init Isotope
  var $container = $('.isotope').isotope({
    itemSelector: '.element-item',
    layoutMode: 'fitRows',
    getSortData: {
      name: '.element-listing-title',
      symbol: '.symbol',
      number: '.number parseInt',
      category: '[data-category]',
      price: function( itemElem ) {
        var price = $( itemElem ).find('.price').text();
        return parseFloat( price.replace( /[\(\)]/g, '') );
      }
    }
  });

  // filter functions
  var filterFns = {
    // show if number is greater than 50
    numberGreaterThan50: function() {
      var number = $(this).find('.number').text();
      return parseInt( number, 10 ) > 50;
    },
    // show if name ends with -ium
    ium: function() {
      var name = $(this).find('.element-listing-title').text();
      return name.match( /ium$/ );
    }
  };

  // bind filter button click
  $('#filters').on( 'click', 'button', function() {
    var filterValue = $( this ).attr('data-filter');
    console.log(filterValue);
    // use filterFn if matches value
    filterValue = filterFns[ filterValue ] || filterValue;
    console.log(filterValue);
    $container.isotope({ filter: filterValue });
  });

  // bind sort button click
  $('#sorts').on( 'click', 'button', function() {
    var sortByValue = $(this).attr('data-sort-by');
    $container.isotope({ sortBy: sortByValue });
  });

  $('#filters01').on( 'click', 'button', function() {
    var filterValue = $( this ).attr('data-filter');
    console.log(filterValue);
    // use filterFn if matches value
    filterValue = filterFns[ filterValue ] || filterValue;
    console.log(filterValue);
    $container.isotope({ filter: filterValue });
  });

  // bind sort button click
  $('#sorts01').on( 'click', 'button', function() {
    var sortByValue = $(this).attr('data-sort-by');
    $container.isotope({ sortBy: sortByValue });
  });
  
  // change is-checked class on buttons
  $('.button-group').each( function( i, buttonGroup ) {
    var $buttonGroup = $( buttonGroup );
    $buttonGroup.on( 'click', 'button', function() {
      $buttonGroup.find('.is-checked').removeClass('is-checked');
      $( this ).removeClass('border-fade').addClass('is-checked');
    });
  });
  
});