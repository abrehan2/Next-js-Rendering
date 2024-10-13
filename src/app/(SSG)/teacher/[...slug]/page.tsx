import { teacherData } from "@/app/_data";

export async function generateStaticParams() {
  return teacherData.map((data) => ({
    slug: data.info,
  }));
}

export default function Page({ params }: { params: { slug: string[] } }) {
  console.log("SLUG: ", params.slug);
  return <p>This is a techer page</p>;
}
