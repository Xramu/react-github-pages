import React from "react"
import { TwitterTweetEmbed } from "react-twitter-embed"
import { TwitterTweetEmbedProps } from "react-twitter-embed/dist/components/TwitterTweetEmbed"

/**
 * Tweet embed component with global styling.
 */
function TweetEmbed(props: TwitterTweetEmbedProps) {
  return <TwitterTweetEmbed options={{ theme: "dark" }} {...props} />
}

export default TweetEmbed
