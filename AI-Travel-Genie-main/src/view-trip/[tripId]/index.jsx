import { db } from '@/service/firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { toast } from 'sonner';
import InfoSection from '../components/InfoSection';
import Hotels from '../components/Hotels';
import PlacesToVisit from '../components/PlacesToVisit';
import Footer from '../components/Footer';

function Viewtrip() {

  const {tripId} = useParams();
  const [trip,setTrip] = useState();

  useEffect(()=>{
    tripId && GetTripData();
  },[tripId])
  // used to get trip info from firebase

  const GetTripData=async()=>{
    const docRef=doc(db,'AITrips',tripId);
    const docSnap=await getDoc(docRef);

    if(docSnap.exists()){
      console.log("Document:",docSnap.data());
      setTrip(docSnap.data());
     // toast('Trip Found!')
    }
    else{
      console.log("No such Document");
      toast('No trip Found!')
    }
  }
  return (
    <div className='p-12 md:px-25 lg:px-44 xl:px:56'>
        <InfoSection trip={trip}/>
        <Hotels trip={trip}/>
        <PlacesToVisit trip={trip}/>
        <Footer trip={trip}/>
    </div>
  )
}

export default Viewtrip
