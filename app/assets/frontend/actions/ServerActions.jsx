import AppDispatcher from "../dispatcher";
import ActionsTypes from "../constants";

export default{
  receivedTweets(rawTweets){
    console.log(3,"ServerActions.receivedTweets");
    AppDispatcher.dispatch({
      actionType: ActionsTypes.RECEIVED_TWEETS,
      rawTweets 
    })
  },
  receivedOneTweet(rawTweet){
    AppDispatcher.dispatch({
      actionType: ActionsTypes.RECEIVED_ONE_TWEET,
      rawTweet
    })
  }
}