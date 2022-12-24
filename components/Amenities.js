import Image from 'next/image';

import styles from '../styles/Amenities.module.scss';


export const Amenities = ()=> {
    
    const amenities = [
        {description: 'Kitchen', icon: 'amenities-kitchen.png'},
        {description: 'Dedicated workspace' , icon: 'amenities-workspace.png'},
        {description: 'Shared pool', icon: 'amenities-pool.png'},
        {description: 'Wifi', icon: 'amenities-wifi.png'},
        {description: 'Free parking', icon: 'amenities-parking.png'},
        {description: 'Pets allowed', icon: 'amenities-pets.png'},
        {description: 'Public or shared beach access', icon: 'amenities-beach.png'},
        {description: 'Desert  view', icon: 'amenities-desert.png'},
    ]

    return (
        <div className={styles.amenities}>
        {
            amenities.map((a, i) => {
              return <div key={i}>
                <Image
                  src={`/images/${a.icon}`}
                  width={40}
                  height={40}
                  alt=''
                />
                <p>{a.description}</p>
              </div>
            })
        }
        </div>
    )
}