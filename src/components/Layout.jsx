import { Outlet, useNavigate } from "react-router-dom";
import { useState } from "react";
import Transition from "./Transition.jsx";

export default function Layout() {
  const [showOverlay, setShowOverlay] = useState(false);
  const [nextPath, setNextPath] = useState(null);
  const navigate = useNavigate();

  function goTo(path) {
    setNextPath(path);
    setShowOverlay(true); 
  }

  function handleNavigate() {
    if (nextPath) {
      navigate(nextPath);
      setShowOverlay(false); 
    }
  }

  return (
    <>
      <Outlet context={{ goTo }} />
      <Transition show={showOverlay} onComplete={handleNavigate} />
    </>
  );
}
