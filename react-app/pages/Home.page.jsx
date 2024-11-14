import React from "react";
import NavigateLinkToAngular from "./navigateLinkToAngular.jsx";
import { useNavigate } from 'react-router-dom';
export default function HomePage() {
  const navigate = useNavigate();

  const goToChildPage = () => {
    navigate('/child');
  };
  return (
  <>
    <div>React Home Page</div>
    return <button onClick={goToChildPage}>Go to Child Page</button>;
    <NavigateLinkToAngular href={'hello'}></NavigateLinkToAngular>
  </>
  );
}
