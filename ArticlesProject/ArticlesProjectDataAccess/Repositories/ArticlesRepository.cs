using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace ArticlesProjectDataAccess.Repositories
{
    public class ArticlesRepository
    {
        private readonly AppDbContext context;

        public ArticlesRepository()
        {
            context = new AppDbContext();
        }

        public void AddArticle(Article article)
        {
            this.context.Add(article);
            context.SaveChanges();
        }

        public IEnumerable<Article> GetArticles()
        {
            return context.Articles.ToList();
        }

    }
}
