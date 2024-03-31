import { Card } from "./components/card/Card.jsx";
import  './app.css';

export const App = ()=> {
  
  const users = [
    {
      username: "juli3p",
      userImage: "julienso",
      name: "Julian Alvarez",
      isFollowing: false,
    },
    {
      username: "mikencio",
      userImage: "michael corleone",
      name: "Miguel Angel",
      isFollowing: true,
    },
    {
      username: "Luisca",
      userImage: "Luis",
      name: "Luis Casanova",
      isFollowing: false,
    },
  ]
  const format = (username) => `@${username}`;
  return (
    <section className="contenedorCards">
      {
        users.map(user=>{
          const {username, userImage, name, isFollowing} = user;
          return(
            <Card 
              key={username}
              formatUsername={format}
              username={username}  
              userImage={userImage}
              isFollowing = {isFollowing}>
              <p>{name}</p>
            </Card>
          );
        })
      }
    </section>
  );
}