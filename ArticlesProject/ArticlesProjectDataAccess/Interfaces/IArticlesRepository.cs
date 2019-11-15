using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace ArticlesProjectDataAccess.Interfaces
{
    public interface IArticlesRepository
    {
        Article Add(Article article);
        IEnumerable<Article> GetAll();
        Article Find(int id);
        void UpdateArticle(Article article);
        Article Remove(int id);
        bool Exist(int id);
    }
}
