import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { SocialIcon } from 'react-social-icons';

export default function Footer(props){
    return(
        <AppBar position="static" className="footer">
			<Toolbar className="footer-menu" style={{backgroundColor: '#FFF',justifyContent: 'center',padding:'2rem'}}>
                <div className="center-hor">
                <div className="center-vert" style={{justifyContent:'center'}}>
                    <SocialIcon url="https://www.twitter.com/WhitePanda_in" className="social-icon" fgColor='grey' bgColor='white' style={{marginRight:'1rem'}} target='_blank'/>
					<SocialIcon url="https://www.linkedin.com/company/white-panda" className="social-icon" fgColor='grey' bgColor='white' style={{marginRight:'1rem'}} target='_blank'/>
					<SocialIcon url="https://www.instagram.com/whitepanda_in" className="social-icon" fgColor='grey' bgColor='white' style={{marginRight:'1rem'}} target='_blank'/>
					<SocialIcon url="https://www.facebook.com/whitepanda.in" className="social-icon" fgColor='grey' bgColor='white' style={{marginRight:'1rem'}} target='_blank'/>
                </div>
                <div style={{textAlign:'center'}}>
                <Typography style={{color:'grey',justifyContent:'center',marginTop:'2rem'}}>Copyright @ 2019 White Panda Media Pvt. Ltd.</Typography>
                <Typography style={{color:'grey',justifyContent:'center'}}>All rights reserved</Typography>
                </div>
                <div style={{marginTop:'2rem'}}>
                <Typography component="p" className="copyright">
                    <Button className="text-trans f-bold" style={{textDecoration: 'underline',color:'grey'}}>Privacy Policy</Button>
	     			<Button className="text-trans f-bold" style={{textDecoration: 'underline',color:'grey'}}>Terms of Service</Button>
                    <Button className="text-trans f-bold" style={{textDecoration: 'underline',color:'grey'}}>Service Agreement</Button>
					<Button className="text-trans f-bold" style={{textDecoration: 'underline',color:'grey'}}>Contact Us</Button>
				</Typography>
                </div>
                </div>
            </Toolbar>
        </AppBar>
    )
} 