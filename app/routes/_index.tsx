import { json, type MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  const {blogs} = useLoaderData<typeof loader>(); 
  return (
    <div className="flex h-screen items-center justify-center">
      Homepage
    </div>
  );
}

export const loader = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
  const data:{title: string, body:string, id:string, userId:string } = await response.json();
 
  return json({blogs: data });
}
