import { Button } from "@/components/ui/button"
import "./index.css"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

function App() {

  return (
    <>
    <div className="flex w-screen h-screen justify-center items-center "> 
        <Card className="w-[350px] flex flex-col">
          <CardHeader>
            <CardTitle>Create project</CardTitle>
            <CardDescription>Deploy your new project in one-click.</CardDescription>
          </CardHeader>
          <div className="flex justify-center">
            <Button className="flex justify-center w-2/3 ">Calculate</Button>
          </div>
        </Card>
      </div>


    </>
  )
}

export default App
