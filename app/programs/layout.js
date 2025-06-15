import { Suspense } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default async function LayoutBlog({ children }) {
  return (
    <div>
      <Suspense fallback={<div>Loading header...</div>}>
        <Header />
      </Suspense>
      <main className="min-h-screen">{children}</main>
      <div className="h-24" />
      <Footer />
    </div>
  );
}