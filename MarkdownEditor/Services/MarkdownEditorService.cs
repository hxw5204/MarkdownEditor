using Microsoft.Extensions.Options;
using MongoDB.Driver;
using MarkdownEditor.Models;
using System.Linq;

namespace MarkdownEditor.Services
{
    public class MarkdownEditorService
    {
        private readonly IMongoCollection<User> _userCollection;

        public MarkdownEditorService(IOptions<UserDatebaseSettings> userDatebaseSettings)
        {
            var mongoClient = new MongoClient(userDatebaseSettings.Value.ConnectionString);

            var mongoDatabase = mongoClient.GetDatabase(userDatebaseSettings.Value.DatabaseName);

            _userCollection = mongoDatabase.GetCollection<User>(userDatebaseSettings.Value.CollectionName);
        }

        public async Task<User> GetUser(string username, string password) => 
            await _userCollection.Find(x => (x.Username == username && x.Password == password)).FirstOrDefaultAsync();

        public async Task UpdateAsync(string UserId, string FileId, Models.File updatedFile) =>
            await _userCollection.ReplaceOneAsync(x => x.UserId == UserId , updatedFile);
    }
}
