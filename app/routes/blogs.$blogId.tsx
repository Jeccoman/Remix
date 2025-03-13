import type { LoaderFunctionArgs } from "@remix-run/node";



export const loader = async ({params}: LoaderFunctionArgs) => {
    console.log(params)
    return null;
}

const Blog = () => {

  return (
    <div>
        Blog
    </div>
  )
}

export default Blog