import { useState, useEffect } from "react"
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function App() {
  const [theme, setTheme] = useState<"light" | "dark">("light")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark")
  }, [theme])

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 transition-all">
      <Button
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        variant="outline"
        className="mb-4"
      >
        {theme === "light" ? "Dark Mode" : "Light Mode"}
      </Button>

      <Card className="w-[320px] p-4 shadow-md dark:shadow-gray-700 transition-all">
        <CardHeader>
          <h2 className="text-xl font-semibold text-center">Profile</h2>
        </CardHeader>

        <CardContent className="space-y-3">
          <div>
            <label className="text-sm font-medium">Name</label>
            <Input 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            placeholder="masukkan nama..." 
            className="placeholder:text-gray-400 dark:placeholder:text-gray-500 "
            />
          </div>
          <div>
            <label className="text-sm font-medium">Email</label>
            <Input 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            placeholder="masukkan email..." 
             className="placeholder:text-gray-400 dark:placeholder:text-gray-500 "
            />
          </div>
        </CardContent>

        <CardFooter className="flex justify-end">
          <Button className="hover:bg-green-600 transition">Save</Button>
        </CardFooter>
      </Card>
    </div>
  )
}
