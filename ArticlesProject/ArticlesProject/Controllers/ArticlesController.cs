using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using ArticlesProjectDataAccess;
using Microsoft.Extensions.Logging;
using ArticlesProjectDataAccess.Interfaces;
using ArticlesProjectDataAccess.Repositories;
using Microsoft.AspNetCore.Cors;
using System.Linq;
using System.Threading.Tasks;
using System.Data.Entity;
using System.Net;
using System.Data.Entity.Infrastructure;
using System;

namespace ArticlesProject.Controllers
{
    [Route("api/[controller]")]
    [Produces("application/json")]
    [ApiController]
    //[EnableCors("http://localhost:4200", "*", "*")]
    public class ArticlesController : ControllerBase
    {
        private readonly IArticlesRepository _articlesRepository;
        private readonly ICategoriesRepository _categoriesRepository;


        public ArticlesController(IArticlesRepository articlesRepository, ICategoriesRepository categoriesRepository)
        {
            _articlesRepository = articlesRepository;
            _categoriesRepository = categoriesRepository;

        }

        private bool ArticleExists(int id)
        {
            return _articlesRepository.Exist(id);
        }

        [HttpGet]
        public IActionResult GetArticle()
        {
            var results = _articlesRepository.GetAll();
            if (results != null)
            {
                foreach (var item in results)
                {
                    item.Category = _categoriesRepository.Find(item.CategoryId);
                }

            }
            return new ObjectResult(results);
        }

        [HttpGet("{id}")]
        [Produces(typeof(Article))]
        public IActionResult GetArticle([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var article = _articlesRepository.Find(id);

            if (article == null)
            {
                return NotFound();
            }

            return Ok(article);
        }

        [HttpPut("{id}")]
      //  [Produces(typeof(Article))]
        public IActionResult PutArticle(int id,[FromBody] Article article)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            try
            {
                _articlesRepository.UpdateArticle(article);
                return Ok(article);
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ArticleExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

        }

        [Route("PutArticleAndUpdateCategory")]
      //  [HttpPut]
        //  [Produces(typeof(Article))]
        public IActionResult PutArticleAndUpdateCategory([FromQuery]int id, [FromBody] Article article)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            try
            {

                article.Category = _categoriesRepository.Find(id);

                _articlesRepository.UpdateArticle(article);
                return Ok(article);
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ArticleExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

        }

        [HttpDelete("{id}")]
        [Produces(typeof(Article))]
        public IActionResult DeleteArticle([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (! ArticleExists(id))
            {
                return NotFound();
            }
            _articlesRepository.Remove(id);


            return Ok();
        }

        [HttpPost]
        [Produces(typeof(Article))]
        public IActionResult PostArticle([FromBody] Article article)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            article.CreatedDateTime = DateTime.Now;
            
            _articlesRepository.Add(article);

            return CreatedAtAction("GetArticle", new { id = article.Id }, article);
        }







    }
}
