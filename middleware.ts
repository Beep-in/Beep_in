import { NextRequest, NextResponse } from "next/server";
import {createContext , useState} from "react";
export const auth_data = createContext(null);
export function middleware(req: NextRequest, res : NextResponse){
    
    const cookies = req.cookies.get("access-token")
    // console.log(cookies)
    return NextResponse.next()
}