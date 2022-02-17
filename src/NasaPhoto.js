import React from 'react'

const dummyData = {
    date: "2022-02-17",
    explanation: "Dark markings and bright nebulae in this telescopic southern sky view are telltale signs of young stars and active star formation. They lie a mere 650 light-years away, at the boundary of the local bubble and the Chamaeleon molecular cloud complex. Regions with young stars identified as dusty reflection nebulae from the 1946 Cederblad catalog include the C-shaped Ced 110 just above and left of center, and bluish Ced 111 below it. Also a standout in the frame, the orange tinted V-shape of the Chamaeleon Infrared Nebula (Cha IRN) was carved by material streaming from a newly formed low-mass star.  The well-composed image spans 1.5 degrees. That's about 17 light-years at the estimated distance of the nearby Chamaeleon I molecular cloud.",
    hdurl: "https://apod.nasa.gov/apod/image/2202/Chamaeleon_RobertEder.jpg",
    title: "Chamaeleon I Molecular Cloud",
    url: "https://apod.nasa.gov/apod/image/2202/Chamaeleon_RobertEder1024.jpg"
    }

    const NasaPhoto = (props) => {
    return(
        <div className='nasa-photo-wrapper'>
            <h3>{props.photo.title}</h3>
            <p>{props.photo.data}</p>
            <img src = {props.photo.hdurl}/>
            <p>{props.photo.explanation}</p>
        </div>
    ) 
}

export default NasaPhoto;