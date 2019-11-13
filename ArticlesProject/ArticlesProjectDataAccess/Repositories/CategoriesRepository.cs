using ArticlesProjectDataAccess.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;

namespace ArticlesProjectDataAccess.Repositories
{
    public class CategoriesRepository : ICategoriesRepository
    {
        private AppDbContext context = new AppDbContext();

        public IEnumerable<Category> GetCategories()
        {
            var categories = context.Categories;
            return categories;
        }
    }
}
