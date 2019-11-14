using ArticlesProjectDataAccess.Interfaces;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ArticlesProjectDataAccess.Repositories
{
    public class ArticlesRepository : IArticlesRepository
    {
        private AppDbContext context = new AppDbContext();

        public Article Add(Article article)
        {
            context.Articles.Add(article);
            context.SaveChanges();
            return article;
        }

        public bool Exist(int id)
        {
            return context.Articles.Any(c => c.Id == id);
        }

        public Article Find(int id)
        {
            return context.Articles.FirstOrDefault(n => n.Id == id);
        }

        public IEnumerable<Article> GetAll()
        {
            return context.Articles;
        }

        public Article Remove(int id)
        {
            var article =  context.Articles.Single(a => a.Id == id);
            context.Articles.Remove(article);
            context.SaveChanges();
            return article;
        }

        public Article UpdateArticle(Article article)
        {
            context.Articles.Update(article);
            context.SaveChanges();
            return article;
        }
    }
}
