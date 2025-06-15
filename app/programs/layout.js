import { Suspense } from "react";
import Footer from "@/components/Footer";

export default async function LayoutBlog({ children }) {
  return (
    <div>
      <main className="min-h-screen">{children}</main>
      <div className="h-24" />
      <Footer />
    </div>
  );
}