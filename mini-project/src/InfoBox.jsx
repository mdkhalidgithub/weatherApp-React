import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import SevereColdIcon from '@mui/icons-material/SevereCold';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';


export default function InfoBox({info}){

    
    const INT_URL="https://images.unsplash.com/photo-1561470508-fd4df1ed90b2?q=80&w=2952&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    let COLD_URL="https://images.unsplash.com/photo-1668531387310-9c3c2f272d52?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    let HOT_URL="https://media.istockphoto.com/id/1193654742/photo/the-bright-sun-rising-over-the-city-with-copy-space.jpg?s=1024x1024&w=is&k=20&c=s1ECigEu2BgpvZg4azlECFztcUatL_SACROAWDHlo9o=";
    let RAIN_URL="https://media.istockphoto.com/id/1321878632/photo/cloudy-sky-over-beautiful-flood-plain-landscape.jpg?s=1024x1024&w=is&k=20&c=atFo11YKMbuCIQw1socJut8Krs4KULlnaT1BWW8oUos=";


    return (
        <div className='infoBox'>
            
            <div className='cardContainer'>
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={
            info.humidity>80
            ?RAIN_URL
            :info.temp>15
            ?HOT_URL
            :COLD_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}{
            info.humidity>80
            ?<ThunderstormIcon/>
            :info.temp>15
            ?<WbSunnyIcon/>
            :<SevereColdIcon/>}
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
         <div>
            <p>Tempreture:{info.temp}&deg;C</p>
            <p>Humidity:{info.humidity}</p>
            <p>Min_Temp:{info.tempMin}&deg;</p>
            <p>Max_Temp:{info.tempMax}&deg;</p>
            <p>The weather can be described as <i><b>{info.weather} </b></i> and feels_like {info.feelsLike}&deg;</p>
         </div>
        </Typography>
      </CardContent>
    </Card>
    </div>
        </div>

    )
}