'use client'

// เรียกใช้งาน useSearchParams จาก next/navigation
import { useSearchParams } from "next/navigation";

export default function Page() {
    // สร้าง object searchParams เพื่อใช้งานฟังก์ชัน get
    const searchParams = useSearchParams();

    // ดึงค่า name จาก searchParams
    const name = searchParams.get("name");

    return <div>Name = {name}</div>;
}

