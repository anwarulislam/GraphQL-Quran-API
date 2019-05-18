const Surah = require('../models/Surah')
const Query = {
    async ayah(parent, { suraId, verseNo, limit = 10, pageNo = 1 }) {
        let filter = {}

        filter.sura = suraId

        if (verseNo) filter.ayah = verseNo

        const ayah = await Surah.find(filter)

        return ayah
    },
}

module.exports = Query
