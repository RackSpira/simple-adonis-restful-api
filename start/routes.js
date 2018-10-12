'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.0/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})

Route
  .group(() => {
    Route.get('/', 'CarController.index')
    Route.get('/:id', 'CarController.show')
    Route.post('/', 'CarController.store')
    Route.put('/:id', 'CarController.update')
    Route.delete('/:id', 'CarController.destroy')
  })
  .prefix('cars')