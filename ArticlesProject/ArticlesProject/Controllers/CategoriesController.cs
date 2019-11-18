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
using System.Web.Http.ModelBinding;
using System;

namespace ArticlesProject.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoriesController : ControllerBase
    {
        private ICategoriesRepository _categoriesRepository;

        public CategoriesController(ICategoriesRepository categoriesRepository)
        {
            _categoriesRepository = categoriesRepository;

        }

        //GET: api/Categories
        [HttpGet]
        public IEnumerable<Category> Get()
        {
            return _categoriesRepository.GetCategories();
        }

        [HttpGet("{id}")]
        [Produces(typeof(Category))]
        public IActionResult GetCategory([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var category = _categoriesRepository.Find(id);

            if (category == null)
            {
                return NotFound();
            }

            return Ok(category);
        }

        [HttpGet("{name}")]
        [Produces(typeof(Category))]
        public IActionResult GetCategoryIdByName([FromBody] string name)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            int categoryId = _categoriesRepository.FindByName(name);

            if (categoryId == -1)
            {
                return NotFound();
            }

            return Ok(categoryId);
        }

        [HttpPost]
        [Produces(typeof(Category))]
        public IActionResult PostCategory([FromBody] Category category)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            category.CreatedDateTime = DateTime.Now;
            _categoriesRepository.Add(category);

            return CreatedAtAction("GetCategory", new { id = category.Id }, category);
        }

        private bool CategoryExists(int id)
        {
            return _categoriesRepository.Exist(id);
        }

        [HttpPut("{id}")]
        public IActionResult PutCategory(int id, [FromBody] Category category)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            try
            {
                _categoriesRepository.UpdateCategory(category);
                return Ok(category);
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CategoryExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

        }
    }


}