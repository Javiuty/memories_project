const moongose = require("mongoose");

const postSchema = moongose.Schema({
  title: String,
  message: String,
  creator: String,
  tags: [String],
  selectedFile: String,
  likeCount: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const PostMessage = moongose.model("PostMessage", postSchema);

exports.default = PostMessage;
