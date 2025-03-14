import { json, type LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";




}

const Blog = () => {
     const {blog} = useLoaderData<typeof loader>();
  return (
    <div>
     
  
      <h2>
        hhhhhh
      </h2>
    </div>
  );
}

export default Blog