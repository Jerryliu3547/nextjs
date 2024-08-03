import { userAgentFromString } from "next/server"

export async function GET(request){
    const users =[
        {id:1, name: 'john'},
        {id:2, name: 'Jane'},
        {id:3, name: 'Mark'}
    ]

    return new Response (JSON.stringify(users))
 
}