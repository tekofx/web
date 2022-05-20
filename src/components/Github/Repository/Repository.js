import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './Repository.css';
import { ThemeProvider } from '@emotion/react';
import Theme from '../../../Theme';


class Repository extends React.Component {
    constructor(props) {
        super();
        this.title = props.title;
        this.description = props.description;
        this.url = props.url;
        this.img = props.img;

    }

    render() {

        return (
            <Card sx={{ maxWidth: 345 }} className="card" >
                <CardMedia
                    component="img"
                    height="140"
                    image={this.img}
                />
                <CardContent className='cardContent'>
                    <Typography gutterBottom variant="h5" component="div">
                        {this.title}
                    </Typography>
                    <Typography variant="body2">
                        {this.description}
                    </Typography>
                </CardContent>
                <CardActions className='cardContent'>
                    <Button className='button' variant='contained' target="_blank" href={this.url} size="small">See on github</Button>
                </CardActions>
            </Card >


        );
    }
}



export default Repository;