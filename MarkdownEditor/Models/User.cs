using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace MarkdownEditor.Models
{
    public class User
    {

        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string? UserId { get; set; }

        [BsonElement("Username")]
        public string Username { get; set; } = null!;

        [BsonElement("Password")]
        public string Password { get; set; } = null!;

        [BsonElement("Files")]
        public File[] File { get; set; } = null!;

        [BsonElement("Shared")]
        public Shared[] Shared { get; set; } = null!;

    }

    public class File
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string? FileId { get; set; }


        [BsonElement("Title")]
        public string Tiltle { get; set; } = null!;

        [BsonElement("Content")]
        public string Content { get; set; }= null!;

        [BsonElement("Images")]
        public byte[] Images { get; set; } = null!;

        [BsonElement("Owner")]
        public string Owner { get; set; } = null!;

        [BsonElement("last_used")]
        public DateTime lastUsed { get; set; } = DateTime.UtcNow;
    }

    public class Shared
    {
        [BsonElement("FileId")]
        public string? FileId { get; set; }

        [BsonElement("Owner")]
        public string Owner { set; get; } = null!;

        [BsonElement("ReadOnly")]
        public bool Readonly { get; set; } = true;
    }
}
