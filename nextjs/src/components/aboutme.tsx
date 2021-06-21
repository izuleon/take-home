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
 import AboutMe from "../../src/components/aboutme.tsx"
 
 interface AboutMeProps {
    name:string;
    introduction:string;
 }
 
 
 export default class ProfileCard extends React.Component<AboutMeProps, {}> {
   constructor(props: AboutMeProps) {
     super(props);
   }
 
   render(): JSX.Element {
     return (
        <Typography>
            name: {this.props.name}
        </Typography>
     );
   }
 }
