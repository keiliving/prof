import React, { FC } from 'react';
import Link from '@material-ui/core/Link';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';


const Profile:FC = () => {
  return (
    <div className="profile">
        <h3 className="name">keiliving</h3>
        <li>noob enginner</li>
        <li>よく使うのはRuby</li>
        <Link href="https://github.com/keiliving" target="_blank">
          <GitHubIcon style={{ fontSize: 20, color: "lightgray", marginRight: 20 }} />
        </Link>

        <Link href="https://twitter.com/keiliving" target="_blank">
          <TwitterIcon style={{ fontSize: 20, color: "lightgray" }} />
        </Link>

    </div>
  )
}

export default Profile