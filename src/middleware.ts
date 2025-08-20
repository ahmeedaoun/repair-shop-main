import { withAuth } from "@kinde-oss/kinde-auth-nextjs/middleware";
import { NextRequest } from "next/server";

export default withAuth(
    async function middleware(request: NextRequest){
       // console.log(request)
    } , {
        isReturnToCurrentPage : true,
    }
)


export const config = {
    matcher: [
        /* Match all request baths except for the ones starting with : 
        * - API
        * - _next/static
        * - _next/image
        * - auth
        * - flavicon.ico
        * - robots.txt
        * - images
        * - login
        * - homepage ( represented with $ afte rbeginning)
        * */
       '/((?!api|_nextstatic|_next/image|auth|flavicon.ico|robots.txt|images|login|$).*)',
    ]
}