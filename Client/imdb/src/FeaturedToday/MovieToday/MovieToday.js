import {
    useParams,
    Link,
    useHistory,
  } from "react-router-dom";

export default function MovieToday({movie_url}) {
    return(
        <Link to={'/:description'}>
            <div>
            <img src={'https://media.istockphoto.com/photos/sharpei-dog-picture-id450730491'} />
        </div>
        </Link>    
    )
}