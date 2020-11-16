const { LinkShortened } = require('../model/linkShortened');
class ShortenDto{

    shortenLink(linkOlder, linkNew){
        return LinkShortened.newLinkShortened(linkOlder, linkNew);
    }
}

module.exports.ShortenDto = ShortenDto;
