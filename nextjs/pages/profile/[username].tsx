/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import ProfileCard from "../../src/components/profilecard.tsx"
import ErrorPage from 'next/error'
import { promises as fs } from 'fs'
import path from 'path'
interface ProfileWidgetProps {
  username : string;
}

class ProfileWidget extends React.Component<ProfileWidgetProps, {}> {
  constructor(props) {
    super(props);
  }

  render() {

    if (!isExist) {
      return (
        <ErrorPage statusCode="404"/>
      )
    }
    return (
      <>
        <Head>
          <title>{this.props.username}'s Profile</title>
        </Head>
        <ProfileCard username={this.props.username} />
      </>
    );
  }
}

const ProfilePage = (): JSX.Element => {
  const router = useRouter();
  const { username } = router.query;

  return (
    <>
      <ProfileWidget username={username as string} />
    </>
  );
};

export default ProfilePage;
