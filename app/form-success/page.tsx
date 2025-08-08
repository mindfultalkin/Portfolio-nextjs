"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function FormSuccess() {
    const router = useRouter();

    useEffect(() => {
        try {
            localStorage.setItem("formSubmitted", "true");
        } catch { }
        const maxAge = 60 * 60 * 24 * 180; // 180 days
        document.cookie = `formSubmitted=true; Max-Age=${maxAge}; Path=/; SameSite=Lax; Secure`;

        router.replace("/"); // go to your portfolio home
    }, [router]);

    return <p>Thanks! Taking you to the portfolio…</p>;
}
