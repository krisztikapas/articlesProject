using System;
using System.Collections.Generic;
using System.Text;

namespace ArticlesProjectDataAccess.Interfaces
{
    public interface ICategoriesRepository
    {
        IEnumerable<Category> GetCategories();

        Category Find(int id);

        Category Add(Category category);

        void UpdateCategory(Category category);
        bool Exist(int id);
        int FindByName(string name);
    }
}
