using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using ArticlesProjectDataAccess;
using Microsoft.Extensions.Logging;
using ArticlesProjectDataAccess.Interfaces;
using ArticlesProjectDataAccess.Repositories;
using Microsoft.AspNetCore.Cors;

namespace ArticlesProject.Controllers
{
    //EnableCors("http://localhost:4200", "*", "*")]
    [Route("api/[controller]")]
    [ApiController]
    public class ArticlesController : ControllerBase
    {
        private readonly ILogger<ArticlesController> _logger;
        private IArticlesRepository _articlesRepository;

        public ArticlesController(ILogger<ArticlesController> logger, IArticlesRepository articlesRepository)
        {
            _logger = logger;
            _articlesRepository = articlesRepository;

        }

        // GET: api/Articles
        [HttpGet]
        public IEnumerable<Article> Get()
        {
            return _articlesRepository.GetArticles();
        }

        
        [HttpGet("{id}")]
        public ActionResult<Article> GetArticle([FromRoute] int id)
        {
            var article = _articlesRepository.GetArticle(id);
          
           return Ok(article);
            
        }

        [HttpPut("{id}")]
        public bool Put(int id,[FromBody] Article article)
        {
            if (!ModelState.IsValid)
            {
                return false;
            }
            else
            {
                _articlesRepository.UpdateArticle(id, article);
                return true;
            }
           
        }

        [HttpDelete]
        public void DeleteEntry(int id)
        {
            _articlesRepository.DeleteArticle(id);
        }

       



    }
}
