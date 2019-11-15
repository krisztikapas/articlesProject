using ArticlesProjectDataAccess.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
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

        public Category Find(int id)
        {
            return context.Categories.FirstOrDefault(n => n.Id == id);
        }

        public Category Add(Category category)
        {
            context.Categories.Add(category);
            context.SaveChanges();
            return category;
        }

        public bool Exist(int id)
        {
            return context.Categories.Any(c => c.Id == id);
        }

        public void UpdateCategory(Category category)
        {
            var oldCategory = context.Categories.Find(category.Id);
            oldCategory.Name = category.Name;
            context.SaveChanges();

        }
    }
}
