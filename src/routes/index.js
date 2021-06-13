import { Router } from "express";
import GitController from "../controller/GitController/index.js";


const router = Router();

router.get('/api/users', GitController.GetUsers);
router.get('/api/users/:username/details', GitController.getUserDetails);
router.get('/api/users/:username/repos', GitController.getUserRepos);

export default router;