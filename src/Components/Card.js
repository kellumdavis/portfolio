import { useState } from 'react';
import { Card } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import './Card.css'



function ProjectCard({image, alt, prjName, prjSum, href }){

    const [isShown, setIsShown] = useState(false);
    
    
   

    return(
        <div>
            <a target="blank" href={href}>
            <Card sx={{ maxWidth: 300, minWidth: 300, margin: '10px', padding: '10px'}}  onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={image}
          alt={alt}
          style={{objectPosition: 'top'}}
          
          
        /> 
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" color="#0e1c36">
            {prjName}
          </Typography>
          {isShown && (
        
          <Typography variant="body2" color="#0e1c36" paddingBottom='0' marginBottom='0'>
            {prjSum}
          </Typography>
          )}
        </CardContent>
      </CardActionArea>
    </Card>
    </a>
        </div>
    )
}

export default ProjectCard;