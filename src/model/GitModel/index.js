import express from 'express';

const gitRoute = express();

class GitModel {

  async getUsers(req, res) {
    const s = req.query.since;
    const z = gitRoute.get(`https://api.github.com/search/users?q=${s}`, (req, res) => {
      return res.json();
    })

    return z;
  }

}

export default new GitModel();
