import GithubData from '@/components/githubData'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-full bg-accent text-foreground rounded-md">
      <GithubData />
      <h1 className="text-4xl font-bold mb-4 text-balance">
        Welcome to My Portfolio
      </h1>
      <p className="text-lg ">Under Construction</p>
    </div>
  )
}
