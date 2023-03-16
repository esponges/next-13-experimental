"use client";

import { useSelector } from "react-redux"

export default function About() {
  const state = useSelector((state) => state);
  console.log('this client component has access to the redux store', state);

  return (
    <div>
      <h1>About</h1>
      <p>
        This is the about page
      </p>
    </div>
  )
}
