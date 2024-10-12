import Link from "next/link";
import { deptIds } from "./_data";

export default function Home() {
  return (
    <div>
      <h3>Click on the following ids to proceed.</h3>
      {deptIds.length > 0 &&
        deptIds.map((id) => (
          <Link
            href={`/department/${id}`}
            key={id}
            style={{ paddingRight: "10px" }}
          >
            {id}
          </Link>
        ))}
    </div>
  );
}
