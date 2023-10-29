import "dotenv/config";
const gateway = require("fast-gateway");

const server = gateway({
  routes: [
    {
      prefix: "/citizen",
      target: process.env.CITIZEN_SERVICE_URL,
    },
    {
      prefix: "challenge",
      target: process.env.CHALLENGE_SERVICE_URL,
    },
    {
      prefix: "vote",
      target: process.env.VOTE_SERVICE_URL,
    }
  ],
});

server
  .start(process.env.PORT)
  .then(() => {
    console.log("Server started on port " + process.env.PORT);
  })
  .catch((err: any) => {
    console.error(err);
  });
