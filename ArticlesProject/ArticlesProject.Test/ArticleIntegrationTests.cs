using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.TestHost;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.Collections.Generic;
using System.Net;
using System.Net.Http;
using System.Text;

namespace ArticlesProject.Test
{
    [TestClass]
    public class ArticleIntegrationTests
    {
        private readonly HttpClient _client;

        public ArticleIntegrationTests()
        {
            var server = new TestServer(new WebHostBuilder().UseStartup<Startup>());
            _client = server.CreateClient();
        }

        [TestMethod]
        public void ArticlesGetAllTest()
        {
            // Arrange
            var request = new HttpRequestMessage(new HttpMethod("GET"), "/api/Articles/");

            // Act
            var response = _client.SendAsync(request).Result;

            // Assert
            Assert.AreEqual(HttpStatusCode.OK, response.StatusCode);
        }

        [TestMethod]
        [DataRow(6)]
        public void ArticleGetOneTest(int id)
        {
            // Arrange
            var request = new HttpRequestMessage(new HttpMethod("GET"), $"/api/Articles/{id}");

            // Act
            var response = _client.SendAsync(request).Result;

            // Assert
            Assert.AreEqual(HttpStatusCode.OK, response.StatusCode);
        }

        [TestMethod]
        public void ArticlePostTest()
        {
            // Arrange
            var request = new HttpRequestMessage(new HttpMethod("POST"), $"/api/Articles/");

            // Act
            var response = _client.SendAsync(request).Result;

            // Assert
            Assert.AreEqual(HttpStatusCode.UnsupportedMediaType, response.StatusCode);
        }

        [TestMethod]
        [DataRow(7)]
        public void ArticlePutTest(int id)
        {
            // Arrange
            var request = new HttpRequestMessage(new HttpMethod("PUT"), $"/api/Articles/{id}");

            // Act
            var response = _client.SendAsync(request).Result;

            // Assert
            Assert.AreEqual(HttpStatusCode.UnsupportedMediaType, response.StatusCode);
        }

        [TestMethod]
        [DataRow(7)]
        public void ArticleDeleteTest(int id)
        {
            // Arrange
            var request = new HttpRequestMessage(new HttpMethod("DELETE"), $"/api/Article/{id}");

            // Act
            var response = _client.SendAsync(request).Result;

            // Assert
            Assert.AreEqual(HttpStatusCode.NotFound, response.StatusCode);
        }
    }
}
