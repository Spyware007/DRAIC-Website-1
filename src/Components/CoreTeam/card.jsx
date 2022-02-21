import React from "react";
import './card.css'
import immg from './photos/picc.jpg'
import { Link } from "react-router-dom";
function Card(props) {
    return (
            <div className="maincard" style={{
                ...styles.card,
                backgroundColor: props.color,
                left: `${props.x}px`,
                top: `${props.y}px`,
                zIndex: props.z_index,
                opacity: props.opacity,
                transform: `translate(-50%,-50%) scale(${props.scale})`,
                borderRadius: `${props.borderRadius}px`,


            }}>

                <img style={styles.image} src={immg} alt='reactjs'></img>

                    <h1 className="namee">{props.name}<br></br>{props.surname}</h1>
                    <div className="ll"></div>
                    <h4 className="pos">{props.dep} </h4>   
                    <Link className='footer_social_links' to='//www.linkedin.com/company/d-y-patil-robotics-ai-club' target="_blank" ><img className='core_team_social_img' src="https://img.icons8.com/color/48/000000/linkedin.png" alt="Linkedin" /></Link>
                    </div>

    )
}

//, backgroundColor:props.color, left:'${props.x}px' , top:'${props.y}px'

const styles = {
    card: {
        color: 'white',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%,-50%)',
        height: '400px',
        width: '300px',
        backgroundColor: 'red',
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
        boxSizing: 'border-box',
        borderRadius: '10px',
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: '5px',
        zIndex:'3',
    },
    department: {
        color: 'white',
    },

}
export default Card
