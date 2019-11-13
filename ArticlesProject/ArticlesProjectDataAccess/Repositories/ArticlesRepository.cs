using ArticlesProjectDataAccess.Interfaces;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace ArticlesProjectDataAccess.Repositories
{
    public class ArticlesRepository : IArticlesRepository
    {
        private AppDbContext context = new AppDbContext();

        //public void AddArticle(Article article)
        //{
        //    this.context.Add(article);
        //    context.SaveChanges();
        //}

        public IEnumerable<Article> GetArticles()
        {
            var articles = context.Articles;
            return articles;
        }

        public Article GetArticle(int id)
        {
           
                using (var context = new AppDbContext())
                {
                    var article = context.Articles.FirstOrDefault(n => n.Id == id);
                    //if (entry == null)
                    //{
                    //    return NotFound();
                    //}
                    return article;
                }
           
            

        }

        public void UpdateArticle(int id, Article article)
        {
          
            try
            {
                using (var context = new AppDbContext())
                {
                    Article oldArticle = context.Articles.FirstOrDefault(n => n.Id == id);
                    oldArticle.Title = article.Title;
                    oldArticle.Description = article.Description;
                    oldArticle.Category = article.Category;
                    oldArticle.CreatedDateTime = article.CreatedDateTime;
                    context.SaveChanges();
                }
            }
            catch (Exception ex)
            {
            }

        }


        public void DeleteArticle(int id)
        {
            try
            {
                using (var context = new AppDbContext())
                {
                    var article = context.Articles.FirstOrDefault(n => n.Id == id);
                    if (article != null)
                    {
                        context.Articles.Remove(article);
                        context.SaveChanges();
                    }
                    
                    
                    //return Ok("Entry deleted!");
                }

            }
            catch (Exception ex)
            {
                //return BadRequest(ex.Message);
            }
        }



    }
}
