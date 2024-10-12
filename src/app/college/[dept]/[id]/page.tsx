import { collegeIds } from "@/app/_data";

export async function generateStaticParams() {
  return collegeIds.map((data) => ({
    ...data,
  }));
}

export default function Page({
  params,
}: {
  params: {
    dept: string;
    id: string;
  };
}) {
  return (
    <p>
      This is a college page with department {params.dept}, and id {params.id}
    </p>
  );
}
