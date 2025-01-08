'use client'

import { useRouter } from "next/navigation";

export default function Page() {
    const router = useRouter(); // สร้าง object router เพื่อใช้งานฟังก์ชัน push

    return (
        <button type="button"
            onClick={() => router.push("/dashboard")}>
            Dashboard
        </button>
    );
}
