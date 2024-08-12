import React from "react"
import NewTabAnchor from "../../../NewTabAnchor"
import TweetEmbed from "../../../media/TweetEmbed"
import styled from "styled-components"

const SocialMediaInfoDiv = styled.div``

function RamusRangeSocialMedia() {
  return (
    <SocialMediaInfoDiv>
      <p>
        I have created a social media hashtag{" "}
        <NewTabAnchor href="https://x.com/search?q=%23RamusRange">
          #RamusRange
        </NewTabAnchor>{" "}
        for the experience.
        <br />
        Players from VRChat have shared pictures and videos taken within the
        experience using this hashtag.
      </p>

      <p>
        A lot of these posts are players sharing their high scores on the
        different challenges.
        <br />
        Here's an example of an extremely skilled player doing the Gridshot
        challenge:
      </p>

      <TweetEmbed tweetId="1739448703830884425" />

      <p>
        In addition to pictures of high scores, there are a lot of short films
        and videos filmed within the experience.
        <br />
        Here's a video of a player exploring the experience:
      </p>

      <TweetEmbed tweetId="1675710334261420035" />
    </SocialMediaInfoDiv>
  )
}

export default RamusRangeSocialMedia
