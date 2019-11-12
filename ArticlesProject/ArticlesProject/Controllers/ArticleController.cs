using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Threading.Tasks;
using ArticlesProjectDataAccess;
using ArticlesProjectDataAccess.Repositories;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace ArticlesProject.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ArticleController : ControllerBase
    {
        private readonly ILogger<ArticleController> _logger;
        private readonly ArticlesRepository _articleRepository;

        public ArticleController(ILogger<ArticleController> logger)
        {
            _logger = logger;
            _articleRepository = new ArticlesRepository();
        }

        [HttpPost]
        public void Post([FromBody] Article article)
        {

            _articleRepository.AddArticle(article);

        }

        [HttpGet]
        public void Get()
        {
            var list = _articleRepository.GetArticles();
            
        }
    }
}