import './FeaturedToday.css';
import {
    useParams,
    Link,
    useHistory,
  } from "react-router-dom";

export default function FeaturedToday() {
    return(
        <div className='featured-container'>
            <h2 className='section-header'>
                Featured today
            </h2>
        </div>
    )
}