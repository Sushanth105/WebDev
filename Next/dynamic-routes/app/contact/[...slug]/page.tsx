import React from "react";

const Contact = async ({ params }: { params: Promise<{slug: string[]}> }) => {
    const {slug} = await params
  return <div>this is {slug.join(" ")}</div>;
};

export default Contact;
