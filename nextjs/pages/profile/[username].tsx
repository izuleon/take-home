/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import ErrorPage from 'next/error'
import ProfileCard from "../../src/components/profilecard.tsx"
import { loadGetInitialProps, NextPageContext } from "next/dist/next-server/lib/utils";

interface ProfileWidgetProps {
  username : string;
  id?:String;
  profileimage?:String;
}

class ProfileWidget extends React.Component<ProfileWidgetProps, {}> {
  constructor(props) {
    super(props);
  }
  render() {
    console.log("render",this.props)
    // if(this.props.id == null){
    //   return <Custom404/>
    // }
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

const ProfilePage = ({data}): JSX.Element => {
  const router = useRouter();
  const { username } = router.query;
  console.log('data 2', data.id)
  if(data.statusCode){
    return (
      <ErrorPage statusCode={data.statusCode}/>
    );
  }
  return (
    <>
      <ProfileWidget 
        username={data.id as string}
        id={data.id as string}
        profileImage={data.profileImage as string}
        mainImage={data.mainImage as string}
        about={data.about as JSON}
        services={data.services as JSON}
        accreditations={data.accreditations as JSON}
        testimonial={data.testimonial as JSON} />
    </>
  );
};

ProfilePage.getInitialProps = async({req}) => {
  const user = req.url.substring(9);
  console.log(user);
  const res = await fetch('http://localhost:3000/api/user/'+user)
  // console.log('res', res.json());
  const data = await res.json();
  console.log("data",data.id)
  return {
    'data': data
  }
}

export default ProfilePage;
