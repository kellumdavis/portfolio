import { useState } from 'react';
import { Card } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


function ProjectCard({image, alt, prjName, prjSum, href }){

    const [isShown, setIsShown] = useState(false);
    
    return(
        <div>
            <a target="blank" href={href}>
            <Card sx={{ maxWidth: 300 }}  onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={image}
          alt={alt}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {prjName}
          </Typography>
          {isShown && (
          <Typography variant="body2" color="text.secondary">
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