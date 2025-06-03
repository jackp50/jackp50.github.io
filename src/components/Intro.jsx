import { useState, useEffect } from "react";

export default function Intro() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setVisible(false);
    }, 3000);
  }, []);

  return (
    visible && (
      <div className="intro-screen">
        <h1>Jack Pearne - Portfolio - Fix Phone scroll</h1>
      </div>
    )
  );
}
