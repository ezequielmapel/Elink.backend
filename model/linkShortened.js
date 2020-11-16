const mongoose = require('mongoose');

const linkShortenedSchema = new mongoose.Schema({
    linkOlder: { type:String, required:true },
    linkNew: { type:String, required:true },
    date: { type:Date, default:Date() },
    activated: { type:Boolean, default:true }
});


async function newLinkShortened(linkOlder, linkNew){
    return await new LinkShortened({
        linkOlder:linkOlder,
        linkNew:linkNew
    }).save();
}

linkShortenedSchema.statics.newLinkShortened = newLinkShortened;

const LinkShortened = mongoose.model('linkShortened', linkShortenedSchema);

module.exports.LinkShortened = LinkShortened;
