/**
 * @candidate - Implement your profile card design here using MaterialUI
 * library and follow the provided AdobeXD or JPG file. 
 * Feel free to change the code structure and templatee as you see fit - 
 * ultimately, we just want to see how you will create APIs and frontend widgets
 * to interface with these APIs!
 */

 import * as React from "react";
 import { makeStyles } from '@material-ui/core/styles';
 import Card from '@material-ui/core/Card';
 import CardActions from '@material-ui/core/CardActions';
 import CardContent from '@material-ui/core/CardContent';
 import Button from '@material-ui/core/Button';
 import Typography from '@material-ui/core/Typography';
 
 interface AboutMeProps {
    user:JSON;
 }
 
 
 export default class AboutMe extends React.Component<AboutMeProps, {}> {
   constructor(props: AboutMeProps) {
     super(props);
   }
 
   render(): JSX.Element {
     return (
        <Typography>
            <Typography>
              {this.props.user.introduction}
            </Typography>
            <Typography>
              Years of Experience: {this.props.user.yearsOfExperience}
            </Typography>
            <Typography>
              Company: {this.props.user.company}
            </Typography>
            <Typography>
              Age: {this.props.user.age}
            </Typography>
            <Typography>
              Spoken Language: {this.props.user.spokenLanguage}
            </Typography>
        </Typography>
     );
   }
 }
