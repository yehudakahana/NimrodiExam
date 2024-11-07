import { ReactNode, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { roleSlice } from "../store/rolereducer";

interface IPrivateRoute{
    component: ReactNode,
}


const PrivateRoute = ({ component}:IPrivateRoute) => {

  const currentRole = useSelector((state: { role: string }) => state.role);
  const currentFloor = useSelector((state: { floorIndex: number }) => state.floorIndex);
  const floorAccess = useSelector((state: { floorAccess: { floorAccess: [boolean, boolean, boolean, boolean, boolean] } }) => state.floorAccess.floorAccess);
 
  console.log(currentFloor, "aaa")
  const navigate = useNavigate();

  useEffect(() => {
    
    if(floorAccess[currentFloor ] === false) {
      navigate(`/forbidden`); 
    }
  }, [currentRole, currentFloor, floorAccess]);
 
  
  return (
    <>{component}</>    
  )
};

export default PrivateRoute