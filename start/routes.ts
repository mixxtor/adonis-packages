/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

const PackagesController = () => import('#controllers/packages_controller')
import router from '@adonisjs/core/services/router'

router.get('/', [PackagesController, 'getHome'])
