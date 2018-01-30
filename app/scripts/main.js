'use strict'

console.log('dev mode')

$('#asak-navbar')
  .find('a[href="' + location.pathname + '"]')
  .parents('li')
  .addClass('active')
