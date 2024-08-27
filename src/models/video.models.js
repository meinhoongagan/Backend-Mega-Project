import mongoose , {Schema} from 'mongoose';
import mongooseAggregatePaginate from 'mongoose-aggregate-paginate-v2';

const VideoSchema = new Schema({
    VideoFile:{
        type:String,  //Claudinary Url
        required:true
    },
    ThumbNail:{
        type:String,  //Claudinary Url
        required:true,
    },
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required :true
    },
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:[true,"description is required"]
    },
    duration:{
        type:Number, //Caludinary URL
        required:true
    },
    views:{
        type:Number, //Caludinary URL
        default:0
    },
    isPublished:{
        type:Boolean,
        default:true
    }
},{timestamps:true})

VideoSchema.plugin(mongooseAggregatePaginate);
export const Video = mongoose.model("Video",VideoSchema);