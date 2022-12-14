const { Schema, Types } = require('mongoose');

const reactionSchema = new Schema({
  reactionId: { type: Schema.Types.ObjectId, default: () => new Types.ObjectId() },
  reactionBody: { type: String, required: true, maxlength: 280},
  username: {type: String, required: true},
  createdAt: {type: Date, default: Date.now, }

});

const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    username: {
      type: Schema.Types._id,
      ref: 'Thought'
    },
    reactions: [
      {
        type: Schema.Types._id,
        ref: 'User'
      }
    ]
  },
  {
    toJSON: {
      getters: true,
    }
  }
);

module.exports = userSchema;