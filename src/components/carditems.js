import React , {useState} from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import Logo  from '../logo.svg';
import Card from '@material-ui/core/Card';

export default function CardItems(props){
    const [raised1, toggle1] = useState(
        false
    );
    const [raised2, toggle2] = useState(
        false
    );
    const [raised3, toggle3] = useState(
        false
    );
    const [raised4, toggle4] = useState(
        false
    );
    const [raised5, toggle5] = useState(
        false
    );
    const [raised6, toggle6] = useState(
        false
    );
    const [raised7, toggle7] = useState(
        false
    );
    const [raised8, toggle8] = useState(
        false
    );
    const [raised9, toggle9] = useState(
        false
    );
    const handleChange1 = event => toggle1(!raised1);
    const handleChange2 = event => toggle2(!raised2);
    const handleChange3 = event => toggle3(!raised3);
    const handleChange4 = event => toggle4(!raised4);
    const handleChange5 = event => toggle5(!raised5);
    const handleChange6 = event => toggle6(!raised6);
    const handleChange7 = event => toggle7(!raised7);
    const handleChange8 = event => toggle8(!raised8);
    const handleChange9 = event => toggle9(!raised9);

    let title=["Blog / Article","Newsletter / E-mailer","Whitepaper","e-book","Report / Guide","Product Description","Website Content",
                "Video Script", "Company Profile / Brochure", "Press Release"]
    let money=['from \u20B9500','from \u20B91000','from \u20B92000']

    return(
        <div className="center-hor">
        <div className="center-vert equal-space" style={{marginLeft: '6%', marginRight: '4.8%', marginTop: '1rem', marginBottom: '1rem'}}>
        <Card onMouseOver={handleChange1} 
        onMouseOut={handleChange1} raised={raised1} style={{padding: '4rem', marginRight:'1rem', cursor:'pointer'}}>
            <div className="center-vert">
                <Avatar alt="React" src={Logo} />
                <div className="center-hor" style={{marginLeft:'1rem'}}>
                    <Typography style={{fontWeight:'bold',fontFamily: "Roboto,sans-serif"}}>{title[0]}</Typography>
                    <Typography>{money[0]}</Typography>
                </div>
            </div>
            <Typography style={{textAlign:'left',marginTop:'1rem',fontFamily: "Roboto,sans-serif",color:'grey'}}>{props.items.description}</Typography>
            <div style={{textAlign:'left'}}>
            <Button variant='outlined' className='order_btn' style={{marginTop:'1rem'}}>
                <b>Order</b>
            </Button>
            </div>
        </Card>
        <Card onMouseOver={handleChange2} 
        onMouseOut={handleChange2} raised={raised2} style={{padding: '4rem', marginRight:'1rem', cursor:'pointer'}}>
            <div className="center-vert">
                <Avatar alt="React" src={Logo} />
                <div className="center-hor" style={{marginLeft:'1rem'}}>
                    <Typography style={{fontWeight:'bold',fontFamily: "Roboto,sans-serif"}}>{title[1]}</Typography>
                    <Typography>{money[1]}</Typography>
                </div>
            </div>
            <Typography style={{textAlign:'left',marginTop:'1rem',fontFamily: "Roboto,sans-serif",color:'grey'}}>{props.items.description}</Typography>
            <div style={{textAlign:'left'}}>
            <Button variant='outlined' className='order_btn' style={{marginTop:'1rem'}}>
                <b>Order</b>
            </Button>
            </div>
        </Card>
        <Card onMouseOver={handleChange3} 
        onMouseOut={handleChange3} raised={raised3} style={{padding: '4rem', marginRight:'1rem', cursor:'pointer'}}>
            <div className="center-vert">
                <Avatar alt="React" src={Logo} />
                <div className="center-hor" style={{marginLeft:'1rem'}}>
                    <Typography style={{fontWeight:'bold',fontFamily: "Roboto,sans-serif"}}>{title[2]}</Typography>
                    <Typography>{money[2]}</Typography>
                </div>
            </div>
            <Typography style={{textAlign:'left',marginTop:'1rem',fontFamily: "Roboto,sans-serif",color:'grey'}}>{props.items.description}</Typography>
            <div style={{textAlign:'left'}}>
            <Button variant='outlined' className='order_btn' style={{marginTop:'1rem'}}>
                <b>Order</b>
            </Button>
            </div>
        </Card>
        </div>
        <div className="center-vert equal-space" style={{marginLeft: '6%', marginRight: '4.8%', marginTop: '1rem', marginBottom: '1rem'}}>
        <Card onMouseOver={handleChange4} 
        onMouseOut={handleChange4} raised={raised4} style={{padding: '4rem', marginRight:'1rem', cursor:'pointer'}}>
            <div className="center-vert">
                <Avatar alt="React" src={Logo} />
                <div className="center-hor" style={{marginLeft:'1rem'}}>
                    <Typography style={{fontWeight:'bold',fontFamily: "Roboto,sans-serif"}}>{title[3]}</Typography>
                    <Typography>{money[1]}</Typography>
                </div>
            </div>
            <Typography style={{textAlign:'left',marginTop:'1rem',fontFamily: "Roboto,sans-serif",color:'grey'}}>{props.items.description}</Typography>
            <div style={{textAlign:'left'}}>
            <Button variant='outlined' className='order_btn' style={{marginTop:'1rem'}}>
                <b>Order</b>
            </Button>
            </div>
        </Card>
        <Card onMouseOver={handleChange5} 
        onMouseOut={handleChange5} raised={raised5} style={{padding: '4rem', marginRight:'1rem', cursor:'pointer'}}>
            <div className="center-vert">
                <Avatar alt="React" src={Logo} />
                <div className="center-hor" style={{marginLeft:'1rem'}}>
                    <Typography style={{fontWeight:'bold',fontFamily: "Roboto,sans-serif"}}>{title[4]}</Typography>
                    <Typography>{money[1]}</Typography>
                </div>
            </div>
            <Typography style={{textAlign:'left',marginTop:'1rem',fontFamily: "Roboto,sans-serif",color:'grey'}}>{props.items.description}</Typography>
            <div style={{textAlign:'left'}}>
            <Button variant='outlined' className='order_btn' style={{marginTop:'1rem'}}>
                <b>Order</b>
            </Button>
            </div>
        </Card>
        <Card onMouseOver={handleChange6} 
        onMouseOut={handleChange6} raised={raised6} style={{padding: '4rem', marginRight:'1rem', cursor:'pointer'}}>
            <div className="center-vert">
                <Avatar alt="React" src={Logo} />
                <div className="center-hor" style={{marginLeft:'1rem'}}>
                    <Typography style={{fontWeight:'bold',fontFamily: "Roboto,sans-serif"}}>{title[5]}</Typography>
                    <Typography>{money[0]}</Typography>
                </div>
            </div>
            <Typography style={{textAlign:'left',marginTop:'1rem',fontFamily: "Roboto,sans-serif",color:'grey'}}>{props.items.description}</Typography>
            <div style={{textAlign:'left'}}>
            <Button variant='outlined' className='order_btn' style={{marginTop:'1rem'}}>
                <b>Order</b>
            </Button>
            </div>
        </Card>
        </div>
        <div className="center-vert equal-space" style={{marginLeft: '6%', marginRight: '4.8%', marginTop: '1rem', marginBottom: '1rem'}}>
        <Card onMouseOver={handleChange7} 
        onMouseOut={handleChange7} raised={raised7} style={{padding: '4rem', marginRight:'1rem', cursor:'pointer'}}>
            <div className="center-vert">
                <Avatar alt="React" src={Logo} />
                <div className="center-hor" style={{marginLeft:'1rem'}}>
                    <Typography style={{fontWeight:'bold',fontFamily: "Roboto,sans-serif"}}>{title[6]}</Typography>
                    <Typography>{money[1]}</Typography>
                </div>
            </div>
            <Typography style={{textAlign:'left',marginTop:'1rem',fontFamily: "Roboto,sans-serif",color:'grey'}}>{props.items.description}</Typography>
            <div style={{textAlign:'left'}}>
            <Button variant='outlined' className='order_btn' style={{marginTop:'1rem'}}>
                <b>Order</b>
            </Button>
            </div>
        </Card>
        <Card onMouseOver={handleChange8} 
        onMouseOut={handleChange8} raised={raised8} style={{padding: '4rem', marginRight:'1rem', cursor:'pointer'}}>
            <div className="center-vert">
                <Avatar alt="React" src={Logo} />
                <div className="center-hor" style={{marginLeft:'1rem'}}>
                    <Typography style={{fontWeight:'bold',fontFamily: "Roboto,sans-serif"}}>{title[7]}</Typography>
                    <Typography>{money[1]}</Typography>
                </div>
            </div>
            <Typography style={{textAlign:'left',marginTop:'1rem',fontFamily: "Roboto,sans-serif",color:'grey'}}>{props.items.description}</Typography>
            <div style={{textAlign:'left'}}>
            <Button variant='outlined' className='order_btn' style={{marginTop:'1rem'}}>
                <b>Order</b>
            </Button>
            </div>
        </Card>
        <Card onMouseOver={handleChange9} 
        onMouseOut={handleChange9} raised={raised9} style={{padding: '4rem', marginRight:'1rem', cursor:'pointer'}}>
            <div className="center-vert">
                <Avatar alt="React" src={Logo} />
                <div className="center-hor" style={{marginLeft:'1rem'}}>
                    <Typography style={{fontWeight:'bold',fontFamily: "Roboto,sans-serif"}}>{title[8]}</Typography>
                    <Typography>{money[2]}</Typography>
                </div>
            </div>
            <Typography style={{textAlign:'left',marginTop:'1rem',fontFamily: "Roboto,sans-serif",color:'grey'}}>{props.items.description}</Typography>
            <div style={{textAlign:'left'}}>
            <Button variant='outlined' className='order_btn' style={{marginTop:'1rem'}}>
                <b>Order</b>
            </Button>
            </div>
        </Card>
        </div>
        </div>
    );
}