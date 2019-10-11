import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import './style.css';
import CardItems from './carditems.js';

export default function MainContent(props){

    return(
        	<grid container>
				<grid item md={4} lg={3} sm={12} xs={12}>
		            <div className="intro" style={{marginLeft:'6%',marginRight:'6%'}}>
						<Typography class="heading wrap" style={{fontFamily: "Roboto,sans-serif"}}>Content Store</Typography>
                        <div className="color-bg padding-content">
						<Typography class="sub-head wrap" style={{fontFamily: "Roboto,sans-serif"}}>Got bulk orders or almost similar orders ? Fill the order brief in an excel sheet</Typography>
						<Typography class="content-1 wrap" style={{fontFamily: "Roboto,sans-serif"}}>
							If you're wondering about an easy way to place orders in large numbers,
                            we provide a way customized just for that. Download our excel sheet, and
                            fill the order brief in the prescribed format and submit. In case you need
                            any help, <u>we are just click away to assist you in placing your order</u>
						</Typography>
						<div className="order">
                            <Button variant='outlined' className='order_btn'>
                                Order&nbsp;via&nbsp;Excel&nbsp;Sheet
                            </Button>							
						</div>	
                        </div>
					</div>
				</grid>
				<grid item md={4} lg={3} sm={12} xs={12}>
					<CardItems items={props.items}/>
				</grid>
			</grid>
    );  
}