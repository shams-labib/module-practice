import React from "react";

const TutorialsPage = async ({ params }) => {
  const data = await params;

  return (
    <div>
      <h1>This is tutorials Page</h1>
    </div>
  );
};

export default TutorialsPage;
