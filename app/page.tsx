const getData = async () => {
  await new Promise((res) => setTimeout(() => res(), 2000))
  return { data: [1, 2, 3, 4] }
}

export default async function Home() {
  const data = await getData()
  console.log(data)
  return <div>Home</div>
}
