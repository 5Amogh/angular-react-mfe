import React from "react";
import NavigateLinkToAngular from "./navigateLinkToAngular.jsx";
export default function ChildPage() {
  return (
  <>
    <div>React Child Page</div>
    <NavigateLinkToAngular href={'hello'}></NavigateLinkToAngular>
  </>
  );
}
