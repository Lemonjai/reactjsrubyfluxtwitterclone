import ServerAction from "./actions/ServerActions"

export default{
  getAllTweets(){
    $.get("/tweets")
    .success( rawTweets => ServerActions.receivedTweets(rawTweets))
    .error(error => consooe.log(error));
  }
}