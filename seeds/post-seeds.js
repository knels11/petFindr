const { Post } = require("../models");

const postdata = [
  {
    title: "Donec posuere metus vitae ipsum.",
    post_url: "https://buzzfeed.com/in/imperdiet/et/commodo/vulputate.png",
    user_id: 10,
  },
  {
    title: "Morbi non quam nec dui luctus rutrum.",
    post_url: "https://nasa.gov/donec.json",
    user_id: 8,
  },
  {
    title:
      "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.",
    post_url:
      "https://europa.eu/parturient/montes/nascetur/ridiculus/mus/etiam/vel.aspx",
    user_id: 1,
  },
  {
    title: "Nunc purus.",
    post_url: "http://desdev.cn/enim/blandit/mi.jpg",
    user_id: 4,
  },
  {
    title: "Pellentesque eget nunc.",
    post_url: "http://google.ca/nam/nulla/integer.aspx",
    user_id: 7,
  },
  {
    title: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    post_url: "https://stanford.edu/consequat.png",
    user_id: 4,
  },
  {
    title: "In hac habitasse platea dictumst.",
    post_url: "http://edublogs.org/non/ligula/pellentesque.js",
    user_id: 1,
  },
  {
    title: "Morbi non quam nec dui luctus rutrum.",
    post_url: "http://ucla.edu/consequat/nulla.html",
    user_id: 1,
  },
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
