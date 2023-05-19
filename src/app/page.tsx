import Form from "@/forms/example/form";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 text-black bg-slate-200">
      <div>
        <h1 className="text-2xl text-slate-900 font-bold">This is my form</h1>
        <Form />
      </div>
    </main>
  )
}
