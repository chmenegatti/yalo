import api from "../../api/api.js";

class GitController {
  async GetUsers(req, res) {
    let { since, page } = req.query;
    let url;

    if(!page) { 
      page = 0;
      url = req.headers.host + req.url + 'page=1';
    }
    else {
      let x = parseInt(req.query.page);
      x++;
      url = req.headers.host + req.url.replace(req.query.page, x);
      
    }

    if (since === 0 || since > 30) since = 30;

    const retorno = await api.get(`/search/users?q=a&per_page=${since}&page=${page}`);
    
    return res.send({ retorno: retorno.data, prox_page: 'http://' + url });
  }

  async getUserDetails(req, res) {
    const { username } = req.params;

    const retorno = await api.get(`/users/${username}`);
    
    return res.send(retorno.data);
  } 

  async getUserRepos(req, res) {
    const { username } = req.params;

    const retorno = await api.get(`/users/${username}/repos`);
    
    return res.send(retorno.data);
  }

}


export default new GitController();