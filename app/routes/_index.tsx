import { json, type MetaFunction } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  const {blogs} = useLoaderData<typeof loader>(); 
  return (
    <div className=" grid grid-cols-4 gap-4">
       {blogs.map(blog => (
        <Link to={`/blogs/${blog.id} `} className="shadow-md p-3 rounded-sm" key={blog.id}>{blog.body} </Link>
      ))}
    </div>
  );
}

export const loader = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
  const data:{title: string, body:string, id:string, userId:string } = await response.json();
 
  return json({blogs: data });
}
