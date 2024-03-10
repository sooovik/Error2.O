const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: {
      url: String,
      filename: String,
    },
    default: {
      url: "https://unsplash.com/photos/a-wooden-table-topped-with-buckets-filled-with-flowers-uWz94Amp3W0",
      filename: "listingimage",
    },
    set: (v) => {
      // Handle empty values if needed
      return v
        ? v
        : {
            url: "https://unsplash.com/photos/a-wooden-table-topped-with-buckets-filled-with-flowers-uWz94Amp3W0",
            filename: "listinginamge",
          };
    },
  },
  description: String,
  price: Number,
  location: String,
  country: String,
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;
