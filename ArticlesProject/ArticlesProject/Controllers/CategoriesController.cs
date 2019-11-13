﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ArticlesProjectDataAccess;
using ArticlesProjectDataAccess.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace ArticlesProject.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoriesController : ControllerBase
    {
        private readonly ILogger<CategoriesController> _logger;
        private ICategoriesRepository _categoriesRepository;

        public CategoriesController(ILogger<CategoriesController> logger, ICategoriesRepository categoriesRepository)
        {
            _logger = logger;
            _categoriesRepository = categoriesRepository;

        }

       //GET: api/Categories
       [HttpGet]
        public IEnumerable<Category> Get()
        {
            return _categoriesRepository.GetCategories();
        }
    }
}