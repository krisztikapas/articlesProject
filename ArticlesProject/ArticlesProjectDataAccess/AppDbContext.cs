using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Text;

namespace ArticlesProjectDataAccess
{
    public  class AppDbContext : DbContext
    {
        public AppDbContext() :base()
        {

        }
        public DbSet<Article> Articles { get; set; }
        public DbSet<Category> Categories { get; set; }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            //optionsBuilder.UseSqlServer(ConfigurationManager.ConnectionStrings["ArticlesDb"].ConnectionString);
            optionsBuilder.UseSqlServer(@"Server=(localdb)\mssqllocaldb;Database=ArticlesDb;Trusted_Connection=True;");
        }

       

    }
}
