using System;
using System.Collections.Generic;
using System.Text;

namespace ArticlesProjectDataAccess.Interfaces
{
    public interface IArticlesRepository
    {
        IEnumerable<Article> GetArticles();
        void UpdateArticle(int id, Article article);
        void DeleteArticle(int id);
        Article GetArticle(int id);
    }
}
