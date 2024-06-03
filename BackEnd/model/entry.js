const mongoose = require ('mongoose');
const entrySchema = new mongoose.Schema({
    col1: {
        type: String,
        required: true
    },
    col2: String,
    col3: String,
    col4: String,
    col5: String,
    col6: String,
    col7: String,
    col8: String,
    col9: String,
    col10: String,
    col11: String,
    col12: String,
    col13: String,
    col14: String,
    col15: String,
    col16: String,
    col17: String,
    col18: String,
    col19: String,
    col20: String,
    col21: String
});

const entry = mongoose.model('Runbook', entrySchema, 'Runbook');
module.exports = entry;
