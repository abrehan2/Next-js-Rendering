import { deptIds } from "@/app/_data";

export async function generateStaticParams() {
  return deptIds.map((id) => ({ id }));
}

export default function Page({ params }: { params: { id: string } }) {
  return <p>This is department with id: {params.id}</p>;
}
