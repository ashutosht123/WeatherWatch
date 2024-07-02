import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css"

export default function InfoBox({info}){
    let INIT_URL="https://plus.unsplash.com/premium_photo-1714923303591-3b262dd1864f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZHVzdHklMjB3ZWF0aGVyfGVufDB8fDB8fHww"
    let hot_url="https://images.unsplash.com/photo-1561473880-3b8b12de0a71?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGhvdCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D"
    let cold_url="https://images.unsplash.com/photo-1612208695882-02f2322b7fee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D"
    let rain_url="https://media.istockphoto.com/id/512218646/photo/storm-sky-rain.webp?b=1&s=170667a&w=0&k=20&c=A6scT875ZghoiQVKaqgRJu8W3bVagx84nc-96kO9AQc="
    return(
        <div className="cardConatiner">
        <div className="InfoBox">
            <center>
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity>80?rain_url
            :info.temp>15?hot_url:cold_url
        }
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
        <p>Temperature = {info.temp}&deg;C</p>
        <p>Humodity = {info.humidity}</p>
        <p>Min Temp = {info.tempMin}&deg;C</p>
        <p>Max Temp = {info.tempMax}&deg;C</p>
        <p>Weather info- {info.weather}</p>
        <p>The weather feels like {info.feelsLike}&deg;C</p>

        </Typography>
      </CardContent>
    </Card>
    </center>
        </div>
    </div>
    )
}