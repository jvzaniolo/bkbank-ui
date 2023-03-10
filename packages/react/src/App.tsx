import { Button, IconButton } from './lib'
import {
  TabsRoot,
  TabsList,
  TabsTrigger,
  TabsContent,
} from './lib/components/Tabs'
import { UserIcon } from '@heroicons/react/24/outline'

function App() {
  return (
    <div>
      <Button>Salve</Button>
      <Button variant="outline">Salve</Button>
      <Button variant="ghost">Salve</Button>
      <IconButton icon={<UserIcon />} aria-label="User Icon" />

      <TabsRoot defaultValue="tab1">
        <TabsList>
          <TabsTrigger value="tab1">Tab 1</TabsTrigger>
          <TabsTrigger value="tab2">Tab 2</TabsTrigger>
        </TabsList>

        <TabsContent value="tab1">Content 1</TabsContent>
        <TabsContent value="tab2">Content 2</TabsContent>
      </TabsRoot>
    </div>
  )
}

export default App
