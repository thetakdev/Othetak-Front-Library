import { NextResponse } from 'next/server';
export declare function GET(): Promise<NextResponse<{
    name: string;
    path: string;
}[]> | NextResponse<{
    error: string;
}>>;
