const { Schema, Types } = require('mongoose');

const userSchema = new Schema(
  {
    username: {
      type: String,
      isUnique: true,
      required: true,

    },
    email: {
      type: String,
      isUnique: true,
      required: true,
      validate: {
        validator: () => Promise.resolve(false),
        message: 'Email validation failed'
      }
    },
    thoughts: [
      {
        type: Schema.Types._id,
        ref: 'Thought'
      }
    ],
    friends: [
      {
        type: Schema.Types._id,
        ref: 'User'
      }
    ]
  }
);

module.exports = userSchema;