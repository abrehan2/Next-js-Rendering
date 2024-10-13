export const revalidate = 10;

export default function Page() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen mx-auto">
      <div className="text-3xl text-sky-600">Current Time</div>
      <div className="text-4xl font-bold text-slate-900 my-2">{Date.now()}</div>
    </div>
  );
}
