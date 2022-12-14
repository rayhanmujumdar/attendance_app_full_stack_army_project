const router = require('express').Router()
const usersController = require('../controllers/user')

/**
 * user find by id
 * @api api/v1/users/:userID
 * @apiDescription user find by id to db
 * @visibility Private
 * @method GET
 */

router.get('/:userId',usersController.getUserById)

/**
 * Update user
 * @api api/v1/users/:userID
 * @apiDescription find user to db and then update and then another set to DB
 * @visibility Private
 * @method PUT
 */

router.put('/:userId',usersController.PutUserById)

/**
 * Update user
 * @api api/v1/users/:userID
 * @apiDescription find user to db and then update and then another set to DB
 * @visibility Private
 * @method PATCH
 */

router.patch('/:userId',usersController.updateUserById)

/**
 * Delete user
 * @api api/v1/users/:userID
 * @apiDescription user find by id and delete to DB
 * @visibility Private
 * @method DELETE
 */

router.delete('/:userId',usersController.deleteUserById)

/**
 * find all users
 * @api api/v1/users
 * @apiDescription find all users to db
 * @visibility Private
 * @method GET
 */

router.get('/',usersController.getUsers)

/**
 * TODO: create a new users
 * @api api/v1/users
 * @apiDescription create a new user and then set to DB
 * @visibility private
 * @method POST
 */

router.post('/',usersController.createUser)

module.exports = router