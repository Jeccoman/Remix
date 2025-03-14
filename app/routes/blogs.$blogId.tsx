import { json, type LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";



export const loader = async ({params}: LoaderFunctionArgs) => {
  const response = await fetch("https://jsonplaceholder.typicode.com/${params.blogId}");
  const data: {title: string, body: string, id: string, userId: string} = await response.json();

    return json({blog: data});
}

const Blog = () => {
     const {blog} = useLoaderData<typeof loader>();
  return (
    <div>
        <p>{blog.title} </p>
        <h1> {blog.body} </h1>
    </div>
  )
}

export default Blog