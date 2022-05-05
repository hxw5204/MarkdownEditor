using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace MarkdownEditor.Models
{
    public class User
    {

        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string? Id { get; set; }

        [BsonElement("User")]
        public string UserId { get; set; } = null!;


    }
}
