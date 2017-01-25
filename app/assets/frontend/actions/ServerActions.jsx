import AppDispatcher from "../dispatcher";
import ActionsTypes from "../constants";

export default{
  receivedTweets(rawTweets){
    AppDispatcher.dispatch({
      actionType: ActionTypes.RECEIVED_TWEETS,
      rawTweets 
    })
  }
}