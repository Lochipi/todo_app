import mongoose, {Schema} from "mongoose";

const topicSchema = new Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    timeStamp: {type: Date, default: Date.now, required: true},
});

// Export the model and return your ITopic interface
// the first parameter is the name of the collection in the database, the second is the schema
const Topic = mongoose.models.Topic || mongoose.model("Topic", topicSchema); // if the collection already exists, use it, otherwise create a new one

export default Topic;