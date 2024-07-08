const router = require("express").Router();
const UserControllers = require("../controllers/userController");


router.post("/", UserControllers.createUser);

// get route

router.get("/", UserControllers.getallUsers);

// Get User by id

router.get("/:id", UserControllers.getById);

// Update User

router.put("/:id", UserControllers.updateUser);

/// Delete a Resource

router.delete("/:id", UserControllers.deleteUser);


module.exports = router